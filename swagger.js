const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'CSE-341 Project 2',
    description: 'Custody App API'
  },
  // for prod
  host: 'custody-api.onrender.com',
  schemes: 'https',

  // for test
  // host: 'localhost:8000',
  // schemes: 'http'
  securityDefinitions: {
    Authorization: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
      description: 'Authentication token (Bearer)',
      example: 'Bearer <your token>'
    }
  },
  security: [
    {
      Authorization: []
    }
  ]
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);

// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
// await import('./server.js');
// });
