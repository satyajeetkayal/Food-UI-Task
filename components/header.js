import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const header = () => {
  const headerUrl =
    'https://admin.itsnicethat.com/images/g2yNnEBseu2UjFex42yKKZuqg8c=/200332/width-1440/mcdonalds-news-graphic-design-itsnicethat-1_wy0Usv5.jpg';
  return (
    <>
      <View style={styles.mainContainer}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            source={{
              uri: headerUrl,
            }}
            style={{
              height: 200,
              width: Dimensions.get('screen').width,
              aspectRatio: 1.9,
              resizeMode: 'cover',
            }}
          />
          <View
            style={{
              position: 'absolute',
              flexDirection: 'row',
            }}>
            <Icon
              style={{top: 30, left: 10}}
              name="chevron-back-outline"
              size={25}
              color="white"
            />
            <Icon
              style={{top: 30, left: 260}}
              name="search-outline"
              size={25}
              color="white"
            />
            <Icon
              style={{top: 30, left: 275}}
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
});
