import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './AllFiles'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App