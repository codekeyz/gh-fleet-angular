// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:4040',
  firebase: {
    apiKey: 'AIzaSyApY-cfn96TG2qWDd-jabn-JLjywUyqbKI',
    authDomain: 'transport-server-b95ed.firebaseapp.com',
    databaseURL: 'https://transport-server-b95ed.firebaseio.com',
    projectId: 'transport-server-b95ed',
    storageBucket: 'transport-server-b95ed.appspot.com',
    messagingSenderId: '880058124951'
  },
  whitelistedDomains: ['localhost:4040'],
  blacklistedRoutes: ['localhost:4040/api/v1/users/register']
};
