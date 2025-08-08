import { useFonts } from 'expo-font';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Importpage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  const [fontsLoaded] = useFonts({
    VeteranTypewriter: require('../assets/fonts/VeteranTypewriter.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const pickImage = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 1,
  });

  if (!result.canceled && result.assets && result.assets.length > 0) {
  const selected = result.assets[0];
  if (selected && selected.uri) {
    setSelectedImage(selected.uri);
  }
}
};

  return (
    <ImageBackground
      source={require('../assets/images/bgforapp.png')}
      resizeMode="cover"
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          marginTop: 80,
          alignItems: 'center',
          paddingHorizontal: 16,
        }}
      >
        <Text
          style={{
            fontFamily: 'VeteranTypewriter',
            fontSize: 25,
            color: 'white',
            textAlign: 'center',
            lineHeight: 42,
            marginBottom: 32,
          }}
        >
          Upload Photo For Analysis
        </Text>

        <View
          style={{
            width: 300,
            height: 300,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            marginBottom: 20,
            overflow: 'hidden',
          }}
        >
          {selectedImage ? (
            <Image
              source={{ uri: selectedImage }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          ) : (
            <Text style={{ fontFamily: 'VeteranTypewriter',color: 'gray', fontSize: 18 }}>Your Image Here</Text>
          )}
        </View>

        <TouchableOpacity
          onPress={pickImage}
          style={{
            backgroundColor: 'white',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 25,
          }}
        >
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
            }}
          >
            Choose from Gallery
          </Text>
        </TouchableOpacity>
      </View>
        <View
          style={{
            width: 300,
            minHeight: 80,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'flex-start',
            borderRadius: 10,
            marginTop: 20,
            padding: 12,
          }}
        >
          <Text style={{ fontFamily: 'VeteranTypewriter',color: 'white', fontSize: 16 }}>Analysis of Image:</Text>
        </View>
            

    </ImageBackground>
  );
}
