import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      name: process.env.DATABASE_NAME,
      port: process.env.DATABASE_PORT,
      user: process.env.USER_MONGO_ATLAS,
      password: process.env.PASSWORD_MONGO_ATLAS,
    },
    apiKey: process.env.API_KEY,
    mongo: {
      dbName: process.env.MONGO_DB,
      user: process.env.USER_MONGO_ATLAS,
      password: process.env.PASSWORD_MONGO_ATLAS,
      port: parseInt(process.env.MONGO_PORT, 10),
      host: process.env.HOST_MONGO_ATLAS,
      conection: process.env.CONECTION_MONGO_ATLAS,
    },
  };
});
