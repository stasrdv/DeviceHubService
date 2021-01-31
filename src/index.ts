import { app } from './app';


app.set('port', process.env.PORT || 8000);
const startServer = () =>
  app.listen(app.get('port'), () => {
  console.log(' App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
  console.log(' Press CTRL-C to stop\n');
});

startServer();




