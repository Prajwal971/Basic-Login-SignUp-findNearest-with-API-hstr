import React, {useState,useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import {Text, Input, Icon} from 'native-base';

export default function User({ navigation, route }) {

  const [usersList, setUserslist] = useState(null);
  
  useEffect(() => getData(), []);

  const getData = () => {
    fetch('http://65.0.174.202:8000/users/'+route.params.ID, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setUserslist(json.data.user);
      });
  };

  return (
    <>
      {usersList === null ? <ActivityIndicator
                              animating={true}
                              style={styles.indicator}
                              size="large"
                            /> 
                          :
    <ScrollView>
      <View style={{backgroundColor: '#e4e6eb', height: '100%'}}>
        <View style={{backgroundColor: '#c86dd7', height: '11%',flexDirection:'row', borderRadius:10,marginRight:15,marginLeft:15,marginTop:20}}>
          <Text style={{fontWeight: "normal",fontSize:50,color:'#ffffff',marginLeft:10}}>25</Text>
          <View style={{flexDirection:"column",marginTop:'3.5%',marginLeft:'3.5%'}}>
            <Text style={{color:'#ffffff',fontWeight:"bold"}}>Days Left</Text>
            <Text  style={{fontSize:15,color:'#ffffff'}}>to expire membership</Text>
          </View>
          <TouchableOpacity style={{opacity:0.5,backgroundColor:'#000',height:'40%',width:'30%',marginTop:'5%',marginLeft:'1.5%',borderRadius:60,alignContent:'center',justifyContent:'center'}}>
              <Text style={{fontSize:13,color:'#fff',marginLeft:12,fontWeight:'bold'}}>Update Plan</Text>
          </TouchableOpacity>
        </View>
        
            <TouchableOpacity 
            onPress={() => navigation.navigate('Profiledetails',{
                                                          DPurl:route.params.DPurl,
                                                          fname:usersList.firstname,
                                                          lname:usersList.lastname,
                                                          ages:usersList.age,
                                                          desc1:usersList.passion[5].name,
                                                          desc2:usersList.passion[0].name+usersList.passion[1].name+usersList.passion[2].name,
                                                          university:usersList.institute.name,
                                                        }
                                                )
            } 
            style={{margin:10,backgroundColor:'#fff',borderRadius:10}}>
            <View style={{borderRadius:10,margin:20,position:'relative'}}>
              <Image
                    style={styles.mainImage}
                    source={{
                      uri:
                      route.params.DPurl
                    }}
                  />
                
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly' ,marginLeft:0,marginRight:10,position:'absolute',top:10}}>
                  <View style={{width:60,height:8,backgroundColor:'#fff',borderRadius:10,marginLeft:19}}></View>
                  <View style={{width:60,height:8,backgroundColor:'#fff',borderRadius:10,marginLeft:19}}></View>
                  <View style={{width:60,height:8,backgroundColor:'#fff',borderRadius:10,marginLeft:19}}></View>
                  <View style={{width:60,height:8,backgroundColor:'#fff',borderRadius:10,marginLeft:19}}></View>
                </View>

                <TouchableOpacity  
                style={{opacity:0.5,backgroundColor:'#fff',height:'8%',marginTop:'5%',marginLeft:'3.5%',marginRight:'3.5%',borderRadius:60,alignContent:'center',justifyContent:'center',position:'absolute',top:5}}>
                  <Text style={{color:'#fff',marginLeft:12,fontWeight:'bold'}}>2.3Km Away</Text>
                </TouchableOpacity>   
            </View>
            <Text style={{fontSize:25,fontWeight:'bold',color:'#363636',marginLeft:'30%'}}>{usersList.firstname}{' '+usersList.lastname}</Text>
            <Text style={{fontSize:15,fontWeight:'bold',color:'#757e90',marginLeft:'7%',marginTop:10}}>
              {usersList.passion[1].name}{','+usersList.passion[2].name}{','+usersList.passion[5].name}
            </Text>

            <View style={{flexDirection:"row",justifyContent:'space-between',marginLeft:50,marginRight:50,marginBottom:30,marginTop:30}}>
            <View style={{width: 70,height: 70,borderRadius: 70/2,backgroundColor:'#fff',borderColor:10,elevation: 5}}>
            <Image
              style={styles.tinyLogo}
              source={require('../Asset/rewind.png')}
            />
            </View>
            <View style={{width: 70,height: 70,borderRadius: 70/2,backgroundColor:'#fff',borderColor:10,elevation: 5}}>
            <Image
              style={styles.tinyLogo}
              source={require('../Asset/path.png')}
            />
            </View>
            <View style={{width: 70,height: 70,borderRadius: 70/2,backgroundColor:'#fff',borderColor:10, elevation: 5}}>
            <Image
              style={styles.tinyLogo}
              source={require('../Asset/CLose.png')}
            />
            </View>
        </View> 
        </TouchableOpacity>

        
      </View>
      </ScrollView>
      }
    </>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    marginLeft: 20,
    marginTop: 20,
  },
  mainImage:{
    // width:350,
    marginRight:1,
    height:300,
    backgroundColor:'red',
    borderRadius:15,
    
  }
});
