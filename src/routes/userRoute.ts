import UserController from '../controllers/userController';

export default (router: any): void => {

  router.get('/users', UserController.getUsers);
  router.get('/users/:userId', UserController.getUserById);
  router.post('/users',  UserController.createUser);
  router.put('/users/:userId',  UserController.updateUser);
  router.delete('/users/:userId', UserController.deleteUser);
};