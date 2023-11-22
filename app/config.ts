const { NODE_ENV } = process.env;

const isDevelopment = NODE_ENV === 'development';

const webUrl = isDevelopment ? 'http://localhost:3000' : 'https://dantas15.com';

export { isDevelopment, webUrl };
