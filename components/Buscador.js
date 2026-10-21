import { StyleSheet, TextInput, View } from 'react-native';

export default function Buscador({ textoBusqueda, onCambiarBusqueda }) {
  return (
    <View style={styles.container}>
      <TextInput
        accessibilityLabel="Buscar producto"
        style={styles.input}
        placeholder="🔍 Buscar producto (ej: Yerba)..."
        value={textoBusqueda}
        onChangeText={onCambiarBusqueda}
        autoCapitalize="none"
        returnKeyType="search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
  },
});
