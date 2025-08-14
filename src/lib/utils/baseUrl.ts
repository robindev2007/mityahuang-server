import env from "../../config/clean-env";

export const urlFrontEnd = !env.isProd
  ? env.DEV_CLIENT_URL
  : env.PROD_CLIENT_URL;

export const urlBackEnd = !env.isProd ? env.LOCAL_API_URL : env.PROD_API_URL;
