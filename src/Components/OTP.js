import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {Text, Input, Icon} from 'native-base';

export default function Otp({navigation}) {
  const [mno, setMno] = useState('');
  const [demo, setDemo] = useState(null);

  const validation = () => {
    if(mno == ''){
      alert('Enter mobile number')
    }else if((mno.length) < 13){
      alert('Enter valid Mobile number')
    }else if(!mno.includes('+')){
      alert('Mobile number doesnt contains +')
    }else if((mno.length) > 13){
      alert(' Mobile number greater than 13')
    }else{
      getData();
      navigation.navigate('Findthenearest')
    }
  }
  const getData = () => {
    fetch('http://65.0.174.202:8000/auth/sendOtp', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mobile_number: mno,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        setDemo(json);
        console.log(json);
      });
    demo === null ? <></> : alert(demo.message)
  };

  return (
    <KeyboardAvoidingView>
      <View style={{backgroundColor: '#c86dd7', height: '100%'}}>
        <View
          style={{
            backgroundColor: '#433088',
            height: 55,
            marginTop: 100,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 10,
          }}>
          <Input
            onChangeText={(text) => setMno(text)}
            defaultValue={mno}
            placeholder="Mobile Number"
            keyboardType="name-phone-pad"
            placeholderTextColor="#66ffffff"
            style={{marginLeft: 10}}
          />
        </View>
        <TouchableOpacity
          onPress={() => validation()}
          style={{
            backgroundColor: '#fc5185',
            height: 55,
            marginTop: 40,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 60,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              marginLeft: 90,
              marginTop: 10,
            }}>
            REQUEST OTP
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 12,
            marginTop: 20,
            marginLeft: 30,
            marginRight: 0,
            color: '#ffffff',
          }}>
          By signing up you agree to our terms and conditions
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            marginLeft: 60,
            marginRight: 60,
          }}>
          <Text style={{fontSize: 19, color: '#ffffff'}}>
            {' '}
            Already a member?{' '}
          </Text>
          <Text style={{fontSize: 19, color: '#ffffff'}}> Sign In </Text>
        </View>
        <Text
          style={{
            color: '#ffffff',
            marginLeft: 90,
            fontSize: 19,
            marginTop: 60,
          }}>
          Or connect with social
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 25,
            marginLeft: 20,
            marginRight: 20,
            justifyContent: 'space-evenly',
            marginBottom: 20,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              height: 40,
              width: 140,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{position: 'relative'}}>
              <View style={{position: 'absolute', top: -15, left: -50}}>
                <Icon
                  type="FontAwesome"
                  name="facebook"
                  style={{fontSize: 30, color: '#3b5998'}}
                />
              </View>
              <View style={{position: 'absolute', top: -14, left: -40}}>
                <Text style={{color: '#3b5998', fontSize: 18}}>
                  {'    '}Facebook
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              height: 40,
              width: 140,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{position: 'relative'}}>
              <View style={{position: 'absolute', top: -15, left: -50}}>
                <Icon
                  type="FontAwesome"
                  name="google"
                  style={{fontSize: 30, color: '#f14336'}}
                />
              </View>
              <View style={{position: 'absolute', top: -13, left: -30}}>
                <Text style={{color: '#f14336', fontSize: 18}}>
                  {'    '}Google
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
