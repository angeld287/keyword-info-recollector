import GoogleSearchResult from "../interfaces/models/GoogleSearchResult";
import { IContext } from "../interfaces/vendors/IContext";
import { VerifyAuthorization } from "../providers/Auth.Decorator";
import Keywords from '../interfaces/models/Keyword';

class KeywordController {

    async addKeyword(inputObject: any, ctx: IContext): Promise<any> {
        return Keywords.create(inputObject.input).then((keywordInfo: any) => {
            return keywordInfo;
        });
    }
}

export default KeywordController;