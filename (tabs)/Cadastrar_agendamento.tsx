import { Servicos } from '@/constants/Servico';
import { Usuarios } from '@/constants/Usuario';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function CadastroAgendamento() {
  const [form, setForm] = useState({
    data: '',
    cliente: '',
    servico: '',
  });

  const handleSubmit = () => {
    console.log(form);
    // Aqui você pode enviar os dados para o backend
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Agendamento</Text>

      <View style={styles.table}>
        <Text style={styles.label}>Data</Text>
        <TextInput
          style={styles.input}
          value={form.data}
          placeholder="dd/mm/aaaa"
          onChangeText={(text) => setForm({ ...form, data: text })}
        />

        <Text style={styles.label}>Cliente</Text>
        <Picker
          selectedValue={form.cliente}
          onValueChange={(itemValue) => setForm({ ...form, cliente: itemValue })}
          style={styles.input}
        >
          <Picker.Item label="Selecione o cliente" value="" />
          {Usuarios().map((u) => (
            <Picker.Item key={u.id} label={u.nome} value={u.id} />
          ))}
        </Picker>

        <Text style={styles.label}>Serviço</Text>
        <Picker
          selectedValue={form.servico}
          onValueChange={(itemValue) => setForm({ ...form, servico: itemValue })}
          style={styles.input}
        >
          <Picker.Item label="Selecione o serviço" value="" />
          {Servicos().map((j) => (
            <Picker.Item key={j.id_servico} label={j.nome_servico} value={j.id_servico} />
          ))}
        </Picker>

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
