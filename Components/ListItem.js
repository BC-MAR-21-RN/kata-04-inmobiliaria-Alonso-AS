import React, {useState} from 'react';
import 'react-native-gesture-handler';
import Icon from 'react-native-ionicons';
import {Image} from 'react-native-elements';
import {Text, View, StyleSheet} from 'react-native';
import PropertiesAvailable from '../data/PropertiesAvailable.json';

const ListItemView = ({item}) => {
  const [stateLike, setLike] = useState(item.favorite);
  const statusChange = () => {
    PropertiesAvailable.map(recipe => {
      if (recipe.id === item.id) {
        recipe.favorite = !stateLike;
        setLike(recipe.favorite);
      }
    });
  };
  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: item.imageURL}} style={styles.Image}>
          <Icon name="star" size={24} color="yellow" style={styles.down} />
          <Text style={styles.downText}>{item.reviwe}</Text>
        </Image>
      </View>
      <View style={styles.containIcons}>
        <Text style={styles.listText}>{item.name}</Text>
        <View style={styles.row}>
          <Icon name="pin" size={21} color="green" />
          <Text style={styles.TxtAd}>{' ' + item.address + '   '}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="bed" size={24} color="firebrick" style={styles.Icon} />
          <Text>{' ' + item.people + '   '}</Text>
          <Icon name="water" size={24} color="dodgerblue" style={styles.Icon} />
          <Text>{' ' + item.toilets + '   '}</Text>
          <Icon name="crop" size={24} color="black" style={styles.Icon} />
          <Text>{' ' + item.area}</Text>
        </View>
        <View>
          <Text>{item.rental + '   '}</Text>
          <Icon
            name="heart"
            size={30}
            onPress={statusChange}
            style={stateLike ? styles.like : styles.notLike}
            solid
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: 'lightslategrey',
    borderRadius: 16,
    flex: 1,
  },
  containIcons: {
    flexDirection: 'column',
    paddingVertical: 15,
    paddingLeft: 15,
    flex: 1,
    justifyContent: 'space-between',
  },
  Image: {
    width: 115,
    height: 125,
    borderRadius: 8,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listText: {
    fontSize: 15,
    marginTop: -18,
  },
  TxtAd: {
    fontSize: 9,
  },
  row: {
    flexDirection: 'row',
  },
  down: {
    marginTop: 90,
  },
  downText: {
    marginTop: 90,
    fontSize: 12,
    color: 'white',
  },
  like: {
    marginLeft: 'auto',
    paddingRight: 25,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'crimson',
  },
  notLike: {
    marginLeft: 'auto',
    paddingRight: 25,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
});
export default ListItemView;
