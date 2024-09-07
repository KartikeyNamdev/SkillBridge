const jwt = require("jsonwebtoken");
JWT_SECRET = "kartikeynamdev"

const protect = async (req, res, next) => {
  // let token;
  if (req.headers.authorization) {
    console.log("Admin middleware is working");
    try {
      const token = req.headers.authorization;
      const words = token.split(" "); // ["Bearer", "token"]
      const jwtToken = words[1]; // token
      const decoded = jwt.verify(jwtToken, JWT_SECRET);
      console.log(decoded);

      if (decoded) {
        next();
      } else {
        res.json({ message: "Login failed" }).status(411);
      }
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }
};

module.exports = { protect };
