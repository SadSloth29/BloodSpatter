import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import React from 'react';
import { ImageBackground, Pressable, Text, View } from 'react-native';

const Menu = () => {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    'VeteranTypewriter': require('../assets/fonts/VeteranTypewriter.ttf'),
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <ImageBackground
      source={require('../assets/images/bgforapp.png')}
      resizeMode="cover"
      className="flex-1 justify-center items-center"
    >
       <Text
      style={{
        fontFamily: 'VeteranTypewriter',
        fontSize: 45,
        color: 'white',
        textAlign: 'center',
        marginBottom: 32,
        paddingHorizontal: 16,
        lineHeight: 36,
      }}
    >
      Welcome{'\n'}Detective !
    </Text>

      <View className="space-y-6 w-1/2">
        <Pressable 
          onPress={() => router.push('/Camerapage')}
          className="bg-white flex-row items-center justify-center px-6 py-3 rounded-full space-x-2 mb-6"
        >
          <Text className="text-black text-lg font-semibold">Use Camera</Text>
        </Pressable>

        <Pressable 
          onPress={() => router.push('/importpage')}
          className="bg-white flex-row items-center justify-center px-6 py-3 rounded-full space-x-2 mb-6"
        >
          <Text className="text-black text-lg font-semibold">Import Image</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default Menu;