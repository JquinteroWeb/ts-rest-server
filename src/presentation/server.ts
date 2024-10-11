import express from 'express';

interface Options {
    PORT: number;
}

export class Server {
    private app = express();
    private readonly port: number;

    constructor(options: Options) {
        this.port = options.PORT;
    }
    async start() {
        //Middleware

        //Routes

        //Start the server
        this.app.listen(this.port, () => {
            console.log('Server listening on port: ' + this.port);
        });
    }
}