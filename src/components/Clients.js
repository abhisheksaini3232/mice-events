import React from 'react';
import './Clients.css';

/*
  Client logos are loaded from public/images/clients/
  Add your client logo images there and update this array.
  Using text placeholders until real logos are added.
*/
const clients = [
  { id: 1, name: 'Client One', logo: '/images/clients/client-1.png' },
  { id: 2, name: 'Client Two', logo: '/images/clients/client-2.png' },
  { id: 3, name: 'Client Three', logo: '/images/clients/client-3.png' },
  { id: 4, name: 'Client Four', logo: '/images/clients/client-4.png' },
  { id: 5, name: 'Client Five', logo: '/images/clients/client-5.png' },
  { id: 6, name: 'Client Six', logo: '/images/clients/client-6.png' },
  { id: 7, name: 'Client Seven', logo: '/images/clients/client-7.png' },
  { id: 8, name: 'Client Eight', logo: '/images/clients/client-8.png' },
  { id: 9, name: 'Client Nine', logo: '/images/clients/client-9.png' },
  { id: 10, name: 'Client Ten', logo: '/images/clients/client-10.png' },
];

const Clients = () => {
  // Duplicate the list for seamless infinite scroll
  const doubledClients = [...clients, ...clients];

  return (
    <section className="clients" id="clients">
      <div className="clients-container">
        <div className="section-header">
          <span className="section-tag">Trusted By</span>
          <h2 className="section-title">Our Clients</h2>
          <p className="section-desc">
            We're proud to partner with leading brands and organizations worldwide
          </p>
        </div>

        <div className="clients-marquee">
          <div className="clients-track">
            {doubledClients.map((client, index) => (
              <div className="client-item" key={`${client.id}-${index}`}>
                <div className="client-logo-wrapper">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="client-logo-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="client-logo-placeholder" style={{ display: 'none' }}>
                    {client.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
