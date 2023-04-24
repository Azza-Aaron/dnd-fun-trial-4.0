

const validateSchema = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body);
    return next();
  } catch (e) {
    console.log(e)
    res.json({msg: 'invalid information sent to server'})
    res.status(401)
  }
};

module.exports = {
  validateSchema
}