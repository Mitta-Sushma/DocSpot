const jwt = require("jsonwebtoken");

const requireSignIn = (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) {
      return res.status(401).send({ success: false, message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    if (!req.body) req.body = {}; // ✅ Fix to avoid undefined error
    req.body.userId = decoded.id;

    next();
  } catch (error) {
    return res.status(401).send({ success: false, message: "Invalid token", error });
  }
};

module.exports = { requireSignIn };