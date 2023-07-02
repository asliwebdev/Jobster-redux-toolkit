import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Landing, Error, Register, ProtectedRoute} from "./pages"
import {Stats, AddJob, Profile, AllJobs, SharedLayout} from './pages/Dashboard'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <BrowserRouter>
      <ToastContainer position="top-center"/>
      <Routes>
        <Route path='/' element={<ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>}
        >
          <Route index element={<Stats />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='landing' element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
