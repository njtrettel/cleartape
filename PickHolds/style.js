export default {
  buttonsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 60,
    paddingLeft: 50,
    paddingRight: 50,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center'
  },
  button: (opacity, color, width) => ({
    justifyContent: 'center',
    height: 50,
    width,
    backgroundColor: color,
    borderRadius: 8,
    opacity,
  }),
  toggle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  },
  icon: {
    color: 'white',
    fontSize: 32
  },
  submitContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 20,
    zIndex: 100
  },
  submit: {
    height: 50,
    width: 100,
    borderRadius: 8,
    backgroundColor: 'rgb(70,130,180)',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  submitText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  }
};
