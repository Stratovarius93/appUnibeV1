import React,{Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Dimensions, KeyboardAvoidingView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {LinearGradient} from 'expo';

export default class LoginForm extends Component{
  logAct(){
    Alert.alert(
      'Inicio de sesión',
      'Inicio exitoso',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
  render(){
    return(
      <KeyboardAvoidingView style={styles.container}>
        <TextInput style={styles.input}
          placeholder='Ingrese su usuario'
          placeholderTextColor='#b2b2b2'
          returnKeyType='next'
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCapitalize='none'
          autoCorrect={false}
          underlineColorAndroid='rgba(0,0,0,0)'
          />
        <TextInput style={styles.input}
          placeholder='Ingrese su contraseña'
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholderTextColor='#b2b2b2'
          secureTextEntry
          ref={(input) => this.passwordInput = input}
          />
        <TouchableOpacity activeOpacity = { .5 } onPress={this.props.titleV}>
              <LinearGradient
              colors={['#00d6ea', '#00619f']}
              style={styles.LinearGradientStyle}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0.9}}
              locations={[0, 0.9]} >
                <Text style={styles.buttonText}> Iniciar Sesión </Text>
              </LinearGradient>
          </TouchableOpacity>
        <View style={styles.termsView}>
          <Text style={styles.terms}>
            Al unirse, usted acepta nuestros <Text style={styles.termsService}>
              Términos de servicio
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    //backgroundColor: '#f1f1f1',
  },
  input:{
    height: hp('8%'),
    width: wp('80'),
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 0.5*(hp('8%')),
    backgroundColor: '#f1f1f1',
    fontSize: 20,
    paddingHorizontal: 20,
    color: '#00619f',
    
  },
  /*
  buttonContainer:{
    height:hp('8%'),
    width: wp('80') ,
    marginTop: 4,
    marginBottom: 10,
    backgroundColor: '#00619f',
    borderRadius: 0.5*(hp('8%')),
    paddingHorizontal: 20,
    justifyContent: 'center',
  },*/
  LinearGradientStyle: {
    height:hp('8%'),
    width: wp('80') ,
    marginTop: 4,
    borderRadius: 0.5*(hp('8%')),
    marginBottom: 10,
    paddingHorizontal: 20,
    //alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    },

  buttonText:{
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  termsService:{
    color: 'black',
    fontWeight: 'bold',
  },
  terms: {
    textAlign: 'center',
    fontSize:12,
    marginTop:8,
    marginBottom: 8,
  },
  termsView:{
    padding: 8,
  },
});
