import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/use-theme-color';

type Props = {
  busqueda: string;
  setBusqueda: (texto: string) => void;
  onBuscar: () => void;
};

export default function SearchBar({ busqueda, setBusqueda, onBuscar }: Props) {
  const inputBg = useThemeColor({}, 'inputBg');
  const inputBorder = useThemeColor({}, 'inputBorder');
  const textColor = useThemeColor({}, 'text');
  const searchBtnBg = useThemeColor({}, 'searchBtn');

  return (
    <View style={[styles.container, { backgroundColor: inputBg, borderColor: inputBorder }]}>
      <TextInput
        style={[styles.input, { color: textColor }]}
        placeholder="Buscar artista, canción o álbum..."
        placeholderTextColor="#6a727a"
        value={busqueda}
        onChangeText={setBusqueda}
      />

      <TouchableOpacity style={[styles.button, { backgroundColor: searchBtnBg }]} onPress={onBuscar}>
        <Text style={[styles.buttonText, { color: textColor }]}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingLeft: 14,
    paddingRight: 6,
    paddingVertical: 4,
    borderWidth: 1,
    marginVertical: 16,
  },
  input: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 6,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 13,
  },
});