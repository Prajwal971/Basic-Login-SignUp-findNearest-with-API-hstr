import React, {useState,useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import {Text} from 'native-base';

export default function Findthenearest({navigation}) {
  const [usersList, setUserslist] = useState(null);
  const [dp,setDp] = useState('profileImg')
  
  useEffect(() => getData(), []);

  const getData = () => {
    fetch('http://65.0.174.202:8000/users', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setUserslist(json.data.users);
      });
  };

  const isNulls = (value) => {
    return (value.firstname != undefined);
  }
  const display = (value) => {
    return value;
  }


  const list = () => {
    return (usersList.map(display).filter(isNulls)).map((element) => {
      return (
             <TouchableOpacity 
                key={element._id}
                onPress={() => navigation.navigate('User', { ID: element._id,DPurl:!element.profileImg?'https://reactnative.dev/img/tiny_logo.png':element.profileImg.imgPath })}
                style={{marginBottom:50,marginRight:10}}
              >
              <View style={{flexWrap:'wrap',height:370,marginRight:10,borderRadius:10,
                            backgroundColor:'white',marginTop:25,marginLeft:20}}>
                  <View style={{height:200,marginRight:10,borderRadius:10}}>
                    {!element.profileImg  
                      ? 
                        <Image
                          style={styles.logoStatic}
                          source={{
                            uri:'https://reactnative.dev/img/tiny_logo.png'
                          }}
                        />
                      : 
                        <Image
                          style={styles.logo}
                          source={{
                            uri:
                            element.profileImg.imgPath
                          }}
                        />
                  }
                  
                  </View>
                  <View style={{marginLeft:20,marginTop:120}}>
                    <Text style={{fontSize:20}}>{element.firstname}{' '+element.lastname}</Text>
                    <Text style={{color:'#757e90'}}>Last seen :{element.lastSeen}</Text>
                  </View>
              </View>                    
            </TouchableOpacity>
      );
    });
  };

  return (
    <ScrollView>
       {
        usersList === null ? <ActivityIndicator
                                animating={true}
                                style={styles.indicator}
                                size="large"
                              /> 
                            :
                            
      
      
       <View style={{backgroundColor: '#e4e6eb', height: '15%'}}>
        <View style={{backgroundColor: '#c86dd7', height: '15%',flexDirection:'row', borderRadius:10,marginRight:20,marginLeft:20,marginTop:20}}>
          <Text style={{fontWeight: "normal",fontSize:50,color:'#ffffff',marginLeft:10}}>25</Text>
          <View style={{flexDirection:"column",marginTop:'5%',marginLeft:'3.5%'}}>
            <Text style={{color:'#ffffff',fontWeight:"bold",fontSize:15}}>Days Left</Text>
            <Text  style={{color:'#ffffff',fontSize:15}}>to expire membership</Text>
          </View>
          <TouchableOpacity style={{opacity:0.5,backgroundColor:'#000',height:'40%',marginTop:'5%',marginLeft:'-3%',marginRight:13,borderRadius:60,alignContent:'center',justifyContent:'center'}}>
              <Text style={{color:'#fff',marginLeft:1,fontWeight:'bold',fontSize:13}}>Update Plan</Text>
          </TouchableOpacity>
        </View>
        {list()}
      </View> 
      
      }
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    marginLeft: 20,
    marginTop: 20,
  },
  mainImage:{
    width:350,
    height:300,
    backgroundColor:'red',
    borderRadius:15,
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80
  },
  logo: {
    width: '205%',
    height: 300,
    resizeMode:'stretch',
    borderRadius:10
  },
  logoStatic:{
    width: 323,
    height: 300,
    resizeMode:'stretch',
    borderRadius:3
  }
});
