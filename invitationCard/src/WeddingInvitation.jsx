import React, { useState, useRef, useEffect } from 'react';
import './WeddingInvitation.css'; // Archivo CSS para estilos
import backgroundVideo from './assets/Invitación Vertical Boda Floral Rojo y Dorado .mp4';
import anillosDeBoda from './assets/anillosDeBoda.png';
import sonidoOff from './assets/sound-min-svgrepo-com.svg';
import sonidoOn from './assets/sound-max-svgrepo-com.svg';
import musica from './assets/art-of-samples-buzz-120-bpm-audio-logo-245396.mp3';

const WeddingInvitation = () => {
  const [showModal, setShowModal] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(musica));

  const [maxAmountOfGuests, setMaxAmountOfGuests] = useState(0);

  const phrasesToGuests = {
    "te-esperamos-en-nuestra-boda": 1,
    "celebra-nuestro-amor": 2,
    "acompananos-en-este-dia-especial": 3,
    "se-parte-de-nuestra-historia": 4,
    "comparte-nuestra-felicidad": 5
  };

  useEffect(() => {
    const path = window.location.pathname.split('/').pop();
    console.log(path);
    const numberOfGuests = phrasesToGuests[path] || 1;
    console.log(numberOfGuests);
    setMaxAmountOfGuests(Array(numberOfGuests).fill(""));
  }, []);

  const toggleSound = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleModal = () => {
    setShowModal(!showModal);
    setGuestName('');
  };

  const handleInputChange = (event, index) => {
    const updatedGuestNames = [...guestName];
    updatedGuestNames[index] = event.target.value;
    setGuestName(updatedGuestNames);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Confirmado para:', guestName);
    setShowModal(false);
    setGuestName('');
  };

  useEffect(() => {
    console.log(guestName)
  }, [guestName])

  return (
    <div className="invitation-card">
      {/* Video de fondo */}
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      {/* Botón de sonido */}
      <button
        onClick={toggleSound}
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          background: 'transparent',
          border: 'none',
          outline: "none",
          cursor: 'pointer',
          zIndex: "10000",
          ':hover': {
            border: 'none',
            outline: 'none',
          },
        }}
      >
        <img
          src={isPlaying ? sonidoOn : sonidoOff}
          alt="Control de sonido"
          style={{
            width: '30px',
            height: '30px',
            borderRadius: "1000px",
            border: '1px solid #781313',
          }}
        />
      </button>


      {/* Contenido principal */}
      <div className="content">
        <h1
          style={{
            color: '#9f7a3d',
            fontFamily: 'Parisienne',
            marginBottom: '0px',
          }}
        >
          Nos Casamos
        </h1>
        <h2
          style={{
            color: '#781313',
            fontFamily: 'Parisienne',
            marginTop: '15px',
            marginBottom: '10px',
          }}
          className='nombres'
        >
          Noe y Agu
        </h2>

        <img style={{ margin: '0px' }} className='imagenAnillos' src={anillosDeBoda} alt="" />

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '400px',
            position: "relative",
            left: "50%",
            transform: "translate(-50%)",
            height: "75px"
          }}
        >
          {/* Contenedor para SÁBADO */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginRight: '10px',
            }}
          >
            <hr
              style={{
                border: 'none', // Quita el borde predeterminado
                height: '2px', // Define el grosor del "borde"
                width: '160px', // Define el ancho
                background: 'linear-gradient(to right, #faebb2, #907353', // Degradado
                margin: 0, // Elimina márgenes
              }}
            />

            <p
              style={{
                color: '#781313',
                margin: '5px 0',
                fontFamily: 'Nunito',
                fontWeight: '800',
                padding: "5px 0px"
              }}
              className='fechaHoraTexto'
            >
              SÁBADO
            </p>
            <hr
              style={{
                border: 'none', // Quita el borde predeterminado
                height: '2px', // Define el grosor del "borde"
                width: '160px', // Define el ancho
                background: 'linear-gradient(to right, #faebb2, #907353', // Degradado
                margin: 0, // Elimina márgenes
              }}
            />
          </div>

          {/* Número 29 */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingBottom: "20px" }}>
            <p
              style={{
                color: '#813322',
                fontWeight: '500',
                textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
                margin: '0px',
                fontFamily: 'Playfair display',
              }}
              className='dateTexto'
            >
              29
            </p>
            <p style={{ color: '#781313', fontSize: "13px", fontFamily: 'Nunito', textShadow: "none", fontWeight: "700", margin: "0px" }}>MARZO</p>
          </div>
          {/* Contenedor para A LAS 21:00 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: '10px',
            }}
          >
            <hr
              style={{
                border: 'none', // Quita el borde predeterminado
                height: '2px', // Define el grosor del "borde"
                width: '160px', // Define el ancho
                background: 'linear-gradient(to right, #faebb2, #907353', // Degradado
                margin: 0, // Elimina márgenes
              }}
            />
            <p
              style={{
                color: '#781313',
                margin: '5px 0',
                fontFamily: 'Nunito',
                fontWeight: '800',
                padding: "5px 0px"
              }}
              className='fechaHoraTexto'
            >
              A LAS 21:00
            </p>
            <hr
              style={{
                border: 'none', // Quita el borde predeterminado
                height: '2px', // Define el grosor del "borde"
                width: '160px', // Define el ancho
                background: 'linear-gradient(to right, #faebb2, #907353', // Degradado
                margin: 0, // Elimina márgenes
              }}
            />
          </div>
        </div>

        <p
          style={{
            color: '#781313',
            fontFamily: 'Cormorant Garamond',
            fontWeight: '700',
          }}
        >
          Laprida 2482, Cruz de Piedra
        </p>
        <p
          style={{
            color: '#781313',
            fontFamily: 'Cormorant Garamond',
            fontWeight: '700',
          }}
        >
          Llegó el día de nuestra boda, estamos muy felices de compartirlo con ustedes.
        </p>
        <p
          style={{
            color: '#9f7a3d',
            maxWidth: '60%',
            margin: '0 auto',
            fontFamily: 'Cormorant Garamond',
            fontWeight: '700',
            fontStyle: 'italic',
          }}
        >
          Si quieres ayudarnos pero no sabes cómo, ¡puedes hacerlo contribuyendo
          con nuestra luna de miel!
        </p>
        <button
          className='paymentButton'
          style={{
            color: '#781313',
            border: '1px solid #781313',
            backgroundColor: 'white',
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Clic aquí
        </button>
        <p
          style={{
            color: '#9f7a3d',
            fontSize: '1.5em',
            fontFamily: 'Parisienne',
            fontSize: '35px',
            margin: '0px',
          }}
        >
          ¡Te esperamos!
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="confirm-button"
        >
          Confirmar asistencia
        </button>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <form onSubmit={handleFormSubmit}>
                {maxAmountOfGuests.map((_, index) => (
                  <div key={index} style={{ marginBottom: '10px' }}>
                    <label>
                      Nombre del invitado:
                    </label>
                    <input
                      type="text"
                      value={guestName[index] || ''} // Asegúrate de manejar un array de nombres
                      onChange={(e) => handleInputChange(e, index)} // Pasa el índice para identificar el input
                      style={{ marginLeft: '10px' }}
                    />
                  </div>
                ))}
                <div
                  style={{
                    marginTop: '10px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}
                >
                  <button type="submit">Confirmar</button>
                  <button style={{ backgroundColor: "#781313" }} onClick={() => handleModal(false)}>
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeddingInvitation;