import React from 'react';
import{ View, Text , StyleSheet } from 'react-native';

export default props => (

    <View style={styles.topo}>
        <Text style={styles.Text}>Calculadora de Tranca</Text>
    </View>
);

const styles = StyleSheet.create({
  topo: {
      backgroundColor: '#2196f3',
      padding: 10,
      alignItems: 'center',
  },
  Text:{
      fontSize: 25,
      color: '#FFF'
  }

})