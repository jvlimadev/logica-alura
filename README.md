# 🧠 Curso de Lógica de Programação - Alura
 Este repositório contém os projetos e exercícios desenvolvidos durante o curso **Lógica de Programação** da plataforma **Alura**, ministrado pelo professor **Flávio Henrique de Souza Almeida**.

O curso é dividido em **9 módulos**, abordando os principais conceitos introdutórios de lógica de programação de forma prática e progressiva.

## Tecnologias utilizadas

- **HTML**
- **JavaScript**

## Objetivo

Desenvolver a base lógica essencial para iniciantes em programação, com foco na resolução de problemas, estruturas de controle, variáveis, funções e interatividade básica com o usuário.

---

> Projeto desenvolvido para fins educacionais como parte do processo de aprendizado em programação.

## 📘 Módulo 01 – Primeiros Passos com Lógica de Programação
Neste módulo, iniciamos os estudos em lógica de programação com foco na construção de algoritmos simples e introdução ao uso do JavaScript no navegador.

📄 Saída esperada no navegador:

 <p align="center">
    <img src="./imagens/modulo01/alert.png" width="400px"/>
    <img src="./imagens/modulo01/primeiroTeste.png" width="400px"/>
 </p>


🧠 Conceitos abordados:

- O que é um programa

- Estrutura básica de um documento HTML

- Inserção de links e textos em HTML

- Utilização do alert() no JavaScript

- Introdução à interação com o usuário

🚀 Resultado:
Ao abrir o arquivo no navegador, o usuário vê uma página com um título, um parágrafo com link, e um alerta é exibido automaticamente dizendo: "Isso sim é um programa!"

---

## 📘 Módulo 02 – Escrevendo no Documento com JavaScript
Neste módulo, aprendemos a usar o método document.write() para escrever diretamente na página HTML usando JavaScript, além de realizar cálculos simples dentro das instruções.

📄 Saída esperada no navegador:

 <p align="center">
  <img src="./imagens/modulo02/saida.png">
 </p>

 🧠 Conceitos abordados:

- Inserção de conteúdo dinâmico com document.write()

- Concatenando texto com variáveis e expressões

- Operações matemáticas básicas em tempo real

- Uso do JavaScript para calcular o ano de nascimento

---

## 📘 Módulo 03 – Trabalhando com Variáveis e Cálculos
Neste módulo, aprofundamos o uso de variáveis no JavaScript para armazenar dados como nomes e idades. Utilizamos expressões matemáticas para calcular o ano de nascimento de cada pessoa e a média de idades, introduzindo também o uso de funções nativas como Math.round.

🧠 Conceitos abordados:
Declaração de variáveis com var

- Armazenamento de valores numéricos e de texto

- Reutilização de variáveis (ex: nome)

- Cálculos com variáveis

- Função Math.round() para arredondamento

- Escrita dinâmica com document.write()

🧾 Saída esperada:

 <p align="center">
  <img src="./imagens/modulo03/codigo.png">
 </p>

🔎 Observações: 
- A variável `ano` foi alterada no meio do código, demonstrando que valores podem ser modificados ao longo da execução.

- O uso de `Math.round()` ajuda a arredondar a média para o número inteiro mais próximo, tornando o resultado mais limpo.

---

## 📘 Módulo 04 – Criando Funções para Organizar o Código
Neste módulo, aprendemos a criar funções personalizadas para reutilizar comandos e deixar o código mais organizado e legível. Foi também reforçado o uso de operações matemáticas com variáveis e constantes.

🧠 Conceitos abordados:

- Criação de funções com `function`

- Reutilização de código com funções

- Separação de responsabilidades no código

- Encapsulamento de instruções (`document.write` e `<br>`)

- Cálculo de idade com base no ano atual

🧾 Saída esperada:

 <p align="center">
  <img src="./imagens/modulo04/codigo.png">
 </p>

---

## 📘 Módulo 05 – Calculadora de IMC com Entrada de Dados
Neste módulo, desenvolvemos uma pequena calculadora de IMC (Índice de Massa Corporal), utilizando funções personalizadas, entrada de dados via `prompt()`, e estrutura condicional para analisar o resultado. Introduzimos também o conceito de retorno de valores com `return`.

🧠 Conceitos abordados:

- Funções com parâmetros e retorno (`calcularImc`)

- Entrada de dados com `prompt()`

- Conversão de string para número (`Number()`)

- Estruturas condicionais (`if`)

- Encapsulamento e reutilização de código

- Lógica básica de comparação

🧾 Saída esperada:

 <p align="center">
  <img src="./imagens/modulo05/animacao.gif">
 </p>

🧪 Exemplo de uso:

 Usuário informa:

 1️⃣ Nome: **Ana**

 2️⃣ Peso: **70**

 3️⃣ Altura: **1.75**

📌 Observações:

- O uso de `Number()` é importante, pois `prompt()` retorna texto.

- A função `calcularImc()` mostra como reutilizar lógica com entrada personalizada.

- O programa é interativo e adaptável a qualquer usuário, o que o torna mais prático e realista.

## ✅ Módulo 06 – Calculadora de Pontuação no Campeonato
Neste módulo, o objetivo foi criar um sistema que calcula a pontuação de um time com base nas vitórias e empates, e compara com a pontuação do ano anterior.

🧠 Conceitos abordados:

- Entrada de dados com `prompt()`

- Conversão para número inteiro com `parseInt()`

- Cálculo de pontuação com operadores matemáticos

- Condicionais para comparação `(if)`

- Funções reutilizáveis para exibição de mensagens

🧾 Saída esperada:

<p align="center">
  <img src="./imagens/modulo06/pontos.gif">
 </p>

🧪 Exemplo de uso:
Usuário informa:

= Vitórias: 8

- Empates: 4

   → Pontos: 8×3 + 4 = 28