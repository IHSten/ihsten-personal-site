const fs = require('fs');

require('dotenv').config()

// Pull any keys/proper environment variables given to netlify out of the environment and into angular
// This is hacky af, but again for a personal site deployed on netlify I'm not as bothered
fs.writeFileSync('./src/environments/environment.ts',`\
export const environment = {
    production: false
};
`)

console.log(`dev env file generated sucessfully`)