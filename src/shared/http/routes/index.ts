import productsRouter from '@modules/products/routes/products.routes';
import sessionsRouter from '@modules/users/typeorm/routes/sessions.routes';
import usersRouter from '@modules/users/typeorm/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
