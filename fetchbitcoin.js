export default function initFetchBitCoin(){
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(response => {
        console.log(response.BRL.sell)
        const btcPreco = document.querySelector('.btc-preco');
        btcPreco.innerText = (100 / response.BRL.sell).toFixed(5);
    }).catch(erro => {
        console.log(Error(erro))
    })
}




//https://blockchain.info/ticker