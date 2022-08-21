/**
 * Define all your routes
 *
 * @author Angel Angeles <aangeles@litystyles.com>
 */

import { Application } from 'express';
import Log from '../middlewares/Log';
//import Locals from './Locals';

//import apiRouter from './../routes/Api';

class Routes {
	//public mountWeb(_express: Application): Application {
	//Log.info('Routes :: Mounting Web Routes...');

	//return _express.use('/', webRouter);
	//}

	public mountApi(_express: Application): Application {
		//const apiPrefix = Locals.config().apiPrefix;
		Log.info('Routes :: Mounting API Routes...');
		//return _express.use(`/${apiPrefix}`, apiRouter);
		return _express
	}
}

export default new Routes;
