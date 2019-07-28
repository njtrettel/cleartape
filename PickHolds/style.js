const HOLD_SIZE = 14;
const HOLD_CENTER = HOLD_SIZE / 2;

export default {
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    zIndex: 0
  },
  image: {
    flex: 1,
    width: '100%',
    height: 'auto',
    margin: 'auto'
  },
  buttonsContainer: {
    marginBottom: -100,
    paddingTop: 20,
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
  hold: (x, y, borderColor) => ({
    position: 'absolute',
    left: x - HOLD_CENTER,
    top: y - HOLD_CENTER,
    borderColor,
    width: HOLD_SIZE,
    height: HOLD_SIZE,
    borderRadius: 100,
    borderWidth: 2
  }),
  submitContainer: {
    marginTop: -90,
    marginBottom: 20,
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
