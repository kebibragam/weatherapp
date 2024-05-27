import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const RowText = (props) => {
  const { message1, message2, message1Styles, message2Styles, containerStyle } =
    props;
  const {} = styles;
  return (
    <View style={containerStyle}>
      <Text style={message1Styles}>{message1}</Text>
      <Text style={message2Styles}>{message2}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  // containerStyle
});
export default RowText;
