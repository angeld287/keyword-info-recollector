import { IContext } from '../interfaces/vendors/IContext';
import Users from '../interfaces/models/User';

class UserController {
    addUser(inputObject: any, ctx: IContext) {
        return Users.create(inputObject.input).then((userInfo: any) => {
            return userInfo;
        });
    }

    updateUser(inputObject: any, ctx: IContext) {
        return Users.findOneAndUpdate({ _id: inputObject.id }, inputObject.input, { new: true }).then(
            (userInfo: any) => {
                return userInfo;
            }
        );
    }

    async findUserByUsername(userName: string, ctx: IContext) {
        return await Users.findOne({ userName });
    }
}

export default UserController;
