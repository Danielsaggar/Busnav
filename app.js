import express from 'express';
const app = express();

// Use request-based logger for log correlation
app.use(express.urlencoded({ extended: true  }));
app.use(express.json());

// Configurar middleware para servir archivos estáticos en la ruta /edit/public
app.use(express.static('public'));

// Se indica el motor del plantillas a utilizar
app.set('view engine', 'pug');

// Definir la ruta donde se hará el llamado de los archivos JS y CSS
import indexRouter from './routes/get/route-index.cjs';
import asignacionRouter from './routes/get/route-asignacion.cjs';
import conductoresRouter from './routes/get/route-conductores.cjs';
import placaRouter from './routes/post/route-placa.cjs';
import rutasRouter from './routes/post/route-rutas.cjs';
import updateRouter from './routes/post/route-update.cjs';


app.use('/placa/public', express.static('public'));
app.use('/placa', express.static('public'));
app.use(express.static('public'));

//Manejo de solicitudes GET
app.use('/', indexRouter);
app.use('/', asignacionRouter);
app.use('/', conductoresRouter);

//Manejo de solicitudes POST
app.use('/placa', placaRouter);
app.use('/ruta', rutasRouter);
app.use('/update', updateRouter);

export default app;