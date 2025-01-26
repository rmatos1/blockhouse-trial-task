import { createContext, useState } from 'react';

import { User } from '@/types';

export const UsersContext = createContext({
  addUser: (user: User) => {},
  authUser: (user: User) => User | undefined,
});

export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);

  const authUser = ({ email, password }: User) => {
    return users.find((user) => user.email === email && user.password === password);
  };

  const addUser = ({ email, password }: User) => {
    setUsers((prev) => [...prev, { email, password }]);
  };

  return <UsersContext.Provider value={{ addUser, authUser }}>{children}</UsersContext.Provider>;
};
