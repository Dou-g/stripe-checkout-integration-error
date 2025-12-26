
export interface User {
  name: string;
  email: string;
  password: string;
}

  const USERS_KEY = 'users';
  
  export const registerUser = (user: User): boolean => {
    console.log('registerUser called with:', user);
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]') as User[];
    console.log('Existing users:', users);
    if (users.find(u => u.email === user.email)) {
      console.log('User already exists');
      return false; // L'utilisateur existe déjà
    }
    users.push(user);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    console.log('User registered successfully');
    return true;
  };
  
  export const loginUser = (email: string, password: string): boolean => {
    console.log('loginUser called with:', { email, password });
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]') as User[];
    console.log('Stored users:', users);
    const user = users.find(u => u.email === email && u.password === password);
    console.log('Found user:', user);
    if (user) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userName', user.name);
      console.log('Login successful');
      return true;
    }
    console.log('Login failed');
    return false;
  };
  
  export const logoutUser = (): void => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail'); // Supprimer l'email de l'utilisateur connecté
    localStorage.removeItem('userName'); // Supprimer le nom de l'utilisateur connecté
  };
  
  export const isLoggedIn = (): boolean => {
    const result = localStorage.getItem('isLoggedIn') === 'true';
    console.log('isLoggedIn called, result:', result);
    return result;
  };
  
  export const getUserName = (): string | null => {
    const result = localStorage.getItem('userName');
    console.log('getUserName called, result:', result);
    return result;
  };