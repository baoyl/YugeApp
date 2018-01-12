import React, { Component } from "react";

import Request from '../utils/Request';

import {
    View,
    ScrollView,
    Text,
    PlatForm,
    StyleSheet,
    DrawerNavigator
} from 'react-native';


export default class AppointHospitalList extends Component<{}>{

    static navigationOptions = {
        title: '双向转诊',
      };
    constructor (props) {
        super(props);
        this.state = {
            businessHospitalList: []
        };
      }
    componentWillMount(){
        var self = this;
        var param = {"serviceType":"appointReferral", "flag":"flag"};
        var p = Request.async("http://m.yuge.com/hs/appointReferral/queryHospitalList.do?access_token=D9AC89E9BF2644048771A48CBBFD80A4", param);	
        p.then(function(data) {
            var businessHospitalList = data.result.businessHospitalList;
            self.setState({businessHospitalList: businessHospitalList});
        });
    }
    goPage(){
        const { navigate } = this.props.navigation;
        
        navigate('HohUpdate', { name: 'HohUpdate' });
          
    }
    render(){  
        var hospitalList = this.state.businessHospitalList;
        return(  
           <ScrollView>
                <View>
                { (hospitalList||[]).map((hospital, index) =>
                    <Text onPress={this.goPage.bind(this)} style={styles.instructions} key={index}> {hospital.hospitalName}</Text>
                )}
                </View>
           </ScrollView>
        );  
    }  
}

const styles = StyleSheet.create({
    instructions: {
      textAlign: 'center',
      color: '#333333',
      height:30,
      marginBottom: 5,
      fontSize : 20,
      flex: 1, 
      backgroundColor:"#eebbdd",
    },
  });