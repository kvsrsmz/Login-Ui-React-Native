import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors,laciColors,yesilColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white" >
        <SafeAreaView  className="flex" >
           <View className="flex-row justify-center" style={{backgroundColor:yesilColors.bg,borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>
              <View  className="flex-row justify-center">
          <Image source={require('../assets/images/uyg.jpg')} 
          style={{width: 120, height: 120, borderRadius: 60, marginTop:230}} />
              </View>
           </View>
        </SafeAreaView>
        <View >
        <Text className="  text-center font-semibold font-bold py-1 " style={{color: laciColors.bg, fontSize:40,fontWeight:"bold",marginTop:80}}> SELFHELP </Text>
        <Text className="  text-center py-10 ">Lorem ipsum dolor sit amet, consectetur,</Text>
        </View>
        <View>
        <TouchableOpacity
                className="py-3 bg-blue-500 rounded-full mx-14" style={{backgroundColor: laciColors.bg,marginTop:40}}
                onPress={()=> navigation.navigate('Login')}
            >
                <Text className="  font-xl  text-center text-white" style={{fontSize:20}}> 
                    GET STARTED
                </Text>
            </TouchableOpacity>
        </View>

    </View>
    
  )
}