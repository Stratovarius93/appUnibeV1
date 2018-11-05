/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import NotasView from './notasMateria/NotasView';

export default class NotasMaterias extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NotasView/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
