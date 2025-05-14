import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to the Store</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Products')}
            >
                <Text style={styles.buttonText}>Browse Products</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebedef',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#f09a10',
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 30,
        elevation: 3,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
