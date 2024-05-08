import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { laciColors, themeColors,yesilColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import RadioGroup from 'react-native-radio-buttons-group';





export default function KayitOlScreen() {

    const [isChecked, setChecked] = useState(false);
    const [selectedId, setSelectedId] = useState();
    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'kadın',
            value: 'option1'
        },
        {
            id: '2',
            label: 'erkek',
            value: 'option2'
        }
    ]), []);





    const navigation = useNavigation();
    const [email,setEmail] = useState ('');
    const [password,setPassword] = useState ('');
    const handleSubmit = async ()=>{
        if (email && password){
            try{
                await createUserWithEmailAndPassword(auth,email,password)
            }catch(err){
                console.log('get error : ' ,err.message);
            }
        }
    }
  return (
    <ScrollView>
    <View className="flex-1 bg-white" >
      <SafeAreaView className="flex "  >
        <View className="flex-row justify-start" >
        <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="p-2 rounded-tr-2xl rounded-bl-2xl ml-4" >
                <Image source={require('../assets/icons/back.png')} 
                    className="w-3 h-6"  />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center" style={{marginBottom:4}}>
        <Image source={require('../assets/images/uyg.jpg')} 
          style={{width: 55, height: 40}} />
          <Text style={{color:laciColors.bg, fontSize:25, fontWeight:"bold", fontFamily:""}}>SELFHELP</Text>
        </View>
        <View  className="flex-row justify-center">
            <Image source={require('../assets/images/singUp.jpg')} 
          style={{width: 250, height: 120}} />
        </View>
         </SafeAreaView>

      <View className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius: 30, borderTopRightRadius: 30,backgroundColor: laciColors.bg}} >
        <View className="form space-y-1">
            <Text className=" text-xl font-semibold text-black-700  py-1 " style={{color: yesilColors.bg, fontSize:25,fontWeight:"normal"}}> Sign Up </Text>
            <Text className="text-white-700 ml-1" style={{color: "white"}} >Username</Text>
            <TextInput
                className="p-2.5  text-white-600 rounded-full mb-3 border border-white"
                style={{color:"white"}}
                value={email}
                onChangeText={value => setEmail(value)}
                placeholder='martin_eden'
                placeholderTextColor="#778899"
            />
            <Text className="text-white-700 ml-1" style={{color: "white"}}>Email </Text>
            <TextInput
                className="p-2.5  text-white-700 rounded-full mb-3 border border-white"
                style={{color:"white"}}
                value={password}
                onChangeText={value => setPassword(value)}
                placeholder='martin_eden@domain.com'
                placeholderTextColor="#778899"
            />
            <Text className="text-gray-700 ml-1 " style={{color: "white"}}>Password</Text>
            <TextInput
                className="p-2.5  text-gray-700 rounded-full mb-7 border border-white"
                style={{color:"white"}}
                secureTextEntry
                // value=""
                
            />
            

            <TouchableOpacity
                className="py-3 bg-blue-500 rounded-full " style={{backgroundColor: yesilColors.bg}}
                onPress={()=> navigation.navigate('Sozlesme')}
            >
                <Text className="  font-xl  text-center text-white" style={{fontSize:20}}> 
                    Create Account
                </Text>
            </TouchableOpacity>
        </View>
        <Text className="text-xl text-gray-500  text-center py-5">
            or sign up with
        </Text>
        <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2  rounded-2xl">
                <Image source={require('../assets/icons/google.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2  rounded-2xl">
                <Image source={require('../assets/icons/twitter.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity> 
            <TouchableOpacity className="p-2  rounded-2xl">
              <Image source={require("../assets/icons/instagram.png")} className="w-10 h-10" />
            </TouchableOpacity>
           
        </View>
        <View className="flex-row justify-center mt-9">   
        </View>
      </View>
    </View>
    </ScrollView>
  )
}

