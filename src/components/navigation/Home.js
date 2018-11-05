/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsView from './SettingsView';
import ScheduleView from './ScheduleView';
import NotasView2 from './notas/NotasView2';
import NewsView from './news/NewsView';

//  <CarreraView goToNotasMaterias={() => this.props.navigation.navigate('Fourth')}/>
export class Home extends Component {
  render() {
    return (
      <View style={styles.containerHome}>
        <NewsView/>
      </View>
    );
  }
}

export class Settings extends Component {
  render() {
    return (
      <View style={styles.containerAjustes}>
        <SettingsView onPressBack={() => this.props.navigation.navigate('First')}/>
      </View>
    );
  }
}

export class Notas extends Component{
  render(){
    return (
      <View>
        <NotasView2 goToNotasMaterias12={() => this.props.navigation.navigate('Fourth')}/>
      </View>
    )
  }
}
export class Schedule extends Component {
  render() {
    return (
      <View style={styles.containerSchedule}>
        <ScheduleView/>
      </View>
    );
  }
}
export default createBottomTabNavigator({
  Home: {screen: Home,
    navigationOptions:{
      tabBarLabel: 'Noticias',
      tabBarIcon: ({tintColor}) => (
        <Icon name='ios-list-box' color={tintColor} size={24}/>
      )
    }
  },
  Notas: {screen: NotasView2,
    navigationOptions:{
      tabBarLabel: 'Notas',
      tabBarIcon: ({tintColor}) => (
        <Icon name='ios-list-box' color={tintColor} size={24}/>
      )
    }
  },
  Schedule: {screen: Schedule,
    navigationOptions:{
      tabBarLabel: 'Horario',
      tabBarIcon: ({tintColor}) => (
        <Icon name='ios-calendar' color={tintColor} size={24}/>
      )
    }
  },
  Ajustes: {screen: Settings,
    navigationOptions:{
      tabBarLabel: 'Ajustes',
      tabBarIcon: ({tintColor}) => (
        <Icon name='ios-settings' color={tintColor} size={24}/>
      )
    }
  }
},{
  initialRouteName: 'Home',
  order: ['Home', 'Notas','Schedule', 'Ajustes'],
  navigationOptions:{
    tabBarVisible: true,
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0
  },
  tabBarOptions:{
    //activeTintColor: 'orange',
    //inactiveTintColor: 'grey',
  }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  containerHome:{
    flex: 1,
  },
  containerIdiomas:{
    flex: 1,
    //marginBottom: 8,
  },
  containerAjustes:{
    flex: 1,
  },
  containerSchedule:{
    flex: 1,
  },
});
