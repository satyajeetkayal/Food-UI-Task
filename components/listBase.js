import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  Animated,
} from 'react-native';
import category from '../data/category.json';
import items from '../data/items.json';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ListData from './listView';
import Header from './header';
import BaseView from './baseView';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const listBase = () => {
  const [categories, setCategories] = useState(category);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [foods, setFoods] = useState(items);

  const onSelectCategory = category => {
    let itemsList = items.filter(a => a.categories.includes(category.id));
    setFoods(itemsList);
    setSelectedCategory(category);
  };

  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 300);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 300],
    outputRange: [0, -130],
    extrapolate: 'clamp',
  });

  const renderCategories = () => {
    const renderItem = ({item}) => {
      return (
        <View>
          <TouchableOpacity
            style={{
              backgroundColor:
                selectedCategory?.id === item.id ? 'white' : 'orange',
            }}
            onPress={() => onSelectCategory(item)}>
            <Text
              style={[
                styles.categoryText,
                {color: selectedCategory?.id === item.id ? 'black' : 'white'},
              ]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <View>
        <FlatList
          data={categories}
          scrollEnabled={true}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
        />
      </View>
    );
  };

  const renderMainItems = () => {
    const renderItem = ({item}) => {
      return <ListData item={item} />;
    };
    return (
      <View>
        <FlatList
          contentContainerStyle={styles.containerStyle}
          style={styles.itemsContainer}
          data={foods}
          bounces={false}
          scrollEnabled={true}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          scrollEventThrottle={1}
          onScroll={e => {
            scrollY.setValue(e.nativeEvent.contentOffset.y);
          }}
        />
      </View>
    );
  };

  return (
    <>
      <Animated.View
        style={[styles.viewAnimated, {transform: [{translateY: translateY}]}]}>
        <Header />
        <BaseView />
        <View style={styles.categoryContainer}>{renderCategories()}</View>
        <View>{renderMainItems()}</View>
      </Animated.View>
    </>
  );
};

export default listBase;

const styles = StyleSheet.create({
  textContainer1: {
    margin: 3,
  },
  textContainer2: {
    margin: 5,
  },
  categoryText: {
    margin: 10,
    fontSize: 17,
  },
  itemsContainer: {
    top: (Dimensions.get('screen').height / 3) * 0.6 - 0.1,
    width: Dimensions.get('screen').width,
  },
  containerStyle: {paddingBottom: '150%'},
  viewAnimated: {
    elevation: 4,
    zIndex: 1,
    backgroundColor: 'transparent',
  },
  categoryContainer: {top: hp('20%')},
});
