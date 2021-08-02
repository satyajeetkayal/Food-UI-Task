import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Counter from './counter';

const listData = ({item}) => {
  return (
    <>
      <View style={styles.listContainer}>
        <View style={styles.viewContainer}>
          <Image source={{uri: item.imageUrl}} style={styles.imageContainer} />
          <View style={styles.textContainer3}>
            <Text style={styles.textContainer}>{item.name}</Text>
            <Text numberOfLines={5} style={styles.textContainer1}>
              {item.description}
            </Text>
            <Text style={styles.textContainer2}>{`$${item.Price}`}</Text>
          </View>
          <View style={styles.viewContainer1}>
            <Counter />
          </View>
        </View>
      </View>
    </>
  );
};

export default listData;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: 'white',
    elevation: 20,
    margin: 3,
    borderRadius: 10,
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    bottom: 10,
    width: wp('100%') - 10,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 10,
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  viewContainer: {
    flexDirection: 'row',
  },
  textContainer: {fontSize: 15, fontWeight: 'bold'},
  textContainer1: {fontSize: 12, color: 'gray', width: 135},
  textContainer2: {fontSize: 20, color: 'orange'},
  viewContainer1: {flex: 1, justifyContent: 'flex-end'},
  textContainer3: {flexDirection: 'column', margin: 20},
});
