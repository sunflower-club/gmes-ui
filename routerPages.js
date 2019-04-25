import express from 'express';
import insert  from './routerPages/insert';
import list    from './routerPages/list';
import logs    from './routerPages/log';
import collect from './routerPages/collect';
import chat    from './routerPages/chat';
import chats   from './routerPages/chats';

import pic   from './routerPages/pic';
import piclist   from './routerPages/imglist';

let router = express.Router();

insert(router);
list(router);
logs(router);
collect(router);

chat(router);
chats(router);

pic(router);
piclist(router);

export default router;
