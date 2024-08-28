import React, { useState } from 'react'
import { worksJson } from '../data/worksJson';
import { Link } from 'react-router-dom';
import { DetailModal } from './modals/DetailModal';
import LaunchIcon from '@mui/icons-material/Launch';

export const ProyectList = ({ limit = 10 }) => {
    const [open, setOpen] = useState(false);
    const [selectedWork, setSelectedWork] = useState(null);

    const handleClickOpen = (work) => {
        setSelectedWork(work);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedWork(null);
    };
    return (
        <div className="works">
            {
                worksJson.slice(0, limit).map((work) => {
                    return (
                        <article key={work.id} className="work-item">
                            <div className="mask">
                                <img src={"./img/" + work.id + ".png"} alt={work.nombre} />
                            </div>
                            <span>{work.categoria}</span>
                            <h2><a href={work.url}>{work.nombre} <LaunchIcon/></a></h2>
                            <h3>{work.tecnologias}</h3>
                            <div>
                                {limit === 10 && (
                                    <button onClick={() => handleClickOpen(work)}>Detalle</button>
                                )}
                                {limit < 10 && (
                                    <h2 className="title">
                                        <Link to="/portafolio">Ver más</Link>
                                    </h2>
                                )}
                            </div>
                        </article>
                    );
                })
            }
            {selectedWork && (
                <DetailModal
                    open={open}
                    onClose={handleClose}
                    description={selectedWork.descripcion}
                    title={selectedWork.nombre}
                />
            )}
        </div>
    );
}