import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import colors from '../assets/colors/colors';

const Details = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View>
      {console.log(item)}
      <Text>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default Details;
