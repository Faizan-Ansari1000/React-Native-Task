import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function ProductDetails() {
    const route = useRoute();
    const { product } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Text style={styles.category}>Category: {product.category}</Text>
            <Text style={styles.description}>{product.description}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#ebedef',
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',
        marginBottom: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    price: {
        fontSize: 18,
        color: '#f09a10',
        marginBottom: 10,
    },
    category: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        color: '#444',
        lineHeight: 20,
    },
});
