export default function insertUserQuery(version: number = 1): string {
  let query: string = `INSERT INTO users(email, username, password, gender) VALUES($1, $2, $3, $4)
  RETURNING *
  ;`;
  return query;
}
