import { ApolloServer } from 'apollo-server-express';
import { GraphQLSchema } from 'graphql';
import depthLimit = require('graphql-depth-limit');
import Log from '../middlewares/Log';
import { MongoHelper } from './mongoHelpers';

class ApolloServerConf {
    public mongoHelper: any

    constructor() {
        this.mongoHelper = new MongoHelper()
        this.mongoHelper.initiateMongoConnection();
    }


    public Add(schema: GraphQLSchema): ApolloServer {
        try {
            const config = {
                schema,
                validationRules: [depthLimit(7)],
                introspection: true,
                playground: true,
                context: async ({ req }) => {
                    return await this.mongoHelper.validateUser(req);
                },
            };

            return new ApolloServer(config);
        } catch (error) {
            Log.error('Error Creating Apollo Server' + error);
        }

    }
}

export default new ApolloServerConf()