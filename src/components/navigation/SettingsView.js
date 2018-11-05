/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  Image,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
/*
<Text>Settings</Text>
<Button
  title='Exit'
  onPress={this.props.onPressBack}
/>*/
export default class SettingsView extends Component {
  opcion1(){
    Alert.alert('Cambiar contraseña','Prueba 1')
  }
  opcion2(){
    Alert.alert('Privacidad','Prueba 2')
  }
  opcion3(){
    Alert.alert('Ayuda','Prueba 3')
  }
  opcion4(){
    Alert.alert('Cerrar Sesión','Está seguro que desea Salir')
  }
  getHeader(){
    return(
      <View style={styles.container2}>
        <View style={[styles.shadow,styles.imageP]}>
          <Image
            resizeMode='cover'
            style={[styles.imageProfile]}
            source={require('./imagesSettings/profile2.jpg')}
          />
          <View style={styles.upPhoto}>
            <Image
              style={styles.imageCamera}
              source={require('./imagesSettings/camera.png')}
            />
          </View>
        </View>
        <Text style={styles.nombre}>Lola Bunny</Text>
        <Text style={{color: 'gray', fontSize: 12,}}>C.I.</Text>
        <Text style={{fontSize: 18,}}>1726448859</Text>
      </View>
    );
  }
  getList(){
    return(
      <FlatList
        data={[
          {option:'Cambiar contraseña', icono:'ios-key', colorIcon: '#ffc34d', metodo:this.opcion1, colorText:'#000', key:'1'},
          {option:'Privacidad', icono:'ios-list-box', colorIcon: '#347ef6', metodo:this.opcion2, colorText:'#000', key:'2'},
          {option:'Ayuda', icono:'ios-help-circle', colorIcon: '#37d673', metodo:this.opcion3, colorText:'#000', key:'3'},
          {option:'Cerrar Sesión', icono:'ios-exit', colorIcon: '#ff3c3c', metodo:this.props.onPressBack,  colorText:'#ff3c3c', key:'4'},
        ]}
        style={styles.FlatList}
        ItemSeparatorComponent={()=>
          <View style={styles.subSeparator}>
            <View style={styles.separator}></View>
          </View>
        }
        renderItem={({item, index}) =>
        <TouchableOpacity activeOpacity = { .5 } onPress={item.metodo}>
        <View style={styles.options}>
          <View style={styles.subItem1}>
            <View style={[styles.icons,{backgroundColor:item.colorIcon}]}>
              <Icon style={styles.icons2} name={item.icono} color='#fff' size={24}/>
            </View>
          </View>
          <View style={styles.subItem2}>
            <Text style={[styles.optionsText, {color:item.colorText}]}>{item.option}</Text>
          </View>
          //<View style={styles.subItem3}></View>
        </View>
        </TouchableOpacity>
      }
      />
    );
  }
  getVersion(){
    return(
      <View style={styles.versionView}>
        <Text style={styles.version}>Versión: 1.0</Text>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleHeader}>Lola Bunny</Text>
        </View>
        <FlatList
          data={[
            {fun:this.getHeader(), key:'1'},
            {fun:this.getList(), key:'2'},
            {fun:this.getVersion(), key:'3'},
          ]}
          renderItem={({item}) =>
          <View>{item.fun}</View>
        }
        />

      </View>
    );
  }
}
/*
<Button
  title='Exit'
  onPress={this.props.onPressBack}
/>
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 64,
    width: wp('100%'),
    backgroundColor: 'whitesmoke',
    borderBottomWidth: 1,
    borderColor: 'gainsboro',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 8,
  },
  titleHeader:{
    fontWeight: 'bold',
    fontSize:17,
  },
  listItem: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //===============================
  //****   FlatList ****
  //===============================
  container2:{
    alignItems:'center',
  },
  imageP:{
    marginTop: 16,
    marginBottom: 16,
    //backgroundColor: 'red',
  },
  imageProfile:{
    width: 180,
    height: 180,
    zIndex: 1,
    borderRadius: 90,
    position:'relative',
    borderWidth: 4,
    borderColor: '#fff',
  },
  shadow:{
    shadowOffset:{width: 1, height: 1},
    shadowOpacity:0.3,
    shadowRadius:3,
    elevation: 4,
  },
  imageCamera:{
    width: 40,
    height: 40,
  },
  upPhoto:{
    position: 'absolute',
    zIndex: 2,
    alignSelf: 'flex-end',
    height: 50,
    width: 50,
    backgroundColor: '#000',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  nombre:{
    fontSize: 24,
    marginBottom: 16,
  },
  options:{
    flex:1,
    flexDirection:'row',
    backgroundColor: '#fff',
    height: 44,
    //justifyContent: 'center',
    //justifyContent: 'space-between',

  },
  separator:{
    //backgroundColor: '#d3d3d3',
    backgroundColor:'#f1f1f1',
    marginLeft: 56,
    height: 1,
  },
  subSeparator:{
    backgroundColor: '#fff'
  },
  optionsText:{
    fontSize: 17,
    alignSelf: 'flex-start',
  },
  subItem1:{
    justifyContent: 'center',
    width: 56,
    alignItems: 'center',
  },
  subItem2: {
    justifyContent: 'center',
  },
  icons:{
    //backgroundColor: 'gray',
    height: 28,
    width: 28,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons2:{
    paddingTop: 2,
    paddingLeft:1,
  },
  FlatList:{
    paddingTop: 16,
    //borderBottomWidth: 1,
    //borderColor: 'red',
  },
  version:{
    color: 'gray',
    marginTop: 16,
    marginBottom: 16,
  },
  versionView:{
    alignItems: 'center',
  },
});
