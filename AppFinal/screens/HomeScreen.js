import { View, Text, StyleSheet, Button } from 'react-native'


export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Tela Inicial</Text>
            <View style={styles.botao}>
                <Button title='Ir para Cálculo de Desconto' onPress={() => navigation.navigate('Calculo')}/>
                <Button title='Ir exibição de Carros' onPress={() => navigation.navigate('Carros')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    botao: {
        width: '60%',
        marginTop: 20
    }
})