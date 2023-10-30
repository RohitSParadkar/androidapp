import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GridView = () => {
    const [items, setItems] = React.useState([
        { name: 'Smart light', code: '7', url: require('../assets/boy.png') },
        { name: 'Smart AC', code: '5', url: require('../assets/boy.png') },
        { name: 'Smart TV', code: '10', url: require('../assets/boy.png') },
        { name: 'Smart TV', code: '11', url: require('../assets/boy.png') },
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
                <TouchableOpacity
                    onMouseEnter={() => handleItemHover(item)} // Handle hover in
                    onMouseLeave={() => handleItemHover(null)} // Handle hover out
                >

                    <View style={[
                        styles.itemContainer,
                        styles.IconCard,

                    ]}>
                        <Image
                            style={styles.img}
                            source={item.url}
                        />
                        <Text style={styles.itemName}>{item.name} </Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default GridView

const styles = StyleSheet.create({
    gridView: {
        flex: 1,
        margin:30
    },
    itemContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        width: 160,
        height:135
    },
    itemName: {
        fontSize: 16,
        color: '#464646',
        fontWeight: '600',
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
    }
})