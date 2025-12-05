import { Text, TextInput, View, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

const CalculoScreen = () => {
  const [valor, setValor] = useState('');
  const [porcentagem, setPorcentagem] = useState('');
  const [resultado, setResultado] = useState('');

  const desconto = () => {
    const preco = Number(valor);
    const porc = Number(porcentagem);

    if (isNaN(preco) || isNaN(porc)) {
      setResultado('Valores inválidos');
      return;
    }

    const calculo = preco - (preco * (porc / 100));
    setResultado(calculo.toFixed(2));
  };

  return (
    <View style={styles.container}>


      <View style={styles.card}>
      <Text style={styles.title}>Cálculo de Desconto</Text>

      <Text>Digite o preço original:</Text>
      <TextInput
        placeholder="Ex: 100"
        value={valor}
        onChangeText={setValor}
        style={styles.input}
        keyboardType="numeric"
      />

      <Text>Digite a porcentagem de desconto:</Text>
      <TextInput
        placeholder="Ex: 10"
        value={porcentagem}
        onChangeText={setPorcentagem}
        style={styles.input}
        keyboardType="numeric"
      />

      <View style={styles.botoes}>
        <Button
          title="Calcular desconto"
          color="#5C00D4"
          onPress={desconto}
        />
        <Text style={styles.resultado}>Valor com desconto: {resultado}</Text>
      </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',      
    padding: 20,
    backgroundColor: '#5C00D4',
  },

  card: {
    width: 400,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#5C00D4',
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
    gap: 12,
  },
});

export default CalculoScreen;