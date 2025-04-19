import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { ExcursionsPage } from './pages/Excursions';
import { ExcursionDetailPage } from './pages/ExcursionDetail';
import { CartPage } from './pages/Cart';
import { ConfirmationPage } from './pages/Confirmation';
import { InfoPage } from './pages/Info';
import { ContactPage } from './pages/Contact';
import { Layout } from '../modules/core/components/Layout';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/escursioni" element={<Layout><ExcursionsPage /></Layout>} />
      <Route path="/escursioni/:id" element={<Layout><ExcursionDetailPage /></Layout>} />
      <Route path="/carrello" element={<Layout><CartPage /></Layout>} />
      <Route path="/conferma/:id" element={<Layout><ConfirmationPage /></Layout>} />
      <Route path="/info" element={<Layout><InfoPage /></Layout>} />
      <Route path="/contatti" element={<Layout><ContactPage /></Layout>} />
    </Routes>
  );
}