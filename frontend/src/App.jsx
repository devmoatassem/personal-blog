import { Route, Routes, redirect } from 'react-router-dom'
import Navbar from './components/navbar.component'
import AuthForm from './pages/authForm.page'
import Home from './pages/home.page';
import Editor from './pages/editor.page';
import { AuthContext } from './common/context/authContextProvider';
import { useContext } from "react";

function App() {
  const { authUser, setAuthUser } = useContext(AuthContext);
  const token = authUser.acessToken;

  return (
    <>
      <Routes>

        {token ?

          <Route path='/' element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/login" element={token ? <Home /> : <AuthForm pgName="login" />} />
            <Route path="/register" element={token ? <Home /> : <AuthForm pgName="register" />} />
          </Route>

          :
          <Route path='/' element={<Navbar />}>
            <Route path="/login" element={token ? <Home /> : <AuthForm pgName="login" />} />
            <Route path="/register" element={token ? <Home /> : <AuthForm pgName="register" />} />
          </Route>
        }

      </Routes>
    </>
  )
}

export default App;
