/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  AutoHeightImage,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window');

/*
<Image
style={styles.imageTxt}
source={item.imageC}
/>
*/
export default class NCards extends Component {
  render() {
    return (
      <FlatList
        data={[
          {title:'Evento 1', description:'La Dirección de Escuela de Turismo de la Universidad Iberoamericana del Ecuador, desarrolló con éxito la Gira Académica Amazonia 2018.', imageC:require('./images/1.jpg'), date:'12/03/2018', key:'1'},
          {title:'Evento 2', description:'La Dirección de Escuela de Turismo de la Universidad Iberoamericana del Ecuador, desarrolló con éxito la Gira Académica Amazonia 2018.', imageC:require('./images/2.jpg'), date:'12/03/2018', key:'2'},
          {title:'Evento 3', description:'La Dirección de Escuela de Turismo de la Universidad Iberoamericana del Ecuador, desarrolló con éxito la Gira Académica Amazonia 2018.', imageC:require('./images/3.jpeg'), date:'12/03/2018', key:'3'},
          {title:'Evento 4', description:'La Dirección de Escuela de Turismo de la Universidad Iberoamericana del Ecuador, desarrolló con éxito la Gira Académica Amazonia 2018.', imageC:require('./images/4.jpg'), date:'12/03/2018', key:'4'},
          {title:'Evento 5', description:'La Dirección de Escuela de Turismo de la Universidad Iberoamericana del Ecuador, desarrolló con éxito la Gira Académica Amazonia 2018.', imageC:require('./images/5.jpg'), date:'12/03/2018', key:'5'},
          {title:'Evento 6', description:'La Dirección de Escuela de Turismo de la Universidad Iberoamericana del Ecuador, desarrolló con éxito la Gira Académica Amazonia 2018.', imageC:require('./images/5.jpg'), date:'12/03/2018', key:'6'},
        ]}
        style={[{paddingTop:16,}]}
        renderItem={({item}) =>
          <View style={[styles.card, styles.shadow]}>
            <View style={styles.cardImage}>
              <Image
              borderTopLeftRadius={12}
              style={styles.imageTxt}
              source={item.imageC}
              />
            </View>
            <View style={styles.cardTitle}>
              <Text style={styles.titleTxt}>{item.title}</Text>
            </View>
            <View style={styles.cardDescription}>
              <Text style={styles.descriptionTxt}>{item.description}</Text>
            </View>
            <View style={styles.cardDate}>
              <Text style={styles.dateTxt}>{item.date}</Text>
            </View>
          </View>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card:{
    backgroundColor:'#fff',
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 16,
    borderRadius: 12,
  },

  shadow: {
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 4,
    shadowColor: 'gray',
  },

  cardImage:{
    overflow: 'hidden',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    height: 200,
    //width: wp('100%'),
  },
  imageTxt:{
    overflow: 'hidden',
    height: 200,
    width: (wp('100%')-24),
  },

  cardTitle:{
    paddingLeft: 16,
  },
  titleTxt:{
    paddingTop:8,
    fontWeight:'bold',
    fontSize: 24,
  },

  cardDescription:{
    paddingLeft: 16,
  },
  descriptionTxt:{
    fontSize: 18,
    color: 'gray',
  },

  cardDate:{
    paddingLeft: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
  dateTxt:{
    //fontWeight: 'bold',
    fontStyle: 'italic',
    color:'#bababa',
    fontSize: 12,
  },
});
