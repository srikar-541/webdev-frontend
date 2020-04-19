export class User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  password: string;
  role: string;
  categories: JSON[];
  dateOfBirth: string;
}

export class LoginUser {
  username: string;
  password: string;
}
