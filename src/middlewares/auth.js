const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const authConfig = require('../config/auth');

module.exports = async (req, res, next) => {

  const authHeader = req.headers.authorization;
  console.log("authHeader: " + authHeader);

  if (!authHeader) {
    return res.status(400).json({ error: "Token expirado." });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    console.log("decoded: " + decoded);
    req.userId = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ error: "Token inválido" });
  }

}