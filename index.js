import { AppRegistry} from 'react-native';

import {
    StackNavigator,
  } from 'react-navigation';


import HotUpdate from './app/test/HotUpdate';

import AppointHospitalList from './app/test/AppointHospitalList';

import PullViewDemo from './app/test/PullViewDemo';

import chart from './app/test/ReactNativeEcharts';

import AppointAnalysis from './app/compoments/analysis/AppointAnalysis';

import LayoutTest from './app/LayoutTest';

import InitPage from './app/test/InitPage';

import LoadMore from './app/compoments/analysis/LoadMore';

const App = StackNavigator({
    Main: {screen: InitPage},
    AppointHospitalListPage: {screen: AppointHospitalList},
    HotUpdatePage: {screen: HotUpdate},
    pullViewPage: {screen: PullViewDemo},
    chartPage: {screen: chart},
    AppointAnalysisPage:{screen: AppointAnalysis}, 
    LayoutTestPage:{screen:LayoutTest},
    LoadMorePage:{screen:LoadMore}
  });


AppRegistry.registerComponent('YugeApp', () => App);


