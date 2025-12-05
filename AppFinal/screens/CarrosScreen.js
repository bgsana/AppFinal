import { useEffect, useState } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import axios from 'axios'
import { ActivityIndicator, Card, Text } from 'react-native-paper'

export default function CarrosScreen() {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true)

  const API_URL = 'https://691bc2a03aaeed735c8e2d67.mockapi.io/produtos/api/v1/produto'

  useEffect(() => {
    axios.get(API_URL)
      .then(response => setProdutos(response.data))
      .catch(error => console.log('Erro ao buscar os produtos', error))
      .finally(() => setLoading(false))
  }, [])

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Cover 
        source={{ uri: item.imagem }} 
        style={styles.cover}
      />

      <Card.Title titleStyle={styles.nome}
        title={`${item.marca} ${item.modelo}`}
      />

      <Card.Content>
        <Text style={styles.ano}>Ano: {item.ano}</Text>
        <Text style={styles.cor}>Cor: {item.cor}</Text>
      </Card.Content>
    </Card>
  )

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={produtos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          contentContainerStyle={{
            paddingBottom: 16,
            alignItems: 'center'
          }}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#5c00d4ff'
  },

  card: {
    width: 280,
    margin: 8,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
  },

  cover: {
    height: 160,
  },

  nome: {
    fontWeight: 'bold',
    fontSize: 22,
  },

  ano: {
    marginTop: 4,
    fontSize: 15,
  },
  
  cor: {
    marginTop: 2,
    fontSize: 15,
  }
})