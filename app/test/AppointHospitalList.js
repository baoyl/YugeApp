import React, { Component } from "react";

import Request from '../utils/Request';

import appointApi from '../api/appointReferralApi';

let access_token = "6F6BE0CAA39740A49E89466F6E89AAE7";

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
        var p = Request.async(appointApi.appointReferralApi.queryHospitalList + "?access_token=" + access_token, param);	
        p.then(function(data) {
            var businessHospitalList = data.result.businessHospitalList;
            self.setState({businessHospitalList: businessHospitalList});
        });
    }
    goPage(){
        const { navigate } = this.props.navigation;
        
        navigate('pullViewPage', { name: 'pullViewPage' });
          
    }
    render(){  
        var hospitalList = this.state.businessHospitalList;
        return(  
           <ScrollView>
                <View>
                { (hospitalList||[]).map((hospital, index) =>
                    <Text style={styles.instructions} key={index}> {hospital.hospitalName}</Text>
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