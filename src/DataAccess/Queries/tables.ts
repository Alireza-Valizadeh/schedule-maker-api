export function createTableQueries(version: number = 1): string {
  return createTableUsers(version);
}
export function createTableUsers(version: number = 1): string {
  let query: string = `CREATE TABLE IF NOT EXISTS users(
    uid BIGSERIAL PRIMARY KEY,
    email varchar(100) NOT NULL,
    username varchar(50)  NOT NULL,
    password varchar(120) NOT NULL ,
    signUpTimestamp timestamp(10) NOT NULL DEFAULT now(),
    gender varchar(7) DEFAULT 'not set'
    );`;
  return query;
}
