var pronoun = ['the', 'our'];
var adj = ['great', 'big'];
var noun = ['jogger', 'racoon'];
let dominios=['.com', '.net', '.co.cr', '.io', '.edu', '.fi'];
let salida=[];
pronoun.forEach(parte1 => {
    adj.forEach(parte2 => {
        noun.forEach(parte3 => {
            dominios.forEach(parte4 => {
                let fqdn=parte1+parte2+parte3+parte4;
                salida.push(fqdn);
            });
        });    
    });
});
console.log(salida);