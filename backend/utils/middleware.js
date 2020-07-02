const logger = require("./logger");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const multer = require("multer"); // this used for image upload
const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};
const fileUpload = multer({
  limits: 500000, // limit the uploaded files
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/images");
    },
    filename: (req, file, cb) => {
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, uuidv4() + "." + ext);
    },
    fileFilter: (req, file, cb) => {
      const isValid = !!MIME_TYPE_MAP[file.mimetype];
      let error = isValid ? null : new Error("Invalid mime type");
      cb(error, isValid);
    },
  }),
}); // this used for image upload

const requestLogger = (req, res, next) => {
  logger.info("Method", req.method);
  logger.info("path", req.path);
  logger.info("body", req.body);
  logger.info("-------");
  next();
};

const unknwnEndPoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (error, req, res, next) => {
  logger.error(error.message);

  if (error.name === "existingUser")
    res.status(400).json({ error: error.message });
  else if (error.name === "JsonWebTokenError")
    res.status(401).json({ error: error.message });
  else res.status(400).json({ error: error.message });

  next(error);
};

const getUsetFromToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).json({ error: "No token, authoriztion denied" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_CREATE_USER);
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "invaild token" });
  }
};

module.exports = {
  getUsetFromToken,
  requestLogger,
  errorHandler,
  unknwnEndPoint,
  getUsetFromToken,
  fileUpload,
};
