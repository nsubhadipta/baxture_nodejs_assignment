import { Request, Response } from 'express';
import { User, UserModel } from '../models/UserModel'; 
import { logErrorAndRespond } from '../middlewares/utility';
import { v4 as uuidv4 } from 'uuid';

const users: User[] = [];


function createUser(req: Request, res: Response): void {
    try {
      const { username, age, hobbies } = req.body;
      let id=uuidv4();
      const newUser = new UserModel(id,username, age, hobbies); 
      users.push(newUser);
      res.status(201).json(newUser);
    } catch (error) {
      logErrorAndRespond(res, error);
    }
  }

function getUsers(req: Request, res: Response): void {
  res.status(200).json(users);
}

function getUserById(req: Request, res: Response): void {
  const { userId } = req.params;
  console.log(userId);
  
  const user = users.find((user) => user.id === userId);
  
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
}

function updateUser(req: Request, res: Response): void {
  try {
    const { userId } = req.params;
    const { username, age, hobbies } = req.body;
    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], username, age, hobbies };
      res.json(users[userIndex]);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    logErrorAndRespond(res, error);
  }
}

function deleteUser(req: Request, res: Response): void {
  try {
    const { userId } = req.params;
    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex !== -1) {
      users.splice(userIndex, 1);
      res.status(200).json({message:"User Deleted Successfully!"});
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    logErrorAndRespond(res, error);
  }
}

export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
