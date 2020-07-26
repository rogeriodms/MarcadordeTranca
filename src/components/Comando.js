import React from 'react';
import{Button,View} from 'react-native';

export default props => (
    <View>
    <Button title='Calcular' onPress={props.acao}></Button>
    </View>
);