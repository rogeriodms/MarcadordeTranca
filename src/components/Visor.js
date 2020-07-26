import React from 'react';
import {View,StyleSheet} from 'react-native'


export default props =>(
    <View style={styles.Numeros}>
        <TextInput style={styles.visor}  placeholder='Resultado...' editable={false} />
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
