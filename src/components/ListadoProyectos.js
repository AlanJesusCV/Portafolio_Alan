import React, { useState } from 'react'
import { trabajosJson } from '../data/trabajosJson';
import { Link, Navigate } from 'react-router-dom';
import { DetalleModal } from './modals/DetalleModal';
import LaunchIcon from '@mui/icons-material/Launch';
export const ListadoProyectos = ({ limite = 10 }) => {
    const [open, setOpen] = useState(false);
    const [selectedTrabajo, setSelectedTrabajo] = useState(null);

    const handleClickOpen = (trabajo) => {
        setSelectedTrabajo(trabajo);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedTrabajo(null);
    };
    return (
        <div className="works">
            {
                trabajosJson.slice(0, limite).map((trabajo) => {
                    return (
                        <article key={trabajo.id} className="work-item">
                            <div className="mask">
                                <img src={"img/" + trabajo.id + ".png"} alt={trabajo.nombre} />
                            </div>
                            <span>{trabajo.categoria}</span>
                            <h2><a href={trabajo.url}>{trabajo.nombre} <LaunchIcon/></a></h2>
                            <h3>{trabajo.tecnologias}</h3>
                            <div>
                                {limite === 10 && (
                                    <button onClick={() => handleClickOpen(trabajo)}>Detalle</button>
                                )}
                                {limite < 10 && (
                                    <h2 className="title">
                                        <Link to="/portafolio">Ver más</Link>
                                    </h2>
                                )}
                            </div>
                        </article>
                    );
                })
            }
            {selectedTrabajo && (
                <DetalleModal
                    open={open}
                    onClose={handleClose}
                    description={selectedTrabajo.descripcion}
                    title={selectedTrabajo.nombre}
                />
            )}
        </div>
    );
}