import GoogleSearchResult from "../interfaces/models/GoogleSearchResult";
import { IContext } from "../interfaces/vendors/IContext";
import { VerifyAuthorization } from "../providers/Auth.Decorator";

class GoogleSearchController {

    async search(inputObject: any, ctx: IContext): Promise<Array<GoogleSearchResult> | Error> {

        return [{
            position: 0,
            kind: "string",
            title: "string",
            htmlTitle: "string",
            link: "string",
            displayLink: "string",
            snippet: "string",
            htmlSnippet: "string",
            cacheId: "string",
            formattedUrl: "string",
            htmlFormattedUrl: "string",
        }];
    }
}

export default GoogleSearchController;