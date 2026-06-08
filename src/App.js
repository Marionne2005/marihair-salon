import React, { useState } from 'react';
import './App.css';
import hair14 from './images/images/hair_14.jpg';
import hair_12 from './images/hair_12.jpg';
import hair_25 from './images/hair_25.jpg';
import hair_8 from './images/images/hair_8.jpg';
import hair2 from './images/images/hair_2.jpg';
import hair18 from './images/hair_18.jpg';
import hair17 from './images/hair_17.jpg';
import hair5 from './images/images/hair_5.jpg';
import accessories2 from './images/images/acessories_2.jpg';

function App() {
  const [page, setPage] = useState('home');
  const [selectedService, setSelectedService] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingModal, setBookingModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [warningModal, setWarningModal] = useState(false);

  const navigateTo = (p) => {
    document.body.style.opacity = '0';
    setTimeout(() => {
      setPage(p);
      document.body.style.opacity = '1';
    }, 300);
  };

  const openBooking = (name, price) => {
    setSelectedService(name);
    setSelectedPrice(price);
    setBookingModal(true);
  };

  return (
    <div >
      {/* HOME */}
      {page === 'home' && (
        <div style={{
          backgroundImage: `url(${hair14})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          margin: 0,
          padding: 0,
          paddingTop: '40px'
        }} >
          <div className="overlay"></div>

          {/* SOCIAL MEDIA */}
          <div className="social_media">
            <a href="https://www.instagram.com/mari__hair27/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://wa.me/16132767337" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp fa-2x"></i>
            </a>
            <a href="https://www.snapchat.com/add/marionnegannavi" target="_blank" rel="noreferrer">
              <i className="fab fa-snapchat fa-2x"></i>
            </a>
          </div>

          <div className="text_image">
            <nav className="menu-other">
              <span onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>Home</span>
              <span onClick={() => navigateTo('services')} style={{ cursor: 'pointer' }}>Services</span>
              <span onClick={() => navigateTo('story')} style={{ cursor: 'pointer' }}>Our story</span>
              <span onClick={() => navigateTo('contact')} style={{ cursor: 'pointer' }}>Contact us</span>
              <span onClick={() => navigateTo('services')} className="button_nav" style={{ cursor: 'pointer', color: 'black' }}>BOOK NOW</span>
            </nav>
            <h1 className="title">Marihair</h1>
            <p className="slogan">Glow your hair, own your vibe</p>
          </div>

          {/* TREATMENTS */}
          <section className="treatments" style={{ backgroundImage: `url(${hair2})` }}>
            <h2>OUR TREATMENTS</h2>
            <div className="galerie">
              <img src={hair18} alt="Hair 1" />
              <img src={hair17} alt="Hair 2" />
              <img src={hair5} alt="Hair 3" />
            </div>
            <span onClick={() => navigateTo('services')} className="button-reservation" style={{ cursor: 'pointer' }}>BOOK NOW</span>
          </section>

          {/* FINALS */}
          <section className="finals" style={{ backgroundImage: `url(${accessories2})` }}>
            <a href="https://www.instagram.com/mari__hair27/" target="_blank" rel="noreferrer" id="peps">FOLLOW US ON</a>
            <h2>INSTAGRAM!</h2>
          </section>

          {/* FOOTER */}
          <footer>
            <div className="form-bloc">
              <div className="form-item"><h3>ADDRESS</h3><p>123 Hairdressers St, Ottawa</p></div>
              <div className="form-item"><h3>CONTACT</h3><p>Tel: +1(613)276-7337</p><p>Email: contact@marihair.com</p></div>
              <div className="form-item"><h3>OPENING HOURS</h3><p>Mon-Thu: 9am-8pm</p><p>Fri: 9am-8pm</p></div>
              <div className="form-item">
                <h3>STAY UPDATED</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Your email" name="mail" required />
                  <button type="submit">Send</button>
                </form>
              </div>
            </div>
          </footer>
        </div>
      )}

      {/* SERVICES */}
      {page === 'services' && (
        <div className="page-transition" style={{
          backgroundImage: `url(${hair_12})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          paddingTop: '40px'
        }}>
          <nav className="menu-other" style={{ marginTop: '20px' }}>
            <span onClick={() => navigateTo('home')} style={{ cursor: 'pointer', color: 'white', fontFamily: "'Forum', sans-serif", fontSize: '25px' }}>Home</span>
            <span onClick={() => navigateTo('services')} style={{ cursor: 'pointer', color: 'white', fontFamily: "'Forum', sans-serif", fontSize: '25px' }}>Services</span>
            <span onClick={() => navigateTo('story')} style={{ cursor: 'pointer', color: 'white', fontFamily: "'Forum', sans-serif", fontSize: '25px' }}>Our story</span>
            <span onClick={() => navigateTo('contact')} style={{ cursor: 'pointer', color: 'white', fontFamily: "'Forum', sans-serif", fontSize: '25px' }}>Contact us</span>
            <span onClick={() => navigateTo('services')} className="button_nav" style={{ cursor: 'pointer', color: 'black' }}>BOOK NOW</span>
          </nav>

          <h1 style={{ display: 'flex', justifyContent: 'center', fontSize: '150px', color: 'white', fontFamily: "'Italianno', cursive", marginTop: '20px' }}>
            Services
          </h1>

          {/* LISTE DES SERVICES */}
          <div className="services-container">
            {[
              { name: 'Cornrows simples', price: '30$-40$' },
              { name: 'Cornrows avec extensions', price: '60$-80$' },
              { name: 'Braids simples', price: '50$' },
              { name: 'Braids with extensions', price: '70$-150$' },
              { name: 'Passion Twists', price: '100$-130$' },
              { name: 'Fulani braids', price: '90$-120$' },
              { name: 'Goddess braids', price: '80$-100$' },
            ].map((s) => (
              <div className="service" key={s.name}>
                <span className="prestation">{s.name}</span>
                <span className="prix">{s.price}</span>
                <a href="#" className="book-btn" onClick={() => openBooking(s.name, s.price)}>Book Now</a>
              </div>
            ))}
          </div>

          {/* BOOKING MODAL */}
          {bookingModal && (
            <div className="modal" style={{ display: 'flex' }}>
              <div className="modal-content">
                <h2>Appointment Summary</h2>
                <div className="rectangle">
                  <span onClick={() => setWarningModal(true)} className="closeWindow">&times;</span>
                  <p>{selectedService}</p>
                  <p>Canada</p>
                  <p>{selectedPrice}</p>
                </div>
              </div>
              <button className="aptnButton" onClick={() => { setBookingModal(false); setConfirmModal(true); }}>
                Schedule Appointment
              </button>
            </div>
          )}

          {/* WARNING MODAL */}
          {warningModal && (
            <div className="modal_1" style={{ display: 'flex' }}>
              <span onClick={() => setWarningModal(false)} className="closeWindow">&times;</span>
              <h2>Leave without booking?</h2>
              <p>If you leave now, your appointment won't be saved.</p>
              <div className="butClose">
                <span onClick={() => { setWarningModal(false); setBookingModal(false); setConfirmModal(false); }} id="closing">Leave Booking</span>
                <span onClick={() => setWarningModal(false)} id="continue">Continue Booking</span>
              </div>
            </div>
          )}

          {/* CONFIRM MODAL */}
          {confirmModal && (
            <div className="confirmContainer" style={{ display: 'flex' }}>
              <span onClick={() => setConfirmModal(false)} className="closeWindow">&times;</span>
              <h2>Appointment</h2>
              <div className="unitContainer" style={{ display: 'flex' }}>
                <span><input type="text" placeholder="First Name" required /></span>
                <span><input type="text" placeholder="Last Name" required /></span>
                <span><input type="email" placeholder="Your email" required /></span>
                <span><input type="date" /></span>
                <span><input type="tel" placeholder="Phone" required /></span>
              </div>
              <p>{selectedService}</p>
              <p>{selectedPrice}</p>
              <button className="informationButton" onClick={() => {
                setConfirmModal(false);
                setBookingModal(false);
                alert('Your appointment has been confirmed!');
              }}>BOOK</button>
            </div>
          )}

          <footer>
            <div className="form-bloc">
              <div className="form-item"><h3>ADDRESS</h3><p>123 Hairdressers St, Ottawa</p></div>
              <div className="form-item"><h3>CONTACT</h3><p>Tel: +1(613)276-7337</p><p>Email: contact@marihair.com</p></div>
              <div className="form-item"><h3>OPENING HOURS</h3><p>Mon-Thu: 9am-8pm</p><p>Fri: 9am-8pm</p></div>
              <div className="form-item">
                <h3>STAY UPDATED</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Your email" required />
                  <button type="submit">Send</button>
                </form>
              </div>
            </div>
          </footer>
        </div>
      )}
      {/* CONFIRMATION */}
      {page === 'confirmation' && (
        <div style={{
          backgroundImage: `url(${hair14})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '40px'
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.9)',
            borderRadius: '15px',
            padding: '50px',
            textAlign: 'center',
            maxWidth: '500px'
          }}>
            <h2 style={{ color: '#CB8A76', fontFamily: "'Italianno', cursive", fontSize: '60px' }}>
              ✓ Réservation confirmée !
            </h2>
            <p style={{ fontFamily: "'Forum', sans-serif", fontSize: '20px' }}>Service : <strong>{selectedService}</strong></p>
            <p style={{ fontFamily: "'Forum', sans-serif", fontSize: '20px' }}>Date : <strong>{selectedDate}</strong></p>
            <p style={{ fontFamily: "'Forum', sans-serif", fontSize: '20px' }}>Heure : <strong>{selectedTime}</strong></p>
            <button className="button-reservation" onClick={() => {
              setPage('home');
              setSelectedService('');
              setSelectedDate('');
              setSelectedTime('');
            }}>
              Retour à l'accueil
            </button>
          </div>
        </div>
      )}

      {/* CONTACT */}
      {page === 'contact' && (
        <div className="page-transition" style={{
          backgroundImage: `url(${hair_25})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          paddingTop: '40px'

        }}>
          <nav className="menu-other" style={{ marginTop: '20px' }}>
            <span onClick={() => navigateTo('home')} style={{ cursor: 'pointer', color: 'white', fontFamily: "'Forum', sans-serif", fontSize: '25px' }}>Home</span>
            <span onClick={() => navigateTo('services')} style={{ cursor: 'pointer', color: 'white', fontFamily: "'Forum', sans-serif", fontSize: '25px' }}>Services</span>
            <span onClick={() => navigateTo('story')} style={{ cursor: 'pointer', color: 'white', fontFamily: "'Forum', sans-serif", fontSize: '25px' }}>Our story</span>
            <span onClick={() => navigateTo('contact')} style={{ cursor: 'pointer', color: 'white', fontFamily: "'Forum', sans-serif", fontSize: '25px' }}>Contact us</span>
            <span onClick={() => navigateTo('services')} className="button_nav" style={{ cursor: 'pointer', color: 'black' }}>BOOK NOW</span>
          </nav>

          <h1 style={{ display: 'flex', justifyContent: 'center', fontSize: '150px', color: 'white', fontFamily: "'Italianno', cursive" }}>
            Contact us
          </h1>

          <div className="reservation_container">
            <p>Your satisfaction is our top priority. Need advice, a quote, or information about our services? Get in touch — we'll be happy to assist you.</p>
          </div>

          <div className="reservation_block">
            <p><strong>Address:</strong> Ottawa,ON</p>
            <p><strong>Phone:</strong> (613) 276-7337</p>
            <p><strong>Email:</strong> contact@marihair.com</p>
          </div>

          <footer>
            <div className="form-bloc">
              <div className="form-item"><h3>ADDRESS</h3><p>123 Hairdressers St, Ottawa</p></div>
              <div className="form-item"><h3>CONTACT</h3><p>Tel: +1(613)276-7337</p><p>Email: contact@marihair.com</p></div>
              <div className="form-item"><h3>OPENING HOURS</h3><p>Mon-Thu: 9am-8pm</p><p>Fri: 9am-8pm</p></div>
              <div className="form-item">
                <h3>STAY UPDATED</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Your email" required />
                  <button type="submit">Send</button>
                </form>
              </div>
            </div>
          </footer>
        </div>
      )}

      {/* STORY */}
      {page === 'story' && (
        <div className="page-transition" style={{
          backgroundImage: `url(${hair_8})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          paddingTop: '40px'
        }}>
          <nav className="menu-other" style={{ marginTop: '20px' }}>
            <span onClick={() => navigateTo('home')} style={{ cursor: 'pointer', color: 'white', fontFamily: "'Forum', sans-serif", fontSize: '25px' }}>Home</span>
            <span onClick={() => navigateTo('services')} style={{ cursor: 'pointer', color: 'white', fontFamily: "'Forum', sans-serif", fontSize: '25px' }}>Services</span>
            <span onClick={() => navigateTo('story')} style={{ cursor: 'pointer', color: 'white', fontFamily: "'Forum', sans-serif", fontSize: '25px' }}>Our story</span>
            <span onClick={() => navigateTo('contact')} style={{ cursor: 'pointer', color: 'white', fontFamily: "'Forum', sans-serif", fontSize: '25px' }}>Contact us</span>
            <span onClick={() => navigateTo('services')} className="button_nav" style={{ cursor: 'pointer', color: 'black' }}>BOOK NOW</span>
          </nav>

          <h1 style={{ display: 'flex', justifyContent: 'center', fontSize: '150px', color: 'white', fontFamily: "'Italianno', cursive" }}>
            Our Story
          </h1>

          <div className="our_story">
            <p>
              It all started in Cotonou, Benin, under the warm hands and kind heart of <strong>Maman Iman</strong>.
              She wasn't just a hairstylist she was an artist. Watching her braid with such care, love, and precision sparked something in me.
              Day after day, I stood beside her, learning, observing, and slowly falling in love with the magic of hair braiding.
            </p>
            <p>
              Soon, I began practicing on my own. My friends became my canvas.
              I braided their hair for free not for money, but for the joy of learning and growing.
              I asked questions, sought feedback, and welcomed every piece of advice from experienced hairstylists around me.
            </p>
            <p>
              Through the ups and downs, my family was always there.
              They carried me with their encouragement, showed up for every small milestone, and reminded me that my passion had a purpose.
            </p>
            <p>
              And so, <strong>Marihair</strong> was born not just a brand, but a dream woven from patience, practice, community, and love.
              Every braid tells a story, and mine began with gratitude and a deep passion for making people feel confident and seen.</p>

          </div>
          <footer>
            <div className="form-bloc">
              <div className="form-item"><h3>ADDRESS</h3><p>123 Hairdressers St, Ottawa</p></div>
              <div className="form-item"><h3>CONTACT</h3><p>Tel: +1(613)276-7337</p><p>Email: contact@marihair.com</p></div>
              <div className="form-item"><h3>OPENING HOURS</h3><p>Mon-Thu: 9am-8pm</p><p>Fri: 9am-8pm</p></div>
              <div className="form-item">
                <h3>STAY UPDATED</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Your email" required />
                  <button type="submit">Send</button>
                </form>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;