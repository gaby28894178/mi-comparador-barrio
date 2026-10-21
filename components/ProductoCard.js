import { StyleSheet, Text, View } from 'react-native';

export default function ProductoCard({ producto }) {
  const comercios = producto.comercios ?? [];
  const mejorOpcion = comercios.reduce(
    (minimo, comercio) => Math.min(minimo, comercio.precio),
    Number.POSITIVE_INFINITY,
  );
  const comerciosMasBaratos = comercios.filter(
    (comercio) => comercio.precio === mejorOpcion,
  );

  return (
    <View style={styles.card}>
      <Text style={styles.productoNombre}>{producto.nombre}</Text>

      <Text style={styles.seccionTitulo}>Precios por negocio:</Text>
      {comercios.map((comercio) => (
        <View key={comercio.negocio} style={styles.comercioRow}>
          <Text style={styles.comercioNombre}>• {comercio.negocio}</Text>
          <Text style={styles.comercioPrecio}>
            ${comercio.precio.toLocaleString('es-AR')}
          </Text>
        </View>
      ))}

      {comerciosMasBaratos.length > 0 && (
        <View style={styles.recomendacionBox}>
          <Text style={styles.recomendacionTitulo}>🏆 PRECIO MÁS BAJO:</Text>
          {comerciosMasBaratos.map((comercio) => (
            <Text key={comercio.negocio} style={styles.recomendacionTexto}>
              {comercio.negocio} a{' '}
              <Text style={styles.precioDestacado}>
                ${comercio.precio.toLocaleString('es-AR')}
              </Text>
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  productoNombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  seccionTitulo: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 5,
    fontWeight: '600',
  },
  comercioRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  comercioNombre: { fontSize: 16, color: '#34495e', flexShrink: 1 },
  comercioPrecio: { fontSize: 16, fontWeight: '500', marginLeft: 8 },
  recomendacionBox: {
    marginTop: 12,
    backgroundColor: '#e8f8f5',
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#2ecc71',
  },
  recomendacionTitulo: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: 2,
  },
  recomendacionTexto: { fontSize: 15, color: '#1e8449', fontWeight: '500' },
  precioDestacado: { fontWeight: 'bold', fontSize: 16 },
});
