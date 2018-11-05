/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {LinearGradient} from 'expo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class ICards2 extends Component {
  render() {
    return (
      <FlatList
      data={[
        {title: 'Período 8', jornada:'Diurna',colors:['#5cb6f0','#0080da'],paralelo:'B', key: '6162'},
        {title: 'Período 13', jornada:'Diurna',colors:['#ff2a4d','#c80028'],paralelo:'D', key: '3665'},
        {title: 'Período 15', jornada:'Diurna',colors:['#5fd262','#289a32'],paralelo:'A', key: '3663'}]}

      renderItem={({item}) =>
      <View style={styles.container}>
      <TouchableOpacity activeOpacity = { .5 } onPress={this.props.onPressI2}>
        <LinearGradient
        colors={item.colors}
        style={[styles.LinearGradientStyle, styles.shadow, {shadowColor:item.colors[0]} ]}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0.9}}
        locations={[0, 0.9]} >
          <View style={styles.viewCard}>
            <Text style={styles.paralelo}>{item.paralelo}</Text>
            <Text style={styles.buttonText1}>{item.title}</Text>
            <Text style={styles.buttonText2}>Jornada {item.jornada}</Text>
            <Text style={styles.buttonText2}>Matrícula: <Text style={[styles.buttonText2,{fontWeight: 'bold'}]}>{item.key}</Text></Text>
          </View>
          <View style={styles.viewButtonText3}>
            <Text style={styles.buttonText3}>31/08/2018 - 01/03/2019</Text>
          </View>
        </LinearGradient>
        </TouchableOpacity>
      </View>
      }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    alignItems: 'center'
  },
  LinearGradientStyle: {
    height: 120,
    width: wp('92%'),
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  shadow: {
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 4,
  },
  viewCard:{
    flex: 1,
    justifyContent: 'center',
  },
  paralelo:{
    position: 'absolute',
    zIndex: 0,
    fontSize:124,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    color: 'rgba(255,255,255,0.3)',
    transform: [{ rotate: '15deg'}],
    paddingTop: 16,
  },
  buttonText1: {
    position: 'relative',
    zIndex: 1,
   fontSize: 20,
   fontWeight: 'bold',
   color : '#fff',
   backgroundColor: 'transparent',
  },
  buttonText2: {
    position: 'relative',
    zIndex: 1,
   color : '#fff',
   backgroundColor: 'transparent',
  },
  buttonText3: {
    position: 'relative',
    zIndex: 1,
   fontSize: 12,
   textAlign: 'center',
   marginLeft: 4,
   marginRight: 4,
   marginTop: 4,
   marginBottom: 4,
   color : 'rgba(0,0,0,0.6)',
  },
  viewButtonText3:{
    backgroundColor:'rgba(255,255,255,0.8)',
    borderRadius: 16,
    width: 160,
    bottom: 8,
  },
});
