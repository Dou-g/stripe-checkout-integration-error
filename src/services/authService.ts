
export interface User {
  name: string;
  email: string;
  password: string;
}

  const USERS_KEY = 'users';
  
  export const registerUser = (user: User): boolean => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]') as User[];
    if (users.find(u => u.email === user.email)) {
      return false; // L'utilisateur existe déjà
    }
    users.push(user);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return true;
  };
  
  export const loginUser = (email: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]') as User[];
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email); // Stocker l'email de l'utilisateur connecté
      localStorage.setItem('userName', user.name); // Stocker le nom de l'utilisateur connecté
      return true;
    }
    return false;
  };
  
  export const logoutUser = (): void => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail'); // Supprimer l'email de l'utilisateur connecté
  };
  
  export const isLoggedIn = (): boolean => {
    return localStorage.getItem('isLoggedIn') === 'true';
  };
  
  export const getUserName = (): string | null => {
    return localStorage.getItem('userName');
  };