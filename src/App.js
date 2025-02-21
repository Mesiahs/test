import Error404 from 'containers/errors/Error404';
import Home from 'containers/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux';
import Services from 'containers/pages/Services';
import About from 'containers/pages/About';
import Blog from 'containers/pages/Blog';
import Nosotros from 'containers/pages/Nosotros';
import Cases from 'containers/pages/Nosotros copy';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display*/}
          <Route path="*" element={<Error404 />} />

          {/* Home Display*/}
          <Route path="/" element={<Home />} />
          <Route path="/Casos" element={<Cases />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Servicios" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
