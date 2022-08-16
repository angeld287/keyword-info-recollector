import GoogleSearchResult from "../interfaces/models/GoogleSearchResult";
import { IContext } from "../interfaces/vendors/IContext";
import { VerifyAuthorization } from "../providers/Auth.Decorator";

class GoogleSearchController {

    /*@VerifyAuthorization
    async search(inputObject: any, ctx: IContext): Promise<GoogleSearchResult> {

        return {
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
        };
    }*/
}

export default GoogleSearchController;