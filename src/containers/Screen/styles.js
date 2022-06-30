import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 100,
    backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 23,
    paddingHorizontal: 15,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 23,
    flex: 1,
    marginLeft: 125,
  },
  back: {
    textDecorationLine: 'underline',
    color: '#373737',
    fontSize: 15,
  },
});
