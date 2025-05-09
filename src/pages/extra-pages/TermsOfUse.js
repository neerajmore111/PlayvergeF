// import React from "react";
// import Header from "../../components/header/Header";
// import BannerPages from "../../components/banners/BannerPages";
// import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import register from "../../assets/images/register.png";
// import deleteAccount from "../../assets/images/deleteAccount.png";
// import accessAccount from "../../assets/images/accessAccount.png";
// import streaming from "../../assets/images/streaming.png";
// import termsOfUse from "../../assets/images/termsOfUse.png";
// import Footer from "../../components/footer/Footer";

// export default function TermsOfUse() {
//   return (
//     <>
//       <Header />
//       <BannerPages pageName="Termeni și condiții" />
//       <main id="main" className="site-main">
//         <Container>
//           <Row>
//             <Col lg="12" sm="12">
//               <div className="iq-privacy-policy">
//                 <div className="mb-3" style={{ fontSize: 18 }}>
//                   <blockquote className="wp-block-quote">
//                     <p>
//                       StreamIT oferă un serviciu de streaming gratuit care
//                       permite utilizatorilor săi să acceseze conținut de
//                       divertisment prin intermediul internetului pe televizoare,
//                       computere, tablete sau alte dispozitive conectate la
//                       internet.
//                     </p>
//                     <p>
//                       Utilizarea acestui serviciu se supune prezentelor Condiții
//                       de Utilizare, iar folosirea în continuare a acestuia din
//                       urmă presupune acceptarea tuturor termenilor și
//                       condițiilor prezentate pe site.
//                     </p>
//                     <cite>
//                       <Link to="#">Echipa StreamIT</Link>
//                     </cite>
//                   </blockquote>
//                   <br />
//                 </div>
//                 <div className="mb-3 firstElelement">
//                   <h4 className="mb-3">1. Înregistrarea în aplicație</h4>
//                   <p className="mb-2">
//                     Crearea unui cont de utilizator și utilizarea serviciului
//                     nostru de streaming este 100% gratuită și nu generează nici
//                     un fel de costuri. Pentru a putea crea un cont este necesară
//                     utilizarea unei adrese de email valide. În vederea
//                     utilizării serviciului ai nevoie de acces la internet,
//                     respectiv de un dispozitiv compatibil cu StreamIT.
//                   </p>
//                   <p className="mb-2">
//                     Dacă se încalcă oricare din termenii și condițiile
//                     prezentate în această secțiune ne rezervăm dreptul de ați
//                     șterge contul definitiv, precum și toate informațiile
//                     asociate cu acesta, de asemenea mai menționăm și faptul că
//                     nu ne rezervăm nici un drept în vizualizarea și actualizarea
//                     diferitelor informații asociate contului de utilizator.
//                   </p>
//                   <div style={{ marginRight: "50%" }}>
//                     <img
//                       src={register}
//                       width="220"
//                       className=" img-fluid d-block "
//                       alt="register"
//                     />
//                   </div>
//                 </div>
//                 <div className="mb-3 secondElelement">
//                   <h4 className="mb-3">2. Anularea contului</h4>
//                   <p className="mb-2">
//                     Utilizatorul nu își poate rezerva dreptul de a-și șterge
//                     contul decât prin luarea legăturii cu administratorul
//                     serviciului.
//                   </p>
//                   <p className="mb-2">
//                     Pentru a lua legătura cu acesta se va completa formularul
//                     din pagina{" "}
//                     <Link to="/contact-us" style={{ fontWeight: "bold" }}>
//                       Contact
//                     </Link>{" "}
//                     precizând numele, prenumele, numărul de telefon, adresa de
//                     email și în mesaj motivul doririi de ștergere a contului de
//                     utilizator.
//                   </p>
//                   <div style={{ marginLeft: "65%" }}>
//                     <img
//                       src={deleteAccount}
//                       width="1000"
//                       className=" img-fluid d-block"
//                       alt="deleteAccount"
//                     />
//                   </div>
//                 </div>
//                 <div className="mb-3 firstElelement">
//                   <h4 className="mb-3">3. Parole și Acces la Cont</h4>
//                   <p className="mb-2">
//                     Utilizatorul care și-a creat contul este responsabil pentru
//                     orice activitate din cadrul acestuia.
//                   </p>
//                   <p className="mb-2">
//                     Pentru a menține controlul asupra contului și a preveni
//                     accesarea acestuia de către altcineva (inclusiv a
//                     informațiilor despre istoricul vizualizărilor din cont),
//                     Titularul Contului trebuie să mențină sub control accesul la
//                     serviciu și să nu divulge nimănui datele de autentificare.
//                   </p>
//                   <div style={{ marginRight: "50%" }}>
//                     <img
//                       src={accessAccount}
//                       width="250"
//                       className=" img-fluid d-block"
//                       alt="accessAccount"
//                     />
//                   </div>
//                 </div>
//                 <div className="mb-3 secondElelement">
//                   <h4 className="mb-3">4. Serviciul StreamIT</h4>
//                   <p className="mb-2">
//                     Trebuie să ai minimum 18 ani pentru ați putea crea un cont.
//                     Minorii pot utiliza serviciul doar sub supravegherea unui
//                     adult. Orice conținut accesat prin intermediul serviciului
//                     sunt pentru uz personal și noncomercial, acestea neputând fi
//                     distribuite altor persoane din afara locuinței tale.
//                   </p>
//                   <p className="mb-2">
//                     Serviciul și colecția de titluri sunt actualizate periodic.
//                     În plus, testăm permanent diverse aspecte ale serviciului
//                     nostru, inclusiv website-ul, interfețele pentru utilizator,
//                     funcționalitățile și disponibilitatea conținutului StreamIT.
//                   </p>
//                   <div style={{ marginLeft: "62%" }}>
//                     <img
//                       src={streaming}
//                       width="450"
//                       className=" img-fluid d-block"
//                       alt="multipleDevices"
//                     />
//                   </div>
//                 </div>
//                 <div className="mb-3">
//                   <h4 className="mb-3">
//                     5. Schimbări aduse Condițiilor de Utilizare
//                   </h4>
//                   <p className="mb-2">
//                     Este posibil ca StreamIT să modifice ocazional prezentele
//                     Condiții de Utilizare. Te vom notifica cu minim 30 de zile
//                     înainte de intrarea în vigoare a modificărilor.
//                   </p>
//                   <div style={{ marginRight: "50%" }}>
//                     <img
//                       src={termsOfUse}
//                       width="280"
//                       className=" img-fluid d-block"
//                       alt="termsOfUse"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </main>
//       <Footer />
//     </>
//   );
// }


import React from "react";
import Header from "../../components/header/Header";
import BannerPages from "../../components/banners/BannerPages";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import register from "../../assets/images/register.png";
import deleteAccount from "../../assets/images/deleteAccount.png";
import accessAccount from "../../assets/images/accessAccount.png";
import streaming from "../../assets/images/streaming.png";
import termsOfUse from "../../assets/images/termsOfUse.png";
import Footer from "../../components/footer/Footer";

export default function TermsOfUse() {
  return (
    <>
      <Header />
      <BannerPages pageName="Terms and Conditions" />
      <main id="main" className="site-main">
        <Container>
          <Row>
            <Col lg="12" sm="12">
              <div className="iq-privacy-policy">
                <div className="mb-3" style={{ fontSize: 18 }}>
                  <blockquote className="wp-block-quote">
                    <p>
                      StreamIT provides a free streaming service that allows its users to access entertainment content via the internet on TVs, computers, tablets, or other internet-connected devices.
                    </p>
                    <p>
                      The use of this service is subject to these Terms of Use, and continuing to use it constitutes acceptance of all the terms and conditions outlined on the site.
                    </p>
                    <cite>
                      <Link to="#">StreamIT Team</Link>
                    </cite>
                  </blockquote>
                  <br />
                </div>
                <div className="mb-3 firstElelement">
                  <h4 className="mb-3">1. Account Registration</h4>
                  <p className="mb-2">
                    Creating a user account and using our streaming service is 100% free and incurs no costs. To create an account, a valid email address is required. To use the service, you need access to the internet and a device compatible with StreamIT.
                  </p>
                  <p className="mb-2">
                    If any of the terms and conditions outlined in this section are violated, we reserve the right to permanently delete your account and all associated information. We also emphasize that we do not reserve any right to view or update any information associated with the user account.
                  </p>
                  <div style={{ marginRight: "50%" }}>
                    <img
                      src={register}
                      width="220"
                      className=" img-fluid d-block "
                      alt="register"
                    />
                  </div>
                </div>
                <div className="mb-3 secondElelement">
                  <h4 className="mb-3">2. Account Cancellation</h4>
                  <p className="mb-2">
                    The user cannot reserve the right to delete their account except by contacting the service administrator.
                  </p>
                  <p className="mb-2">
                    To contact them, you must complete the form on the{" "}
                    <Link to="/contact-us" style={{ fontWeight: "bold" }}>
                      Contact
                    </Link>{" "}
                    page, specifying your name, surname, phone number, email address, and the reason for wanting to delete the user account.
                  </p>
                  <div style={{ marginLeft: "65%" }}>
                    <img
                      src={deleteAccount}
                      width="1000"
                      className=" img-fluid d-block"
                      alt="deleteAccount"
                    />
                  </div>
                </div>
                <div className="mb-3 firstElelement">
                  <h4 className="mb-3">3. Passwords and Account Access</h4>
                  <p className="mb-2">
                    The user who created the account is responsible for any activity within it.
                  </p>
                  <p className="mb-2">
                    To maintain control over the account and prevent unauthorized access (including viewing the viewing history within the account), the Account Holder must maintain control over access to the service and not disclose login credentials to anyone.
                  </p>
                  <div style={{ marginRight: "50%" }}>
                    <img
                      src={accessAccount}
                      width="250"
                      className=" img-fluid d-block"
                      alt="accessAccount"
                    />
                  </div>
                </div>
                <div className="mb-3 secondElelement">
                  <h4 className="mb-3">4. StreamIT Service</h4>
                  <p className="mb-2">
                    You must be at least 18 years old to create an account. Minors may only use the service under the supervision of an adult. Any content accessed through the service is for personal, non-commercial use and may not be shared with others outside your household.
                  </p>
                  <p className="mb-2">
                    The service and content library are updated periodically. Additionally, we continuously test various aspects of our service, including the website, user interfaces, functionality, and availability of StreamIT content.
                  </p>
                  <div style={{ marginLeft: "62%" }}>
                    <img
                      src={streaming}
                      width="450"
                      className=" img-fluid d-block"
                      alt="multipleDevices"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <h4 className="mb-3">
                    5. Changes to the Terms of Use
                  </h4>
                  <p className="mb-2">
                    StreamIT may occasionally modify these Terms of Use. We will notify you at least 30 days before the changes take effect.
                  </p>
                  <div style={{ marginRight: "50%" }}>
                    <img
                      src={termsOfUse}
                      width="280"
                      className=" img-fluid d-block"
                      alt="termsOfUse"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
