import React from 'react';
import{ View, Text, StyleSheet } from 'react-native';
import Numero from './Numero';

export default props => (

    <View style={styles.Numeros}>
        <Text style={styles.Text}>Nós</Text>
        <Numero num={props.num1} atualizaValor={props.atualizaValor} nome='num1'></Numero>
        <Text style={styles.Text}>Eles</Text>
        <Numero num={props.num2} atualizaValor={props.atualizaValor} nome='num2'></Numero>
    </View>
);

const styles = StyleSheet.create({
  Numeros:{
      flexDirection: 'row',
      justifyContent:'space-between',
      margin:30,
  },
  Text:{
      fontSize: 16,
  }


});