const env = process.env.NODE_ENV;
const production = require('./production');
const development = require('./development');

// You should put any global variables in here.
const config = {
  SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY || '873b0198afe5fe0557e1ab656b2cb1f9',
  SHOPIFY_SHARED_SECRET: process.env.SHOPIFY_SHARED_SECRET || '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',
  APP_NAME: 'GuestGuess',
  APP_STORE_NAME: 'GuestGuess',
  app_scope: 'read_products,write_products,read_customers,write_customers',
  database_name: 'shopify_node_app',
};

if (env !== 'PRODUCTION') {
    module.exports = Object.assign({}, config, development);
  } else {
    module.exports = Object.assign({}, config, production);
  }
