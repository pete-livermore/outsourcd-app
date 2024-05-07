import { Job, SalaryRelation } from './job.model';
import { CreateJobDto } from './dto/create-job.dto';
import { FindJobsParamsDto } from './dto/find-jobs-params.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Database, Tables } from '../database/database';
import { Injectable } from '@nestjs/common';
import { jsonObjectFrom } from 'kysely/helpers/postgres';
import { ExpressionBuilder, sql } from 'kysely';
import { Jobs } from 'src/kysely-types';
import { PopulateJobDto } from './dto/populate-job.dto';

type JobTableExpression = ExpressionBuilder<
  Tables & {
    j: Jobs;
  },
  'j'
>;

@Injectable()
export class JobsRepository {
  constructor(private readonly db: Database) {}

  private withCompany(eb: JobTableExpression) {
    return jsonObjectFrom(
      eb
        .selectFrom('companies as c')
        .select(['c.id', 'c.name'])
        .whereRef('j.company_id', '=', 'c.id'),
    ).as('company');
  }

  private selectSalary() {
    return sql<SalaryRelation>`json_build_object(
      'currency', salary_currency, 
      'value',  json_build_object(
          'min', salary_min_value, 
          'max', salary_max_value
        ), 
      'period', salary_period)`.as('salary');
  }

  async create(data: CreateJobDto): Promise<Job> {
    const dbResponse = await this.db
      .insertInto('jobs')
      .values({
        title: data.title,
        description: data.description,
        salary_currency: data.salary.currency,
        salary_period: data.salary.period,
        salary_min_value: data.salary.value.min,
        salary_max_value: data.salary.value.max,
      })
      .returning([
        'id',
        'title',
        'description',
        'location_type',
        'created_at',
        'updated_at',
      ])
      .executeTakeFirstOrThrow();

    return new Job(dbResponse);
  }

  async findById(
    jobId: number,
    populate?: PopulateJobDto,
  ): Promise<Job | undefined> {
    const query = this.db
      .selectFrom('jobs as j')
      .where('j.id', '=', jobId)
      .select([
        'j.id',
        'j.title',
        'j.description',
        this.selectSalary(),
        'j.location_type',
        'j.created_at',
        'j.updated_at',
      ])
      .$if(populate?.company, (qb) => qb.select((eb) => this.withCompany(eb)));

    const dbResponse = await query.executeTakeFirst();

    if (dbResponse) {
      return new Job(dbResponse);
    }
  }

  async getAll({ filters, populate, pagination }: FindJobsParamsDto) {
    const { data, count } = await this.db.transaction().execute(async (trx) => {
      let jobsQuery = trx
        .selectFrom('jobs as j')
        .select([
          'j.id',
          'j.title',
          'j.description',
          'j.location_type',
          'j.created_at',
          'j.updated_at',
          this.selectSalary(),
        ])

        .$if(populate?.company, (qb) => qb.select((eb) => this.withCompany(eb)))
        .orderBy('id')
        .offset(pagination.offset)
        .limit(pagination.limit);

      if (pagination.limit !== null) {
        jobsQuery = jobsQuery.limit(pagination.limit);
      }

      if (filters) {
        const { employmentType } = filters;

        if (employmentType) {
          if (employmentType === 'permanent') {
            jobsQuery = jobsQuery.where('j.end_date', 'is', null);
          }
        }
      }

      const jobsResponse = await jobsQuery.execute();

      const { count } = await trx
        .selectFrom('jobs')
        .select((eb) => eb.fn.countAll<string>().as('count'))
        .executeTakeFirst();

      return {
        data: jobsResponse,
        count: parseInt(count),
      };
    });

    const jobs = data.map((jobData) => new Job(jobData));

    return { jobs, count };
  }

  async update(jobId: number, data: UpdateJobDto) {
    const dbResponse = await this.db
      .updateTable('jobs as j')
      .set({
        title: data.title,
        description: data.description,
        updated_at: new Date(),
      })
      .where('j.id', '=', jobId)
      .returning([
        'j.id',
        'j.title',
        'j.description',
        'j.location_type',
        'j.created_at',
        'j.updated_at',
      ])
      .executeTakeFirst();

    if (dbResponse) {
      return new Job(dbResponse);
    }
  }

  delete(jobId: number) {
    return this.db
      .deleteFrom('jobs as j')
      .where('j.id', '=', jobId)
      .executeTakeFirst();
  }
}
