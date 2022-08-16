import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../assets/colors/colors';

const height = Dimensions.get('window').height;

const Details = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground source={item.imageBig} style={styles.backgroundImage}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={32} color={colors.white} />
        </TouchableOpacity>

        <View style={styles.titlesWrapper}>
          <Text style={styles.itemTitle}>{item.title}</Text>

          <View style={styles.locationWrapper}>
            <Entypo name="location-pin" size={24} color={colors.white} />

            <Text style={styles.locationText}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.descriptionWrapper} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    height: height * 0.6,
    justifyContent: 'space-between',
  },
  backIcon: {
    marginLeft: 20,
    marginTop: 60,
  },
  titlesWrapper: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  itemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    color: colors.white,
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: colors.white,
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
});

export default Details;
