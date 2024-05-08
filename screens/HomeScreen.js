import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'


export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: themeColors.bg}}>
      <View className="space-y-4">
                
                <View className="flex-row justify-center">
          
                    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                        <Text className="font-semibold text-black-500"> Login'e Git </Text>
                    </TouchableOpacity>
                </View>
            </View>
      

      
    </SafeAreaView>
  )
}