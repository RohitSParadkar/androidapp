import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ToggleButton } from './Buttons';

const GridView = () => {
    const [items, setItems] = React.useState([
        { name: 'Smart light', code: '7', url: require('../assets/light.png') },
        { name: 'Smart AC', code: '5', url: require('../assets/air-conditioner.png') },
        { name: 'Smart TV', code: '10', url: require('../assets/tv.png') },
        { name: 'Smart Fan', code: '11', url: require('../assets/fan.png') },
        { name: 'Smart Fan', code: '11', url: require('../assets/fan.png') },
        { name: 'Smart Fan', code: '11', url: require('../assets/fan.png') },
        
    ]);
    const [hoveredItem, setHoveredItem] = useState(null);
    const handleItemHover = (item) => {
        setHoveredItem(item);
    };
    console.log(hoveredItem)
    return (
        <FlatGrid
            itemDimension={130}
            data={items}
            style={styles.gridView}
            // staticDimension={300}
            // fixed
            spacing={10}
            renderItem={({ item }) => (

                <View style={[
                    styles.itemContainer,
                    styles.IconCard,

                ]}>
                    <View style={[styles.toggleAndLight]}>
                        <View style={{flex:1}}>
                            <Image
                                style={styles.img}
                                source={item.url}
                            />
                       </View>
                        <View style={{flex:1}}><ToggleButton /></View>

                    </View>

                    <View style={styles.rowAlignment}>
                        <Text style={styles.itemName}>{item.name} </Text>
                    </View>
                </View>
            )}
        />
    )
}

export default GridView

const styles = StyleSheet.create({
    gridView: {
        flex: 1,
        margin: 30,
        height:300
    },
    itemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        width: 160,
        height: 135
    },
    itemName: {
        fontSize: 16,
        fontFamily:'Noto Sans',
        color: '#464646',
        fontSize:18,
        fontWeight: '700',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#464646',
    },
    IconCard: {
        backgroundColor: '#FFF'
    },
    img: {
        width: 40,
        height: 40,
    },
    toggleAndLight: {
        flex: 1,
        padding:7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

    },


})