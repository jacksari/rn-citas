import React, {useState} from 'react';

import {
    Text,
    StyleSheet,
    TextInput,
    View,
  } from 'react-native';

const ViewInput = ({text, form, setForm, id, type, placeholder, area, maxL}) => {
  return (
    <View style={style.campo}>
      <Text style={style.label}>{ text }:</Text>
      <TextInput
        placeholder={placeholder ? placeholder : 'Ingrese campo por favor'}
        placeholderTextColor={'#666'}
        style={[style.input, area ? style.area : {}]}
        value={form[`${id}`]}
        keyboardType={ type ? type : 'default' }
        onChangeText={t => setForm({...form, [id]: t})}
        multiline={area ? true : false}
        numberOfLines={area ? 4 : 1}
        maxLength={maxL ? maxL : null}
      />
    </View>
  );
};

const style = StyleSheet.create({
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
    },
    area: {
        paddingTop: 0,
        height: 100,
        marginTop: 0
    }
  });

export default ViewInput;
