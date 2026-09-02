import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import ItemList from "../../components/ItemList";
import { searchMusic } from "../../services/api";

export default function Home() {
  const [busqueda, setBusqueda] = useState("");
  const [canciones, setCanciones] = useState<any[]>([]);
  const [favoritos, setFavoritos] = useState<any[]>([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    cargarFavoritos();
    buscar("rock");
  }, []);

  const cargarFavoritos = async () => {
    const guardados = await AsyncStorage.getItem("favoritos");

    if (guardados) {
      setFavoritos(JSON.parse(guardados));
    }
  };

  const guardarFavoritos = async (nuevosFavoritos: any[]) => {
    setFavoritos(nuevosFavoritos);

    await AsyncStorage.setItem(
      "favoritos",
      JSON.stringify(nuevosFavoritos)
    );
  };

  const buscar = async (termino = busqueda) => {
    if (!termino.trim()) return;

    setCargando(true);
    setError("");

    try {
      const resultados = await searchMusic(termino);
      setCanciones(resultados);
    } catch (err) {
      console.error(err);
      setError("No fue posible obtener la información.");
    } finally {
      setCargando(false);
    }
  };

  const agregarAFavoritos = (cancion: any) => {
    const existe = favoritos.some(
      (fav) => fav.trackId === cancion.trackId
    );

    if (!existe) {
      guardarFavoritos([...favoritos, cancion]);
    }
  };

  const quitarDeFavoritos = (id: number) => {
    const nuevos = favoritos.filter(
      (fav) => fav.trackId !== id
    );

    guardarFavoritos(nuevos);
  };

  return (
    <View style={styles.container}>
      <Header />

      <SearchBar
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        onBuscar={() => buscar()}
      />

      {cargando && (
        <Text style={styles.mensaje}>
          Cargando información...
        </Text>
      )}

      {error !== "" && (
        <Text style={styles.error}>
          {error}
        </Text>
      )}

      {!cargando && !error && (
        <ItemList
          canciones={canciones}
          favoritos={favoritos}
          onAgregar={agregarAFavoritos}
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

  mensaje: {
    textAlign: "center",
    margin: 20,
  },

  error: {
    textAlign: "center",
    margin: 20,
  },
});
