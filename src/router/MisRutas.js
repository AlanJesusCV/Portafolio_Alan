import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Inicio } from '../components/Inicio';
import { Error } from '../components/Error';
import { Portafolio } from '../components/Portafolio';
import { Curriculum } from '../components/Curriculum';
import { Contacto } from '../components/Contacto';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export const MisRutas = () => {
    return (
        <BrowserRouter>
            <Header />
            <section className="content">
                <Routes>
                    <Route path="/" element={< Navigate to="/inicio" />} />
                    <Route path="/inicio" element={< Inicio />} />
                    <Route path="/portafolio" element={< Portafolio />} />
                    <Route path="/curriculum" element={< Curriculum />} />
                    <Route path="/contacto" element={< Contacto />} />
                    <Route path="*" element={<  Error />} />
                </Routes>
            </section>
            <Footer />
        </BrowserRouter>
    )
}
