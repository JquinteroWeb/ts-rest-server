import { Server } from "./presentation/server";
import { envs } from './config/envs';

const main = () => {
    const server = new Server({
        PORT: envs.PORT
    });
    server.start();

}

(async () => {
    try {
        main();
    } catch (error) {
        console.error("Error starting the server:", error);
    }
})();

