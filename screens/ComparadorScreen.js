import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import dbProductos from '../data/productosPrecios.json';
import Buscador from '../components/Buscador';
import ProductoCard from '../components/ProductoCard';

export default function ComparadorScreen() {
  const [busqueda, setBusqueda] = useState('');
  const productosFiltrados = dbProductos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.trim().toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>AhorroBarrio 🏪</Text>
      <Text style={styles.subtitulo}>Comparador de precios locales</Text>

      <Buscador
        textoBusqueda={busqueda}
        onCambiarBusqueda={setBusqueda}
      />

      <ScrollView
        style={styles.resultados}
        contentContainerStyle={styles.resultadosContenido}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {productosFiltrados.length === 0 ? (
          <Text style={styles.noResultados}>
            ❌ No se encontraron productos.
          </Text>
        ) : (
          productosFiltrados.map((producto) => (
            <ProductoCard key={producto.id} producto={producto} />
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 20,
  },
  resultados: { flex: 1 },
  resultadosContenido: { paddingBottom: 20 },
  noResultados: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 30,
    fontSize: 16,
  },
});
