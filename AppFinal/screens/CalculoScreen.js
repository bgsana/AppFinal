import {Text, TextInput, View, Button, StyleSheet} from 'react-native';
import {useState} from 'react'

const CalculoScreen = () => {
  const [valor, setValor] = useState ('')
  const [porcentagem, setPorcentagem] = useState ('')
  const [resultado, setResultado] = useState ('')

  const desconto = () => {
    setResultado(Number(valor) - ((Number(valor) * (Number(porcentagem) / 100) )))
  }

  return (
    <View style = {styles.container}>
    
      <Text style = {styles.title}> Cálculo de Desconto</Text>

      <Text>Digite o preço original: </Text>
      <TextInput placeholder = '' value = {valor} onChangeText = {setValor} style = {styles.input}></TextInput>

      <Text>Digite a porcentagem de desconto: </Text>
      <TextInput placeholder = '' value = {porcentagem} onChangeText = {setPorcentagem} style = {styles.input}></TextInput>

    <View style = {styles.botoes}>
      <Button title = 'Calcule o desconto' color ='#089fb4' onPress = {()=> desconto()}/>
      <Text style = {styles.resultado}>Valor com desconto: {valor}</Text>
    </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#089fb4',
  },
  
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 8,
    height: 40,
  },


  resultado: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  botoes: {
    gap: 8,
    color: '#30784d'
  }
});

export default CalculoScreen