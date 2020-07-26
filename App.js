/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Topo,Painel,Resultado} from './src/components';
import {View, Alert} from 'react-native';


export default class App extends Component{
  constructor(props){
          super(props);
          this.state={num1:'0', num2:'0', operacao:'3000',resultado1:'0',resultado2:'0' };
          this.calcular=this.calcular.bind(this);
          this.atualizaValor=this.atualizaValor.bind(this);
          this.atualizaOperacao=this.atualizaOperacao.bind(this);
    
     }
calcular(){

  let resultado1 = 0;
  let resultado2 = 0;
  switch (this.state.operacao){
  case '3000':
    resultado1 = parseFloat(this.state.num1) + parseFloat(this.state.resultado1);
    resultado2 = parseFloat(this.state.num2) + parseFloat(this.state.resultado2);
    break;

  case '5000':
     resultado1 = parseFloat(this.state.num1) + parseFloat(this.state.resultado1);
     resultado2 = parseFloat(this.state.num2) + parseFloat(this.state.resultado2);
     break;
 };
 if (resultado1 >= this.state.operacao){
  return(Alert.alert("Acabou!!!! o vencedor é a equipe nós")
  );
  }
 else if (resultado2 >= this.state.operacao){
  Alert.alert("Acabou!!!! o vencedor é a equipe eles ");
   };

 this.setState({resultado1: resultado1.toString() })
 this.setState({resultado2: resultado2.toString() })

 this.setState({num1 : '0' })
 this.setState({num2 : '0' })
}
atualizaValor(nomeCampo, numero){
  const obj = {};
  obj[nomeCampo]= numero;
  
  this.setState(obj);
}

atualizaOperacao(operacao){
  this.setState({operacao: operacao});        
}

render(){
  return(
    <View>
      <Topo/>
      <Painel 
      num1 ={this.state.num1}
      num2={this.state.num2}
      operacao={this.state.operacao}
      calcular={this.calcular}
      atualizaOperacao={this.atualizaOperacao}
      atualizaValor={this.atualizaValor}
      />
      <Resultado 
      resultado1= {this.state.resultado1}
      resultado2= {this.state.resultado2}/>
      
    </View>
   
  );
}
}

