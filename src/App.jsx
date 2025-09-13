import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Home, Contact, ServiceDetail3, AllBlogs, AdminLogin, AllPortfolios, PortfolioDetail } from './AllFiles'
import { useEffect } from 'react';


const App = () => {

  const pathname = window.location.pathname;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Router>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/Contact' index element={<Contact />} />
        <Route path='/ServiceDetail3' index element={<ServiceDetail3 />} />
        <Route path='/AdminLogin' index element={<AdminLogin />} />
        <Route path='/Portfolio' index element={<AllPortfolios />} />
        <Route path='/Portfolio/:id' index element={<PortfolioDetail />} />
        <Route path='/Blogs' index element={<AllBlogs />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App