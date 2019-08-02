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
    paddingLeft: 48,
    paddingRight: 16
  },
  empty: {
    flex: 1
  },
  emptyText: {
    fontSize: 32,
    marginTop: '45%',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'grey'
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
    flexGrow: 0,
    marginLeft: 8,
    marginRight: 8
  },
  iconMedium: {
    height: 20
  },
  bottomRight: {
    alignSelf: 'flex-end',
    marginTop: -24,
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
  }),
  modalContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255,255,255,.8)'
  },
  modal: {
    position: 'absolute',
    top: '35%',
    bottom: '35%',
    left: '5%',
    right: '5%',
    backgroundColor: 'rgba(220,110,110,1)',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32
  },
  modalHeader: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16
  },
  modalBody: {
    flex: 1,
    margin: 'auto'
  },
  modalActions: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  modalButton: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    marginLeft: 16
  },
  primaryButton: {
    backgroundColor: 'rgba(255,0,0,1)',
    color: 'white'
  },
  secondaryButton: {
    backgroundColor: 'rgba(255,255,255,1)'
  }
};
