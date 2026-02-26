import React from "react";
import "./Clients.css";

/*
  Client logos are loaded from public/images/clients/
  Add your client logo images there and update this array.
  Using text placeholders until real logos are added.
*/
const clients = [
  {
    id: 1,
    name: "Bosch",
    logo: "/images/clients/bosch-logo-png_seeklogo-21524.png",
  },
  {
    id: 2,
    name: "Wonder Cement",
    logo: "/images/clients/wonder-cement-logo-png_seeklogo-304261.png",
  },
  { id: 3, name: "Client", logo: "/images/clients/1651240420417_94.jpg" },
  {
    id: 4,
    name: "Client",
    logo: "/images/clients/ab1469205179851.Y3JvcCw1MTgsNDA1LDQzOCwyNzA.png",
  },
  { id: 5, name: "Client", logo: "/images/clients/images.png" },
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
            We're proud to partner with leading brands and organizations
            worldwide
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
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="client-logo-placeholder">{client.name}</div>
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
