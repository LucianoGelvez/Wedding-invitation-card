import React, { useState } from 'react';
import './WeddingInvitation.css'; // Importa el archivo CSS

const WeddingInvitation = () => {
  const [showModal, setShowModal] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [guestName, setGuestName] = useState('');


  const handleConfirm = () => {
        setShowInput(true);
    };


  const handleModal = () => {
      setShowModal(!showModal);
      setShowInput(false);
      setGuestName('')
  }

    const handleInputChange = (event) => {
    setGuestName(event.target.value);
  };

 const handleFormSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la confirmación (guardar el nombre del invitado, etc.)
    console.log('Confirmado para:', guestName);
    setShowModal(false);
    setShowInput(false);
    setGuestName('')
  };


  return (
    <div className="invitation-card">
      <video autoPlay loop muted className="background-video">
        <source src="/assets/video.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      <div className="content">
           <h1 style={{color: 'gold'}}>Nos Casamos</h1>
          <h2 style={{color: '#781313'}}>Noe y Agu</h2>

            <div style={{ display: 'flex', flexDirection: 'row' , justifyContent: 'space-around',width: '100%'}}>
              <p style={{color: '#781313', marginRight: '10px'}}> SÁBADO</p>
               <p style={{color: '#781313', fontSize: '2em'}}>29</p>
            <p style={{color: '#781313', marginLeft: '10px'}}>A LAS 21:00</p>
             </div>
             <p style={{color: '#781313'}}>MARZO</p>
          <p style={{color: '#524545', maxWidth:'60%', margin:'0 auto'}}>Si quieres ayudarnos pero no sabes cómo, ¡puedes hacerlo contribuyendo con nuestra luna de miel!</p>
          <p style={{color: '#781313'}}>Cuenta Mercado pago 11111111111</p>
            <p style={{color: '#781313'}}>Laprida 2482, Cruz de Piedra</p>
           <p style={{color: '#781313'}}>Confirmar Asistencia al: (55) 1234-5678</p>
           <p style={{color: '#524545', fontSize: '1.5em'}}>¡Te esperamos!</p>
          <button onClick={() => setShowModal(true)} className="confirm-button">
            Confirmar Presencia
          </button>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              {showInput ? (
                 <form onSubmit={handleFormSubmit}>
                    <label style={{marginBottom: '10px'}}>
                    Nombre de los invitados:
                    <input type="text" value={guestName} onChange={handleInputChange} style={{marginLeft: '10px'}}/>
                    </label>
                <div style={{marginTop:'10px', display: 'flex', flexDirection: 'row', justifyContent:'space-around'}}>
                   <button type="submit">Confirmar</button>
                   <button onClick={() => handleModal(false)}>Cancelar</button>
                </div>

                  </form>


              ) : (
                <>
              <p>¿Confirmas tu asistencia?</p>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-around', marginTop: '10px'}}>
                  <button onClick={handleConfirm}>Confirmar</button>
                  <button onClick={() => handleModal(false)}>Cancelar</button>
                </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeddingInvitation;