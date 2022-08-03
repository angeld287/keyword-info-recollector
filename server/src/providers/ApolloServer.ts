import { ApolloServer } from 'apollo-server-express';
import { GraphQLSchema } from 'graphql';
import depthLimit = require('graphql-depth-limit');
import { MongoHelper } from './mongoHelpers';

class ApolloServerConf {
    public mongoHelper: any

    constructor() {
        this.mongoHelper = new MongoHelper()
    }


    public Add(schema: GraphQLSchema): ApolloServer {
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
    }
}

export default new ApolloServerConf()