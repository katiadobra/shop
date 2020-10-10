import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'beze.pp.ua@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Petro Poro',
    email: 'petro@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
