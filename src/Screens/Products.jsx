import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, ToastAndroid, TouchableOpacity, View, StyleSheet, Image, TextInput } from "react-native";
import ApiInstance from "../config/APIs/ApiInstance";

export default function Products() {

    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTitle, setSearchTitle] = useState('');
    const navigation = useNavigation();

    const getData = useCallback(async () => {
        try {
            setLoading(true)
            const res = await ApiInstance.get('/products');
            console.log(res.data);
            setPostData([...res.data])
            setLoading(false)
        } catch (error) {
            console.log(error);
            ToastAndroid.show(`${error.message}`, ToastAndroid.LONG);
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        getData();
    }, [])

    const filteredData = searchTitle
        ? postData.filter((item) => item.title.toLowerCase().includes(searchTitle.toLocaleLowerCase()))
        : postData

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.header}>All Products</Text>
                <View style={styles.searchWrapper}>
                    <TextInput
                        placeholder="Search by Title"
                        placeholderTextColor="#999"
                        style={styles.searchInput}
                        onChangeText={(e) => setSearchTitle(e)}
                    />
                </View>
                {loading ? <ActivityIndicator size={30} color="#f09a10" /> : (
                    <FlatList
                        data={filteredData}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => {
                            const isHighlighted = item.title.toLowerCase() === searchTitle.toLocaleLowerCase();
                            return (
                                <View style={styles.card}>
                                    <TouchableOpacity
                                        style={styles.card}
                                        onPress={() => navigation.navigate('ProductDetails', { product: item })}
                                    >
                                        <Image source={{ uri: item.image }} style={styles.image} />
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Text style={styles.price}>${item.price}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                    />
                )}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebedef',
        padding: 16,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 14,
        textAlign: 'center',
    },
    searchWrapper: {
        marginBottom: 16,
    },
    searchInput: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        fontSize: 15,
        color: '#333',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: '#444',
        marginBottom: 4,
    },
    price: {
        fontSize: 14,
        color: '#f09a10',
        fontWeight: 'bold',
    },
});
