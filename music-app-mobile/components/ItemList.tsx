import { FlatList } from "react-native";
import ItemCard from "./ItemCard";

type Props = {
  canciones: any[];
  favoritos: any[];
  onAgregar: (cancion: any) => void;
  onQuitar: (id: number) => void;
};

export default function ItemList({
  canciones,
  favoritos,
  onAgregar,
  onQuitar,
}: Props) {
  return (
    <FlatList
      data={canciones}
      keyExtractor={(item) => item.trackId.toString()}
      renderItem={({ item }) => {
        const esFavorito = favoritos.some(
          (fav) => fav.trackId === item.trackId
        );

        return (
          <ItemCard
            cancion={item}
            esFavorito={esFavorito}
            onAgregar={() => onAgregar(item)}
            onQuitar={() => onQuitar(item.trackId)}
          />
        );
      }}
    />
  );
}
