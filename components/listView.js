import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Counter from './counter';

const listData = ({item}) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          elevation: 20,
          margin: 5,
          borderRadius: 10,
          paddingTop: 8,
          paddingLeft: 8,
          paddingBottom: 8,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri: item.imageUrl}}
            style={{
              width: 80,
              height: 80,
              borderRadius: 10,
              aspectRatio: 1,
              resizeMode: 'cover',
            }}
          />
          <View style={{flexDirection: 'column', margin: 20}}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>{item.name}</Text>
            <Text
              numberOfLines={5}
              style={{fontSize: 12, color: 'gray', width: 135}}>
              {item.description}
            </Text>
            <Text
              style={{fontSize: 20, color: 'orange'}}>{`$${item.Price}`}</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <Counter />
          </View>
        </View>
      </View>
    </>
  );
};

export default listData;

const styles = StyleSheet.create({});
