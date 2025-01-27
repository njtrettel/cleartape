import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';
import Toaster, { ToastStyles } from 'react-native-toaster';
import { postRoute } from '../actions';
import style from './style';
import { HOLDS_BUTTON_COLOR, PLACEHOLDER_COLOR } from '../style';

import { grades } from '../util';

const gradesWithNull = [{ value: null, label: '' }, ...grades];

const validateRoute = (route) => {
  const requiredFields = ['name', 'grade', 'holds'];
  let errors = {};
  requiredFields.forEach(field => {
    if (!route[field] || !route[field].length) {
      errors[field] = true;
    }
  });
  return errors;
};

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

  const submit = () => {
    const errors = validateRoute(route);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return false;
    }
    setSubmitLoading(true);
    postRoute(route).then(() => {
      setSubmitLoading(false);
      props.navigation.reset([NavigationActions.navigate({ routeName: 'Home' })], 0);
    }).catch(() => {
      setSubmitLoading(false);
      setSubmitError('Error: Could not create route');
    });
  };

  return (
    <View style={{ flex: 1 }}>
      {submitError && <Toaster message={{ text: submitError, styles: ToastStyles.error }} />}
      <TextInput
        style={style.textInput(formErrors.name ? 'red': PLACEHOLDER_COLOR)}
        placeholder="Name"
        value={name}
        placeholderTextColor={formErrors.name ? 'red': PLACEHOLDER_COLOR}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={style.textInput(PLACEHOLDER_COLOR)}
        value={setter}
        placeholder="Setter (optional)"
        placeholderTextColor={PLACEHOLDER_COLOR}
        onChangeText={(text) => setSetter(text)}
      />
      <View style={style.row}>
        <Dropdown
          labelFontSize={24}
          baseColor={formErrors.grade ? 'red' : PLACEHOLDER_COLOR}
          fontSize={20}
          value={grade}
          label="Grade"
          onChangeText={(text) => setGrade(text)}
          data={gradesWithNull}
          containerStyle={style.dropdown}
        />
        <TouchableOpacity
          style={style.button(formErrors.holds ? 'red' : HOLDS_BUTTON_COLOR)}
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
        placeholderTextColor={PLACEHOLDER_COLOR}
        onChangeText={(text) => setDescription(text)}
      />
      <TouchableOpacity style={style.submit} onPress={submit}>
        {submitLoading
          ? <ActivityIndicator size="large" color="white" />
          : <Text style={style.submitText}>Submit</Text>
        }
      </TouchableOpacity>
    </View>
  );
};

SetRouteForm.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default SetRouteForm;
