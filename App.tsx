import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum <= 0 || pesoNum <= 0) {
      Alert.alert("Erro", "Por favor, insira valores válidos para peso e altura.");
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    let classificacao = "";

    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      classificacao = "Sobrepeso";
    } else {
      classificacao = "Obesidade";
    }

    setResultado(`Seu IMC é ${imc.toFixed(2)} (${classificacao})`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <Button title="Calcular" onPress={calcularIMC} />
      {resultado ? <Text style={styles.result}>{resultado}</Text> : null}
    </View>
  );
}

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
