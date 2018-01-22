import React, { Component } from "react";

import Request from '../../utils/Request';

import {
    View,
    ScrollView,
    Text,
    PlatForm,
    StyleSheet,
    Dimensions,
    DrawerNavigator,
    RefreshControl
} from 'react-native';

import Echarts from 'native-echarts';

import analysisCss from './analysisCss';

let styles = analysisCss.styles;

export default class AppointAnalysis extends Component<{}>{

    static navigationOptions = {
        title: '日汇总统计',
      };
    constructor (props) {
        super(props);
        this.state = {
           infoList: [],
           totalCount:100
        };
      }
    componentWillMount(){
 
    }
    goLoadMorePage(){
        const { navigate } = this.props.navigation;
        navigate('LoadMorePage', { name: 'LoadMorepage' });
    }

    render(){  
        const option = {
            title: {
                text: 'ECharts demo'
            },
            backgroundColor: '#1B2342',
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
          };

          
        return(  
            <ScrollView>
            <View>
                <View style={{overflow : "hidden", backgroundColor:"#1B2342"}}>
                    <View style={{borderBottomWidth :1, borderBottomColor:'#242E58'}}><Text style={{padding:8, fontSize:16,color:"#ffff"}}>预约门诊数量及成功率</Text></View>
                    <View style={{justifyContent : 'space-around',flexDirection : 'row', margin : 10, position:"relative", overflow:"hidden"}}>
                        <View><Text style={styles.cyuge}>19564</Text><Text style={{color:"#ffff"}}>预约门诊</Text></View>
                        <View><Text style={styles.cyuge}>19564</Text><Text style={{color:"#ffff"}}>已确认</Text></View>
                        <View><Text style={styles.cyuge}>50.2%</Text><Text style={{color:"#ffff"}}>成功率</Text></View>
                    </View>

                    <View style={{borderBottomWidth :1, borderBottomColor:'#242E58'}}><Text style={{padding:8, fontSize:16,color:"#ffff"}}>预约门诊数量及确认率</Text></View>
                    <Echarts option={option} height={200} width={350}/>
                    
                    <View style={{borderBottomWidth :1, borderBottomColor:'#242E58', justifyContent : 'space-between',flexDirection : 'row'}}>
                        <Text style={{padding:8, fontSize:16,color:"#ffff"}}>区域排行榜</Text>
                        <Text style={{padding:8, fontSize:16,color:"#ffff"}}>医院排行榜</Text>
                    </View>

                    <View style={{marginTop:10, justifyContent : 'space-around',flexDirection : 'row'}}>
                        <View style={{alignItems:'center'}}>
                            <View style={{height:70, width: 70,borderWidth:1, borderColor:'#ffff',borderRadius: 50, justifyContent : 'space-around', alignItems:'center'}}>
                                <Text style={{color:'#ffff', fontSize:13}}>TOP1</Text>
                                <Text style={{color:'#ffff', fontSize:13}}>四川省</Text>
                            </View>
                            <Text style={styles.cyuge}>138526</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <View style={{height:70, width: 70,borderWidth:1, borderColor:'#ffff',borderRadius: 50, justifyContent : 'space-around', alignItems:'center'}}>
                                <Text style={{color:'#ffff', fontSize:13}}>TOP1</Text>
                                <Text style={{color:'#ffff', fontSize:13}}>四川省</Text>
                            </View>
                            <Text style={styles.cyuge}>138526</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <View style={{height:70, width: 70,borderWidth:1, borderColor:'#ffff',borderRadius: 50, justifyContent : 'space-around', alignItems:'center'}}>
                                <Text style={{color:'#ffff', fontSize:13}}>TOP1</Text>
                                <Text style={{color:'#ffff', fontSize:13}}>四川省</Text>
                            </View>
                            <Text style={styles.cyuge}>138526</Text>
                        </View>
                    </View>

                    <View  style={{marginTop:10, justifyContent : 'space-between',flexDirection : 'row', borderBottomWidth :1, borderBottomColor:'#242E58'}}>
                        <Text style={{marginLeft:15,color:'#ffff'}}>四川省</Text>
                        <Text style={{marginRight:15, color:'#00c7d9'}}>85235 ></Text>
                    </View>
                    <View  style={{marginTop:10, justifyContent : 'space-between',flexDirection : 'row', borderBottomWidth :1, borderBottomColor:'#242E58'}}>
                        <Text style={{marginLeft:15,color:'#ffff'}}>黑龙江省</Text>
                        <Text style={{marginRight:15, color:'#00c7d9'}}>85235 ></Text>
                    </View>
                    <View  style={{marginTop:10, justifyContent : 'space-between',flexDirection : 'row', borderBottomWidth :1, borderBottomColor:'#242E58'}}>
                        <Text style={{marginLeft:15,color:'#ffff'}}>山东省</Text>
                        <Text style={{marginRight:15, color:'#00c7d9'}}>85235 ></Text>
                    </View>
                    
                    <View style={{borderBottomWidth :1, borderBottomColor:'#242E58'}}><Text style={{padding:8, fontSize:16,color:"#ffff"}}>预约门诊日趋势</Text></View>
                    <Echarts option={option} height={200} width={350}/>

                    <View style={{borderBottomWidth :1, borderBottomColor:'#242E58'}}><Text style={{padding:8, fontSize:16,color:"#ffff"}}>预约门诊详细数据</Text></View>

                    <View style={{borderBottomWidth :1, borderBottomColor:'#242E58', justifyContent : 'space-between',flexDirection : 'row'}}>
                        <Text style={{padding:8, fontSize:16,color:"#ffff"}}>预约门诊详细数据</Text>
                        <Text onPress={this.goLoadMorePage.bind(this)} style={{padding:8, fontSize:12,color:"#ffff"}}>查看更多</Text>
                    </View>

                    <View  style={{marginTop:10, justifyContent : 'space-around',flexDirection : 'row', borderBottomWidth :1, borderBottomColor:'#242E58'}}>
                        <Text style={{marginLeft:15,color:'#ffff'}}>姓名</Text>
                        <Text style={{marginLeft:15,color:'#ffff'}}>性别</Text>
                        <Text style={{marginLeft:15,color:'#ffff'}}>年龄</Text>
                        <Text style={{marginLeft:15,color:'#ffff'}}>状态</Text>
                        <Text style={{marginLeft:15,color:'#ffff'}}>花费</Text>
                        <Text style={{marginLeft:15,color:'#ffff'}}>申请时间</Text>
                    </View>
                    
                
                    <View  style={{marginTop:10, justifyContent : 'space-around',flexDirection : 'row', borderBottomWidth :1, borderBottomColor:'#242E58'}}>
                        <Text style={{marginLeft:15,color:'#ffff'}}>张梦宇</Text>
                        <Text style={{marginLeft:15,color:'#ffff'}}>男</Text>
                        <Text style={{marginLeft:15,color:'#ffff'}}>12</Text>
                        <Text style={{marginLeft:15,color:'#ffff'}}>待确认</Text>
                        <Text style={{marginLeft:15,color:'#ffff'}}>236.2</Text>
                        <Text style={{marginLeft:15,color:'#ffff'}}>20:08:00</Text>
                    </View>
                    <View  style={{marginTop:10, justifyContent : 'space-around',flexDirection : 'row', borderBottomWidth :1, borderBottomColor:'#242E58'}}>
                        <Text style={{marginLeft:15,color:'#ffff'}}>张梦宇</Text>
                        <Text style={{marginLeft:15,color:'#ffff'}}>男</Text>
                        <Text style={{marginLeft:15,color:'#ffff'}}>12</Text>
                        <Text style={{marginLeft:15,color:'#ffff'}}>待确认</Text>
                        <Text style={{marginLeft:15,color:'#ffff'}}>236.2</Text>
                        <Text style={{marginLeft:15,color:'#ffff'}}>20:08:00</Text>
                    </View>
                    <View  style={{marginTop:10, justifyContent : 'space-around',flexDirection : 'row', borderBottomWidth :1, borderBottomColor:'#242E58'}}>
                        <Text style={{marginLeft:15,color:'#ffff'}}>张梦宇</Text>
                        <Text style={{marginLeft:15,color:'#ffff'}}>男</Text>
                        <Text style={{marginLeft:15,color:'#ffff'}}>12</Text>
                        <Text style={{marginLeft:15,color:'#ffff'}}>待确认</Text>
                        <Text style={{marginLeft:15,color:'#ffff'}}>236.2</Text>
                        <Text style={{marginLeft:15,color:'#ffff'}}>20:08:00</Text>
                    </View>
                    <View  style={{marginTop:10, justifyContent : 'space-around',flexDirection : 'row', borderBottomWidth :1, borderBottomColor:'#242E58'}}>
                        <Text style={{marginLeft:15,color:'#ffff'}}>张梦宇</Text>
                        <Text style={{marginLeft:15,color:'#ffff'}}>男</Text>
                        <Text style={{marginLeft:15,color:'#ffff'}}>12</Text>
                        <Text style={{marginLeft:15,color:'#ffff'}}>待确认</Text>
                        <Text style={{marginLeft:15,color:'#ffff'}}>236.2</Text>
                        <Text style={{marginLeft:15,color:'#ffff'}}>20:08:00</Text>
                    </View>
        

                </View>
           </View>
           </ScrollView>
        );  
    }  
}

