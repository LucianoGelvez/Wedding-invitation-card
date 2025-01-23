import React, { useState, useRef, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './WeddingInvitation.css';
import backgroundVideo from './assets/Invitación Vertical Boda Floral Rojo y Dorado .mp4';
import backgroundImage from './assets/Invitación Vertical Boda Floral Rojo y Dorado.png';
import anillosDeBoda from './assets/anillosDeBoda.png';
import sonidoOff from './assets/sound-min-svgrepo-com.svg';
import sonidoOn from './assets/sound-max-svgrepo-com.svg';
import musica from './assets/AerosmithIDontWantToMissAThingSubEspañol.mp3';
import logoMercadoPago from './assets/logoMercadoPago.png';
import iconoCorazon from './assets/iconoCorazon.svg';


const WeddingInvitation = () => {
  const [showModal, setShowModal] = useState(false);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [guestNames, setGuestNames] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [state, handleSubmit] = useForm("xjkkqzzp");
  const audioRef = useRef(new Audio(musica));
  const [maxAmountOfGuests, setMaxAmountOfGuests] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  /*Estado para reconocer si hay un path "queremos-verte-alli" */
  const [hasCustomPath, setHasCustomPath] = useState(false);

  const phrasesToGuests = {
    "te-esperamos-en-nuestra-boda": 1,
    "celebra-nuestro-amor": 2,
    "acompananos-en-este-dia-especial": 3,
    "se-parte-de-nuestra-historia": 4,
    "comparte-nuestra-felicidad": 5,
    "queremos-verte-alli": 6 // Path para activar WhatsApp y mensaje de valor de 30 mil
  };

  useEffect(() => {
    const path = window.location.pathname.split('/')[1]; // Get first segment after the initial slash
    const numberOfGuests = phrasesToGuests[path] || 1;
    setMaxAmountOfGuests(Array(numberOfGuests).fill(""));

    if (path === "queremos-verte-alli") {
      setHasCustomPath(true);
    } else {
      setHasCustomPath(false);
    }
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
    setGuestNames([]);
  };

  const handleInputChange = (event, index) => {
    const updatedGuestNames = [...guestNames];
    updatedGuestNames[index] = event.target.value;
    setGuestNames(updatedGuestNames);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const sendEmail = (event) => {
    event.preventDefault();

    const message = `Felicidades Lucho, las siguientes personas han confirmado asistencia a tu boda: ${guestNames.join(', ')}.`;
    const emailData = new FormData();
    emailData.append("email", "felipelaezhenao@gmail.com");
    emailData.append("message", message);

    handleSubmit(emailData);
    setShowModal(false);
    setShowConfirmationPopup(true);
  };

  const handleConfirmAssistance = () => {
    if (hasCustomPath) {
      const mensaje = "Hola, confirmo que las siguientes personas asistirán a la boda: ";
      const numeroTelefono = '+5492613677103';

      // Codifica el mensaje para que sea seguro en la URL
      const mensajeCodificado = encodeURIComponent(mensaje);

      // Construye la URL de WhatsApp con el mensaje predefinido
      const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;

      // Abre la URL en una nueva pestaña
      window.open(urlWhatsApp, '_blank');
    } else if (window.location.pathname === '/' || window.location.pathname === '') {
      const mensaje = "Hola, confirmo que las siguientes personas asistirán a la boda: ";
      const numeroTelefono = '+5492613677103';

      // Codifica el mensaje para que sea seguro en la URL
      const mensajeCodificado = encodeURIComponent(mensaje);

      // Construye la URL de WhatsApp con el mensaje predefinido
      const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;

      // Abre la URL en una nueva pestaña
      window.open(urlWhatsApp, '_blank');
    }
    else {
      setShowModal(true);
      setGuestNames([]);
    }
  };


  return (
    <div className={`invitation-container ${isFlipped ? 'flipped' : ''}`}>
      <div className="invitation-inner">
        <div className="invitation-front">
          <div className="invitation-card">
            <video autoPlay loop muted className="background-video">
              <source src={backgroundVideo} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>

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

            <div className="content">
              <h1
                style={{
                  color: '#9f7a3d',
                  fontFamily: 'Parisienne',
                  marginBottom: '0px',
                  textShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)',
                  fontWeight: "500",
                  marginTop: "0px"
                }}
              >
                Nos Casamos
              </h1>
              <h2
                style={{
                  color: '#781313',
                  fontFamily: 'Parisienne',
                  marginTop: '5px',
                  marginBottom: '10px',
                  textShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)',
                  fontWeight: "500"
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
                }}
                className='datesContainer'
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginRight: '10px',
                  }}
                >
                  <hr className='lineas' />
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
                  <hr className='lineas' />
                </div>

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
                  <p style={{ color: '#781313', fontSize: "13px", fontFamily: 'Nunito', textShadow: "none", fontWeight: "700", margin: "0px" }}>DE MARZO</p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginLeft: '10px',
                  }}
                >
                  <hr className='lineas' />
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
                  <hr className='lineas' />
                </div>
              </div>

              <p
                style={{
                  color: '#781313',
                  fontFamily: 'Cormorant Garamond',
                  fontWeight: '700',
                }}
                className='addressText'
              >
                Laprida 2482, Cruz de Piedra, Maipú
              </p>
              <p
                style={{
                  color: '#781313',
                  fontFamily: 'Cormorant Garamond',
                  fontWeight: '700',
                }}
                className='descriptionText'
              >
                Llegó el día de nuestra boda, estamos muy felices de compartirlo con ustedes.
              </p>
              <p
                style={{
                  color: '#9f7a3d',
                  fontFamily: 'Parisienne',
                  margin: '0px',
                }}
                className='teEsperamosText'
              >
                ¡Te esperamos!
              </p>
              <button
                onClick={handleConfirmAssistance}
                className="confirm-button"
              >
                Confirmar asistencia
              </button>
              {hasCustomPath && (
                <div
                  className='valueText'
                  style={{
                    color: '#9f7a3d',
                    border: '1px solid #9f7a3d',
                    backgroundColor: 'white',
                    borderRadius: "5px",
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div>
                    Valor de tarjeta:
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#781313", fontWeight: "700" }}>
                    30 mil
                    <img style={{ height: "20px" }} src={iconoCorazon} alt="" />
                  </div>
                </div>
              )}
              <button
                onClick={handleFlip}
                className='paymentButton'
                style={{
                  color: '#781313',
                  border: '1px solid #781313',
                  backgroundColor: 'white',
                  borderRadius: "5px",
                  cursor: "pointer",
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Ver atrás
              </button>
            </div>
          </div>
        </div>

        <div className="invitation-back">
          <video autoPlay loop muted className="background-video">
            <source src={backgroundVideo} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
          <div className="bank-info">
            <p
              style={{
                color: '#9f7a3d',
                margin: '0 auto',
                fontFamily: 'Cormorant Garamond',
                fontWeight: '700',
                fontStyle: 'italic',
                marginTop: "15px",
              }}
              className='helpText'
            >
              Su presencia es nuestro mejor regalo, pero si desean ayudarnos a escaparnos unos días, pueden contribuir a nuestra luna de miel y hacerla aún más especial.
            </p>

            <h3 style={{ color: '#781313', fontFamily: 'Cormorant Garamond', fontSize: '4vh' }}>
              Nuestra cuenta
            </h3>
            <div style={{ color: '#781313', fontFamily: 'Cormorant Garamond', fontSize: '2.5vh' }}>
              <p style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent: "center", alignItems: "center" }}>
                Alias: NoeyAgu
                <button
                  style={{
                    backgroundColor: '#781313',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    fontFamily: 'Arial, sans-serif'
                  }}
                  onClick={() => {
                    navigator.clipboard.writeText('NoeyAgu');
                    alert('Texto copiado: NoeyAgu');
                  }}
                >
                  Copiar
                </button>
              </p>
              <p style={{ display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center" }}>
                <p>
                  CVU:
                </p>
                0000003100085576804487
                <button
                  style={{
                    backgroundColor: '#781313',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    fontFamily: 'Arial, sans-serif'
                  }}
                  onClick={() => {
                    navigator.clipboard.writeText('0000003100085576804487');
                    alert('Texto copiado: 0000003100085576804487');
                  }}
                >
                  Copiar
                </button>
              </p>
            </div>
            <button
              className="mercadopago-button"
              onClick={() => window.open("https://link.mercadopago.com.ar/lunademielnoeyagu", "_blank")}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                backgroundColor: '#009ee3',
                color: 'white',
                border: 'none',
                borderRadius: "5px",
                padding: "10px 20px",
                cursor: "pointer",
                marginTop: "20px",
                width: "100%",
                maxWidth: "300px",
                margin: "20px auto"
              }}
            >
              <img
                src={logoMercadoPago}
                alt="Mercado Pago"
                style={{
                  height: '32px',
                  width: 'auto'
                }}
              />
              Contribuír con Luna de miel
            </button>
            <button
              onClick={handleFlip}
              className="back-button"
              style={{
                color: '#781313',
                border: '1px solid #781313',
                backgroundColor: 'white',
                borderRadius: "5px",
                padding: "10px 20px",
                cursor: "pointer",
                marginTop: "20px"
              }}
            >
              Volver
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={sendEmail}>
              {maxAmountOfGuests.map((_, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                  <label>
                    Nombre del invitado:
                  </label>
                  <input
                    type="text"
                    value={guestNames[index] || ''}
                    onChange={(e) => handleInputChange(e, index)}
                    style={{ marginLeft: '10px' }}
                  />
                </div>
              ))}
              <div style={{
                marginTop: '10px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
                <button type="submit" disabled={state.submitting}>
                  Confirmar
                </button>
                <button style={{ backgroundColor: "#781313" }} onClick={() => handleModal(false)}>
                  Cancelar
                </button>
              </div>
            </form>
            {state.succeeded && <p>¡Confirmación enviada!</p>}
          </div>
        </div>
      )}

      {showConfirmationPopup && (
        <div className="confirmation-popup">
          <div className="popup-content">
            <h2>¡Felicidades!</h2>
            <p>Has confirmado tu asistencia a nuestra boda. ¡Nos vemos pronto!</p>
            <button onClick={() => setShowConfirmationPopup(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeddingInvitation;