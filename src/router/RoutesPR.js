import React from 'react';
import { Routes, Route, HashRouter as Router, Navigate } from "react-router-dom";
import { Home } from '../components/Home';
import { Error } from '../components/Error';
import { Portfolio } from '../components/Portfolio';
import { Curriculum } from '../components/Curriculum';
import { Contact } from '../components/Contact';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export const RoutesPR = () => {
    return (
        <Router>
            <Header />
            <section className="content">
                <Routes>
                    <Route path="/" element={<Navigate to="/inicio" />} />
                    <Route path="/inicio" element={<Home />} />
                    <Route path="/portafolio" element={<Portfolio />} />
                    <Route path="/curriculum" element={<Curriculum />} />
                    <Route path="/contacto" element={<Contact />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </section>
            <Footer />
        </Router>
    );
};
