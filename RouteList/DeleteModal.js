import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import { withNavigation, NavigationActions } from 'react-navigation';
import Toaster, { ToastStyles } from 'react-native-toaster';
import { FontAwesome } from '@expo/vector-icons';
import { deleteRoute } from '../actions';
import style from './style';

const deleteMessage = `Because this app does not track users, there's no way to know if \
you created this route. Please respect the community and do not delete routes that you \
did not create.`

const DeleteModal = ({ route, navigation }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onDelete = () => {
    setLoading(true);
    return deleteRoute(route).then(() => {
      setLoading(false);
      setOpen(false);
      navigation.reset([NavigationActions.navigate({ routeName: 'Home' })], 0);
    }).catch(error => {
      setLoading(false);
      setError('Error: Could not delete route');
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setOpen(true)} style={style.bottomRight}>
        <FontAwesome style={[style.icon, style.iconMedium]} size={20} name="trash-o" />
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={open}>
        {error && <Toaster message={{ text: error, styles: ToastStyles.error }} />}
        <View style={style.modalContainer}>
          <View style={style.modal}>
            <Text style={style.modalHeader}>Are you sure?</Text>
            <Text style={style.modalBody}>{deleteMessage}</Text>
            <View style={style.modalActions}>
              <TouchableOpacity style={[style.modalButton, style.secondaryButton]} onPress={() => setOpen(false)}>
                <Text style={style.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[style.modalButton, style.primaryButton]} onPress={onDelete}>
                {loading
                  ? <ActivityIndicator size="small" color="white" />
                  : <Text style={style.modalButtonText}>Delete</Text>
                }
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default withNavigation(DeleteModal);
