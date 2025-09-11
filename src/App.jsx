import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Contact, ServiceDetail3 } from './AllFiles'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/Contact' index element={<Contact />} />
        <Route path='/ServiceDetail3' index element={<ServiceDetail3 />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App