require('dotenv').config();

const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../utils/errors/unauthorized-401');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports.auth = (req, res, next) => {
  const cookie = req.cookies.jwt;

  if (!cookie) {
    throw new UnauthorizedError('Необходимо авторизоваться в приложении');
  }

  let payload;

  try {
    payload = jwt.verify(cookie, NODE_ENV === 'production' ? JWT_SECRET : 'some-secret-key');
  } catch (err) {
    next(new UnauthorizedError('Необходимо авторизоваться в приложении'));
  }

  req.user = payload;
  next();
};