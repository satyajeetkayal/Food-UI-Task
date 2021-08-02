import React from 'react';
import {StyleSheet, View, StatusBar, Dimensions} from 'react-native';
import ListBase from '../components/listBase';

const mainScreen = () => {
  return (
    <>
      <View style={styles.mainContainer}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          hidden={true}
        />
        <ListBase />
      </View>
    </>
  );
};

export default mainScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
});
