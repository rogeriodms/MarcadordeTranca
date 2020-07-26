import React,{Component} from 'react';
import{ View, TextInput, StyleSheet, Text, Picker} from 'react-native';

export default class Operacao extends Component{
    render(){
        return(
            <Picker style={styles.Operacao} selectedValue={this.props.operacao} onValueChange={op=>{this.props.atualizaOperacao(op);}}>
                <Picker.Item label='3000' value='3000' ></Picker.Item>
                <Picker.Item label='5000' value='5000'></Picker.Item>
            </Picker>
        );
    }
}

const styles = StyleSheet.create({
    Operacao:{ 
        marginTop: 15,
        marginBottom: 15
    }
  
  });