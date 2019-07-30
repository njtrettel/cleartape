const HOLD_SIZE = 14;
const HOLD_CENTER = HOLD_SIZE / 2;

export default {
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    zIndex: 0
  },
  image: (height) => ({
    width: '100%',
    height
  }),
  hold: (x, y, borderColor) => ({
    position: 'absolute',
    left: x - HOLD_CENTER,
    top: y - HOLD_CENTER,
    borderColor,
    width: HOLD_SIZE,
    height: HOLD_SIZE,
    borderRadius: 100,
    borderWidth: 2
  })
};
