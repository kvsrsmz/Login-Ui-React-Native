import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Svg, {Circle} from 'react-native-svg';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


class Login extends Component {
  render() {
    return(
      <SafeAreaView style={styles.body}>
      <View style={styles.header}>
      <Text style={styles.header_text}>Sign in - @marijuabakunin</Text>
      <TouchableOpacity  onPress={() => this.props.navigation.navigate('Black')} style={styles.black_mode}><Icon color={"black"} style={{marginLeft: 10}} size={15} name={"adjust"} /></TouchableOpacity>
      </View>
      <View style={styles.logo_area}>
      <Image source={require('')} style={{width: 150, height: 150, borderRadius: 150/ 2}}  />
      </View> 
      <View style={styles.form}>
      <View style={styles.item}>
      <TextInput style={styles.input} placeholder={"Kullanıcı adı"}/>
      <TextInput style={styles.input_margin} placeholder={"Şifre"}/> 
      <TouchableOpacity><Text style={styles.item_text}>Şifrenizi mi unuttunuz?</Text></TouchableOpacity>
      </View>
      <View style={styles.login}>
      <TouchableOpacity><Text style={styles.login_text}>Giriş yap</Text></TouchableOpacity>
      </View>
      <View style={styles.or}>
      <Text style={styles.or_text}>veya</Text>
      </View>
      <View style={styles.social}>
      <TouchableOpacity style={styles.social_text}><Icon color={"#3B5999"} size={20} name={"facebook-f"} /></TouchableOpacity>
      <TouchableOpacity style={styles.social_text}><Icon color={"#55ACEE"} size={20} name={"twitter"} /></TouchableOpacity>
      <TouchableOpacity style={styles.social_text}><Icon size={20} name={"github"} /></TouchableOpacity>
      </View>
      <View style={styles.finish}>
      <Text style={styles.finish_text}>Bir hesabın yok mu? <TouchableOpacity><Text style={styles.register}>Kayıt ol</Text></TouchableOpacity></Text>
      </View>
      </View>
      </SafeAreaView>
    )
  }
}


class Black extends Component {
  render() {
    return(
      <SafeAreaView style={black.black_body}>
      <View style={black.header}>
      <Text style={black.header_text}>Sign in - @marijuabakunin</Text>
      <TouchableOpacity  onPress={() => this.props.navigation.navigate('Home')} style={styles.black_mode}><Icon color={"white"} style={{marginLeft: 10}} size={15} name={"adjust"} /></TouchableOpacity>
      </View>
      <View style={black.logo_area}>
      <Image source={require('')} style={{width: 150, height: 150, borderRadius: 150/ 2}}  />
      </View> 
      <View style={black.form}>
      <View style={black.item}>
      <TextInput style={black.input} placeholder={"Kullanıcı adı"}/>
      <TextInput style={black.input_margin} placeholder={"Şifre"}/> 
      <TouchableOpacity><Text style={black.item_text}>Şifrenizi mi unuttunuz?</Text></TouchableOpacity>
      </View>
      <View style={black.login}>
      <TouchableOpacity><Text style={black.login_text}>Giriş yap</Text></TouchableOpacity>
      </View>
      <View style={black.or}>
      <Text style={black.or_text}>veya</Text>
      </View>
      <View style={black.social}>
      <TouchableOpacity style={black.social_text}><Icon color={"#3B5999"} size={20} name={"facebook-f"} /></TouchableOpacity>
      <TouchableOpacity style={black.social_text}><Icon color={"#55ACEE"} size={20} name={"twitter"} /></TouchableOpacity>
      <TouchableOpacity style={black.social_text}><Icon size={20} name={"github"} color={"white"} /></TouchableOpacity>
      </View>
      <View style={black.finish}>
      <Text style={black.finish_text}>Bir hesabın yok mu? <TouchableOpacity><Text style={black.register}>Kayıt ol</Text></TouchableOpacity></Text>
      </View>
      </View>
      </SafeAreaView>
    )
  }
}


const AppNavigator = createStackNavigator({
  Home: {
    screen: Login,
    navigationOptions: {
      header:null
    }
  },
  Black:{
    screen:Black,
    navigationOptions: {
      header:null
    }
  }
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  body: { 
    backgroundColor: 'white',
    flex: 1
  },
  header: {
    marginTop: 20
  },
  header_text: {
    color: '#525464',
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
    fontSize: 20
  },
  logo_area: {
    alignItems: 'center',
    marginTop: 40,
  },
  form: {
    marginTop: 40
  },
  item: {},
  input: {
    borderWidth: 1,
    borderColor: '#B0B0C3',
    backgroundColor: '#F7F7F7',
    padding: 17,
    marginLeft: 10,
    marginRight: 10
  },
  input_margin: {
    borderWidth: 1,
    borderColor: '#B0B0C3',
    marginTop: 10,
    backgroundColor: '#F7F7F7',
    padding: 17,
    marginLeft: 10,
    marginRight: 10
  },
  item_text: {
  color: '#525464',
  textAlign: 'right',
  marginRight: 10,
  marginTop: 10
  },
  login: {
    backgroundColor: '#20C3AF',
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 25
  },
  login_text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 14
  },
  or: {
    marginTop: 10
  },
  or_text: {
    textAlign: 'center',
    color: '#525464',
    fontWeight: '100',
  },
  social: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-between'
  },
  social_text: {
    padding: 10,
    width: 90,
    height: 60,
    borderWidth: 1,
    borderColor: '#E2E2B0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  finish: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  finish_text: {
    color: '#525464',
  },
  register: {
    textDecorationLine: 'underline',
    color: '#FFB19D'
  },
  black_mode: {
    marginEnd: 20,
  }
})

const black = StyleSheet.create({
  black_body: { 
    backgroundColor: 'black',
    flex: 1
  },
  header: {
    marginTop: 20
  },
  header_text: {
    color: 'white',
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
    fontSize: 20
  },
  logo_area: {
    alignItems: 'center',
    marginTop: 40
  },
  form: {
    marginTop: 40
  },
  item: {},
  input: {
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#F7F7F7',
    padding: 17,
    marginLeft: 10,
    marginRight: 10
  },
  input_margin: {
    borderWidth: 1,
    borderColor: 'red',
    marginTop: 10,
    backgroundColor: '#F7F7F7',
    padding: 17,
    marginLeft: 10,
    marginRight: 10
  },
  item_text: {
  color: 'white',
  textAlign: 'right',
  marginRight: 10,
  marginTop: 10
  },
  login: {
    backgroundColor: '#20C3AF',
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 25
  },
  login_text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 14
  },
  or: {
    marginTop: 10
  },
  or_text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '100',
  },
  social: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-between'
  },
  social_text: {
    padding: 10,
    width: 90,
    height: 60,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  finish: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  finish_text: {
    color: 'white',
  },
  register: {
    textDecorationLine: 'underline',
    color: '#FFB19D'
  },
})