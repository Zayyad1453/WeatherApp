
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import weatherReducer from './src/store/reducer/weatherReducer';
import Index from './src/components/index';


const store = createStore(weatherReducer, applyMiddleware(thunk));

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Index/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;