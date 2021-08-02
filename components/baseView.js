import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

const baseView = () => {
  return (
    <>
      <View style={styles.MainContainer}>
        <View style={styles.container2}>
          <Text style={styles.textContainer3}>McDonald's</Text>
          <Icon name="bookmark" size={20} color={'orange'} />
        </View>
        <View style={styles.textField}>
          <Text style={styles.textContainer1}>$$</Text>
          <Text style={styles.textContainer1}>•</Text>
          <Text style={styles.textContainer1}>American Food</Text>
          <Text style={styles.textContainer1}>•</Text>
          <Text style={styles.textContainer1}>Burger</Text>
        </View>
        <View style={styles.textField}>
          <Text style={styles.textContainer2}>⭐ 4.9</Text>
          <Text style={styles.textContainer2}>200+</Text>
          <Text style={styles.textContainer2}>Ratings</Text>
        </View>
        <View style={styles.textField}>
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
          <TouchableOpacity activeOpacity={0.5} style={styles.mode}>
            <Text style={styles.textColor}>Take Away</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default baseView;

const styles = StyleSheet.create({
  MainContainer: {
    top: hp('20%'),
    padding: 20,
    height: ((Dimensions.get('window').height / 4.3) * 2) / 2,
    width: wp('100%'),
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
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer3: {
    fontSize: hp('4%'),
    fontWeight: 'bold',
  },
  textField: {
    flexDirection: 'row',
  },
  mode: {
    backgroundColor: 'orange',
    borderRadius: 3,
    margin: 5,
    padding: 3,
  },
  textColor: {
    color: 'white',
  },
});
