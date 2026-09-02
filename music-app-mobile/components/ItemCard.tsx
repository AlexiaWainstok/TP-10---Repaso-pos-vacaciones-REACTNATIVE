import { View, Text, Image, Pressable, StyleSheet } from "react-native";

type Props = {
  cancion: any;
  esFavorito: boolean;
  onAgregar: () => void;
  onQuitar: () => void;
};

export default function ItemCard({
  cancion,
  esFavorito,
  onAgregar,
  onQuitar,
}: Props) {
  const imagen = cancion.artworkUrl100
    ? cancion.artworkUrl100.replace("100x100bb", "300x300bb")
    : undefined;

  return (
    <View style={styles.card}>
      {imagen && (
        <Image
          source={{ uri: imagen }}
          style={styles.image}
        />
      )}

      <Text style={styles.title}>
        {cancion.trackName}
      </Text>

      <Text>🎤 Artista: {cancion.artistName}</Text>

      <Text>💿 Álbum: {cancion.collectionName}</Text>

      <Text>🏷️ Género: {cancion.primaryGenreName}</Text>

      <Pressable
        style={styles.button}
        onPress={esFavorito ? onQuitar : onAgregar}
      >
        <Text style={styles.buttonText}>
          {esFavorito
            ? "🗑️ Quitar de Favoritos"
            : "❤️ Agregar a Favoritos"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
  },

  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  button: {
    marginTop: 12,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#0059ff",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
