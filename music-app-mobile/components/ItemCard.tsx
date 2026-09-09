import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

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
  const theme = useColorScheme() ?? 'dark';
  const themeColors = Colors[theme] || Colors.dark;

  const imagen = cancion?.artworkUrl100
    ? cancion.artworkUrl100.replace('100x100bb', '300x300bb')
    : cancion?.image;

  return (
    <View style={[styles.card, { backgroundColor: themeColors.surface, borderColor: themeColors.cardBorder }]}>
      {imagen && (
        <View style={styles.imageWrapper}>
          <Image source={{ uri: imagen }} style={styles.image} resizeMode="cover" />
        </View>
      )}

      <View style={styles.info}>
        <Text style={[styles.title, { color: themeColors.text }]} numberOfLines={1}>
          {cancion.trackName || cancion.title}
        </Text>
        <Text style={[styles.subtext, { color: themeColors.textSecondary }]} numberOfLines={1}>
          Nombre del artista: {cancion.artistName || cancion.artist}
        </Text>
        <Text style={[styles.subtext, { color: themeColors.textSecondary }]} numberOfLines={1}>
          Nombre del álbum: {cancion.collectionName || cancion.album}
        </Text>

        {(cancion.primaryGenreName || cancion.genre) && (
          <View style={[styles.genreBadge, { backgroundColor: themeColors.cardBorder }]}>
            <Text style={[styles.genreText, { color: themeColors.primary }]}>
              {cancion.primaryGenreName || cancion.genre}
            </Text>
          </View>
        )}
      </View>

      <TouchableOpacity
        style={[
          styles.btnFav,
          { backgroundColor: themeColors.primary },
          esFavorito && { backgroundColor: themeColors.danger },
        ]}
        onPress={esFavorito ? onQuitar : onAgregar}
      >
        <Text style={[styles.btnText, esFavorito && { color: themeColors.text }]}>
          {esFavorito ? '❌ Quitar de Favoritos' : '❤️ Agregar a Favoritos'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
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
  },
  subtext: {
    fontSize: 14,
  },
  genreBadge: {
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginTop: 4,
  },
  genreText: {
    fontSize: 12,
    fontWeight: '600',
  },
  btnFav: {
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  btnText: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 14,
  },
});