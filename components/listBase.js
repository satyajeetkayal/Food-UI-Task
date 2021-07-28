import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import category from '../data/category.json';
import items from '../data/items.json';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ListData from './listView';

const listBase = () => {
  const [categories, setCategories] = useState(category);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [foods, setFoods] = useState(items);

  const onSelectCategory = category => {
    let itemsList = items.filter(a => a.categories.includes(category.id));
    setFoods(itemsList);
    setSelectedCategory(category);
  };

  const renderCategories = () => {
    const renderItem = ({item}) => {
      return (
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
              backgroundColor:
                selectedCategory?.id === item.id ? 'white' : 'orange',
            }}
            onPress={() => onSelectCategory(item)}>
            <Text
              style={{
                margin: 10,
                fontSize: 17,
                color: selectedCategory?.id === item.id ? 'black' : 'white',
              }}>
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
          data={foods}
          scrollEnabled={true}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
        />
      </View>
    );
  };

  return (
    <>
      <View style={{top: 332}}>
        <View>{renderCategories()}</View>
        <View>{renderMainItems()}</View>
      </View>
    </>
  );
};

export default listBase;

const styles = StyleSheet.create({});
