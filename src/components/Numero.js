import React from 'react';
import{TextInput, StyleSheet} from 'react-native';


export default props => (

    <TextInput style={styles.Numero} placeholder='digite o valor..' value={props.num} 
    onChangeText={valor=>props.atualizaValor(props.nome, valor)}></TextInput>
);

const styles = StyleSheet.create({
    Numero:{
        width: 140,
        height: 50,
        fontSize: 20,
        borderColor: '#000000',
        borderLeftWidth:2,

        
  
    }
  
  });