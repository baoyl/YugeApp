import React, { Component } from "react";


import {
    View,
    ScrollView,
    Text,
    PlatForm,
    StyleSheet,
    Dimensions,
    DrawerNavigator,
    ListView,
    ActivityIndicator,
    RefreshControl
} from 'react-native';

import Echarts from 'native-echarts';


export default class LoadMore extends Component<{}>{


    static navigationOptions = {
        title: '数据详细',
      };

    constructor (props) {
        super(props);
        this.state = {
           infoList: [],
           totalCount:10000
        };
      }
    componentWillMount(){
       this._loadData();
    }
    goPage(){
        const { navigate } = this.props.navigation;
        
        navigate('pullViewPage', { name: 'pullViewPage' });
          
    }
    _loadMoreData() {
		alert('加载更多');
	}
    _renderRow(rowData,SectionId,rowID){
        return (<View  style={{marginTop:10, justifyContent : 'space-around',flexDirection : 'row', borderBottomWidth :1, borderBottomColor:'#242E58'}}>
        <Text style={{marginLeft:15,color:'#ffff'}}>张梦宇</Text>
        <Text style={{marginLeft:15,color:'#ffff'}}>男</Text>
        <Text style={{marginLeft:15,color:'#ffff'}}>12</Text>
        <Text style={{marginLeft:15,color:'#ffff'}}>待确认</Text>
        <Text style={{marginLeft:15,color:'#ffff'}}>236.2</Text>
        <Text style={{marginLeft:15,color:'#ffff'}}>20:08:00</Text>
    </View>)
    }
    _toEnd(){
        this._loadData();
    }
    _loadData(){
        let self = this;
        let list = self.state.infoList;

        let listSize = list.length;
        for(let i = (listSize + 1); i < (listSize+50); i++){
            list[i] = {rowData:"ddddd", SectionId:"aaaa", rowID:"dddf"};
        }
        self.setState({infoList:list});
    }
    _renderFooter() {
		// return <ActivityIndicator />
        let inforList = this.state.infoList;
        let totalCount = this.state.totalCount;
        // alert(inforList.length + "   " + totalCount);
          if (inforList.length < totalCount) {
              //还有更多，默认显示‘正在加载更多...’
              return <ActivityIndicator />
          }


    }
    reloadWordData(){
        alert('刷新操作');
    }
    render(){  
     

          const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

          let infoList = this.state.infoList;
        return(  

                    <View style={{height: 300, backgroundColor:"#1B2342"}}>
                        <ListView
                  dataSource={ ds.cloneWithRows(infoList) } 
                  renderRow={ this._renderRow.bind(this) }
                  onEndReached={ this._toEnd.bind(this) }
                  onEndReachedThreshold={10}
                  refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh={this.reloadWordData.bind(this)}
                    />}
                  renderFooter={ this._renderFooter.bind(this) }
                  enableEmptySections={true} 
                 />
                </View>

        );  
    }  
}

