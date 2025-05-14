import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { launchCamera } from "react-native-image-picker";
import { useState } from "react";

export default function Camera() {

    const [photo, setPhoto] = useState(null);

    const openCamera = async () => {
        const result = await launchCamera({ mediaType: 'photo', saveToPhotos: true, includeBase64: true });

        if (!result.didCancel && result.assets && result.assets.length > 0) {
            setPhoto(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Camera Screen</Text>

            <TouchableOpacity style={styles.button} onPress={openCamera}>
                <Text style={styles.buttonText}>Open Camera</Text>
            </TouchableOpacity>

            {photo ? (
                <Image
                    source={{ uri: photo }}
                    style={styles.image}
                />
            ) : <Text>No Select Image</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ebedef',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#333'
    },
    button: {
        backgroundColor: '#f09a10',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    image: {
        width: 300,
        height: 400,
        borderRadius: 10,
        resizeMode: 'cover',
    }
});
