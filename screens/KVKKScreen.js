import { View, Text ,TouchableOpacity,Image,ScrollView} from 'react-native'
import { useState } from 'react';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { laciColors, themeColors,yesilColors } from '../theme'
import { Checkbox } from 'react-native-paper'


export default function HomeScreen() {

  const navigation = useNavigation();

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
        <View className="flex-row justify-center" style={{marginBottom:30}}>
        <Image source={require('../assets/images/uyg.jpg')} 
          style={{width: 55, height: 40}} />
          <Text style={{color:laciColors.bg, fontSize:25, fontWeight:"bold", fontFamily:""}}>SELFHELP</Text>
        </View>

         </SafeAreaView>

      <View className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius: 30, borderTopRightRadius: 30,backgroundColor: laciColors.bg}} >
        <View className="form space-y-1">

        <Text className=" text-xl text-black-700 font-bold py-1 ml-0 " style={{color: "#d5e7f3", fontSize:25,fontWeight:"normal", paddingBottom:16}}> Kullanıcı Sözleşmesi </Text>
            <Text style={{color:"#d5e7f3", fontSize:15,paddingTop:5}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat enim, dapibus id massa eu, tincidunt feugiat felis. Nullam sollicitudin varius dolor, quis pellentesque nulla ultricies ut. Pellentesque scelerisque consectetur bibendum. Praesent vestibulum quis nunc ut iaculis. Vivamus facilisis metus ut faucibus tempus. Etiam accumsan magna mi, et gravida orci pulvinar ac. Etiam sed est urna. Vivamus non sollicitudin justo, vel facilisis nunc. Proin ultrices sit amet neque condimentum consequat.
             </Text>
             <Text style={{color:"#d5e7f3", fontSize:15 ,paddingTop:20}} >Nunc id quam nisi. Proin volutpat justo sed lorem mollis eleifend. Aenean et lacinia felis. Curabitur pretium dictum diam. Integer sed sapien non nisi cursus placerat. Pellentesque mollis risus purus, a sollicitudin arcu imperdiet nec. Vivamus turpis purus, faucibus et tortor at, scelerisque viverra tellus. 
            </Text>     
            <Text style={{color:"#d5e7f3", fontSize:15,paddingTop:20}}>
            Maecenas at lorem volutpat ipsum ultrices consequat at non ligula. Proin condimentum, dui eget accumsan dictum, nisi mi feugiat mi, ac fringilla metus felis nec risus. Phasellus quis purus ac erat efficitur sagittis. Praesent aliquet, risus non hendrerit vulputate, massa odio fringilla magna, quis pulvinar sapien urna sed diam. Vivamus odio nunc, tincidunt sed odio non, faucibus elementum justo. In a justo sit amet nibh molestie viverra in sed nulla.
            </Text>
            <Text style={{color:"#d5e7f3", fontSize:15,paddingTop:20}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat enim, dapibus id massa eu, tincidunt feugiat felis. Nullam sollicitudin varius dolor, quis pellentesque nulla ultricies ut. Pellentesque scelerisque consectetur bibendum. Praesent vestibulum quis nunc ut iaculis. Vivamus facilisis metus ut faucibus tempus. Etiam accumsan magna mi, et gravida orci pulvinar ac. Etiam sed est urna. Vivamus non sollicitudin justo, vel facilisis nunc. Proin ultrices sit amet neque condimentum consequat.
             </Text>
             <Text style={{color:"#d5e7f3", fontSize:15,paddingTop:20,paddingBottom:25}} >Nunc id quam nisi. Proin volutpat justo sed lorem mollis eleifend. Aenean et lacinia felis. Curabitur pretium dictum diam. Integer sed sapien non nisi cursus placerat. Pellentesque mollis risus purus, a sollicitudin arcu imperdiet nec. Vivamus turpis purus, faucibus et tortor at, scelerisque viverra tellus. 
            </Text>
            

            <TouchableOpacity
                className="py-2.5 bg-blue-500 rounded-full mx-14" style={{backgroundColor: yesilColors.bg}}
                onPress={()=> navigation.navigate('Sozlesme')}
            >
                <Text className="  font-xl  text-center text-white" style={{fontSize:20}}> 
                    Kabul Ediyorum
                </Text>
            </TouchableOpacity>
        </View>
        
        
        <View className="flex-row justify-center mt-1">   
        </View>
      </View>
    </View>
    </ScrollView>
  )
}