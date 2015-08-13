import http from 'http';
import { listen as wsListen } from 'rethinkdb-websocket-server';

const httpServer = http.createServer();

wsListen({ httpServer: httpServer, unsafelyAllowAnyQuery: true });

httpServer.listen(8000);
