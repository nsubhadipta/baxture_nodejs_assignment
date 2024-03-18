import { v4 as uuidv4 } from 'uuid';

export interface User {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
}

export class UserModel implements User {
  constructor(
    public id: string = uuidv4(),
    public username: string,
    public age: number,
    public hobbies: string[] = []
  ) {}
}
