import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function App() {
  const [envioSeleccionado, setEnvioSeleccionado] = useState(null);

  const handlePresionarBoton = (opcion) => {
    console.log('Opción seleccionada:', opcion);
    setEnvioSeleccionado(opcion);
    // Aquí puedes definir la navegación para cada botón
    // Por ejemplo, navigation.navigate('YourScreenName');
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        {/* Utiliza el ícono de menú en lugar de la imagen */}
        <TouchableOpacity style={styles.iconoMenu}>
          <Feather name="menu" size={30} color="black" />
        </TouchableOpacity>
        {/* Aquí se coloca el texto "Registra tu envío" más pequeño */}
        <Text style={styles.subtitulo}>Registra tu envío</Text>
        {/* Aquí se coloca la casita a la derecha y un poco más abajo */}
        <TouchableOpacity style={styles.iconoCasa}>
          <Feather name="home" size={30} color="black" />
        </TouchableOpacity>
      </View>
      {/* Nuevo título */}
      <Text style={styles.titulo}>¿Qué tipo de envío deseas realizar?</Text>
      {/* El resto del contenido permanece igual */}
      <View style={styles.filasContainer}>
        <View style={[styles.fila, { marginTop: 20 }]}>
          <TouchableOpacity 
            style={[styles.boton, envioSeleccionado === 'Envío de paquetes' && styles.botonSeleccionado]} 
            onPress={() => handlePresionarBoton('Envío de paquetes')}
          >
            <View style={styles.iconoContenedor}>
              <Feather name="package" size={80} color={envioSeleccionado === 'Envío de paquetes' ? 'white' : 'black'} />
            </View>
            <Text style={[styles.textoBoton, envioSeleccionado === 'Envío de paquetes' && styles.textoBotonBlanco]}>Envío de paquetes</Text>
            <Text style={[styles.descripcion, envioSeleccionado === 'Envío de paquetes' && styles.descripcionBlanco]}>Envío de cajas o paquetes</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fila}>
          <TouchableOpacity 
            style={[styles.boton, envioSeleccionado === 'Envío de documentos' && styles.botonSeleccionado]} 
            onPress={() => handlePresionarBoton('Envío de documentos')}
          >
            <View style={styles.iconoContenedor}>
              <Feather name="file-text" size={80} color={envioSeleccionado === 'Envío de documentos' ? 'white' : 'black'} />
            </View>
            <Text style={[styles.textoBoton, envioSeleccionado === 'Envío de documentos' && styles.textoBotonBlanco]}>Envío de documentos</Text>
            <Text style={[styles.descripcion, envioSeleccionado === 'Envío de documentos' && styles.descripcionBlanco]}>Envío de documentos con un peso</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 20,
    fontFamily: 'Congenial Black',
    marginLeft: 15,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  filasContainer: {
    alignItems: 'center',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  boton: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 35,
    backgroundColor: 'white',
    flex: 1,
    marginHorizontal: 9,
  },
  botonSeleccionado: {
    backgroundColor: 'blue',
  },
  textoBoton: {
    color: 'black',
    fontSize: 16,
    marginTop: 5,
  },
  textoBotonBlanco: {
    color: 'white',
  },
  descripcion: {
    textAlign: 'center',
    marginTop: 2,
  },
  descripcionBlanco: {
    color: 'white',
  },
  iconoMenu: {
    marginLeft: 10,
  },
  iconoCasa: {
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 'auto',
  },
  iconoContenedor: {
    backgroundColor: 'transparent',
    borderRadius: 50,
    padding: 15,
    marginBottom: 5,
  },
});
