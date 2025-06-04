import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function CadastroUsuario() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    celular: '',
    password: '',
    documento: '',
    id_grupo: 'cliente',
    cargo: 'cabeleiro',
    status: 'ativo',
    data_nascimento: new Date(),
    avatar: null,
  });

  const handleSubmit = () => {
    console.log(form);
    // Aqui você pode enviar o formulário para o servidor
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>
      <View style={styles.table}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={form.name}
          onChangeText={(text) => setForm({ ...form, name: text })}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={form.email}
          keyboardType="email-address"
          onChangeText={(text) => setForm({ ...form, email: text })}
        />

        <Text style={styles.label}>Celular</Text>
        <TextInput
          style={styles.input}
          value={form.celular}
          keyboardType="phone-pad"
          onChangeText={(text) => setForm({ ...form, celular: text })}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          value={form.password}
          secureTextEntry
          onChangeText={(text) => setForm({ ...form, password: text })}
        />

        <Text style={styles.label}>Documento</Text>
        <TextInput
          style={styles.input}
          value={form.documento}
          keyboardType="numeric"
          onChangeText={(text) => setForm({ ...form, documento: text })}
        />

        <Text style={styles.label}>Grupo</Text>
        <Picker
          selectedValue={form.id_grupo}
          onValueChange={(itemValue) => setForm({ ...form, id_grupo: itemValue })}
          style={styles.input}
        >
          <Picker.Item label="Admin" value="admin" />
          <Picker.Item label="Profissional" value="profissional" />
          <Picker.Item label="Cliente" value="cliente" />
          <Picker.Item label="Gerente" value="gerente" />
        </Picker>

        <Text style={styles.label}>Cargo</Text>
        <Picker
          selectedValue={form.cargo}
          onValueChange={(itemValue) => setForm({ ...form, cargo: itemValue })}
          style={styles.input}
        >
          <Picker.Item label="Cabeleireiro" value="cabeleiro" />
          <Picker.Item label="Manicure" value="manicure" />
          <Picker.Item label="Pedicure" value="pedicure" />
        </Picker>

        <Text style={styles.label}>Status</Text>
        <Picker
          selectedValue={form.status}
          onValueChange={(itemValue) => setForm({ ...form, status: itemValue })}
          style={styles.input}
        >
          <Picker.Item label="Ativo" value="ativo" />
          <Picker.Item label="Inativo" value="inativo" />
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
