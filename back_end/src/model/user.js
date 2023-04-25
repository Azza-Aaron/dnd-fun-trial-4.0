
const getUser = (identifier) => {
  return {
    text: 'SELECT * from public.user WHERE email = $1::text',
    values: identifier
  }
}

const getUserFromId = (id) => {
  return {
    text: 'SELECT * from public.user WHERE id = $1::integer',
    values: id
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
  getUserFromId,
  insertUser
}