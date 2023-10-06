/**
 * @format
 */
import './shim.js';
import 'reflect-metadata';
import setGlobalVars from 'indexeddbshim/dist/indexeddbshim-noninvasive';
import SQLite from 'react-native-sqlite-2';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
setGlobalVars(global, {
  checkOrigin: false,
  win: SQLite,
});
AppRegistry.registerComponent(appName, () => App);
