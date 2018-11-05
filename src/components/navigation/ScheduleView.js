/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class ScheduleView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleHeader}>Horario</Text>
        </View>
        <FlatList
          data={[
            {day:'LUNES',key:'lu'},
            {day:'MARTES',key:'ma'},
            {day:'MIÉRCOLES',key:'mi'},
            {day:'JUEVES',key:'ju'},
            {day:'VIERNES',key:'vi'},
          ]}
          renderItem={({item}) =>
            <View>
              <Text style={styles.daysTxt}>{item.day}</Text>
              <FlatList
                data={[
                  {subject:'Metmáticas', teacher:'Juan', timeStart:'7:00 AM', timeEnd:'9:00 AM', color:'#3ad571',key:'Mat'},
                  {subject:'Historia', teacher:'Pedro', timeStart:'9:00 AM', timeEnd:'11:00 AM', color:'#fdc84a',key:'His'},
                  {subject:'Química', teacher:'Alberto', timeStart:'11:00 AM', timeEnd:'13:00 PM', color:'#ff8f33',key:'Qui'},
                ]}
                ItemSeparatorComponent={() =>
                  <View style={styles.separator1}>
                    <View style={[styles.separator2]}/>
                  </View>
                }

                renderItem={({item, index}) =>
                <View style={styles.signatureView}>
                  <View style={[styles.row1]}>
                    <View style={[styles.separatorRow1,{backgroundColor: item.color}]}></View>
                    <View style={[styles.subRow1]}>
                      <Text>{index+1}</Text>
                    </View>
                  </View>

                  <View style={styles.row2}>
                    <View style={[styles.separatorRow2]}></View>
                    <View style={[styles.subRow2]}>
                      <Text style={styles.timeStartTxt}>{item.timeStart}</Text>
                      <Text style={styles.timeEndtTxt}>{item.timeEnd}</Text>
                    </View>
                  </View>

                  <View style={styles.row3}>
                    <View style={styles.separatorRow3}></View>
                    <View style={styles.subRow3}>
                      <Text style={styles.subject}>{item.subject}</Text>
                      <Text style={styles.teacher}>{item.teacher}</Text>
                    </View>
                  </View>
                </View>
              }
              />
            </View>
        }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
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
  daysTxt:{
    //fontWeight: 'bold',
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 16,
    marginRight: 16,
    fontSize: 12,
  },
  signatureView:{
    backgroundColor: '#fff',
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
  },
  separator2:{
    //height: 10,
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 1,
    marginLeft: 16,
  },
  separator1:{
    backgroundColor: '#fff',
  },


  row1:{
    //flex: 1,
    width: 40,
    flexDirection: 'row',
    //justifyContent: 'space-between',
    alignItems: 'center',
    //backgroundColor: 'green',
  },
  separatorRow1:{
    width: 4,
    height: 68,
    justifyContent: 'center',
  },
  subRow1:{
    width:36,
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },


  row2:{
    //flex: 1,
    //backgroundColor: 'blue',
    width: 70,
    alignItems: 'center',
    flexDirection: 'row',
  },
  separatorRow2:{
    width: 1,
    height: 52,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
  },
  subRow2:{
    width: 69,
    //backgroundColor: 'green',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  timeStartTxt:{
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  timeEndtTxt:{
    fontSize: 12,
    textAlign: 'center',
  },



  row3:{
    width:((wp('100%'))-109),
    flexDirection: 'row',
    alignItems: 'center',
  },
  separatorRow3:{
    width: 1,
    height: 58,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
  },
  subRow3:{
    margin: 8,
  },


  subject:{
    fontWeight: 'bold',
    fontSize: 16,
  },
  teacher:{
    //fontStyle: 'italic',
    color:'gray',
    marginTop: 6,
  },
});
