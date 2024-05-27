import React from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from 'react-native';
import Item from '../components/Item';

const data = [
  {
    dt_txt: '2022-08-30 15:00:00',
    main: {
      temp_max: 8.55,
      temp_main: 7.55,
    },
    weather: [
      {
        main: 'Clear',
      },
    ],
  },
  {
    dt_txt: '2022-08-30 18:00:00',
    main: {
      temp_max: 8.55,
      temp_main: 7.55,
    },
    weather: [
      {
        main: 'Cloud',
      },
    ],
  },
  {
    dt_txt: '2022-08-30 21:00:00',
    main: {
      temp_max: 8.55,
      temp_main: 7.55,
    },
    weather: [
      {
        main: 'Rain',
      },
    ],
  },
];

const UpcommingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_main}
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
        <Text>Upcomming Weather</Text>
        <FlatList
          data={data}
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
