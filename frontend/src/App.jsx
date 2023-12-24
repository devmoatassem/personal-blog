import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar.component'
import AuthForm from './pages/authForm.page'
import {AuthContextProvier} from './common/context/authContextProvider';
function App() {


  return (
    <>
      <AuthContextProvier>
        <Routes>
          <Route path='/' element={<Navbar />}>
            {/* <Route path="/editor" element={<Editor />} /> */}
            <Route path="/login" element={<AuthForm pgName="login" />} />
            <Route path="/register" element={<AuthForm pgName="register" />} />
          </Route>
        </Routes>
      </AuthContextProvier>
    </>
  )
}

export default App;
