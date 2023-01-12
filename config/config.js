const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri:
    process.env.MONGODB_URI ||
    "mongodb+srv://root:cqVJgC0TCjZwG67n@socialize.i0jhyzy.mongodb.net/socialize?retryWrites=true&w=majority",
};

export default config;
