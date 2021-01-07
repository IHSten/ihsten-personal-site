const fs = require('fs')

// Pull the API keys given to netlify out into Angular's environment file
// This is hacky af, but again for a personal site deployed on netlify I'm not as bothered
fs.writeFileSync('./src/environments/environment.prod.ts',`\
export const environment = {
    production: true,
    FIREBASE_PROFILE_PICTURE_KEY: "${process.env.FIREBASE_PROFILE_PICTURE_KEY}"
};
`)

console.log(`prod env file sucessfully created with ${process.env.FIREBASE_PROFILE_PICTURE_KEY}`)