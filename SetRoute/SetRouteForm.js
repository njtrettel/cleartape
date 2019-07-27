import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import style from './style';

const grades = [{
  value: '0-2', label: 'v0-2'
}, {
  value: '3-5', label: 'v3-5'
}, {
  value: '6-8', label: 'v6-8'
}, {
  value: '9+', label: 'v9+'
}];

const SetRouteForm = (props) => {
  const initialRoute = props.navigation.getParam('route', {});
  const [name, setName] = useState(initialRoute.name || '');
  const [setter, setSetter] = useState(initialRoute.setter || '');
  const [grade, setGrade] = useState(initialRoute.grade || '0-2');
  const [description, setDescription] = useState(initialRoute.description || '');
  const holds = initialRoute.holds || [];

  const route = {
    name, setter, grade, description, holds
  };

  const submit = () => {

  };

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={style.textInput}
        placeholder="Name"
        value={name}
        placeholderTextColor="rgba(0,0,0,.3)"
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={style.textInput}
        value={setter}
        placeholder="Setter"
        placeholderTextColor="rgba(0,0,0,.3)"
        onChangeText={(text) => setSetter(text)}
      />
      <View style={style.row}>
        <Dropdown
          labelFontSize={24}
          baseColor='rgba(0,0,0,.3)'
          fontSize={20}
          animationDuration={100}
          value={grade}
          label="Grade"
          onChangeText={(text) => setGrade(text)}
          data={grades}
          containerStyle={style.dropdown}
        />
        <TouchableOpacity style={style.button} onPress={() => props.navigation.replace('PickHolds', { route })}>
          <Text style={style.buttonText}>Pick Holds</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={style.descriptionInput}
        textAlignVertical="top"
        multiline={true}
        numberOfLines={6}
        value={description}
        placeholder="Description"
        placeholderTextColor="rgba(0,0,0,.3)"
        onChangeText={(text) => setDescription(text)}
      />
      <TouchableOpacity style={style.submit} onPress={submit}>
        <Text style={style.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
};

export default SetRouteForm;
