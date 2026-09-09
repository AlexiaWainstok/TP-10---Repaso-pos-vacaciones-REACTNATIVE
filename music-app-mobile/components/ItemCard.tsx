import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '@/constants/theme';

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
  // Ajuste de resolución de la imagen de iTunes
  const imagen = cancion?.artworkUrl100
    ? cancion.artworkUrl100.replace('100x100bb', '300x300bb')
    : cancion?.image;

  return (
    <View style={styles.card}>
      {imagen && (
        <View style={styles.imageWrapper}>
          <Image source={{ uri: imagen }} style={styles.image} resizeMode="cover" />
        </View>
      )}

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {cancion.trackName || cancion.title}
        </Text>
        <Text style={styles.subtext} numberOfLines={1}>
          Nombre del artista: {cancion.artistName || cancion.artist}
        </Text>
        <Text style={styles.subtext} numberOfLines={1}>
           Nombre del álbum: {cancion.collectionName || cancion.album}
        </Text>
        
        {(cancion.primaryGenreName || cancion.genre) && (
          <View style={styles.genreBadge}>
            <Text style={styles.genreText}>
                {cancion.primaryGenreName || cancion.genre}
            </Text>
          </View>
        )}
      </View>

      <TouchableOpacity
        style={[styles.btnFav, esFavorito && styles.btnQuitar]}
        onPress={esFavorito ? onQuitar : onAgregar}
      >
        <Text style={[styles.btnText, esFavorito && styles.btnQuitarText]}>
          {esFavorito ? '❌ Quitar de Favoritos' : '❤️ Agregar a Favoritos'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    marginBottom: 16,
  },
  imageWrapper: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  info: {
    gap: 4,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
  },
  subtext: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  genreBadge: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.cardBorder,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginTop: 4,
  },
  genreText: {
    color: Colors.primary,
    fontSize: 12,
    fontWeight: '600',
  },
  btnFav: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  btnText: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 14,
  },
  btnQuitar: {
    backgroundColor: Colors.danger,
  },
  btnQuitarText: {
    color: Colors.text,
  },
});