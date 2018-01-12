import { AppRegistry} from 'react-native';

import {
    StackNavigator,
  } from 'react-navigation';

// import App from './App';



// import LayoutTest from './app/LayoutTest';

import HotUpdate from './app/test/HotUpdate';

import AppointHospitalList from './app/test/AppointHospitalList';

const App = StackNavigator({
    Main: {screen: AppointHospitalList},
    HohUpdate: {screen: HotUpdate},
  });


AppRegistry.registerComponent('YugeApp', () => App);
