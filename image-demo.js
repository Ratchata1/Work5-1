import React from "react";
import {View, StyleSheet, Image} from 'react-native'

export default function ImageDemo(){
    const imgSrc = require('./pic1.jpeg')
    return(
        <view style={Styles.container}>
            <Image source={imgSrc('./pic1.jpeg')} style={Styles.img}/>
            <Image source={require('./assets/pic2.jpeg')} style={Styles.img}/>
            <Image source={require('./assets/image/pic3.jpeg')} style={Styles.img}/>
            <Image source={require({uri:'https://i.ytimg.com/vi/xiW4pVKtvJU/maxresdefault.jpg'})} style={Styles.img}/>
        </view>
    )
    }
    const Styles = StyleSheet.create({
        container:{
                flex: 1,
                flexDirection:'colum',
                marginTop:50,
                alignItems:'center'
                //container:{ แสดงแนวนอน
                //flex: 1,
                //flexDirection:'row'
                //flexWrap:'wrap',
                //justifyContent:'space-evenly',
                //marginTop: 50    
                
        },
        img:{
            width: 200,
            height: 150,
            borderWidth: 1,
            borderColor: 'red',
            marginBottom: 5
        }        
    )