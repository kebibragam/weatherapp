import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CurrentWeather from '.././Screen/CurrentWeather';
import UpcommingWeather from '.././Screen/UpcommingWeather';
import City from '.././Screen/City';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'lightblue',
        },
        headerStyle: {
          backgroundColor: 'lightblue',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'tomato',
        },
      }}
    >
      <Tab.Screen
        name="current"
        // component={CurrentWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="droplet"
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name="upcomming"
        // component={UpcommingWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="clock"
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      >
        {() => <UpcommingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name="city"
        // component={City}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
export default Tabs;
