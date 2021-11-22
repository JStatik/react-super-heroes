const path = require('path');
const cors = require('cors');
const colors = require('colors');
const express = require('express');
const compression = require('compression');

class Server {
    constructor () {
        this.app = express();
    }

    middlewares () {
        /* ****************************************** CORS ****************************************** */
        this.app.use(cors());

        /* *************************************** COMPRESSION *************************************** */
        this.app.use(compression({ threshold: 1024 }));

        /* *********************************** DIRECTORIO PUBLICO *********************************** */
        this.app.use(express.static(
            path.resolve(__dirname, '../../dist')
        ));

        /* ******************************** LECTURA Y PARSEO DEL BODY ******************************** */
        this.app.use(express.json());

        /* **************************************** ENDPOINTS **************************************** */
        this.app.get('*', (req, res) => res.sendFile(
            path.join(__dirname, '../../dist/index.html')
        ));
    }

    execute () {
        this.middlewares();

        /* ***************************************** SERVER ***************************************** */
        this.app.listen(process.env.PORT, () => {
            console.log(colors.yellow(
                `Servidor corriendo en puerto: ${ process.env.PORT }`
            ));
        });
    }
}

module.exports = Server;
