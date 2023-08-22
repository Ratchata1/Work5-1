import react from 'react'
import {View, Text, StyleSheet, Alert, Button, TextInput, Image} from 'react-native'

export default function Bmi(){
    
    let [inputNum1, setInputNum1] = react.useState(0)
    let [inputNum2, setInputNum2] = react.useState(0)
    let [result,setResult] = react.useState(0)
    let [result2,setResult2] = react.useState(0)
    let [image,setImage] = react.useState(require('./bmi.jpg'))
    const onPressButton1 = () => {
        let a=parseInt(inputNum1)
        let b=parseInt(inputNum2)
        let c=b/100
        let d=c*c
        let f=a/d
        let image=''
        if (f>=30){ 
            msg = 'อ้วนระดับ2'
            imageName=require('./high.jpg')
        } else if (f>=25){ 
            msg = 'อ้วนระดับ1'
            imageName=require('./medium-high.jpg')
        } else if (f>=23){
            msg = 'น้ำหนักเกิน'
            imageName=require('./medium.jpg')
        } else if (f>=18.5){
            msg = 'ปกติสมส่วน'
            imageName=require('./medium-low.jpg')
        } 
         else{ 
            msg = 'ต่ำกว่าเกณฑ์'
            imageName=require('./low.jpg')
        } 
        setResult(f)
        setResult2(msg)
        setImage(imageName)
    }
return(
    <View style={styles.container}>
        <View>
            <Text>คำนวณค่าดัชนีมวลกาย</Text>
        </View>
        <View style={styles.item}>
            <Text>น้ำหนัก</Text>
        <TextInput style={styles.TextInput} defaultValue={inputNum1} 
        onChange={event => setInputNum1(event.nativeEvent.text)}
        keyboardType='number-pad'
        /> 
        </View>
        <View style={styles.item}>
            <Text>ส่วนสูง</Text>
        <TextInput style={styles.TextInput} defaultValue={inputNum2} 
        onChange={event => setInputNum2(event.nativeEvent.text)}
        keyboardType='number-pad'
        /> 
        </View>

        <View>
            <Text>ค่าดัชนีมวลกาย :{result}</Text>
            <Text>อยู่ในเกณฑ์ :{result2}</Text>
        </View>
        
        <View style={styles.item}>
        <Button title="คำนวณ" color="violet" onPress={ onPressButton1 } />
        <Image source={image} style={styles.img} resizeMode='cover' />
        </View>
    </View>
)
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        marginTop:50,
        alignItems:'center'
    },
    item:{
        marginBottom:15,
    },
    TextInput:{
        height: 32,
        width:300,
        borderWidth: 1,
        borderColor: 'blue',
        color: 'green',
        backgroundColor: 'white',
        marginTop:5,
        paddingTop:3,
        paddingBottom:3,
        
    },
    img:{
            width: 250,
            height: 550,
            borderWidth: 1,
            marginBottom: 5
        }
})