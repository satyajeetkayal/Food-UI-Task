import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const header = () => {
  const headerUrl =
    'https://admin.itsnicethat.com/images/g2yNnEBseu2UjFex42yKKZuqg8c=/200332/width-1440/mcdonalds-news-graphic-design-itsnicethat-1_wy0Usv5.jpg';
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.ContainerView1}>
          <Image
            source={{
              uri: headerUrl,
            }}
            style={styles.imageContainer}
          />
          <View style={styles.iconContainer}>
            <Icon
              style={styles.icon1}
              name="chevron-back-outline"
              size={25}
              color="white"
            />
            <Icon
              style={styles.icon2}
              name="search-outline"
              size={25}
              color="white"
            />
            <Icon
              style={styles.icon3}
              name="share-outline"
              size={25}
              color="white"
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default header;

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 4,
  },
  imageContainer: {
    height: hp('100%'),
    width: Dimensions.get('window').width,
    aspectRatio: 1.9,
    resizeMode: 'cover',
  },
  ContainerView1: {
    flexDirection: 'row',
  },
  iconContainer: {
    position: 'absolute',
    flexDirection: 'row',
  },
  icon1: {
    top: 30,
    left: 10,
  },
  icon2: {
    top: 30,
    left: Dimensions.get('window').width - 100,
  },
  icon3: {
    top: 30,
    left: Dimensions.get('window').width - 80,
  },
});
