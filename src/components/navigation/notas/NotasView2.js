import React from 'react';
import { StyleSheet, Text, View, SegmentedControlIOS, Alert, ScrollView, Button } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import ICards from './idiomas/ICards';
import CCards from './carrera/CCards';
import ICards from './idiomas/ICards';

export default class NotasView2 extends React.Component {
  state = {
  values: ['Carrera', 'Idiomas'],
  selectedIndex: 0};

onOne(){
  return(
    <CCards onPressC2={() => this.props.navigation.navigate('Fourth')}/>
  );
}

onTwo(){
  return(
    <ICards onPressI2={() => this.props.navigation.navigate('Fourth')}/>
  );
}

optionView(indexInt){
  if (indexInt === 0) {
    return(this.onOne());
  }else {
    return(this.onTwo());
  }
}
_onChange = (event) => {
  this.setState({
    selectedIndex: event.nativeEvent.selectedSegmentIndex,
  });
};

_onValueChange = (value) => {
  this.setState({
    value: value,
  });
};
//<View style={styles.container}>{this.optionView(this.state.selectedIndex)}</View>

/*

*/
render() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.supSegment1}>
          <Text style={styles.titleHeader}>Consulta de notas</Text>
        </View>
      </View>
      <View style={styles.header2}>
        <View style={styles.supSegment2}>
          <SegmentedControlIOS
            style={styles.segmented}
            values={this.state.values}
            selectedIndex={this.state.selectedIndex}
            onChange={this._onChange}
            onValueChange={this._onValueChange} />
        </View>
      </View>
      <View style={styles.container}>{this.optionView(this.state.selectedIndex)}</View>
    </View>
  );
}

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    //flex: 1,
  },

  header: {
  //height: 100,
  height: 64,
  width: wp('100%'),
  backgroundColor: 'whitesmoke',
  borderBottomWidth: 1,
  borderColor: 'gainsboro',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  //paddingBottom: 8,
  paddingTop: 16,

},

header2: {
width: wp('100%'),
borderBottomWidth: 1,
borderColor: 'gainsboro',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#fff',

},
titleHeader:{
  fontWeight: 'bold',
  fontSize:17,
},
segmented:{
  //width: wp,
},
supSegment2:{
  width: wp('92%'),
  marginTop: 8,
  marginBottom: 8,
},
supSegment1:{
  //marginTop: 32,
  //marginBottom:8,
}
});
