import express 		 from 'express';
import all     		 from './routes/all';
import logs   		 from './routes/log';
import setapis   	 from './routes/setapi';

import getapis   	 from './routes/getapi';
import getLogs   	 from './routes/getLog';
import getapidetail  from './routes/getapidetail';

import collect       from './routes/collect';
import widget       from './routes/postwidget';
import widgetlist       from './routes/widgetlist';

import servicecode       from './routes/servicecode';
import pic       	 from './routes/getpic';

import course       from './routes/course';
import updatecourse     from './routes/updatecourse';
import courselist       from './routes/courselist';

import script   		 from './routes/script';
import scripts 		 from './routes/scripts';

import factory   		 from './routes/factory';
import getfactory 		 from './routes/getfactory';
import delfactory   		 from './routes/delfactory';
let router = express.Router();

all(router);
logs(router);
setapis(router);

getapidetail(router)
getapis(router);
getLogs(router);
collect(router);
widget(router);
widgetlist(router);
servicecode(router)
pic(router)

course(router)
updatecourse(router)
courselist(router)


script(router)
scripts(router)

factory(router)
getfactory(router)
delfactory(router)
export default router;;
