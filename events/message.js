const hilo = require('../commands/hilo');

module.exports = (client, msg) => {
    if (msg.content.toLowerCase().startsWith('!hilo')) {
        return hilo(msg);
    }
}
