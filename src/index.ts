import { app } from './app';
import { dbConnector } from './utils/db.connector';


app.set('port', process.env.PORT || 8000);

dbConnector().then(() => {
  startServer();
})
.catch(err=>console.log(err))


const startServer = () =>
  app.listen(app.get('port'), () => {
  console.log(' App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
  console.log(' Press CTRL-C to stop\n');
});




