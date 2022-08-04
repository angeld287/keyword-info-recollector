import { GraphQLError } from 'graphql';
import Locals from './Locals';

export function VerifyAuthorization(
  _target: any,
  _propertyKey: string,
  descriptor: TypedPropertyDescriptor<(...args: any[]) => Promise<void>>
) {
  const fn = descriptor.value!;
  descriptor.value = async function DescriptorValue(...args: any[]) {
    try {
      if (!args[1][Locals.config().isUserLogged]) {
        throw new GraphQLError(Locals.config().userIsNotAuthorized);
      }
      return await fn.apply(this, args);
    } catch (error) {
      throw new GraphQLError(error);
    }
  };
  return descriptor;
}
