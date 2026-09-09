import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/theme';

type Props = {
  busqueda: string;
  setBusqueda: (texto: string) => void;
  onBuscar: () => void;
};

export default function SearchBar({ busqueda, setBusqueda, onBuscar }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar artista, canción o álbum..."
        placeholderTextColor="#6a727a"
        value={busqueda}
        onChangeText={setBusqueda}
      />

      <TouchableOpacity style={styles.button} onPress={onBuscar}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.inputBg,
    borderRadius: 20,
    paddingLeft: 14,
    paddingRight: 6,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    marginVertical: 16,
  },
  input: {
    flex: 1,
    color: Colors.text,
    fontSize: 14,
    paddingVertical: 6,
  },
  button: {
    backgroundColor: Colors.searchBtn,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  buttonText: {
    color: Colors.text,
    fontWeight: '600',
    fontSize: 13,
  },
});