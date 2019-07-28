export default {
  textInput: (color) => ({
    marginBottom: 24,
    fontSize: 24,
    height: 40,
    borderBottomColor: color,
    borderBottomWidth: 1
  }),
  descriptionInput: {
    flex: 1,
    marginBottom: 24,
    padding: 8,
    fontSize: 24,
    borderColor: 'rgba(0,0,0,.5)',
    borderWidth: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: (color) => ({
    height: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    marginLeft: 16,
    backgroundColor: color
  }),
  buttonText: {
    color: 'white'
  },
  dropdown: {
    flex: 1,
    marginBottom: 24
  },
  submit: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: 'rgba(70,180,130,.8)'
  },
  submitText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24
  }
};
