import { config } from 'dotenv';

config();

const { NODE_ENV, WEB_URL } = process.env;

const isDevelopment = NODE_ENV === 'development';

let webUrl = 'http://localhost:3000';

if (!isDevelopment) {
  if (!WEB_URL) {
    throw new Error('WEB_URL is not defined');
  }
  webUrl = WEB_URL.endsWith('/') ? WEB_URL.slice(0, -1) : WEB_URL;
}

export { isDevelopment, webUrl };
