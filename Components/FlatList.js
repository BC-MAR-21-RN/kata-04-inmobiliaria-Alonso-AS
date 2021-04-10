import React from 'react';
import {FlatList, View, Text} from 'react-native';
import PropertiesAvailable from '../data/PropertiesAvailable.json';
import ListItemView from './ListItem';

const FlatListView = ({}) => {
  return (
    <View>
      <FlatList
        data={PropertiesAvailable}
        renderItem={({item}) => <ListItemView item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default FlatListView;