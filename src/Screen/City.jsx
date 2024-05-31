import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  View,
} from 'react-native';
import SafeViewAndroid from '../components/SafeViewAndroid';
import IconText from '../components/IconText';
import moment from 'moment';

const City = ({ weatherData }) => {
  const { name, country, population, sunrise, sunset } = weatherData;

  const {
    container,
    imageLayout,
    cityName,
    countryStyle,
    cityText,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout,
  } = styles;

  return (
    <SafeAreaView style={{ ...SafeViewAndroid.AndroidSafeArea, ...container }}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryStyle, cityText]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'#333333'}
            bodyText={`Population: ${population}`}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'#ffffff'}
            bodyText={moment(sunrise * 1000).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'#ffffff'}
            bodyText={moment(sunset * 1000).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryStyle: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#333333',
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    margin: 7.5,
    color: '#333333',
  },
  riseSetWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: 'black',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default City;
