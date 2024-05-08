import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { laciColors, themeColors,yesilColors } from '../theme'
import { useNavigation } from '@react-navigation/native'



export default function LoginScreen() {
  const [checked, setChecked] = React.useState(false);
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white" >
      <SafeAreaView  className="flex" >
        <View className="flex-row justify-start">
        <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="p-2 rounded-tr-2xl rounded-bl-2xl ml-4" >
                <Image source={require('../assets/icons/back.png')} 
                    className="w-3 h-6"  />
            </TouchableOpacity>
        </View>
        <View  className="flex-row justify-center">
          <Image source={require('../assets/images/loginimg.png')} 
          style={{width: 220, height: 200}} />
        </View>
        
      </SafeAreaView>
      <View 
        style={{borderTopLeftRadius: 30, borderTopRightRadius: 30 ,backgroundColor:laciColors.bg}} 
        className="flex-1 bg-white px-8 pt-8">
          <Text className=" text-xl font-semibold font-bold py-1 " style={{color: yesilColors.bg, fontSize:25,fontWeight:"normal", marginBottom:5,}}> Sign In </Text>
          <View className="form space-y-2">
            <Text className=" ml-1" style={{color:"white"}}> Username or Email</Text>
            <TextInput 
              className="p-2.5 bg-gray-100  rounded-full mb-3 border border-white" style={{backgroundColor:laciColors.bg}}
              placeholder="martin_eden"
              placeholderTextColor="#778899"
            />
            <TouchableOpacity onPress={()=> navigation.navigate("Forgot")} className="flex mt-7">
                  <Text className=" text-right" style={{color:"white",textDecorationLine: 'underline', marginBottom:-20, marginTop:-4}}>Forgot?</Text>
              </TouchableOpacity>
            <Text className="text-gray-700 ml-1" style={{color:"white"}}>Password</Text>
            <TextInput 
              className="p-2.5 bg-gray-100  rounded-full border border-white" style={{backgroundColor:laciColors.bg,marginBottom:20}}
              secureTextEntry
              placeholder="**********"
              placeholderTextColor="#778899"
               
            />
            

            <TouchableOpacity 
              className="py-2.5 bg-blue-500 rounded-full"style={{backgroundColor:yesilColors.bg,}}>
                <Text className="text-xl  text-center text-white"> 
                        Giriş Yap
                </Text>
             </TouchableOpacity>
             
          
          </View>
          <View className="flex-row justify-center mt-7">
              <Text className=" " style={{color:"white"}}>
                  Don't have an account? </Text>
              <TouchableOpacity onPress={()=> navigation.navigate("KayitOl")}>
                  <Text className="font-semibold "style={{color:"white",textDecorationLine: 'underline',marginBottom:40 }}>Sign Up</Text>
              </TouchableOpacity>
          </View>
          
          <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2  ">
              <Image source={require('../assets/icons/google.png')} className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 ">
                <Image source={require('../assets/icons/twitter.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity> 
            <TouchableOpacity className="p-2 ">
              <Image source={require("../assets/icons/instagram.png")} className="w-10 h-10" />
            </TouchableOpacity>
          
          </View>
          
          
      </View>
    </View>
    
  )
}