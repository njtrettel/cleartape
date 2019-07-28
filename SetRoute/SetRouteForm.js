import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';
import Toaster, { ToastStyles } from 'react-native-toaster';
import { postRoute } from '../actions';
import style from './style';

const grades = [{
  value: null, label: ''
}, {
  value: '0-2', label: 'v0-2'
}, {
  value: '3-5', label: 'v3-5'
}, {
  value: '6-8', label: 'v6-8'
}, {
  value: '9+', label: 'v9+'
}];

const validateRoute = (route) => {
  const requiredFields = ['name', 'grade', 'holds'];
  let errors = {};
  requiredFields.forEach(field => {
    if (!route[field] || !route[field].length) {
      errors[field] = true;
    }
  });
  return errors;
}

const SetRouteForm = (props) => {
  const initialRoute = props.navigation.getParam('route', {});
  const [name, setName] = useState(initialRoute.name || '');
  const [setter, setSetter] = useState(initialRoute.setter || '');
  const [grade, setGrade] = useState(initialRoute.grade || null);
  const [description, setDescription] = useState(initialRoute.description || '');
  const holds = initialRoute.holds || [];

  const [formErrors, setFormErrors] = useState({});
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const route = {
    name, setter, grade, description, holds
  };

  const submit = (e) => {
    const errors = validateRoute(route);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return false;
    }
    setSubmitLoading(true);
    postRoute(route).then((response) => {
      setSubmitLoading(false);
      props.navigation.reset([NavigationActions.navigate({ routeName: 'Home' })], 0);
    }).catch(error => {
      setSubmitLoading(false);
      setSubmitError('Error: Could not create route');
      setSubmitError(null);
    });
  };

  return (
    <View style={{ flex: 1 }}>
      {submitError && <Toaster message={{ text: submitError, styles: ToastStyles.error }} />}
      <TextInput
        style={style.textInput(formErrors.name ? 'red': 'rgba(0,0,0,.3)')}
        placeholder="Name"
        value={name}
        placeholderTextColor={formErrors.name ? 'red': 'rgba(0,0,0,.3)'}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={style.textInput('rgba(0,0,0,.3)')}
        value={setter}
        placeholder="Setter (optional)"
        placeholderTextColor="rgba(0,0,0,.3)"
        onChangeText={(text) => setSetter(text)}
      />
      <View style={style.row}>
        <Dropdown
          labelFontSize={24}
          baseColor={formErrors.grade ? 'red' : 'rgba(0,0,0,.3)'}
          fontSize={20}
          animationDuration={100}
          value={grade}
          label="Grade"
          onChangeText={(text) => setGrade(text)}
          data={grades}
          containerStyle={style.dropdown}
        />
        <TouchableOpacity
          style={style.button(formErrors.holds ? 'red' : 'rgba(70,130,180,.8)')}
          onPress={() => props.navigation.replace('PickHolds', { route })}
        >
          <Text style={style.buttonText}>Pick Holds</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={style.descriptionInput}
        textAlignVertical="top"
        multiline={true}
        numberOfLines={6}
        value={description}
        placeholder="Description (optional)"
        placeholderTextColor="rgba(0,0,0,.3)"
        onChangeText={(text) => setDescription(text)}
      />
      <TouchableOpacity style={style.submit} onPress={submit}>
        {submitLoading
          ? <ActivityIndicator size="large" color="white" />
          : <Text style={style.submitText}>Submit</Text>
        }
      </TouchableOpacity>
    </View>
  )
};

export default SetRouteForm;
