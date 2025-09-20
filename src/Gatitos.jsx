import React, { useState, useEffect } from 'react';
const RazasDeGatos = () => {
    // Estados para la lista de razas y el estado de la petición
    const [razas, setRazas] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    // useEffect para obtener los datos de la API al montar el componente
    useEffect(() => {
        const obtenerRazas = async () => {
            try {
                const response = await fetch('https://api.thecatapi.com/v1/breeds');
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
        obtenerRazas();
    }, []
    );
    return (
<div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
<h2 style={{ textAlign: 'center' }}>Razas de Gatos</h2>
{cargando && <p style={{ textAlign: 'center' }}>Cargando razas...</p>}
{error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
{!cargando && !error && ( <ul style={{ listStyle: 'none', padding: 0 }}>
{razas.map(raza => (
<li key={raza.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
<p><strong>{raza.name}</strong></p>
<p>Origen: {raza.origin}</p>
<p>Wikipedia: <a href={raza.wikipedia_url} target='_blank'>Visitar</a></p>
{raza.temperament && <p>Temperamento: {raza.temperament}</p>}

</li>
))}
</ul>
)}
</div>
);
};
export default RazasDeGatos;