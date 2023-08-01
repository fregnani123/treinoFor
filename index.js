const express = require('express');
const app = express();
const PORT = 3000;
const fs = require('fs');
const path = require('path');

const filePath =  path.join(__dirname, 'data.db');

fs.readFile(filePath, 'utf8', (error, data) => {
  if (error) {
    if (error.code === 'ENOENT') {
      console.error('Arquivo não encontrado:', error.path);
    } else {
      console.error('Erro ao ler o arquivo:', error);
    }
  } else {
    try {
      const pessoas = JSON.parse(data);
      console.log(pessoas);
    } catch (error) {
      console.error('Erro ao analisar o JSON:', error);
    }
  }
});



