import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function App() {
  const [peso, setPeso] = useState(""); // Estado para o peso
  const [altura, setAltura] = useState(""); // Estado para a altura
  const [resultado, setResultado] = useState(""); // Estado para o resultado do IMC

  // Função para calcular o IMC
  const calcularIMC = () => {
    const pesoNum = parseFloat(peso); // Converte o peso para número
    const alturaNum = parseFloat(altura); // Converte a altura para número

    // Verifica se os valores são válidos
    if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum <= 0 || pesoNum <= 0) {
      Alert.alert("Erro", "Por favor, insira valores válidos para peso e altura.");
      return;
    }

    // Calcula o IMC
    const imc = pesoNum / (alturaNum * alturaNum); 

    // Variável para armazenar a classificação
    let classificacao = "";

    // Definindo a classificação de acordo com o IMC
    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      classificacao = "Sobrepeso";
    } else {
      classificacao = "Obesidade";
    }

    // Atualizando o estado com o resultado
    setResultado(`Seu IMC é ${imc.toFixed(2)} (${classificacao})`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      {/* Campo de entrada para o peso */}
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      {/* Campo de entrada para a altura */}
      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      {/* Botão para calcular */}
      <Button title="Calcular" onPress={calcularIMC} />

      {/* Exibição do resultado */}
      {resultado ? <Text style={styles.result}>{resultado}</Text> : null}
    </View>
  );
}

// Estilização do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#007BFF",
  },
});
