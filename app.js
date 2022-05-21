const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usuariosRouter = require('./routes/usuariosRouter');
const rolesRouter = require('./routes/rolesRouter');
const submenusRouter = require('./routes/submenusRouter');
const formulariosRouter = require('./routes/formulariosRouter');
const permisosRouter = require('./routes/permisosRouter');
const backupsRouter = require('./routes/backupsRouter');
const clientesRouter = require('./routes/clientesRouter');
const proveedoresRouter = require('./routes/proveedoresRouter');
const productosRouter = require('./routes/productosRouter');
const inventarios_cabecerasRouter = require('./routes/inventarios_cabecerasRouter');
const inventarios_detallesRouter = require('./routes/inventarios_detallesRouter');
const compras_cabecerasRouter = require('./routes/compras_cabecerasRouter');
const compras_detallesRouter = require('./routes/compras_detallesRouter');
const ventas_cabecerasRouter = require('./routes/ventas_cabecerasRouter');
const ventas_detallesRouter = require('./routes/ventas_detallesRouter');
const sucursalesRouter = require('./routes/sucursalesRouter');
const depositosRouter = require('./routes/depositosRouter');
const tarjetasRouter = require('./routes/tarjetasRouter');
const bancosRouter = require('./routes/bancosRouter');
const cajasRouter = require('./routes/cajasRouter');
const modulosRouter = require('./routes/modulosRouter');
const conceptos_movimientos_bancariosRouter = require('./routes/conceptos_movimientos_bancariosRouter');
const tipos_cuentas_bancariasRouter = require('./routes/tipos_cuentas_bancariasRouter');
const estados_cuentas_bancariasRouter = require('./routes/estados_cuentas_bancariasRouter');
const cuentas_bancariasRouter = require('./routes/cuentas_bancariasRouter');
const monedasRouter = require('./routes/monedasRouter');
const configuracionesRouter = require('./routes/configuracionesRouter');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/usuarios', usuariosRouter);
app.use('/api/v1/roles', rolesRouter);
app.use('/api/v1/submenus', submenusRouter);
app.use('/api/v1/formularios', formulariosRouter);
app.use('/api/v1/permisos', permisosRouter);
app.use('/api/v1/backups', backupsRouter);
app.use('/api/v1/clientes', clientesRouter);
app.use('/api/v1/proveedores', proveedoresRouter);
app.use('/api/v1/productos', productosRouter);
app.use('/api/v1/inventarios_cabeceras', inventarios_cabecerasRouter);
app.use('/api/v1/inventarios_detalles', inventarios_detallesRouter);
app.use('/api/v1/compras_cabeceras', compras_cabecerasRouter);
app.use('/api/v1/compras_detalles', compras_detallesRouter);
app.use('/api/v1/ventas_cabeceras', ventas_cabecerasRouter);
app.use('/api/v1/ventas_detalles', ventas_detallesRouter);
app.use('/api/v1/sucursales', sucursalesRouter);
app.use('/api/v1/depositos', depositosRouter);
app.use('/api/v1/tarjetas', tarjetasRouter);
app.use('/api/v1/bancos', bancosRouter);
app.use('/api/v1/cajas', cajasRouter);
app.use('/api/v1/modulos', modulosRouter);
app.use('/api/v1/conceptos_movimientos_bancarios', conceptos_movimientos_bancariosRouter);
app.use('/api/v1/tipos_cuentas_bancarias', tipos_cuentas_bancariasRouter);
app.use('/api/v1/estados_cuentas_bancarias', estados_cuentas_bancariasRouter);
app.use('/api/v1/cuentas_bancarias', cuentas_bancariasRouter);
app.use('/api/v1/monedas', monedasRouter);
app.use('/api/v1/configuraciones', configuracionesRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
