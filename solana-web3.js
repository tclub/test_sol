const web3 = require('@solana/web3.js');

const connection = new web3.Connection(web3.clusterApiUrl('devnet'));


console.log('Connessione a Devnet di Solana riuscita.');
