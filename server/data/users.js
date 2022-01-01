import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@test.com',
    password: bcrypt.hashSync('123456', 10),
    avatar: 'steve',
    isAdmin: true
  },
  {
    name: 'John Dough',
    email: 'john@test.com',
    password: bcrypt.hashSync('123456', 10),
    avatar: 'sheep'
  },
  {
    name: 'Jane Dough',
    email: 'jane@test.com',
    password: bcrypt.hashSync('123456', 10),
    avatar: 'pig'
  }
];
export default users;
