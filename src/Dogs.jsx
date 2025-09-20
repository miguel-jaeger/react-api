import React, { useState, useEffect } from 'react';
const ImagenesDogs = () => {
    // Estados para la lista de razas y el estado de la petición
    const [razas, setRazas] = useState([]);
    //const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    // useEffect para obtener los datos de la API al montar el componente
    useEffect(() => {
        const ImagenesDogs = async () => {
            try {
                const response = await fetch('https://dog.ceo/api/breeds/image/random');
                if (!response.ok) {
                    throw new Error('Error al obtener los datos de la API.');
                }
                const data = await response.json();
                setRazas(data);
            } catch (err) {
                setError("Ocurrió un error al cargar las razas de gatos.");
                console.error(err);
            } finally {
                setCargando(false);
            }
        };
        ImagenesDogs();
    }, []
    );
    return (
        <div><img src={razas.message} width="300px"></img></div>
    );
};
export default ImagenesDogs;