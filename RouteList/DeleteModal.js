import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import style from './style';

const deleteMessage = `Because this app does not track users, there's no way to know if \
you created this route. Please respect the community and do not delete routes that you \
did not create.`

const DeleteModal = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setOpen(true)} style={style.bottomRight}>
        <FontAwesome style={[style.icon, style.iconMedium]} size={20} name="trash-o" />
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={open}>
        <View style={style.modalContainer}>
          <View style={style.modal}>
            <Text style={style.modalHeader}>Are you sure?</Text>
            <Text style={style.modalBody}>{deleteMessage}</Text>
            <View style={style.modalActions}>
              <TouchableOpacity style={[style.modalButton, style.secondaryButton]} onPress={() => setOpen(false)}>
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[style.modalButton, style.primaryButton]} onPress={() => setOpen(false)}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DeleteModal;
