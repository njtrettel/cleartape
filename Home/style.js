import {
  SCREEN_BACKGROUND_COLOR,
  ROUTE_BUTTON_COLOR
} from '../style';

export default {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: SCREEN_BACKGROUND_COLOR
  },
  loading: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16
  },
  button: {
    height: 40,
    paddingLeft: 16,
    paddingRight: 16,
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: ROUTE_BUTTON_COLOR
  },
  buttonText: {
    color: 'white'
  },
  searchContainer: {
    flex: 1,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  search: {
    backgroundColor: 'white',
    borderWidth: 0,
    borderColor: 'white'
  }
};
