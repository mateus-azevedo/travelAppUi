import React from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Feather from 'react-native-vector-icons/Feather';
import colors from '../assets/colors/colors';
import profile from '../assets/images/person.png';

import activitiesData from '../assets/data/activitiesData';
import discoverCategoriesData from '../assets/data/discoverCategoriesData';
import discoverData from '../assets/data/discoverData';
import learnMoreData from '../assets/data/learnMoreData';

Feather.loadFont();

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <Feather
              name="menu"
              size={32}
              color={colors.black}
              style={styles.menuIcon}
            />
            <Image source={profile} style={styles.profileImage} />
          </View>
        </SafeAreaView>

        {/* Discover */}
        <View style={styles.discoverWrapper}>
          <Text style={styles.discoverTitle}>Discover</Text>
          <View style={styles.discoverCategoriesWrapper}>
            <Text
              style={[styles.discoverCategoryText, { color: colors.orange }]}>
              All
            </Text>
            <Text style={styles.discoverCategoryText}>Destination</Text>
            <Text style={styles.discoverCategoryText}>Cities</Text>
            <Text style={styles.discoverCategoryText}>Experiences</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIcon: {},
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  discoverWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  discoverTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
  },
  discoverCategoriesWrapper: {
    flexDirection: 'row',
    marginTop: 20,
  },
  discoverCategoryText: {
    marginRight: 30,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.gray,
  },
});

export default Home;
