/**
 * Primary file for your Clustered API Server
 *
 * @author Angel Angeles <aangeles@litystyles.com>
 */

import * as express from 'express';
import Locals from './Locals';
import ApolloServerConf from './ApolloServer';
import Bootstrap from '../middlewares/Kernel';
import schema from '../graphql/schema';
import { createServer } from 'http';

class Express {
    /**
    * Create the express object
    */
    public express: express.Application;
    public apolloServer: any;

    /**
     * Initializes the express server
     */
    constructor() {
        this.express = express();

        this.mountApolloServer();
        this.mountMiddlewares();

    }

    /**
     * Mounts all the defined middlewares
     */
    private mountMiddlewares(): void {
        const { express } = this
        this.express = Bootstrap.init(express);
        this.apolloServer.applyMiddleware({ express, path: '/graphql' });
    }

    /**
     * Mounts all the defined routes
     */
    private mountApolloServer(): void {
        this.apolloServer = ApolloServerConf.Add(schema);
    }

    /**
     * Starts the express server
     */
    public init(): any {
        const port: number = Locals.config().port;
        const httpServer = createServer(this.express);

        // Start the server on the specified port
        httpServer.listen(port, () => {
            return console.log('\x1b[33m%s\x1b[0m', `Server :: Running @ 'http://localhost:${port}'`);
        }).on('error', (_error) => {
            return console.log('Error: ', _error.message);
        });;
    }
}

/** Export the express module */
export default new Express();