import {
  Body,
  Controller,
  Logger,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

import { fileValidators } from './constants/validators';
import { UploadsService } from './uploads.service';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileMetadataDto } from './dto/file-metadata.dto';
import { CreateFileDto } from './dto/create-file.dto';
import { plainToInstance } from 'class-transformer';

@Controller('uploads')
export class UploadsController {
  private readonly Logger = new Logger(UploadsController.name);

  constructor(
    private uploadsService: UploadsService,
    private filesService: FilesService,
  ) {}

  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: fileValidators,
      }),
    )
    file: Express.Multer.File,
    @Body() body: FileMetadataDto,
  ) {
    const { provider, alternativeText, description, name } = body;
    const { public_id, url, resource_type } =
      await this.uploadsService.upload(file);

    const fileDataToSave = plainToInstance(CreateFileDto, {
      provider,
      providerMetadata: { public_id, resource_type },
      url,
      alternativeText,
      description,
      name,
      mime: file.mimetype,
      ext: this.filesService.getFileExtension(file.originalname),
    });

    try {
      await this.filesService.create(fileDataToSave);
    } catch (e) {
      this.Logger.error(`problem saving file ${name} to the database`, e);
      await this.uploadsService.delete(public_id);
    }

    return {
      message: 'File uploaded successfully',
    };
  }
}
