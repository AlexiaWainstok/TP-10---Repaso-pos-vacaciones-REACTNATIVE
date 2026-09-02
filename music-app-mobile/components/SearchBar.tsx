import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";

type Props = {
  busqueda: string;
  setBusqueda: (texto: string) => void;
  onBuscar: () => void;
};

export default function SearchBar({
  busqueda,
  setBusqueda,
  onBuscar,
}: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar artista, canción o álbum..."
        value={busqueda}
        onChangeText={setBusqueda}
      />

      <Pressable style={styles.button} onPress={onBuscar}>
        <Text style={styles.buttonText}>Buscar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#0059ff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
