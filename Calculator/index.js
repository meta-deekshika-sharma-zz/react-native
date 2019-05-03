/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import FetchListExample from './app/fetchListExample';
import MaterialDesign from './app/MaterialDesign';
import UserProfile from './app/UserProfile';
import {name as appName} from './app.json';
import NotificationPicker from './app/notification/NotificationPicker'

AppRegistry.registerComponent(appName, () => NotificationPicker);
