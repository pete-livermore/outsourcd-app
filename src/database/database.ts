import { Kysely } from 'kysely';
import {
  Files as FilesTable,
  Permissions as PermissionsTable,
  Roles as RolesTable,
  Users as UsersTable,
  Jobs as JobsTable,
  Skills as SkillsTable,
  JobsSkills as JobsSkillsTable,
  JobApplications as JobApplicationsTable,
  UsersSkills as UsersSkillsTable,
  RolesPermissions as RolesPermissionsTable,
  Companies as CompaniesTable,
  Sectors as SectorsTable,
} from 'src/kysely-types';

export interface Tables {
  users: UsersTable;
  files: FilesTable;
  roles: RolesTable;
  permissions: PermissionsTable;
  roles_permissions: RolesPermissionsTable;
  jobs: JobsTable;
  skills: SkillsTable;
  sectors: SectorsTable;
  jobs_skills: JobsSkillsTable;
  users_skills: UsersSkillsTable;
  job_applications: JobApplicationsTable;
  companies: CompaniesTable;
}

export class Database extends Kysely<Tables> {}
