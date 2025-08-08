import auth from "@react-native-firebase/auth";
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import { FirebaseError } from "firebase/app";
import React, { useState } from 'react';
import { Image, ImageBackground, Pressable, Text, TextInput, View } from 'react-native';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    VeteranTypewriter: require('../assets/fonts/VeteranTypewriter.ttf'),
  });

  if (!fontsLoaded) return null;

  const signup = async () => {

    setLoading(true);
    try{

      await auth().createUserWithEmailAndPassword(email,password);
      alert('Check your email');
    }catch(e:any){

      const err = e as FirebaseError;
      alert('Registration Failed: '+ err.message);

    }finally{
    setLoading(false);
  }



  }

  const signin = async () => {

    
    setLoading(true);
    try{

      await auth().signInWithEmailAndPassword(email,password);
      alert('Check your email');
    }catch(e:any){

      const err = e as FirebaseError;
      alert('Registration Failed: '+ err.message);

    }finally{
    setLoading(false);
  }
   

  }

  return (
    <ImageBackground
      source={require('../assets/images/bgforapp.png')} 
      style={{ flex: 1, justifyContent: 'center', padding: 24 }}
      resizeMode="cover"
    >
      {/* App Logo */}
      <Image
        source={require('../assets/images/appicon.png')}
        style={{
          width: 140,
          height: 140,
          alignSelf: 'center',
          marginBottom: 12,
          resizeMode: 'contain',
        }}
      />

      
      <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 12, padding: 20 }}>
        <Text
          style={{
            fontFamily: 'VeteranTypewriter',
            fontSize: 32,
            color: 'white',
            textAlign: 'center',
            marginBottom: 4,
          }}
        >
          Blood Spatter
        </Text>
        <Text
          style={{
            fontFamily: 'VeteranTypewriter',
            fontSize: 28,
            color: 'white',
            textAlign: 'center',
            marginBottom: 24,
          }}
        >
          Analysis
        </Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          style={{
            backgroundColor: '#1e1e1e',
            color: 'white',
            padding: 12,
            borderRadius: 8,
            marginBottom: 12,
          }}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={{
            backgroundColor: '#1e1e1e',
            color: 'white',
            padding: 12,
            borderRadius: 8,
            marginBottom: 16,
          }}
        />

        <Pressable
          onPress={signup}
          style={{
            backgroundColor: '#b00020',
            padding: 14,
            borderRadius: 8,
            marginBottom: 16,
          }}
        >
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
            Login
          </Text>
        </Pressable>

        
        <Pressable
          onPress={signin}
          style={{
            width: '100%',
            height: 48,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            marginBottom: 16,
          }}
        >
          <Text style={{ color: '#000', fontWeight: 'bold' }}>Sign in with Google</Text>
        </Pressable>

        <Pressable
          onPress={() => router.push('/menu')}
          style={{
            marginTop: 8,
            padding: 10,
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: 8,
          }}
        >
          <Text style={{ color: '#ccc', textAlign: 'center' }}>Go to Menu</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}
