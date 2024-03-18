export interface User {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
}

export class UserModel implements User {
  constructor(
    public id: string,
    public username: string,
    public age: number,
    public hobbies: string[] = []
  ) {}
}
