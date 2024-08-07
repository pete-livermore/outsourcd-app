import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import {
  DeliveryType,
  ResourceType,
  UploadApiOptions,
  v2 as cloudinary,
} from 'cloudinary';
import * as fs from 'fs';
import * as path from 'path';
import { FileValidationService } from './file-validation.service';
import { UPLOAD_FOLDER_NAME } from './constants/upload-folder-name';

interface DestroyOptions {
  resource_type?: ResourceType;
  type?: DeliveryType;
  invalidate?: boolean;
}

@Injectable()
export class UploadsService {
  private readonly Logger = new Logger(UploadsService.name);

  constructor(private readonly fileValidationService: FileValidationService) {}

  async upload(file: Express.Multer.File, options?: UploadApiOptions) {
    if (!file) {
      throw new BadRequestException('No file provided');
    }

    await this.fileValidationService.validate(file);

    try {
      const tempDir = 'temp';
      const tempFilePath =
        path.join(__dirname, '..', tempDir) + file.originalname;
      await fs.promises.writeFile(tempFilePath, file.buffer);

      const uploadResponse = await cloudinary.uploader.upload(tempFilePath, {
        ...options,
        folder: UPLOAD_FOLDER_NAME,
      });

      await fs.promises.unlink(tempFilePath);
      return uploadResponse;
    } catch (e) {
      this.Logger.error(`problem uploading file`, e);
      throw e;
    }
  }

  async delete(publicId: string, options?: DestroyOptions) {
    await cloudinary.uploader.destroy(publicId, options);
  }
}
