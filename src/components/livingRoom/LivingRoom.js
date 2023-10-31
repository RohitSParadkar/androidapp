import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ToggleButton } from '../Buttons'
import SVGComponent from '../../assets/svg/SVGComponent'


const LivingRoom = () => {
    return (
        <View style={styles.outerContiner}>
            {/* ----------------------------------------------------------- */}
            <View style={styles.topContiner}>
                <View style={[styles.sidecontiner]}>
                    <View>
                        <Text style={styles.blurText}>Living Room</Text>
                    </View>
                    <View style={[{ flex: 0.5, marginTop: 10 }]}>
                        <View >
                            <Text style={styles.itemName}>Power</Text>
                        </View>
                        <ToggleButton />
                    </View>
                    <View style={{ flex: 0.5 }}>
                        <Text style={styles.itemName}>Color</Text>
                        <Image
                            style={styles.colorWheelImg}
                            source={require('../../assets/colorWheel.png')}
                        />
                    </View>
                </View>
                <View style={[styles.sidecontiner, { alignItems: 'center' }]}>
                    <Image
                        source={require('../../assets/lamp.png')}
                    />
                    <SVGComponent />
                </View>
            </View>

            {/* -------------------------------------------- ------------------------------*/}
            <View style={styles.middleContiner}>
                <Text style={styles.itemName}>Tone Glow</Text>
                <View style={styles.toneContiner}>
                    <TouchableOpacity>
                    <View style={styles.warmBox}><Text style={styles.lightText}>Warm</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.coldBox}><Text>Cold</Text></View>
                    </TouchableOpacity>
                </View>
            </View>

            {/* ----------------------------------------------------------------------------------- */}
            <View style={styles.bottomContiner}>
                <Text style={styles.itemName}>Intensity</Text>
                
                
            </View>
        </View>
    )
}

export default LivingRoom

const styles = StyleSheet.create({
    outerContiner: {
        flex: 1,
        padding: 15,
        backgroundColor:'#F2F2F2'
    },
    //-----------------------middle continer
    middleContiner: {
        flex: 0.3
    },
    lightText:{
       color:'#fff'
    },
    toneContiner: {
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    warmBox: {
        width: 168,
        height: 32,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#464646',
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10
    },
    coldBox:{
        width: 168,
        height: 32,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#FFF',
        borderTopRightRadius:10,
        borderBottomRightRadius:10

    },
    //-------------Top continer--------------------
    centerItem: {
        justifyContent: 'flex-start'
    },
    topContiner: {
        flex: 1,
        marginTop: 20,
        flexDirection: 'row'
    },
    sidecontiner: {
        flex: 0.5,
    },
    lampImage: {
        width: 150,
        height: 304,
        padding: 10
    },
    blurText: {
        color: '#BDBDBD',
        fontFamily: 'Noto Sans',
        fontSize: 56,
        fontStyle: 'normal',
        fontWeight: '700',
        opacity: 0.2
    },
    itemName: {
        fontSize: 18,
        fontFamily: 'Noto Sans',
        color: '#464646',
        fontWeight: '700',
        fontStyle:'normal'
    },
    colorWheelImg: {
        width: 40,
        height: 40,
        marginTop: 10,
    },

    //---------------------------------------------bottom container
    bottomContiner: {
        flex: 0.40
    }
})