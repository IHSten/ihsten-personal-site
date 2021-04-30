const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config()

// Pull the API keys given to netlify out into Angular's environment file
// This is somewhat hacky, but for a personal site deployed on netlify it should work fine
fs.writeFileSync('./src/environments/environment.prod.ts',`\
export const environment = {
    production: true
};
`)

console.log(`prod env file generated sucessfully`)