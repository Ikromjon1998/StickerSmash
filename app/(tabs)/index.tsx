import { View, StyleSheet } from 'react-native';
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from 'expo-image-picker';
import {useState} from "react";

const PlaceholderImage = require('@/assets/images/background-image.png')

export default function Index() {
    const [selectedImage, setSelectedImage] = useState<string | undefined>(null)

    const pcikImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        })

        if (!result.canceled) {
            console.log(result.assets[0].uri)
            setSelectedImage(result.assets[0].uri)
        } else {
            alert('You cancelled the image picker.')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
            </View>
            <View style={styles.footerContainer}>
                <Button theme="primary" label={'Choose a photo'} onPress={pcikImageAsync} />
                <Button label={'Use this Photo'} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        paddingTop: 28,
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
    }
});
