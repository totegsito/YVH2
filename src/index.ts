import * as restify from 'restify';
import config from './config';
import Scanner from "./models/scanner";

const respond =  (req:restify.Request, res:restify.Response, next:restify.Next) => {
  const { body: { scan, protocols } } = req;
  if (!scan) {
    next(new Error('Missing scan property'));
  } else {
    const scanner = new Scanner(protocols, scan);
    const result = scanner.calculateNextTarget();
    res.send(result);
  }
};

export const server = restify.createServer({
  name: 'Seedtag test',
  version: '0.1.0',
});
server.use(restify.plugins.bodyParser());

server.post('/radar', respond);

server.listen(config.port, config.host, () => {
  console.log('%s listening at %s', server.name, server.url);
});
