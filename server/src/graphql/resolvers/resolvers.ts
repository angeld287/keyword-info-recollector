import { GraphQLResolveInfo } from 'graphql';
import * as jwt from 'jsonwebtoken';
import { IContext } from '../../interfaces/vendors/IContext';
import Locals from '../../providers/Locals';
import UserController from '../../controllers/UserController';
import { IResolvers } from 'apollo-server-express';
import Encryptions from '../../providers/Encryptions';
import { IUser } from '../../interfaces/models/User';

const userController = new UserController();

const resolvers: IResolvers = {
  Query: {
    token: (_, args: any) => {
      return jwt.sign({ data: args[Locals.config().gqEmail] }, <string>Locals.config().authEncryptionSalt);
    },
  },

  Mutation: {
    addUser: (_, inputObject, ctx: IContext) => {
      return userController.addUser(inputObject, ctx);
    },
    updateUser: (_, inputObject, ctx: IContext) => {
      return userController.updateUser(inputObject, ctx);
    },
    registerUser: (_, inputObject, ctx: IContext) => {
      const { password, ...rest } = inputObject;

      const hashedPassword = Encryptions.hash(password);

      return userController.addUser({ ...rest, password: hashedPassword }, ctx);
    },
    loginUser: async (_, inputObject, ctx: IContext) => {
      const { password, userName }: IUser = inputObject.input;

      const user = await userController.findUserByUsername(userName, ctx);

      if (user.length === 0) throw new Error("User not found");

      const hashedPassword = Encryptions.hash(password);

      if (user.password !== hashedPassword) throw new Error("Invalid password");

      return user
    },
  },
};

export default resolvers;
