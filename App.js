import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  StyleSheet,
  Pressable,
  Modal
} from 'react-native';

const App = () => {
  const [name, setName] = useState('Jack');
  const [openModal, setOpenModal] = useState(false)

  const nuevacita = () => {
    console.log('Press');
    setOpenModal(true)
  };

  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text style={style.titulo}>
          Administrador de citas{' '}
          <Text style={style.tituloBold}>Veterinaria</Text>
        </Text>
        <Pressable style={style.btnNuevaCita} onPress={nuevacita}>
          <Text style={style.btnTextoNuevaCita}>Nueva cita</Text>
        </Pressable>

        <Modal
          animationType='fade'
          visible={openModal}
        >
          <Text>Desde modal</Text>
          <Pressable style={style.btnNuevaCita} onPress={() => setOpenModal(false)}>
          <Text style={style.btnTextoNuevaCita}>Eliminar modal</Text>
        </Pressable>
        </Modal>

      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#f3f4f6',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: '600',
    color: '#374151',
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6d28d9',
  },
  btnNuevaCita: {
    backgroundColor: '#6d28d9',
    padding: 15,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
});

export default App;
