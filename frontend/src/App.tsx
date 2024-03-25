import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { Publish } from './pages/Publish'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

function App() {
const login=window.localStorage.getItem("token")
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path={"/blogs"} element={ login?<Blogs />:<Home/>} />
          <Route path={login?"/publish":"/"} element={login?<Publish/>:<Home />} />
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

//  https://backend.tushar-agarwal7373.workers.dev