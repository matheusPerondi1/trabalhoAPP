import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View, Text, ScrollView, FlatList, Alert } from "react-native";
import { Image } from "react-native";
export function Home(){
    const [products, setProducts] = useState<string[]>([])
    const [productName, setProductName] = useState('')

    function handleProductAdd(){
        if (products.includes(productName)){
            return Alert.alert('Produto ja cadastrado!', 'Já existe um produto com esse nome.')
        }
        setProducts((prevState) => [...prevState, productName])
        setProductName('');
    }

    function handleProductRemove(name: string){
        console.log(`Produto Removido! ${name}`);

        Alert.alert(`Remover`, `Deseja remover o produto ${name}?`,[
            {
                text: 'Sim',
                onPress: () => setProducts(prevState => prevState.filter(product => product != name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
            
    }

    return(
        <View style = {styles.container}>
           
            <Text style = {styles.title}>Lista de Compras</Text>

            <View style = {styles.form}>
                <TextInput 
                    style = {styles.input}
                    placeholder="Adicione um novo produto"
                    placeholderTextColor= '#808080'
                    keyboardType="default"
                />

                <TouchableOpacity style = {styles.button} 
                    
                >
                    <Image
                        source={require('../../assets/Images/plus.png')}
                        style={styles.icon}
                    />
                    <Text style = {styles.textbuttom}></Text>

                </TouchableOpacity>
            </View>

            <View style = {styles.produtoscon}>
                <Text>Produtos</Text>
                <Text style = {styles.counter}>{products.length}</Text>
            </View>
    
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#7A4A9E",
        width: '100%',
        height: 173,
        flexShrink: 0,
        
    },
    title: {
    color: "#F2F2F2",
    textAlign: "center",
    marginTop: 4,
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 140,
    },
    form: {
        width: '100%',
        flexDirection: "row",
        alignContent: 'center',
    },
    input: {
        flex: 1,
        padding: 16,
        flexGrow: 1,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#7A4A9E',
        backgroundColor: '#F2F2F2',   
        marginLeft: 24,
        marginRight: 5,
        marginBottom: 10,
        width: '100%',
        height: 54,
    },
    button: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: '#31C667',
        padding: 18,
        marginRight: 24,
        width: 52,
        height: 52,
        flexDirection: 'row'
        
    },
    textbuttom: {

    },
    icon: {
        justifyContent: 'center',
        alignContent: 'center'
    },
    produtoscon: {
        marginLeft: 24,
        marginTop: 20,
        color: '#31C667',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 'bold',
    }
})