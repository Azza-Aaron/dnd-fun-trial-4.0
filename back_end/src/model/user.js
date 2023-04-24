
const getUser = (email) => {
  return {
    text: 'SELECT * from "user" WHERE email = $1',
    values: email
  }
}

const insertUser = (user) => {
  return {
    text: `INSERT INTO public.user (username, email, password)
           VALUES ($1, $2, $3)
           RETURNING id`,
    values: user
  };
}

module.exports = {
  getUser,
  insertUser
}