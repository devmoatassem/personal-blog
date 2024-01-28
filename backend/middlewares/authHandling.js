import jwt from "jsonwebtoken";

const authHandling = (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization || req.headers.Authorization; // Authorization header is sent by client in request

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    try {
      // Verify the token
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      // Attach the user object to the request for further use in controllers
      req.user = decoded;
      // Move to the next middleware or route handler
      next();
    } catch (error) {
      res.status(401).json({
        error: "Invalid token",
      });
    }
  }
};
