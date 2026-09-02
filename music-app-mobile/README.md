# 🎵 Music App Mobile

Aplicación móvil desarrollada con **React Native y Expo** como parte del TP-10 - Repaso post vacaciones.

## 👥 Integrantes

* Alexia Wainstok
* Milena

## 🌐 API utilizada

Para obtener la información de las canciones utilizamos la **iTunes Search API**.

La aplicación realiza búsquedas de canciones utilizando el término ingresado por el usuario y obtiene información como:

* Nombre de la canción.
* Artista.
* Álbum.
* Género musical.
* Imagen de la canción.

La conexión con la API se realiza utilizando **Axios**. La aplicación consulta hasta 30 resultados por búsqueda.

## 📱 Descripción de la aplicación

**Music App Mobile** es una aplicación móvil que permite buscar canciones y consultar información sobre ellas.

Al iniciar la aplicación se realiza una búsqueda inicial de canciones de rock. Luego, el usuario puede escribir un término en el buscador para encontrar otras canciones.

Cada resultado se muestra en una tarjeta con la información de la canción y una imagen. Además, el usuario puede agregar canciones a una lista de **Favoritos** o quitarlas de ella.

Los favoritos se guardan utilizando **AsyncStorage**, por lo que permanecen guardados aunque se cierre la aplicación.

## 🧩 Organización de los componentes

Organizamos el proyecto separando las distintas partes de la aplicación para que el código sea más fácil de entender y mantener.

Dentro de `components` se encuentran los componentes reutilizables:

* **Header:** muestra el encabezado de la aplicación.
* **SearchBar:** contiene el buscador y permite ingresar el término que queremos buscar.
* **ItemList:** se encarga de mostrar la lista de canciones utilizando `FlatList`.
* **ItemCard:** representa cada canción individualmente y muestra su información y el botón para agregarla o quitarla de favoritos.

Las pantallas principales se encuentran dentro de la carpeta `app`, utilizando **Expo Router** para organizar la navegación.

También tenemos una carpeta `services`, donde se encuentra `api.ts`. Allí dejamos separada la lógica encargada de comunicarse con la API. De esta manera, la pantalla principal no necesita manejar directamente las llamadas HTTP.

Por ejemplo, cuando el usuario busca una canción, la pantalla llama a `searchMusic()` del archivo `api.ts`, que se encarga de consultar la API y devolver los resultados.

## ⚙️ Funcionalidades implementadas

* 🔎 Búsqueda de canciones mediante la iTunes Search API.
* 🎵 Visualización de nombre, artista, álbum y género.
* 🖼️ Visualización de la imagen de cada canción.
* 📋 Listado de resultados mediante `FlatList`.
* ❤️ Agregar canciones a favoritos.
* 🗑️ Quitar canciones de favoritos.
* 💾 Guardado de favoritos con `AsyncStorage`.
* 🔄 Recuperación de favoritos al iniciar la aplicación.
* ⏳ Mensaje de carga mientras se realiza una búsqueda.
* ⚠️ Mensaje de error si no se puede obtener la información.
* 📱 Interfaz adaptada para una aplicación móvil.

## ⚛️ Diferencias entre React y React Native

Una de las principales diferencias que encontramos fue que, aunque **React y React Native utilizan componentes, props, estados y hooks de una forma muy parecida**, la manera de construir la interfaz es diferente.

En **React** normalmente trabajamos con elementos HTML como `div`, `button`, `input` e imágenes HTML. En cambio, en **React Native** utilizamos componentes propios como `View`, `Text`, `Image`, `Pressable`, `TextInput` y `FlatList`.

Por ejemplo, en React podríamos usar un `<div>` para agrupar elementos, mientras que en React Native usamos un `<View>`.

También cambia la forma de aplicar estilos. En React podemos utilizar archivos CSS y propiedades como `className`, mientras que en React Native usamos principalmente `StyleSheet` y estilos escritos como objetos de JavaScript/TypeScript.

Otra diferencia importante es que React Native está pensado principalmente para dispositivos móviles, por lo que también tenemos que considerar aspectos propios de estos dispositivos, como el tamaño de la pantalla, la navegación mediante gestos y componentes adaptados para Android e iOS.

En este proyecto, por ejemplo, utilizamos `FlatList` para mostrar las canciones de forma eficiente y `AsyncStorage` para guardar los favoritos en el dispositivo.

En conclusión, la lógica de React nos resultó bastante familiar porque seguimos utilizando conceptos como **componentes, estados, props y hooks**, pero React Native cambia principalmente la forma en la que construimos y diseñamos la interfaz para adaptarla a dispositivos móviles.
