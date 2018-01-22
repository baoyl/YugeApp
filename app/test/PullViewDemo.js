import React, { Component } from "react";

import {
    View,
    ScrollView,
    Text,
    PlatForm,
    StyleSheet,
    Dimensions
} from 'react-native';

import {PullView} from 'react-native-pull';

export default class PullViewDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {refreshing: false};
        this.onPullRelease = this.onPullRelease.bind(this);
        this.topIndicatorRender = this.topIndicatorRender.bind(this);
    }

    static navigationOptions = {
        title: '下拉刷新',
      };

    onPullRelease(resolve) {
        //do something
        setTimeout(() => {
            resolve();
        }, 3000);
    }
    goPage(){
        const { navigate } = this.props.navigation;
        
        navigate('chartPage', { name: 'chartPage' });
    }
    topIndicatorRender(pulling, pullok, pullrelease) {
        const hide = {position: 'absolute', left: 10000};
        const show = {position: 'relative', left: 0};
        if (pulling) {
            this.txtPulling && this.txtPulling.setNativeProps({style: show});
            this.txtPullok && this.txtPullok.setNativeProps({style: hide});
            this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
        } else if (pullok) {
            this.txtPulling && this.txtPulling.setNativeProps({style: hide});
            this.txtPullok && this.txtPullok.setNativeProps({style: show});
            this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
        } else if (pullrelease) {
            this.txtPulling && this.txtPulling.setNativeProps({style: hide});
            this.txtPullok && this.txtPullok.setNativeProps({style: hide});
            this.txtPullrelease && this.txtPullrelease.setNativeProps({style: show});
        }
        return (
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60}}>
                {/* <ActivityIndicator size="small" color="gray" /> */}
                <Text ref={(c) => {this.txtPulling = c;}}>下拉刷新pulling...</Text>
                <Text ref={(c) => {this.txtPullok = c;}}>松开刷新pullok......</Text>
                <Text ref={(c) => {this.txtPullrelease = c;}}>玩命刷新中pullrelease......</Text>
            </View>
        );
    }

    // <ListView style={ styles.listViewContent } 
    // dataSource={ ds.cloneWithRows(reducer.products) } 
    // renderRow={ this._renderRow.bind(this) }
    // onEndReached={ this._toEnd.bind(this) }
    // onEndReachedThreshold={10}
    // renderFooter={ this._renderFooter.bind(this) }
    // enableEmptySections={true} 
    // refreshControl={
    //     <RefreshControl
    //         refreshing={ reducer.isRefreshing }
    //         onRefresh={ this._onRefresh.bind(this) }
    //         tintColor="gray"
    //         colors={['#ff0000', '#00ff00', '#0000ff']}
    //         progressBackgroundColor="gray"/>
    //     }/>

  render() {
    return (
      <View style={[styles.container]}>
        <PullView style={{width: Dimensions.get('window').width}}  onPullRelease={this.onPullRelease} topIndicatorRender={this.topIndicatorRender} topIndicatorHeight={60}>
            <View style={{backgroundColor: '#eeeeee'}}>
            <Text style={[{fontSize: 12,textAlign: 'center'}]}>
                  {(function(){
                    var str = '';
                    var n = 10;
                    while(n--) {
                      str += 'react native 下拉刷新' + '\n';
                    }
                    return str;
                  })()}
                </Text>
            </View>
            <View>
                  <Text onPress={this.goPage.bind(this)}>点击进入下一页</Text>

            </View>
        </PullView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});