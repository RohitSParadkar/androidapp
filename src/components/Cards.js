import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { BackdropFilter } from "@shopify/react-native-skia";

const Cards = () => {
    return (
        <View style={styles.continer}>
            <View style={styles.staticCard}>
                <Text style={styles.lightText}>Cards</Text>
            </View>
        </View>
    )
}

export const IconCard = () => {
    return (
        <View style={styles.IconCard}>
            <Text style={styles.lightText}>Cards</Text>
            <Image
                style={styles.img}
                source={require('../assets/Frame.png')}
            />
        </View>
    )
}

export const GreenCard = () => {
    return (
        <View style={styles.continer}>
            <View style={styles.greenCard}>
                <Text style={styles.lightText}>Cards</Text>
            </View>
        </View>
    )
}
export const Weathercard = () => {
    return (
        <View style={styles.continer}>
            <View style={styles.weatherCard}>
                <View >
                    <View style={styles.weatherUpper}>
                        <Image
                            style={styles.img}
                            source={require('../assets/suncloud.png')}
                        />
                        <View>
                            <View style={styles.itemCenter}>
                                <Text style={{ color: 'white', fontSize: 24 }}>Mostly Clody </Text>
                                <Text style={[styles.subtitle]}>Mumbai India</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{color:'white',fontSize:20}}>27<span>&#8451;</span></Text>
                        </View>
                    </View>
                    <View style={styles.weatherInfo}>
                        <View >
                            <View style={styles.itemCenter}>
                                <Text style={styles.lightText}>27<span>&#8451;</span></Text>
                                <Text style={styles.subtitle}>Sensible</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.itemCenter}>
                                <Text style={styles.lightText}>4%</Text>
                                <Text style={styles.subtitle}>Precipitaion</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.itemCenter}>
                                <Text style={styles.lightText}>66%<span>&#8451;</span></Text>
                                <Text style={styles.subtitle}>Humidity</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.itemCenter}>
                                <Text style={styles.lightText}>16 km/h</Text>
                                <Text style={styles.subtitle}>Wind</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View>

                </View>
            </View>
        </View>
    )
}

export const BlueCard = () => {
    return (
        <View style={styles.continer}>
            <View style={styles.blueCard}>
                <Text style={styles.lightText}>Cards</Text>
                <Image
                    style={styles.img}
                    source={require('../assets/Frame.png')}
                />
            </View>
        </View>
    )
}

export default Cards

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    h2Text: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 35
    },
    staticCard: {
        backgroundImage: 'linear-gradient(308deg, #363E51 0%, #4C5770 97.32%)',
        width: 350,
        height: 224,
        borderRadius: 20,
        border: '1 solid #FFF',
        blurRadius:1
    },
    img: {
        width: 80,
        height: 80
    },
    weatherUpper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,

    },
    greenCard: {
        backgroundImage: 'linear-gradient(122deg, #61DE70 -22.05%, #0DA6C2 77.18%)',
        // 'linear-gradient(310deg, #320DAF -34.39%, #9327F0 81.12%)'
        width: 350,
        height: 224,
        borderRadius: 20,
        border: '1 solid #FFF'
    },
    blueCard: {
        backgroundImage: 'linear-gradient(104deg, #0DA6C2 9.19%, #0E39C6 112.14%)',
        width: 350,
        height: 224,
        borderRadius: 20,
        border: '1 solid #FFF'
    },
    lightText: {
        color: 'white'
    },
    IconCard: {
        backgroundImage: 'linear-gradient(308deg, #363E51 0%, #4C5770 97.32%)',
        width: 150,
        height: 150,
        borderRadius: 20,
        border: '1 solid #FFF'
    },
    weatherCard: {
        width: 350,
        height: 200,
        borderRadius: 20,
        justifyContent:'center',
        alignItems:'center',
        border: '1 solid #FFF',
        backgroundImage: 'linear-gradient(308deg, #363E51 0%, #4C5770 97.32%)',
        blurRadius:1
    },
    itemCenter: {
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    weatherInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    subtitle: {
        color: 'grey'
    }
})