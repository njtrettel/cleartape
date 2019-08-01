import {
  SCREEN_BACKGROUND_COLOR,
  ROUTE_BUTTON_COLOR,
  PLACEHOLDER_COLOR
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
    marginBottom: 8
  },
  button: {
    height: 40,
    width: 100,
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
    marginRight: 16
  },
  search: {
    backgroundColor: 'white',
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingLeft: 16,
    // paddingRight: 16
  },
  filterOption: {
    flexDirection: 'row'
  },
  filterOptionLabel: {
    color: PLACEHOLDER_COLOR
  },
  filterOptionPlaceholder: {
    width: 100
  },
  dropdown: {
    marginTop: -34,
    marginBottom: 8,
    marginLeft: 16,
    width: 100
  }
};
