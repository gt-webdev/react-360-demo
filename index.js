import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Model
} from 'react-360';

export default class my_vr extends React.Component {
  render() {
    return (
      <View>
        <Model
         source={{
           obj: './static_assets/buzz/buzz.obj',
           mtl: './static_assets/buzz/buzz.mtl'
         }}

         style={{
            transform: [
              {translate: [0, -2, -2]}
            ]
         }}
        
        ></Model>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('my_vr', () => my_vr);
