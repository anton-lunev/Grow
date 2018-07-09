// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBoJ2W8afywV6n5id-gDmGA1soEf_lMoXk',
    authDomain: 'task-tracker-grow.firebaseapp.com',
    databaseURL: 'https://task-tracker-grow.firebaseio.com',
    projectId: 'task-tracker-grow',
    storageBucket: 'task-tracker-grow.appspot.com',
    messagingSenderId: '741903739700'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
