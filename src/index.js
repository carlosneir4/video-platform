import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import videoRouter from './routes/video-routes';


const app = express();

app.use(express.static('public')); //public directory

// API Routes
app.use('/api/videos', videoRouter);

app.get('*', (req,res) =>{
    const store = createStore(req);
    
    const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);

        if (context.url) {
            return res.redirect(301, context.url);
        }

        if (context.notFound) {
            res.status(404);
        }

        res.send(renderer(req, store, context));
    });
});

app.listen(3000, () =>{
    console.log('Listen on port 3000');
});