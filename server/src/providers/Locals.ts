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

        const is_user_logged = 'isUserLogged';
        const gq_email = 'email';
        const user_is_not_authorized = 'You are not Authorized to access this API !!';

        //allow origin cors
        const url = 'http://localhost:3000';

        return {
            apiPrefix,
            appSecret,
            port,
            is_user_logged,
            gq_email,
            url,
            user_is_not_authorized
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