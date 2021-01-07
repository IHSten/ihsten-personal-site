const fs = require('fs')

// Pull the API keys given to netlify out into Angular's environment file
// This is hacky af, but again for a personal site deployed on netlify I'm not as bothered
fs.writeFileSync('./src/environments/environment.prod.ts',`\
export const environment = {
    production: true
};
`)

console.log(`prod env file generated sucessfully`)