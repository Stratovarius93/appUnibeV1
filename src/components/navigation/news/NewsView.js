import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Animated,
  ScrollView,
  Platform,
  FlatList,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import {LinearGradient} from 'expo';
import NCards from './NCards'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//https://medium.com/companydev/animated-header-titles-in-react-native-5be9db00bee2

export default class NewsView extends Component {

  constructor(props) {
    super(props);

    this.offset = 0;

    this.state = {
      scrollOffset: new Animated.Value(0),
      titleWidth: 0,
    };
  }

  componentDidMount() {
    this.state.scrollOffset.addListener(({ value }) => (this.offset = value));
  }

  onScroll = e => {
    const scrollSensitivity = 1 / 3; //4/3
    const offset = e.nativeEvent.contentOffset.y / scrollSensitivity;
    this.state.scrollOffset.setValue(offset);
  };
  selectPlatform(){
    const { scrollOffset } = this.state;
    const screenWidth = Dimensions.get('window').width;

    if(Platform.OS=='ios'){
      return(
        <Animated.View
          style={[
            styles.header,
            {
              paddingHorizontal: screenWidth * 0.05,
              width: screenWidth,
              height: scrollOffset.interpolate({
                inputRange: [0, 200],
                outputRange: [104, 54],
                extrapolate: 'clamp',
              }),
            },
          ]}>
          <Animated.Text
            onLayout={e => {
              if (this.offset === 0 && this.state.titleWidth === 0) {
                const titleWidth = e.nativeEvent.layout.width;
                this.setState({ titleWidth });
              }
            }}
            style={{
              fontWeight: 'bold',
              fontSize: scrollOffset.interpolate({
                inputRange: [200, 200],//64,200
                outputRange: [32, 17],
                extrapolate: 'clamp',
              }),
              color: scrollOffset.interpolate({
                inputRange:[0, 190, 200, 200],
                outputRange:['black','rgba(0,0,0,0.0)','rgba(0,0,0,0.0)','black'],
                extrapolate: 'clamp',
              })
            }}>
            Noticias
          </Animated.Text>
          <Animated.View
            style={{
              width: scrollOffset.interpolate({
                inputRange: [200, 200],//0,200
                //se desplaza desde la izquierda hacia la derecha
                outputRange: [screenWidth * 0.9 - this.state.titleWidth, 0],
                extrapolate: 'clamp',
              }),
            }}
          />
        </Animated.View>
      );
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.selectPlatform()}
        <ScrollView
        style={{ flex: 1, width: '100%' }}
        contentContainerStyle={{ width: '100%', paddingBottom: 6, }}
          onScroll={this.onScroll}
          scrollEventThrottle={20}>
          <NCards/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
    ...Platform.select({
      ios:{
        backgroundColor: '#fff',
        //backgroundColor: '#ecf0f1',
      },
      android:{
        backgroundColor: '#ecf0f1',
      }
    })
  },
  header: {
    backgroundColor: '#fff',
    //borderBottomWidth: 1,
    //borderColor: 'gainsboro',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 8,
  },
});
