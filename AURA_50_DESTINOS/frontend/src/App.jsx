import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { TravelProvider } from './context/TravelContext.jsx';
import { PhotoProvider } from './context/PhotoContext.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import PageMotion from './components/PageMotion.jsx';
import Home from './pages/Home.jsx';
import Explore from './pages/Explore.jsx';
import DestinationDetail from './pages/DestinationDetail.jsx';
import Collection from './pages/Collection.jsx';
import Trip from './pages/Trip.jsx';
import NotFound from './pages/NotFound.jsx';

function Layout() {
  return <>
    <ScrollToTop />
    <PageMotion />
    <Header />
    <main id="conteudo" tabIndex={-1}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/explorar" element={<Explore />}/>
        <Route path="/destino/:id" element={<DestinationDetail />}/>
        <Route path="/colecao" element={<Collection />}/>
        <Route path="/roteiro" element={<Trip />}/>
        <Route path="/404" element={<NotFound />}/>
        <Route path="*" element={<Navigate to="/404" replace />}/>
      </Routes>
    </main>
    <Footer />
  </>;
}

export default function App() {
  return <TravelProvider><PhotoProvider><HashRouter><button className="skip-link" type="button" onClick={() => document.getElementById('conteudo')?.focus()}>Pular para o conteúdo</button><Layout/></HashRouter></PhotoProvider></TravelProvider>;
}
