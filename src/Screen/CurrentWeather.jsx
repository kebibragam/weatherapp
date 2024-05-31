import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import SafeViewAndroid from '.././components/SafeViewAndroid';
import RowText from '../components/RowText';
import { weatherType } from '../utils/WeatherType';

const CurrentWeather = ({ weatherData }) => {
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;
  const weatherCondition = weather[0]?.main;
  const {
    wrapper,
    container,
    tempStyle,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles;
  return (
    <SafeAreaView
      style={[
        SafeViewAndroid.AndroidSafeArea,
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor },
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="black"
        />
        <Text style={tempStyle}>{`${temp}°`}</Text>
        <Text style={feels}> {`Feels like ${feels_like}°`}</Text>
        <RowText
          message1={`high: ${temp_max}° `}
          message2={`Low: ${temp_min}°`}
          containerStyles={highLowWrapper}
          message1Styles={highLow}
          message2Styles={highLow}
        />
      </View>
      <RowText
        message1={weather[0]?.description}
        message2={weatherType[weatherCondition]?.message}
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
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempStyle: {
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
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
  },
  message: {
    fontSize: 25,
  },
});
export default CurrentWeather;
