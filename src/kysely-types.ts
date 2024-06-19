import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Int8 = ColumnType<string, bigint | number | string, bigint | number | string>;

export type Json = ColumnType<JsonValue, string, string>;

export type JsonArray = JsonValue[];

export type JsonObject = {
  [K in string]?: JsonValue;
};

export type JsonPrimitive = boolean | number | string | null;

export type JsonValue = JsonArray | JsonObject | JsonPrimitive;

export type Numeric = ColumnType<string, number | string, number | string>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface Companies {
  created_at: Generated<Timestamp>;
  description: string;
  id: Generated<number>;
  image_id: number | null;
  name: string;
  sector_id: number | null;
  updated_at: Generated<Timestamp>;
}

export interface Files {
  created_at: Generated<Timestamp>;
  description: string | null;
  ext: string;
  id: Generated<number>;
  mime: string;
  name: string;
  provider: string;
  provider_metadata: Json;
  updated_at: Generated<Timestamp>;
  url: string;
}

export interface GeographyColumns {
  coord_dimension: number | null;
  f_geography_column: string | null;
  f_table_catalog: string | null;
  f_table_name: string | null;
  f_table_schema: string | null;
  srid: number | null;
  type: string | null;
}

export interface GeometryColumns {
  coord_dimension: number | null;
  f_geometry_column: string | null;
  f_table_catalog: string | null;
  f_table_name: string | null;
  f_table_schema: string | null;
  srid: number | null;
  type: string | null;
}

export interface JobApplications {
  cover_letter: string | null;
  created_at: Generated<Timestamp>;
  job_id: number;
  min_salary_expectation: number;
  status: string;
  updated_at: Generated<Timestamp>;
  user_id: number;
}

export interface Jobs {
  city: string;
  company_id: number | null;
  coordinates: string;
  country: string;
  created_at: Generated<Timestamp>;
  description: string;
  end_date: Timestamp | null;
  id: Generated<number>;
  location_type: string;
  salary_currency: string;
  salary_max_value: Numeric;
  salary_min_value: Numeric;
  salary_period: string;
  start_date: Timestamp;
  title: string;
  updated_at: Generated<Timestamp>;
  weekly_hours: number;
}

export interface JobsSkills {
  created_at: Generated<Timestamp>;
  job_id: number | null;
  skill_id: number | null;
  updated_at: Generated<Timestamp>;
}

export interface Permissions {
  action: string;
  created_at: Generated<Timestamp>;
  entity: string;
  id: Generated<number>;
  updated_at: Generated<Timestamp>;
}

export interface Roles {
  created_at: Generated<Timestamp>;
  description: string | null;
  id: Generated<number>;
  name: string;
  updated_at: Generated<Timestamp>;
}

export interface RolesPermissions {
  created_at: Generated<Timestamp>;
  permission_id: number;
  role_id: number;
  updated_at: Generated<Timestamp>;
}

export interface Sectors {
  created_at: Generated<Timestamp>;
  id: Generated<number>;
  name: string;
  updated_at: Generated<Timestamp>;
}

export interface Skills {
  created_at: Generated<Timestamp>;
  id: Generated<number>;
  name: string;
  type: string;
  updated_at: Generated<Timestamp>;
}

export interface TigerAddr {
  arid: string | null;
  fromarmid: number | null;
  fromhn: string | null;
  fromtyp: string | null;
  gid: Generated<number>;
  mtfcc: string | null;
  plus4: string | null;
  side: string | null;
  statefp: string | null;
  tlid: Int8 | null;
  toarmid: number | null;
  tohn: string | null;
  totyp: string | null;
  zip: string | null;
}

export interface TigerAddrfeat {
  aridl: string | null;
  aridr: string | null;
  edge_mtfcc: string | null;
  fullname: string | null;
  gid: Generated<number>;
  lfromhn: string | null;
  lfromtyp: string | null;
  linearid: string | null;
  ltohn: string | null;
  ltotyp: string | null;
  offsetl: string | null;
  offsetr: string | null;
  parityl: string | null;
  parityr: string | null;
  plus4l: string | null;
  plus4r: string | null;
  rfromhn: string | null;
  rfromtyp: string | null;
  rtohn: string | null;
  rtotyp: string | null;
  statefp: string;
  the_geom: string | null;
  tlid: Int8 | null;
  zipl: string | null;
  zipr: string | null;
}

export interface TigerBg {
  aland: number | null;
  awater: number | null;
  bg_id: string;
  blkgrpce: string | null;
  countyfp: string | null;
  funcstat: string | null;
  gid: Generated<number>;
  intptlat: string | null;
  intptlon: string | null;
  mtfcc: string | null;
  namelsad: string | null;
  statefp: string | null;
  the_geom: string | null;
  tractce: string | null;
}

export interface TigerCounty {
  aland: Int8 | null;
  awater: number | null;
  cbsafp: string | null;
  classfp: string | null;
  cntyidfp: string;
  countyfp: string | null;
  countyns: string | null;
  csafp: string | null;
  funcstat: string | null;
  gid: Generated<number>;
  intptlat: string | null;
  intptlon: string | null;
  lsad: string | null;
  metdivfp: string | null;
  mtfcc: string | null;
  name: string | null;
  namelsad: string | null;
  statefp: string | null;
  the_geom: string | null;
}

export interface TigerCountyLookup {
  co_code: number;
  name: string | null;
  st_code: number;
  state: string | null;
}

export interface TigerCountysubLookup {
  co_code: number;
  county: string | null;
  cs_code: number;
  name: string | null;
  st_code: number;
  state: string | null;
}

export interface TigerCousub {
  aland: Numeric | null;
  awater: Numeric | null;
  classfp: string | null;
  cnectafp: string | null;
  cosbidfp: string;
  countyfp: string | null;
  cousubfp: string | null;
  cousubns: string | null;
  funcstat: string | null;
  gid: Generated<number>;
  intptlat: string | null;
  intptlon: string | null;
  lsad: string | null;
  mtfcc: string | null;
  name: string | null;
  namelsad: string | null;
  nctadvfp: string | null;
  nectafp: string | null;
  statefp: string | null;
  the_geom: string | null;
}

export interface TigerDirectionLookup {
  abbrev: string | null;
  name: string;
}

export interface TigerEdges {
  artpath: string | null;
  countyfp: string | null;
  deckedroad: string | null;
  divroad: string | null;
  exttyp: string | null;
  featcat: string | null;
  fullname: string | null;
  gcseflg: string | null;
  gid: Generated<number>;
  hydroflg: string | null;
  lfromadd: string | null;
  ltoadd: string | null;
  mtfcc: string | null;
  offsetl: string | null;
  offsetr: string | null;
  olfflg: string | null;
  passflg: string | null;
  persist: string | null;
  railflg: string | null;
  rfromadd: string | null;
  roadflg: string | null;
  rtoadd: string | null;
  smid: string | null;
  statefp: string | null;
  tfidl: Numeric | null;
  tfidr: Numeric | null;
  the_geom: string | null;
  tlid: Int8 | null;
  tnidf: Numeric | null;
  tnidt: Numeric | null;
  ttyp: string | null;
  zipl: string | null;
  zipr: string | null;
}

export interface TigerFaces {
  aiannhce: string | null;
  aiannhce00: string | null;
  aiannhfp: string | null;
  aiannhfp00: string | null;
  anrcfp: string | null;
  anrcfp00: string | null;
  atotal: number | null;
  blkgrpce: string | null;
  blkgrpce00: string | null;
  blkgrpce20: string | null;
  blockce: string | null;
  blockce00: string | null;
  blockce20: string | null;
  cbsafp: string | null;
  cd108fp: string | null;
  cd111fp: string | null;
  cnectafp: string | null;
  comptyp: string | null;
  comptyp00: string | null;
  conctyfp: string | null;
  conctyfp00: string | null;
  countyfp: string | null;
  countyfp00: string | null;
  countyfp20: string | null;
  cousubfp: string | null;
  cousubfp00: string | null;
  csafp: string | null;
  elsdlea: string | null;
  elsdlea00: string | null;
  gid: Generated<number>;
  intptlat: string | null;
  intptlon: string | null;
  lwflag: string | null;
  metdivfp: string | null;
  nctadvfp: string | null;
  nectafp: string | null;
  offset: string | null;
  placefp: string | null;
  placefp00: string | null;
  puma5ce: string | null;
  puma5ce00: string | null;
  scsdlea: string | null;
  scsdlea00: string | null;
  sldlst: string | null;
  sldlst00: string | null;
  sldust: string | null;
  sldust00: string | null;
  statefp: string | null;
  statefp00: string | null;
  statefp20: string | null;
  submcdfp: string | null;
  submcdfp00: string | null;
  tazce: string | null;
  tazce00: string | null;
  tblkgpce: string | null;
  tfid: Numeric | null;
  the_geom: string | null;
  tractce: string | null;
  tractce00: string | null;
  tractce20: string | null;
  trsubce: string | null;
  trsubce00: string | null;
  trsubfp: string | null;
  trsubfp00: string | null;
  ttractce: string | null;
  uace: string | null;
  uace00: string | null;
  ugace: string | null;
  ugace00: string | null;
  unsdlea: string | null;
  unsdlea00: string | null;
  vtdst: string | null;
  vtdst00: string | null;
  zcta5ce: string | null;
  zcta5ce00: string | null;
}

export interface TigerFeatnames {
  fullname: string | null;
  gid: Generated<number>;
  linearid: string | null;
  mtfcc: string | null;
  name: string | null;
  paflag: string | null;
  predir: string | null;
  predirabrv: string | null;
  prequal: string | null;
  prequalabr: string | null;
  pretyp: string | null;
  pretypabrv: string | null;
  statefp: string | null;
  sufdir: string | null;
  sufdirabrv: string | null;
  sufqual: string | null;
  sufqualabr: string | null;
  suftyp: string | null;
  suftypabrv: string | null;
  tlid: Int8 | null;
}

export interface TigerGeocodeSettings {
  category: string | null;
  name: string;
  setting: string | null;
  short_desc: string | null;
  unit: string | null;
}

export interface TigerGeocodeSettingsDefault {
  category: string | null;
  name: string;
  setting: string | null;
  short_desc: string | null;
  unit: string | null;
}

export interface TigerLoaderLookuptables {
  columns_exclude: string[] | null;
  insert_mode: Generated<string>;
  level_county: Generated<boolean>;
  level_nation: Generated<boolean>;
  level_state: Generated<boolean>;
  load: Generated<boolean>;
  lookup_name: string;
  post_load_process: string | null;
  pre_load_process: string | null;
  process_order: Generated<number>;
  single_geom_mode: Generated<boolean | null>;
  single_mode: Generated<boolean>;
  table_name: string | null;
  website_root_override: string | null;
}

export interface TigerLoaderPlatform {
  county_process_command: string | null;
  declare_sect: string | null;
  environ_set_command: string | null;
  loader: string | null;
  os: string;
  path_sep: string | null;
  pgbin: string | null;
  psql: string | null;
  unzip_command: string | null;
  wget: string | null;
}

export interface TigerLoaderVariables {
  data_schema: string | null;
  staging_fold: string | null;
  staging_schema: string | null;
  tiger_year: string;
  website_root: string | null;
}

export interface TigerPagcGaz {
  id: Generated<number>;
  is_custom: Generated<boolean>;
  seq: number | null;
  stdword: string | null;
  token: number | null;
  word: string | null;
}

export interface TigerPagcLex {
  id: Generated<number>;
  is_custom: Generated<boolean>;
  seq: number | null;
  stdword: string | null;
  token: number | null;
  word: string | null;
}

export interface TigerPagcRules {
  id: Generated<number>;
  is_custom: Generated<boolean | null>;
  rule: string | null;
}

export interface TigerPlace {
  aland: Int8 | null;
  awater: Int8 | null;
  classfp: string | null;
  cpi: string | null;
  funcstat: string | null;
  gid: Generated<number>;
  intptlat: string | null;
  intptlon: string | null;
  lsad: string | null;
  mtfcc: string | null;
  name: string | null;
  namelsad: string | null;
  pcicbsa: string | null;
  pcinecta: string | null;
  placefp: string | null;
  placens: string | null;
  plcidfp: string;
  statefp: string | null;
  the_geom: string | null;
}

export interface TigerPlaceLookup {
  name: string | null;
  pl_code: number;
  st_code: number;
  state: string | null;
}

export interface TigerSecondaryUnitLookup {
  abbrev: string | null;
  name: string;
}

export interface TigerState {
  aland: Int8 | null;
  awater: Int8 | null;
  division: string | null;
  funcstat: string | null;
  gid: Generated<number>;
  intptlat: string | null;
  intptlon: string | null;
  lsad: string | null;
  mtfcc: string | null;
  name: string | null;
  region: string | null;
  statefp: string;
  statens: string | null;
  stusps: string;
  the_geom: string | null;
}

export interface TigerStateLookup {
  abbrev: string | null;
  name: string | null;
  st_code: number;
  statefp: string | null;
}

export interface TigerStreetTypeLookup {
  abbrev: string | null;
  is_hw: Generated<boolean>;
  name: string;
}

export interface TigerTabblock {
  aland: number | null;
  awater: number | null;
  blockce: string | null;
  countyfp: string | null;
  funcstat: string | null;
  gid: Generated<number>;
  intptlat: string | null;
  intptlon: string | null;
  mtfcc: string | null;
  name: string | null;
  statefp: string | null;
  tabblock_id: string;
  the_geom: string | null;
  tractce: string | null;
  uace: string | null;
  ur: string | null;
}

export interface TigerTabblock20 {
  aland: number | null;
  awater: number | null;
  blockce: string | null;
  countyfp: string | null;
  funcstat: string | null;
  geoid: string;
  housing: number | null;
  intptlat: string | null;
  intptlon: string | null;
  mtfcc: string | null;
  name: string | null;
  pop: number | null;
  statefp: string | null;
  the_geom: string | null;
  tractce: string | null;
  uace: string | null;
  uatype: string | null;
  ur: string | null;
}

export interface TigerTract {
  aland: number | null;
  awater: number | null;
  countyfp: string | null;
  funcstat: string | null;
  gid: Generated<number>;
  intptlat: string | null;
  intptlon: string | null;
  mtfcc: string | null;
  name: string | null;
  namelsad: string | null;
  statefp: string | null;
  the_geom: string | null;
  tract_id: string;
  tractce: string | null;
}

export interface TigerZcta5 {
  aland: number | null;
  awater: number | null;
  classfp: string | null;
  funcstat: string | null;
  gid: Generated<number>;
  intptlat: string | null;
  intptlon: string | null;
  mtfcc: string | null;
  partflg: string | null;
  statefp: string;
  the_geom: string | null;
  zcta5ce: string;
}

export interface TigerZipLookup {
  cnt: number | null;
  co_code: number | null;
  county: string | null;
  cousub: string | null;
  cs_code: number | null;
  pl_code: number | null;
  place: string | null;
  st_code: number | null;
  state: string | null;
  zip: number;
}

export interface TigerZipLookupAll {
  cnt: number | null;
  co_code: number | null;
  county: string | null;
  cousub: string | null;
  cs_code: number | null;
  pl_code: number | null;
  place: string | null;
  st_code: number | null;
  state: string | null;
  zip: number | null;
}

export interface TigerZipLookupBase {
  city: string | null;
  county: string | null;
  state: string | null;
  statefp: string | null;
  zip: string;
}

export interface TigerZipState {
  statefp: string | null;
  stusps: string;
  zip: string;
}

export interface TigerZipStateLoc {
  place: string;
  statefp: string | null;
  stusps: string;
  zip: string;
}

export interface TopologyLayer {
  child_id: number | null;
  feature_column: string;
  feature_type: number;
  layer_id: number;
  level: Generated<number>;
  schema_name: string;
  table_name: string;
  topology_id: number;
}

export interface TopologyTopology {
  hasz: Generated<boolean>;
  id: Generated<number>;
  name: string;
  precision: number;
  srid: number;
}

export interface Users {
  biography: string | null;
  created_at: Generated<Timestamp>;
  email: string;
  first_name: string;
  id: Generated<number>;
  image_id: number | null;
  is_confirmed: boolean;
  last_name: string;
  password: string;
  role_id: number | null;
  updated_at: Generated<Timestamp>;
}

export interface UsersSkills {
  created_at: Generated<Timestamp>;
  skill_id: number | null;
  updated_at: Generated<Timestamp>;
  user_id: number | null;
}

export interface DB {
  companies: Companies;
  files: Files;
  geography_columns: GeographyColumns;
  geometry_columns: GeometryColumns;
  job_applications: JobApplications;
  jobs: Jobs;
  jobs_skills: JobsSkills;
  permissions: Permissions;
  roles: Roles;
  roles_permissions: RolesPermissions;
  sectors: Sectors;
  skills: Skills;
  "tiger.addr": TigerAddr;
  "tiger.addrfeat": TigerAddrfeat;
  "tiger.bg": TigerBg;
  "tiger.county": TigerCounty;
  "tiger.county_lookup": TigerCountyLookup;
  "tiger.countysub_lookup": TigerCountysubLookup;
  "tiger.cousub": TigerCousub;
  "tiger.direction_lookup": TigerDirectionLookup;
  "tiger.edges": TigerEdges;
  "tiger.faces": TigerFaces;
  "tiger.featnames": TigerFeatnames;
  "tiger.geocode_settings": TigerGeocodeSettings;
  "tiger.geocode_settings_default": TigerGeocodeSettingsDefault;
  "tiger.loader_lookuptables": TigerLoaderLookuptables;
  "tiger.loader_platform": TigerLoaderPlatform;
  "tiger.loader_variables": TigerLoaderVariables;
  "tiger.pagc_gaz": TigerPagcGaz;
  "tiger.pagc_lex": TigerPagcLex;
  "tiger.pagc_rules": TigerPagcRules;
  "tiger.place": TigerPlace;
  "tiger.place_lookup": TigerPlaceLookup;
  "tiger.secondary_unit_lookup": TigerSecondaryUnitLookup;
  "tiger.state": TigerState;
  "tiger.state_lookup": TigerStateLookup;
  "tiger.street_type_lookup": TigerStreetTypeLookup;
  "tiger.tabblock": TigerTabblock;
  "tiger.tabblock20": TigerTabblock20;
  "tiger.tract": TigerTract;
  "tiger.zcta5": TigerZcta5;
  "tiger.zip_lookup": TigerZipLookup;
  "tiger.zip_lookup_all": TigerZipLookupAll;
  "tiger.zip_lookup_base": TigerZipLookupBase;
  "tiger.zip_state": TigerZipState;
  "tiger.zip_state_loc": TigerZipStateLoc;
  "topology.layer": TopologyLayer;
  "topology.topology": TopologyTopology;
  users: Users;
  users_skills: UsersSkills;
}
