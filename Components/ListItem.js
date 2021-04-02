import React from 'react';
import Icon from 'react-native-ionicons'
import {Image} from 'react-native-elements';
import CrossPlatformIcon from 'react-native-cross-platform-icons';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';

const ListItemView = ({item}) => {
  return (
    //<TouchableHighlight>
        <View style={styles.container}>
            <Image source={{uri: item.imageURL}} style={styles.Image}/>
            <Text style={styles.listText}>{item.name}</Text>
            <Icon name="heart-empty" size={30} color="black" style={styles.Icon} />
        </View>
    //</TouchableHighlight>
  );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingLeft: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',

        // height: 90,
        // width: 90,
        // borderRadius: 10,
    },
    Image: {
        width: 80,
        height: 80,
        
    },
    listText: {
        textAlign: 'center',
        fontSize: 14,
        marginTop: 5,
    },
    Icon: {
        marginLeft: 'auto',
        paddingRight: 15,
        marginTop: 50,

    }
   
  });

export default ListItemView;
