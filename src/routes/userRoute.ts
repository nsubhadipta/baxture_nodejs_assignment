import UserController from '../controllers/userController';
import validationMiddleware from '../middlewares/validation';
import schemas from '../middlewares/RequstValidate/user.schema';

export default (router: any): void => {

  router.get('/users', UserController.getUsers);
  router.get('/users/:userId', UserController.getUserById);
  router.post('/users', validationMiddleware(schemas.userAdd),  UserController.createUser);
  router.put('/users/:userId', validationMiddleware(schemas.userEdit),  UserController.updateUser);
  router.delete('/users/:userId', UserController.deleteUser);
};