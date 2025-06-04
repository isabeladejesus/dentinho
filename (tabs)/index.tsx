import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function OdontobookScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.logo}>DENTINHO FELIZ</Text>
        <Feather name="menu" size={24} color="#333" />
      </View>


      <TextInput style={styles.search} placeholder="Pesquisar" />


      <View style={styles.aboutBox}>
        <Text style={styles.sectionTitle}>Quem somos?</Text>
        <Text style={styles.aboutText}>
          O aplicativo <Text style={styles.bold}>DENTINHO FELIZ</Text> foi desenvolvido especialmente para a comunidade de odontologia. Aqui você sempre vai encontrar diversas informações, e um lugar especial para compartilhar conhecimentos.
        </Text>
      </View>

 
      <View style={styles.grid}>
        {[
          { label: 'Especializações', icon: 'tooth' },
          { label: 'Prescrições', icon: 'file-document-edit-outline' },
          { label: 'Intercorrências', icon: 'alert-circle-outline' },
          { label: 'CID 10', icon: 'certificate' },
          { label: 'Procedimentos', icon: 'clipboard-text-outline' },
          { label: 'Medicamentos', icon: 'pill' },
        ].map((item, idx) => (
          <Pressable key={idx} style={styles.card}>
            <MaterialCommunityIcons name={item.icon} size={32} color="#007acc" />
            <Text style={styles.cardText}>{item.label}</Text>
          </Pressable>
        ))}
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fdfd',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#007acc',
  },
  search: {
    backgroundColor: '#eaf5f7',
    marginTop: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 0, // Removido arredondamento
  },
  aboutBox: {
    backgroundColor: '#c0ecf3',
    padding: 12,
    borderRadius: 0, // Removido arredondamento
    marginTop: 20,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#007acc',
    marginBottom: 6,
  },
  aboutText: {
    fontSize: 13,
    color: '#333',
  },
  bold: {
    fontWeight: '700',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  card: {
    width: '30%',
    backgroundColor: '#eaf9fb',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 0, // Removido arredondamento
    marginBottom: 16,
  },
  cardText: {
    fontSize: 12,
    color: '#007acc',
    marginTop: 6,
    textAlign: 'center',
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    borderRadius: 0, // Sem bordas arredondadas na navbar
  },
});
