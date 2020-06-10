const jwt = require('jsonwebtoken');

/* Los primeros dos argumentos son el proceso de node y el archivo que vamos a leer, por lo que vamos a empezar a leer desde el tercer argumento  */
const [, , option, secret, nameOrToken]= process.argv;

if( !option || !secret || !nameOrToken){
    return console.log("Missing Arguments");
}

function signToken(payload, secret){
    return jwt.sign(payload, secret);
}

function verifyToken(token, secret){
    return jwt.verify(token, secret);
}

if(option == 'sign'){
    console.log(signToken({ sub: nameOrToken }, secret))
}else if(option == 'verify'){
    console.log(verifyToken(nameOrToken, secret))
}else{
    console.log('Optiones needs to be "sign" o "verify" ')
}