// import React from "react";
// import Header from "../../components/header/Header";
// import BannerPages from "../../components/banners/BannerPages";
// import { Container, Row, Col } from "react-bootstrap";
// import Footer from "../../components/footer/Footer";

// export default function PrivacyPolicy() {
//   return (
//     <>
//       <Header />
//       <BannerPages pageName="Politică de confidențialitate" />
//       <main id="main" className="site-main">
//         <Container>
//           <Row>
//             <Col lg="12" sm="12">
//               <div className="iq-privacy-policy">
//                 <div className="mb-3" style={{ fontSize: 18 }}>
//                   <blockquote className="wp-block-quote">
//                     <p>
//                       Prezenta Declarație de Confidențialitate explică
//                       practicile noastre, inclusiv opțiunile tale cu privire la
//                       colectarea, folosirea și divulgarea anumitor informații,
//                       chiar și a celor personale, în relație cu serviciul
//                       StreamIT.
//                     </p>
//                     <p>
//                       Pentru întrebări specifice legate de prezenta Declarație
//                       de Confidențialitate sau despre utilizarea informațiilor
//                       personale, a cookie-urilor sau a altor tehnologii
//                       similare, contactează persoana responsabilă cu protecția
//                       datelor prin e-mail la hello@streamit.com.
//                     </p>
//                   </blockquote>
//                   <br />
//                 </div>
//                 <div className="mb-3">
//                   <h4 className="mb-3">1. Colectarea informațiilor</h4>
//                   <p className="mb-2">
//                     Primim și păstrăm informații despre tine, ca de exemplu:
//                   </p>
//                   <ul>
//                     <li>
//                       Numele, prenumele, adresa de email, numărul de telefon și
//                       alți identificatori pe care i-ai putea folosi. Colectăm
//                       aceste informații prin mai multe metode, inclusiv atunci
//                       când le introduci pentru folosirea serviciului sau când
//                       interacționezi cu serviciul de relații cu clienții;
//                     </li>
//                     <li>
//                       Activitatea ta în cadrul serviciului StreamIT, precum
//                       selecțiile de titluri pentru filmele vizionate;
//                     </li>
//                     <li>
//                       Detalii despre interacțiunile tale cu serviciul de relații
//                       cu clienții, de exemplu, data, ora și motivul contactării,
//                       iar în cazul în care ne-ai sunat, numărul de telefon și
//                       înregistrările convorbirilor telefonice;
//                     </li>
//                     <li>
//                       ID-ul dispozitivelor sau alte date unice de identificare,
//                       inclusiv ale dispozitivelor tale de rețea care sunt
//                       conectate la rețeaua ta Wi-Fi.
//                     </li>
//                   </ul>
//                   <br />
//                 </div>
//                 <div className="mb-3">
//                   <h4 className="mb-3">2. Folosirea informațiilor</h4>
//                   <p className="mb-2">
//                     Folosim informațiile pentru a furniza, a analiza, a
//                     administra, a îmbunătăți și a personaliza serviciile și
//                     eforturile noastre de marketing, pentru a gestiona
//                     recomandările făcute de utilizatori, respectiv pentru
//                     comunicarea cu tine în legătură cu aceste subiecte sau cu
//                     altele.
//                   </p>
//                   <p className="mb-2">
//                     Aceste informații mai pot fi utilizate pentr a asigura
//                     securitatea sistemelor noastre, a preveni frauda și a ne
//                     ajuta să protejăm siguranța conturilor StreamIT, respectiv
//                     pentru a preveni, a detecta și a investiga activitățile
//                     potențial interzise sau ilegale, inclusiv frauda, și pentru
//                     a pune în executare condițiile serviciului.
//                   </p>
//                   <br />
//                 </div>
//                 <div className="mb-3">
//                   <h4 className="mb-3">3. Divulgarea informațiilor</h4>
//                   <p className="mb-2">
//                     Informațiile tale sunt divulgate în anumite scopuri și unor
//                     părți terță în următoarele cazuri:
//                   </p>
//                   <ul>
//                     <li>
//                       Grupul de companii StreamIT – Informațiile tale sunt
//                       divulgate în cadrul grupului de companii pentru:
//                       <ul>
//                         <li>permiterea accesului la serviciile noastre;</li>
//                         <li>
//                           furnizarea serviciului de asistență pentru clienți;
//                         </li>
//                         <li>
//                           luarea deciziilor cu privire la îmbunătățirea
//                           serviciilor, dezvoltarea conținutului.
//                         </li>
//                       </ul>
//                     </li>
//                     <li>
//                       Transferuri de activitate comercială – În cazul oricărei
//                       reorganizări, restructurări, fuzionări sau vânzări sau
//                       unui alt transfer de bunuri, vom transfera informațiile,
//                       inclusiv informații personale, în condițiile în care
//                       partea care le primește este de acord să le păstreze în
//                       concordanță cu Declarația noastră de Confidențialitate.
//                     </li>
//                   </ul>
//                   <br />
//                 </div>
//                 <div className="mb-3">
//                   <h4 className="mb-3">4. Informațiile și drepturile tale</h4>
//                   <p className="mb-2">
//                     Poți cere accesul la informațiile personale sau poți corecta
//                     sau actualiza informațiile personale neactualizate sau
//                     incorecte existente pe care le păstrăm despre tine. De
//                     asemenea, poți solicita să ștergem informațiile personale pe
//                     care le păstrăm despre tine.
//                   </p>
//                   <p>
//                     Te poți opune prelucrării informațiilor tale personale, ne
//                     poți cere restricționarea prelucrării informațiilor tale
//                     personale sau ne poți solicita portabilitatea informațiilor
//                     tale personale. dacă am colectat și prelucrat informațiile
//                     tale personale cu consimțământul tău, îți poți retrage apoi
//                     consimțământul în orice moment.
//                   </p>
//                   <br />
//                 </div>
//                 <div className="mb-0">
//                   <h4 className="mb-3">5. Securitate</h4>
//                   <p className="mb-2">
//                     Luăm măsuri administrative, logice, fizice și manageriale
//                     rezonabile în vederea protejării informațiilor tale
//                     personale împotriva pierderii, furtului și accesării,
//                     utilizării sau modificării neautorizate a acestora. Aceste
//                     măsuri sunt concepute pentru a oferi un nivel de securitate
//                     pe măsura riscurilor aferente prelucrării informațiilor
//                     personale.
//                   </p>
//                   <p className="mb-2">
//                     Prezenta Declarație de Confidențialitate se va actualiza
//                     ocazional ca urmare a modificărilor cerințelor legale, de
//                     reglementare sau operaționale. Vom anunța aceste schimbări
//                     (inclusiv data intrării lor în vigoare) conform legii.
//                     Continuarea folosirii serviciului StreamIT în urma acestor
//                     actualizări va constitui luarea la cunoștință și acceptul
//                     tău cu privire la respectivele modificări.
//                   </p>
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
import Footer from "../../components/footer/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <BannerPages pageName="Privacy Policy" />
      <main id="main" className="site-main">
        <Container>
          <Row>
            <Col lg="12" sm="12">
              <div className="iq-privacy-policy">
                <div className="mb-3" style={{ fontSize: 18 }}>
                  <blockquote className="wp-block-quote">
                    <p>
                      This Privacy Statement explains our practices, including your options regarding the collection,
                       use, and disclosure of certain information, including personal information, in relation to the StreamIT service.
                    </p>
                    <p>
                      For specific questions regarding this Privacy Statement or the use of personal information,
                      cookies, or other similar technologies, contact the data protection officer by email at hello@streamit.com.
                    </p>
                  </blockquote>
                  <br />
                </div>
                <div className="mb-3">
                  <h4 className="mb-3">1. Information Collection</h4>
                  <p className="mb-2">
                    We receive and retain information about you, such as:
                  </p>
                  <ul>
                    <li>
                      Your name, surname, email address, phone number, and other identifiers you may use. We collect
                       this information through several methods, including when you enter it to use the service or when you interact with customer service;
                    </li>
                    <li>
                      Your activity within the StreamIT service, such as the movie titles you select to watch;
                    </li>
                    <li>
                      Details about your interactions with customer service, such as the date, time, and reason for
                       contact, and if you called us, the phone number and call recordings;
                    </li>
                    <li>
                      Device IDs or other unique identification data, including those of your network devices connected to your Wi-Fi network.
                    </li>
                  </ul>
                  <br />
                </div>
                <div className="mb-3">
                  <h4 className="mb-3">2. Use of Information</h4>
                  <p className="mb-2">
                    We use the information to provide, analyze, manage, improve, and personalize our services and 
                    marketing efforts, manage user recommendations, and communicate with you about these or other topics.
                  </p>
                  <p className="mb-2">
                    This information may also be used to ensure the security of our systems, prevent fraud, and help
                     protect the safety of StreamIT accounts, as well as to prevent, detect, and investigate potentially prohibited or illegal activities, including fraud, and to enforce the terms of service.
                  </p>
                  <br />
                </div>
                <div className="mb-3">
                  <h4 className="mb-3">3. Disclosure of Information</h4>
                  <p className="mb-2">
                    Your information is disclosed for specific purposes and to third parties in the following cases:
                  </p>
                  <ul>
                    <li>
                      StreamIT Group of Companies – Your information is disclosed within the group of companies for:
                      <ul>
                        <li>Allowing access to our services;</li>
                        <li>Providing customer support services;</li>
                        <li>Making decisions about service improvement and content development.</li>
                      </ul>
                    </li>
                    <li>
                      Business Transfers – In the event of any reorganization, restructuring, merger, sale, 
                      or other transfer of assets, we will transfer the information, including personal information, provided the recipient agrees to retain it in accordance with our Privacy Statement.
                    </li>
                  </ul>
                  <br />
                </div>
                <div className="mb-3">
                  <h4 className="mb-3">4. Your Information and Rights</h4>
                  <p className="mb-2">
                    You can request access to your personal information or correct or update any outdated or 
                    inaccurate personal information we maintain about you. You can also request that we delete your personal information that we retain about you.
                  </p>
                  <p>
                    You can object to the processing of your personal information, request that we restrict the
                     processing of your personal information, or request the portability of your personal information. If we have collected and processed your personal information with your consent, you may withdraw your consent at any time.
                  </p>
                  <br />
                </div>
                <div className="mb-0">
                  <h4 className="mb-3">5. Security</h4>
                  <p className="mb-2">
                    We take reasonable administrative, logical, physical, and managerial measures to protect your 
                    personal information against loss, theft, and unauthorized access, use, or modification. These measures are designed to provide a level of security appropriate to the risks associated with processing personal information.
                  </p>
                  <p className="mb-2">
                    This Privacy Statement will be updated occasionally as a result of changes to legal, regulatory,
                     or operational requirements. We will announce these changes (including the effective date) as required by law. Continuing to use the StreamIT service after these updates will constitute your acknowledgment and acceptance of these changes.
                  </p>
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
