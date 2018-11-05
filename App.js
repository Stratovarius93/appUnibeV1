import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Login from './src/components/login/Login';
import Home from './src/components/navigation/Home';
import LoginForm from './src/components/login/LoginForm';
import NotasMaterias from './src/components/navigation/notas/NotasMaterias';

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
}
const AppStackNavigator = createStackNavigator({
  First:{screen:Login},
  Second:{screen:Home,
    navigationOptions:{
    title: 'Ingeniería de Software',
    gesturesEnabled: false,
    ...Platform.select({
      ios:{
        header: null
      },
      android:{
        headerLeft: null
      }
    })
  },
},
  Third:{screen:LoginForm},
  Fourth: {screen: NotasMaterias,
    navigationOptions:{
      title: 'Materias',
    },
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
