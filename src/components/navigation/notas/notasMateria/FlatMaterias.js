/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import allMaterias from './materias.json';
export default class FlatMaterias extends Component {
  /*
  constructor(){
    super();
    this.state={

      data:[
        {materia:'Fundamentos de diseño', ap1:8, inasis1:0, ap2:8, inasis2:0, ap3:8, inasis3:0, inasisFinal:0, supl:0, estado:'Aprobado', key:'fd'},
        {materia:'Economía y desarrollo', ap1:8, inasis1:0, ap2:8, inasis2:0, ap3:8, inasis3:0, inasisFinal:0, supl:0, estado:'Aprobado', key:'ed'},
        {materia:'Fundamentos de análisis', ap1:8, inasis1:0, ap2:8, inasis2:0, ap3:8, inasis3:0, inasisFinal:0, supl:0, estado:'Aprobado', key:'fa'},
        {materia:'Diseño de bases de datos', ap1:8, inasis1:0, ap2:8, inasis2:0, ap3:8, inasis3:0, inasisFinal:0, supl:0, estado:'Aprobado', key:'db'},
        {materia:'Fundamentos de verificación', ap1:8, inasis1:0, ap2:8, inasis2:0, ap3:8, inasis3:0, inasisFinal:0, supl:0, estado:'Aprobado', key:'fv'},
      ]
    }
  }*/
  state = {
    materiasList:allMaterias,
  }
  render() {
    const {materiasList} = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          //data={this.state.data}
          data={materiasList}
          keyExtractor ={(item, index) => index.toString()}
          ItemSeparatorComponent={() =>
            <View style={styles.separator}>

            </View>
          }
          renderItem={({item}) =>
            <View style={styles.card}>
              <TouchableOpacity activeOpacity = { .5 } onPress={() => Alert.alert('Titulo','Notas')}>
                <View style={styles.subCard1}>
                  <Text style={styles.materiaTxt}>{item.materia}</Text>
                  <Text style={styles.estadoTxt}>{item.estado}</Text>
                  <Text>Total:</Text>
                  <Text>{(item.ap1+item.ap2+item.ap3)}</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.subCard2}>
                <Text style={styles.notasTxt}>Notas:</Text>
                <View style={styles.subCard2Row1}>
                  <View style={styles.subCard2Row1View}>
                    <Text style={styles.subCard2Row1Txt}>{item.ap1}</Text>
                  </View>
                  <View style={styles.subCard2Row1View}>
                    <Text style={styles.subCard2Row1Txt}>{item.ap2}</Text>
                  </View>
                  <View style={styles.subCard2Row1View}>
                    <Text style={styles.subCard2Row1Txt}>{item.ap3}</Text>
                  </View>
                </View>
                <Text>Total: {(item.ap1+item.ap2+item.ap3)}</Text>
                <Text style={styles.InasistenciasTxt}>Inasistencias:</Text>
                <View style={styles.subCard2Row2}>
                  <View style={styles.subCard2Row2View}>
                    <Text style={styles.subCard2Row2Txt}>{item.inasis1}</Text>
                  </View>
                  <View style={styles.subCard2Row2View}>
                    <Text style={styles.subCard2Row2Txt}>{item.inasis2}</Text>
                  </View>
                  <View style={styles.subCard2Row2View}>
                    <Text style={styles.subCard2Row2Txt}>{item.inasis3}</Text>
                  </View>
                </View>
                <Text>Total: {(item.inasis1+item.inasis2+item.inasis3)}</Text>
              </View>
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
  },
  card:{
    backgroundColor: '#fff',

  },
  separator:{
    height: 10,
  },
  materiaTxt:{
    fontWeight:'bold',
  },
  subCard1:{
    backgroundColor: '#ffffff',
  },
  estadoTxt:{
    color:'#5fd262',
  },
  subCard2Row1:{
    flex: 1,
    flexDirection: 'row',
  },
  subCard2Row2:{
    flex: 1,
    flexDirection: 'row',
  },
  subCard2Row1View:{
    flex: 1,
  },




  subCard2Row2View:{
    flex: 1,
  },
  subCard2Row1Txt:{
    margin: 8,
  },
  notasTxt:{
    fontWeight: 'bold',
  },
  InasistenciasTxt:{
    fontWeight: 'bold',
  },

  subCard2:{
    backgroundColor: '#f2f2f2',
  },
  subCard2Row2Txt:{
    margin: 8,
  },
});
