// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from 'firebase/app';

export const firebaseConfig = {
  apiKey: "AIzaSyB_kUgHDHUBsap9fx5qs1SJzstahjbdMcg",
  authDomain: "prueba-tecnica-bed3d.firebaseapp.com",
  projectId: "prueba-tecnica-bed3d",
  storageBucket: "prueba-tecnica-bed3d.appspot.com",
  messagingSenderId: "950163676433",
  appId: "1:950163676433:web:7adacfcf7acd47854180b0"
};

const app = initializeApp(firebaseConfig);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
