import { View, Text ,TouchableOpacity,Image,} from 'react-native'
import { useState } from 'react';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { laciColors, themeColors,yesilColors } from '../theme'
import { Checkbox } from 'react-native-paper'






export default function HomeScreen() {

  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white  " >
        <SafeAreaView className="flex "  >
        <View className="justify-start" >
           <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="p-2 rounded-tr-2xl rounded-bl-2xl ml-4" >
                <Image source={require('../assets/icons/back.png')} 
                    className="w-3 h-6"  />
            </TouchableOpacity>
            <View className="flex-row justify-center">
        <Image source={require('../assets/images/uyg.jpg')} 
          style={{width: 55, height: 40}} />
          <Text style={{color:laciColors.bg, fontSize:25, fontWeight:"bold"}}>SELFHELP</Text>
        </View>
        <Text className="text-black  text-3x1 text-center" style={{paddingHorizontal: 30,paddingTop:30 , fontSize:14,textAlign: 'justify'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque eu condimentum ante, eget commodo ante.Fusce aliquet, neque vitae luctus commodo, ante tortor tempor odio, eu tempor dui ipsum id sapien. Morbi ut lorem ut elit auctor hendrerit. Cras in purus nec arcu accumsan accumsan id non felis. Nullam vulputate magna vitae luctus pellentesque. Phasellus non sapien in turpis efficitur commodo. 
        </Text>
      <View className="flex-row  space-x-1 px-7 pt-8">
          <Checkbox 
          status={checked1 ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked1(!checked1);
          }}
      
          />
        <Text style={{fontSize:17 ,paddingTop:5}} >
          Açık Arıza metnini onaylıyorum
        </Text>
      </View>
      
    <View className="flex-row  space-x-1 px-7 pt-8">
        <Checkbox
      status={checked2 ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked2(!checked2);
      }}
      
        />
    
    <TouchableOpacity onPress={()=> navigation.navigate("KullaniciSoz")} >
        <Text style={{fontSize:17 ,paddingTop:5, textDecorationLine: 'underline'}} >
          Kullanıcı Sözleşmesi
        </Text>
     </TouchableOpacity>
    </View>
      
    <View className="flex-row  space-x-1 px-7 pt-8">
        <Checkbox
      status={checked3 ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked3(!checked3);
      }}
        />
      <TouchableOpacity onPress={()=> navigation.navigate("KVKK")} >
        <Text style={{fontSize:17 ,paddingTop:5, textDecorationLine: 'underline'}} >
          KVKK
        </Text>
      </TouchableOpacity>
    </View>


        <TouchableOpacity 
                className="py-2.5 bg-blue-500 rounded-full mx-8  " style={{backgroundColor: laciColors.bg, marginTop:70}}
            >
                <Text className="  font-xl text-center text-white" style={{fontSize:20,}}> 
                    Create Account
                </Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>

    </View>
  )
}