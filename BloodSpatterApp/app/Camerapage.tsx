import { useFonts } from 'expo-font';
import React from 'react';
import {
  ImageBackground,
  Text,
  View
} from 'react-native';

export default function Camerapage() {

  const [fontsLoaded] = useFonts({
    VeteranTypewriter: require('../assets/fonts/VeteranTypewriter.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  
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
          Use Camera For Analysis
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
        </View>

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
