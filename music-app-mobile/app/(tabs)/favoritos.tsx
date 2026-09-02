import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import ItemList from "../../components/ItemList";

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState<any[]>([]);

  useEffect(() => {
    cargarFavoritos();
  }, []);

  const cargarFavoritos = async () => {
    const guardados = await AsyncStorage.getItem("favoritos");

    if (guardados) {
      setFavoritos(JSON.parse(guardados));
    }
  };

  const quitarDeFavoritos = async (id: number) => {
    const nuevos = favoritos.filter(
      (fav) => fav.trackId !== id
    );

    setFavoritos(nuevos);

    await AsyncStorage.setItem(
      "favoritos",
      JSON.stringify(nuevos)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        ⭐ Mis Canciones Favoritas
      </Text>

      {favoritos.length === 0 ? (
        <Text style={styles.mensaje}>
          No tienes canciones guardadas en favoritos.
        </Text>
      ) : (
        <ItemList
          canciones={favoritos}
          favoritos={favoritos}
          onAgregar={() => {}}
          onQuitar={quitarDeFavoritos}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },

  mensaje: {
    textAlign: "center",
    margin: 20,
  },
});
