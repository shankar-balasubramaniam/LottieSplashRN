/**
 * @format
 */

import {AppRegistry} from 'react-native';
import RootStackNavigator from './src/navigators/RootNavigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => RootStackNavigator);
