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

const City = () => {
  const {
    container,
    imageLayout,
    cityName,
    country,
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
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[country, cityText]}>UK</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'#333333'}
            bodyText={'8000'}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'#ffffff'}
            bodyText={'10:46:58am'}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'#ffffff'}
            bodyText={'17:28:15pm'}
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
  country: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#ffffff',
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
    color: '#ffffff',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default City;
