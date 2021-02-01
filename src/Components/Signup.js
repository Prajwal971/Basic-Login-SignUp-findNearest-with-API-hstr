import React, {useState} from 'react';
import {
  StyleSheet,
  Button,
  Image,
  View,
  Switch,
  TouchableHighlight,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {
  Form,
  Item,
  Text,
  Input,
  Label,
  ListItem,
  Body,
  Icon,
} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {RadioButton, Checkbox} from 'react-native-paper';

export default function Signup({navigation}) {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 50;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dates, setDates] = useState(null);
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [checked, setChecked] = useState('male');
  const [checkedbox, setCheckedbox] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDates(date.toString());
    let dat = new Date(date);
    setYear(dat.getFullYear());
    setMonth(dat.getMonth() + 1);
    setDay(dat.getDate());
    hideDatePicker();
  };

  const validation = () => {
    if (fname.trim().length === 0) {
      alert('Enter first name');
    } else if (lname.trim().length === 0) {
      alert('Enter last name');
    } else if (email.trim().length === 0) {
      alert('Enter Email ID');
    } else if (year.length === 0) {
      alert('Enter Select Date of Birth');
    } else if (checkedbox === false) {
      alert('Do read the terms and condition  ');
    } else {
      navigation.navigate('Otp');
    }
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior=""
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.LogoContainer}>
              <Image
                style={styles.tinyLogo}
                source={require('../Asset/vertical_layout.png')}
              />
            </View>
            <Form>
              <Item floatingLabel>
                <Label> First Name</Label>
                <Input
                  onChangeText={(text) => setFname(text)}
                  defaultValue={fname}
                />
              </Item>
              <Item floatingLabel style={{marginLeft: 20}}>
                <Label>Last Name</Label>
                <Input
                  onChangeText={(text) => setLname(text)}
                  defaultValue={lname}
                />
              </Item>
            </Form>

            <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 20}}>
              <RadioButton
                value="male"
                status={checked === 'male' ? 'checked' : 'unchecked'}
                color="#7f0ef4"
                onPress={() => setChecked('male')}
              />
              <View style={{marginTop: 6}}>
                <Text onPress={() => setChecked('male')}>Male</Text>
              </View>
              <View style={{marginLeft: 40}}>
                <RadioButton
                  value="female"
                  color="#7f0ef4"
                  status={checked === 'female' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('female')}
                />
              </View>
              <View style={{marginTop: 6}}>
                <Text onPress={() => setChecked('female')}>Female</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={showDatePicker}
              style={{marginLeft: 19, marginTop: 15}}>
              <Text onPress={showDatePicker}>Date of Birth</Text>
              <View style={{flexDirection: 'row', top: 13}}>
                <Icon
                  type="FontAwesome"
                  name="calendar"
                  style={{fontSize: 20, color: 'grey'}}
                  onPress={showDatePicker}
                />
                <View style={{}}>
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                  />
                </View>
              </View>
              <View style={{marginLeft: 25, marginTop: -5}}>
                <Text>
                  {year != '' ? day + ' / ' + month + ' / ' + year : null}
                </Text>
              </View>
              <Text
                style={{marginBottom: -10}}
                onPress={showDatePicker}
                style={{color: '#8d9aaf'}}>
                _______________________________________
              </Text>
            </TouchableOpacity>
            <Form style={{marginLeft: 7}}>
              <Item floatingLabel last>
                <Label>Email ID</Label>
                <Input
                  onChangeText={(text) => setEmail(text)}
                  defaultValue={email}
                />
              </Item>
            </Form>

            <View
              style={{
                marginTop: 30,
                marginLeft: 20,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text>Share My Location</Text>
              <Switch
                trackColor={{false: '#767577', true: '#30d126'}}
                thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <ListItem style={{marginLeft: 20}}>
              <Checkbox
                status={checkedbox ? 'checked' : 'unchecked'}
                onPress={() => {
                  setCheckedbox(!checkedbox);
                }}
                color='#9e49f6'
              />
              <Body>
                <Text>I have read the Terms & Condition</Text>
              </Body>
            </ListItem>
          </View>

          <TouchableHighlight
            style={{
              // width: 338,
              borderRadius: 10,
              color: '#9e49f6',
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
            }}>
            <Button
              title="SIGN UP"
              color="#9e49f6"
              onPress={() => validation()}
            />
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f8fa',
    margin: 10,
  },
  innerContainer: {
    backgroundColor: 'white',
  },
  tinyLogo: {
    width: 150,
    height: 150,
    resizeMode: 'center',
    marginLeft: 120,
  },
});
