/**
 * Define App Locals & Configs
 *
 * @author Angel Angeles <aangeles@litystyles.com>
 */

import { Application } from 'express'

class Locals {

    /**
     * Makes env configs available for your app
     * throughout the app's runtime
     */
    public static config(): any {
        const port = process.env.PORT || 3001;

        const appSecret = process.env.APP_SECRET || 'secret_key';
        const apiPrefix = process.env.API_PREFIX || 'api';

        const mongoUrl = `mongodb+srv://${process.env.MG_USERNAME}:${process.env.MG_PASS}@${process.env.MG_HOST}/${process.env.MG_DB}?retryWrites=true&w=majority`;

        const isUserLogged = 'isUserLogged';
        const gqEmail = 'email';
        const userIsNotAuthorized = 'You are not Authorized to access this API !!';

        const authEncryptionSalt = ''

        //allow origin cors
        const url = 'http://localhost:3000';

        return {
            apiPrefix,
            appSecret,
            port,
            isUserLogged,
            gqEmail,
            url,
            userIsNotAuthorized,
            mongoUrl,
            authEncryptionSalt
        }
    }

    /**
     * Injects your config to the app's locals
     */
    public static init(_express: Application): Application {
        _express.locals.app = this.config();
        return _express;
    }
}

export default Locals;