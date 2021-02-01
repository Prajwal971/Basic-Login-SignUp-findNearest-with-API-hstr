import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
} from 'react-native';
import {Text, Icon} from 'native-base';

export default function Profiledetails({navigation,route}) {
  return (
    <ScrollView>
      
      <View
        style={{position: 'relative', height: 1000, backgroundColor: '#e4e6eb'}}>
        <Image
          style={styles.mainImage}
          source={{
            uri:
            route.params.DPurl
          }}
        />
        <View
          style={{
            position: 'absolute',
            top: 330,
            height: 250,
            width: '90%',
            backgroundColor: '#fff',
            marginLeft: 20,
            // marginRight: -250,
            borderRadius: 15,
          }}>
          <Text
            style={{ fontSize: 25, fontWeight: 'normal', color: '#363636', marginLeft: '30%',marginTop:10}}>
            {route.params.fname}{' '+route.params.lname}
          </Text>
          <Text
            style={{ fontSize: 15, fontWeight: 'normal', color: '#757e90', marginLeft: '35%',marginTop:5}}>
            Bangalore-INDIA
          </Text>
          <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#757e90', marginLeft: '5%',marginTop:5}}>
            <Image style={styles.tinyLogo} source={require('../Asset/user.png')}/>
            {'   '} {route.params.fname}
        
          </Text>
          <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#757e90', marginLeft: '5%',marginTop:5}}>
          <Image style={styles.tinyLogo} source={require('../Asset/user.png')}/>
            {'   '} {route.params.lname}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#757e90', marginLeft: '5%',marginTop:5}}>
          <Image style={styles.tinyLogo} source={require('../Asset/age.png')}/>
            {'   '}{route.params.age === undefined ? 'Age Not entered' : route.params.age}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#757e90', marginLeft: '5%',marginTop:5}}>
            <Icon type="FontAwesome" name="hotel" style={{fontSize: 20, color: 'grey'}} />{'     '}
            {route.params.desc1}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#757e90', marginLeft: '5%',marginTop:5}}>
            <Icon type="FontAwesome" name="close" style={{fontSize: 20, color: 'grey'}} />{'     '}
            {route.params.desc2}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#757e90', marginLeft: '5%',marginTop:5}}>
          <Image style={styles.tinyLogo} source={require('../Asset/college_graduation.png')}/>
            {'    '}{route.params.university}
          </Text>
        </View>
         <View style={{
            position: 'absolute',
            top: 600,
            height: 50,
            width: 180,
            backgroundColor: '#3c0fc7',
            marginLeft: 110,
            borderRadius: 50,
            flexDirection:'row'
          }}>
            <Image
              style={styles.tinyLogo}
              source={require('../Asset/message_square_outline.png')}
            />
            <Text style={{marginLeft:10,marginTop:13,color:'#fff'}}>Request to Chat</Text>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 670,
            height: 290,
            width: 320,
            backgroundColor: '#fff',
            marginLeft: 20,
            borderRadius: 15,
          }}>
          <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#757e90', marginLeft: '5%',marginTop:15}}>
            Photos
          </Text>

          <View style={{flexDirection:'row',position:'relative'}}>
            <View
            style={{
                position: 'absolute',
                top: 15,
                height: 210,
                width: '45%',
                backgroundColor: 'black',
                marginLeft: 13,
                marginRight: 13,
                borderRadius: 15,
            }}>
              <Image
                style={styles.bottomImage}
                source={{
                  uri:
                  route.params.DPurl
                }}
              />
            </View>
            <View
            style={{
                position: 'absolute',
                top: 15,
                height: 210,
                width: '45%',
                backgroundColor: 'black',
                marginLeft: 165,
                borderRadius: 15,
            }}>
              <Image
                style={styles.bottomImage}
                source={{
                  uri:
                  route.params.DPurl
                }}
              />
            </View>
        </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainImage: {
    width: '100%',
    height: 400,
    backgroundColor: 'red',
  },
  tinyLogo: {
    marginLeft: 20,
    marginTop: 10,
  },
  bottomImage: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    borderRadius:15,
  }
});
