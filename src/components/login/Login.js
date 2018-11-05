/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button, Image, KeyboardAvoidingView, ScrollView, Dimensions,
} from 'react-native';
import LoginForm from './LoginForm';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Login extends Component {
  static navigationOptions ={
    header:null
  }
  render() {
    return (
      /*
      <View style={styles.container}>
        <Text>Login</Text>
        <Button
          title='Iniciar Sesión'
          onPress={() => this.props.navigation.navigate('Second')}
        />
      </View>*/
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps='handled'
        >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/logoLogin.png')}
            />
          <Text style={styles.title}>
            Estudiantes Unibe
          </Text>
        </View>
        <View style={styles.logoContainer2}>
          <LoginForm titleV={() => this.props.navigation.navigate('Second')}/>
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  logo: {
    height:wp('75%'),
    width: wp('75%'),
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: 16,
    //paddingTop: 20,
  },
  logoContainer2:{
    flexGrow: 2,
    justifyContent: 'center',
    paddingBottom: 20,
  },
  title:{
    color: '#000',
    fontSize: 24,
    marginTop: 8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
