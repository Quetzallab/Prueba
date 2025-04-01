const os = require('os')

// info sobre el usuario actual
const user = os.userInfo()
console.log(user)

// metodo devuelve el sistema uptiem in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalme: os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentOS)