export default {
  container: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row'
  },
  content: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 48
  },
  text: {
    fontSize: 20,
    flexGrow: 1
  },
  title: {
    flexDirection: 'row'
  },
  icon: {
    alignSelf: 'center',
    flexGrow: 0
  },
  expanded: {
    backgroundColor: 'rgba(255,255,255,.5)'
  },
  collapsed: {
    backgroundColor: 'transparent'
  },
  circle: (color) => ({
    backgroundColor: color,
    borderRadius: 100,
    alignSelf: 'stretch',
    width: 16,
    height: 16,
    alignSelf: 'center',
    marginRight: 16
  })
};
