import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../service/api";

const AuthContext = createContext({});

function AuthProvider({children}) {
  const [data, setData] = useState({});
  
  async function signIn({ email, password }){
    try {
      const response = await api.post('/session', { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@foodexplore:user", JSON.stringify(user));
      localStorage.setItem("@foodexplore:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({token, user});

    } catch (error) {
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert('Não foi possível entrar.');
      };
    };
  };

  function signOut() {
    localStorage.removeItem("@foodexplore:user");
    localStorage.removeItem("@foodexplore:token");

    setData({});
  };

  useEffect(() => {
    const user = localStorage.getItem("@foodexplore:user");
    const token = localStorage.getItem("@foodexplore:token");
    
    if(token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      });
    };
  }, []);

  return(
    <AuthContext.Provider value={{ 
      signIn, 
      user: data.user,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };