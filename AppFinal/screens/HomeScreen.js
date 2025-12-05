import { View, Text, StyleSheet, Button } from 'react-native'

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Home do App Final</Text>

            <View style={styles.botao}>
                <Button 
                    title='Calcular Desconto'
                    color="#5C00D4"
                    onPress={() => navigation.navigate('Calculo')}
                />

                <View style={{ height: 12 }} />

                <Button 
                    title='Exibição de Carros'
                    color="#5C00D4"
                    onPress={() => navigation.navigate('Carros')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffffff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#5C00D4',
        marginBottom: 30
    },
    botao: {
        width: '30%',
    }
})