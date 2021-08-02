import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count <= 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={handleIncrement}>
        <Icon name="add-circle" size={25} color={'orange'} />
      </TouchableOpacity>
      <Text>{count}</Text>
      <TouchableOpacity onPress={handleDecrement}>
        <Icon name="remove-circle-outline" size={25} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

export default counter;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row-reverse',
    bottom: 10,
    right: 20,
  },
});
