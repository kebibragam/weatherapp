import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import SafeViewAndroid from '.././components/SafeViewAndroid';
import RowText from '../components/RowText';

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temp,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles;
  return (
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, wrapper]}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}> Feels like 5</Text>
        <RowText
          message1={'High: 8'}
          message2={'Low: 6'}
          containerStyles={highLowWrapper}
          message1Styles={highLow}
          message2Styles={highLow}
        />
      </View>
      <RowText
        message1={'Its sunny'}
        message2={'Its perfect t-shirt weather'}
        containerStyles={bodyWrapper}
        message1Styles={description}
        message2Styles={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    color: 'black',
    fontSize: 30,
  },
  highLow: {
    color: 'black',
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 14,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});
export default CurrentWeather;
