import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import DocumentReader from './pages/DocumentReader';
import CollectionHub from './pages/CollectionHub';
import About from './pages/About';
import Contact from './pages/Contact';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {!location.pathname.startsWith('/document') && !location.pathname.startsWith('/colecao') && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/document/:id" element={<DocumentReader />} />
          <Route path="/colecao/:id" element={<CollectionHub />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
