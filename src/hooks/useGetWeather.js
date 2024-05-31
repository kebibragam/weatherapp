import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const url = 'http://api.openweathermap.org/data/2.5/forecast';
const key = process.env.EXPO_PUBLIC_API_KEY;

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const fetchWeatherData = async (lat, lon) => {
    try {
      const res = await fetch(
        `${url}?lat=${lat}&lon=${lon}&appid=${key}&units=metric`,
      );
      const data = await res.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      setError('Could not fetch weather');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setError('permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      await fetchWeatherData(
        location.coords.latitude,
        location.coords.longitude,
      );
    })();
  }, [lat, lon]);

  return [loading, error, weather];
};
