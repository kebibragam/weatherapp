import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from 'react-native';
import Item from '../components/Item';

const UpcommingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0]?.main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  const { container, image } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/upcomming-backgrpund.jpg')}
        style={image}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fafafa',
  },
  image: {
    flex: 1,
  },
});
export default UpcommingWeather;
