import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const baseView = () => {
  return (
    <>
      <View style={styles.MainContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>McDonald's</Text>
          <Icon name="bookmark" size={20} color={'orange'} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textContainer1}>$$</Text>
          <Text style={styles.textContainer1}>•</Text>
          <Text style={styles.textContainer1}>American Food</Text>
          <Text style={styles.textContainer1}>•</Text>
          <Text style={styles.textContainer1}>Burger</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={styles.textContainer2}>⭐ 4.9</Text>
          <Text style={styles.textContainer2}>200+</Text>
          <Text style={styles.textContainer2}>Ratings</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Icon
            style={styles.textContainer2}
            name="car"
            size={20}
            color={'green'}
          />
          <Text style={styles.textContainer2}>Free Delivery</Text>
          <Icon
            style={styles.textContainer2}
            name="stopwatch-outline"
            size={20}
            color={'blue'}
          />
          <Text style={styles.textContainer2}>30 min</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              backgroundColor: 'orange',
              borderRadius: 3,
              margin: 5,
              padding: 3,
            }}>
            <Text style={{color: 'white'}}>Take Away</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default baseView;

const styles = StyleSheet.create({
  MainContainer: {
    top: 170,
    position: 'absolute',
    padding: 15,
    height: Dimensions.get('screen').height / 4.5,
    width: Dimensions.get('screen').width - 0.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    elevation: 60,
  },
  textContainer1: {
    margin: 3,
  },
  textContainer2: {
    margin: 5,
  },
});
