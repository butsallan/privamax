import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import ServicesPage from './pages/ServicesPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import PageLayout from './components/PageLayout.tsx';
import './index.css';

function WithLayout({ children }: { children: React.ReactNode }) {
  return <PageLayout>{children}</PageLayout>;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<WithLayout><ServicesPage /></WithLayout>} />
        <Route path="/about" element={<WithLayout><AboutPage /></WithLayout>} />
        <Route path="/contact" element={<WithLayout><ContactPage /></WithLayout>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
