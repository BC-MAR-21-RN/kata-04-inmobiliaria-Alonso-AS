import React from 'react';
import 'react-native-gesture-handler';
import FlatListView from "../Components/FlatList"
import {Text, StyleSheet, View} from 'react-native'


export default function Home(navigation) {
    return(
        <View>
            <View>
                <FlatListView />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

});