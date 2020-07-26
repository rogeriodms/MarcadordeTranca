import React from 'react';
import {View,StyleSheet,TextInput} from 'react-native';


const Resultado = props=>(
<View style={styles.Numeros}>
    <TextInput style={styles.visor}  placeholder='Resultado...' editable={false} value={props.resultado1} />
    <TextInput style={styles.visor}  placeholder='Resultado...' editable={false} value={props.resultado2}/>
</View>

);
const styles = StyleSheet.create({
Numeros:{
    flexDirection: 'row',
    justifyContent:'space-between',
    margin:30,
},
visor:{
    height: 50,
    fontSize: 20
}


});
export {Resultado};