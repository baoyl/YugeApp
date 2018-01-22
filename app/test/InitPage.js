import React, { Component } from "react";


import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    DrawerNavigator,
    Dimensions
} from 'react-native';

let windowWidth = Dimensions.get('window').width;
let windowHeight = Dimensions.get('window').height;

export default class InitPage extends Component<{}>{

    static navigationOptions = {
        title: '渔歌app',
      };
    constructor (props) {
        super(props);
       
      }
    componentWillMount(){
    
    }
    goAppointHospitalListPage(){
        const { navigate } = this.props.navigation;
        navigate('AppointHospitalListPage', { name: 'AppointHospitalListPage' });
    }
    goPullViewPage(){
        const { navigate } = this.props.navigation;
        navigate('pullViewPage', { name: 'pullViewPage' });
    }
    goAppointAnalysisPage(){
        const { navigate } = this.props.navigation;
        navigate('AppointAnalysisPage', { name: 'AppointAnalysisPage' });
    }
    goHotUpdatePage(){
        const { navigate } = this.props.navigation;
        navigate('HotUpdatePage', { name: 'HotUpdatePage' });
    }
    goChartPage(){
        const { navigate } = this.props.navigation;
        navigate('chartPage', { name: 'chartPage' });
    }
    goLayoutTestPage(){
        const { navigate } = this.props.navigation;
        navigate('LayoutTestPage', { name: 'LayoutTestPage' });
    }
    goLoadMorePage(){
        const { navigate } = this.props.navigation;
        navigate('LoadMorePage', { name: 'LoadMorepage' });
    }
    render(){  
        return(  
            <ScrollView>
            <View>
                <View style={{flexWrap:'wrap', justifyContent : 'space-between',flexDirection : 'row', backgroundColor:"#1B2342", width:windowWidth, height: windowHeight-80}}>

                    <View  style={{width:100,marginTop:10, borderWidth :1, borderColor:'#ffff', height: 50, alignItems:'center'}}>
                        <Text onPress={this.goAppointHospitalListPage.bind(this)} style={{marginTop:15, color:'#ffff'}}>预约门诊</Text>
                    </View>
                    <View  style={{width:100,marginTop:10, borderWidth :1, borderColor:'#ffff', height: 50, alignItems:'center'}}>
                        <Text onPress={this.goPullViewPage.bind(this)}  style={{marginTop:15,color:'#ffff'}}>下拉刷新</Text>
                    </View>
                    <View  style={{width:100,marginTop:10, marginRight:10, borderWidth :1, borderColor:'#ffff', height: 50, alignItems:'center'}}>
                        <Text onPress={this.goAppointAnalysisPage.bind(this)} style={{marginTop:15,color:'#ffff'}}>转诊统计</Text>
                    </View>
                    <View  style={{width:100,marginTop:10, borderWidth :1, borderColor:'#ffff', height: 50, alignItems:'center'}}>
                        <Text onPress={this.goHotUpdatePage.bind(this)} style={{marginTop:15,color:'#ffff'}}>热更新</Text>
                    </View>
                    <View  style={{width:100,marginTop:10, borderWidth :1, borderColor:'#ffff', height: 50, alignItems:'center'}}>
                        <Text onPress={this.goChartPage.bind(this)} style={{marginTop:15,color:'#ffff'}}>图表折线</Text>
                    </View>
                    <View  style={{width:100,marginTop:10, marginRight:10,borderWidth :1, borderColor:'#ffff', height: 50, alignItems:'center'}}>
                        <Text onPress={this.goLayoutTestPage.bind(this)}  style={{marginTop:15,color:'#ffff'}}>页面布局</Text>
                    </View>
                    <View  style={{width:100,marginTop:10, marginRight:10,borderWidth :1, borderColor:'#ffff', height: 50, alignItems:'center'}}>
                        <Text onPress={this.goLoadMorePage.bind(this)}  style={{marginTop:15,color:'#ffff'}}>加载更多</Text>
                    </View>
                    <View  style={{width:100,marginTop:10, marginRight:10,borderWidth :1, borderColor:'#ffff', height: 50, alignItems:'center'}}>
                        <Text style={{marginTop:15,color:'#ffff'}}>鞠哥好</Text>
                    </View>
                    <View  style={{width:100,marginTop:10, marginRight:10,borderWidth :1, borderColor:'#ffff', height: 50, alignItems:'center'}}>
                        <Text style={{marginTop:15,color:'#ffff'}}>最新版本</Text>
                    </View>

                </View>
           </View>
           </ScrollView>
        );  
    }  
}

