import dotenv from "dotenv";
import { cleanEnv, num, str } from "envalid";
import path from "path";

// Declaring path for specific .env files
dotenv.config({ path: path.join(process.cwd(), ".env") });

const env = cleanEnv(process.env, {
  DEV_CLIENT_URL: str(),
  PROD_CLIENT_URL: str(),
  LOCAL_API_URL: str(),
  PROD_API_URL: str(),

  // App configuration with default users setup
  PORT: num(),
  ADMIN_EMAIL: str(),
  ADMIN_PASSWORD: str(),

  // JWT encryptions
  BCRYPT_SALT_ROUNDS: num(),
  JWT_ACCESS_EXPIRES_IN: str(),
  JWT_REFRESH_EXPIRES_IN: str(),
  JWT_PASSWORD_RESET_EXPIRES_IN: str(),
  JWT_OTP_EXPIRES_IN: str(),
  JWT_EMAIL_VERIFICATION_EXPIRES_IN: str(),
  JWT_ACCESS_TOKEN: str(),
  JWT_REFRESH_TOKEN: str(),
  JWT_PASSWORD_RESET_TOKEN: str(),
  JWT_EMAIL_VERIFICATION_TOKEN: str(),
  JWT_OTP_TOKEN: str(),

  // Database uri string
  DATABASE_URL: str(),

  // Taobao setup
  TAOBAO_API: str(),
  TAOBAO_API_KEY: str(),
  TAOBAO_API_SECRET: str(),

  // SMTP setup
  SMTP_HOST: str(),
  SMTP_PORT: num(),
  SMTP_USER: str(),
  SMTP_PASS: str(),
  TRANSPORT_EMAIL: str(),
});

export default env;
