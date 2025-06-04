import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function CadastroUsuario() {
  const [form, setForm] = useState({
    nome_servico: '',
    valor: '',
  });

  const handleSubmit = () => {
    console.log(form);
    // Aqui você pode enviar o formulário para o servidor
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Serviço</Text>
      <View style={styles.table}>
        <Text style={styles.label}>Nome Serviço</Text>
        <TextInput
          style={styles.input}
          value={form.nome_servico}
          onChangeText={(text) => setForm({ ...form, nome_servico: text })}
        />

        <Text style={styles.label}>Valor</Text>
        <TextInput
          style={styles.input}
          value={form.valor}
          keyboardType="numeric"
          onChangeText={(text) => setForm({ ...form, valor: text })}
        />

        <Button title="Salvar" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0, 128, 128, 0.85)',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  table: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007acc',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    color: '#34495e',
  },
});
