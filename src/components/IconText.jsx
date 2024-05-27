import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

const IconText = (props) => {
  const { iconName, color, bodyText, bodyTextStyles } = props;
  const { container, textTheme } = styles;
  return (
    <View style={container}>
      <Feather name={iconName} size={50} color={color} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textTheme: {
    fontWeight: 'bold',
  },
});
export default IconText;
