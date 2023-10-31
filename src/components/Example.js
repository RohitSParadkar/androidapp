import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const LivingRoom = () => {
    return (
        <View style={styles.outerContiner}>
            <View style={styles.topContiner}>
                <View>
                <Text style={styles.blurText}>LivingRoom</Text>
                </View>
                
                <View>
                <Image
                style={styles.img}
                source={require('../../assets/lamp.png')}
              />
                </View>
            </View>
            <View style={styles.middleContiner}>
                <Text>LivingRoom</Text>
            </View>
            <View style={styles.bottomContiner}>
                <Text>LivingRoom</Text>
            </View>
        </View>
    )
}

export default LivingRoom

const styles = StyleSheet.create({
    outerContiner:{
        flex:1
    },
    //-------------Top continer--------------------
    topContiner:{
       flex:1
    },
    lampImage:{
      width:183,
      height:304
    },
    blurText:{
      color:'#BDBDBD',
      fontFamily:'Noto Sans',
      fontSize:56,
      fontStyle:'normal',
      fontWeight:'700',
      opacity:0.2
    },
    //-----------------------middle continer
    middleContiner:{
        flex:0.40
    },
    bottomContiner:{
        flex:0.40
    }
})