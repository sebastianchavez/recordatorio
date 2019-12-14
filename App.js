import React from 'react';
import { StyleSheet, Text, View, FlatList, Modal, TextInput } from 'react-native';
import datos from './Datos'
import Item from './Item'
import Button from './Button'

export default class App extends React.Component {
  state = {
    data: datos,
    isVisible: false
  }

  handlePress = () => {
    this.setState({isVisible: true})
  }

  render(){
    const {data} = this.state
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Recordatorio</Text>
        </View>
        <View style={styles.view}>
          <Button title="Agregar" onPress={this.handlePress}/>
        </View>
        <FlatList 
          data={data}
          renderItem={Item}
        />
        <Modal animationType="slide" visible={true}>
          <View style={[styles.container, styles.center, styles.gray]}>
            <Text style={styles.modalTitle}>Ingrese recordatorio</Text>
            <TextInput style={styles.input} placeholder="Recordatorio..."/> 
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    height: 100,
    borderBottomWidth:1,
    borderBottomColor: '#ddd',
  },
  title: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 28
  },
  view: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15
  },
  gray: {
    backgroundColor: '#eee'
  },
  modalTitle: {
    fontSize: 28
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 15
  }
});
