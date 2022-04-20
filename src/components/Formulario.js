import React, {useState} from 'react';
import {
  Modal,
  Text,
  Pressable,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  View,
} from 'react-native';
import ViewInput from './ViewInput';

import DatePicker from 'react-native-date-picker';

const Formulario = ({openModal, setOpenModal}) => {
  const [form, setForm] = useState({
    paciente: '',
    propietario: '',
    email: '',
    telefono: '',
    sintomas: '',
  });

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <Modal animationType="fade" visible={openModal}>
      <SafeAreaView style={style.contenido}>
        <ScrollView>
          <View>
            <Text style={style.titulo}>
              Nueva <Text style={style.tituloBold}>Cita</Text>
            </Text>
            <Pressable
              style={style.closeModalContainer}
              onPress={() => setOpenModal(false)}>
                
              <Text style={style.closeModal}>X</Text>
            </Pressable>
          </View>

          <ViewInput
            text={'Nombre paciente'}
            placeholder={'Nombre de paciente'}
            form={form}
            setForm={setForm}
            id={'paciente'}
          />

          <ViewInput
            text={'Nombre propietario'}
            placeholder={'Nombre de propietario'}
            form={form}
            setForm={setForm}
            id={'propietario'}
          />

          <ViewInput
            text={'Email de propietario'}
            placeholder={'Email de propietario'}
            form={form}
            setForm={setForm}
            id={'email'}
            type="email-address"
          />

          <ViewInput
            text={'Teléfono propietario'}
            placeholder={'Teléfono de propietario'}
            form={form}
            setForm={setForm}
            id={'telefono'}
            type="number-pad"
            maxL={10}
          />

          <ViewInput
            text={'Síntomas paciente'}
            placeholder={'Síntomas de paciente'}
            form={form}
            setForm={setForm}
            id={'sintomas'}
            area
          />

          <View style={style.campo}>
            <Text style={style.label}>Fecha:</Text>
            <Button title="Seleccionar fecha" onPress={() => setOpen(true)} />
            <Text style={[style.input, {marginTop: 15}]}>
              {date.getDate()}-
              {date.getMonth() > 9 ? date.getMonth() : `0${date.getMonth()}`}-
              {date.getFullYear()}
            </Text>
          </View>

          <DatePicker
            locale="es"
            mode="date"
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
              console.log('date: ', date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />

          <Pressable
            style={[style.btnNuevaCita, { backgroundColor: '#f59e0b', marginBottom: 30 }]}>
            <Text style={[style.btnTextoNuevaCita, { color: '#5827a4' }]}>Agregar cita</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const style = StyleSheet.create({
  contenido: {
    backgroundColor: '#6d28d9',
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20,
    marginTop: 30,
  },
  tituloBold: {
    fontWeight: '900',
    marginVertical: 30,
  },
  campo: {
    marginTop: 0,
    marginHorizontal: 30,
    marginBottom: 10,
    //backgroundColor: 'green'
  },
  label: {
    color: '#fff',
    marginBottom: 10,
    marginTop: 5,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 0,
  },
  btnNuevaCita: {
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    color: '#6d28d9',
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#6d28d9',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  closeModalContainer: {
    position: 'absolute',
    right: 30,
    top: 30,
  },
  closeModal: {
    color: 'red',
    fontSize: 20,
    fontWeight: '900',
    borderWidth: 4,
    borderRadius: 20,
    borderColor: 'red',
    width: 40,
    height: 40,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 5,
  }
});

export default Formulario;
