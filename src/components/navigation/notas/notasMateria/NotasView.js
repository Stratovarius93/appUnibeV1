/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import FlatMaterias from './FlatMaterias';

export default class NotasView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text></Text>
        <FlatMaterias/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
});
