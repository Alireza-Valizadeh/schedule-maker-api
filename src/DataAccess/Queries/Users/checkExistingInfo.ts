/**
 * @params email, username
 */
export default function checkExistingInfo(version: number = 1): string {
  let query: string = `SELECT uid FROM users WHERE email = $1 OR username = $2
  ;`;
  return query;
}
