import React, { useState } from 'react'; // Importa React e o hook useState
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'; // Importa componentes do React Native
 
// Função principal do aplicativo
const App = () => {
  // Estados para armazenar o nome de usuário e a senha
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEnd] = useState('');
  const [telefone, setTel] = useState('');
  // Função que é chamada quando o botão de login é pressionado
  const handleCadastro = () => {
    // Aqui, você poderia adicionar lógica para autenticar o usuário
    if (username && email && endereco && telefone) {
      alert(`Usuário: ${username} \nE-mail: ${email} \nEndereço: ${endereco} \nTelefone: ${telefone}`); // Exibe um alerta com as credenciais
      return;
    }
    alert("Campos inválidos!");
  };

  const limparCadastro = () => {
    setUsername("");
    setEmail("");
    setEnd("");
    setTel("");
  };
 
  return (
    // Contêiner principal que centraliza o conteúdo
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={username}
        onChangeText={setUsername} // Atualiza o estado do nome de usuário
      />
   
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail} // Atualiza o estado do email do usuário
      />

      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEnd} // Atualiza o estado do endereço do usuário
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTel} // Atualiza o estado do telefone do usuário
      />

      <div style={{ display: "flex", gap: "10px" }}>
        <Button style={styles.button} title="Cadastrar" onPress={handleCadastro} /> {/* Botão de cadastro */}
        <Button style={styles.button} title="Limpar" onPress={limparCadastro} /> {/* Limpa os dados nos inputs */}
      </div>
    </View>
  );
};
 
// Definição de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupar toda a altura da tela
    justifyContent: 'center', // Centraliza os itens verticalmente
    alignItems: 'center', // Centraliza os itens horizontalmente
    backgroundColor: '#f5f5f5', // Cor de fundo cinza claro
  },
 
  title: {
    fontSize: 24, // Tamanho da fonte do título
    fontWeight: 'bold', // Texto em negrito
    marginBottom: 15, // Espaço abaixo do título
  },
 
  input: {
    height: 40, // Altura do campo de entrada
    borderColor: '#ccc', // Cor da borda do campo de entrada
    borderWidth: 1, // Largura da borda
    marginBottom: 15, // Espaço abaixo do campo de entrada
    paddingHorizontal: 10, // Espaçamento interno do campo de entrada
    width: '80%', // Largura do campo de entrada
  },
});
 
export default App;