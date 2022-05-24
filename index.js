/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Auth from './screens/Auth';
import Products from './screens/Products';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Products);
