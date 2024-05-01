// import React from "react";
// import EventCommentForm from "./EventCommentForm";
// import EventComments from "./EventComments";
// import { getEventById } from "../../../services/eventsApi";


// const EventDetails = () => {
//   return (
//     <section className="blog-details-area pt-175 pb-120">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-xl-10">
//             <div className="blog-details-wrap">
//               <div className="bd-content-top text-center">
//                 <div className="blog-meta-two">
//                   <ul className="list-wrap">
//                     <li className="tag">
//                       <a href="#">Sector</a>
//                     </li>
//                     <li>
//                       <i className="fal fa-clock"></i>5 Min
//                     </li>
//                   </ul>
//                 </div>

//                 <h2 className="title">
//                   How to Post a Classified Ad Online or in Newspapers
//                 </h2>

//                 <p>
//                   Lorem ipsum dolor sit amet, sed nulla ante amet, elementum
//                   tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac
//                   scelerisque nibh dolores consectetuer, nulla aptent est pede.
//                   Scelerisque euismod varius mi, congue eget sed vestibulum,
//                   ornare cras sed nec.
//                 </p>

//                 <div className="blog-meta-two bottom">
//                   <ul className="list-wrap">
//                     <li className="avatar">
//                       <a href="blog-details.html">
//                         <img src="/img/blog/blog_avatar01.png" alt="" />
//                         Victor Pacheco
//                       </a>
//                     </li>
//                     <li>
//                       <i className="fal fa-calendar"></i>March 17, 2023
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               <div className="blog-details-img">
//                 <img src="/img/blog/blog_details_img.jpg" alt="" />
//               </div>

//               <div className="bd-content-bottom">
//                 <h2 className="title">
//                   Pilotage de la performance : vos indicateurs <br />
//                   dans le même viseur
//                 </h2>
//                 <p>
//                   Un tableau de bord est un outil de gestion et d'évaluation de
//                   l’organisation d'une entreprise. Il est généralement constitué
//                   de plusieurs indicateurs de performance à des moments ou des
//                   périodes données. Lepilotage de la performance permet ainsi de
//                   comparer différents indicateurs et de les mettre en
//                   perspective. Le tableau de bord est donc un outil précieux
//                   lorsqu’il s’agit de surveiller ses performances et de
//                   planifier ses ressources pour ainsi optimiser sa performance.
//                 </p>
//                 <p>
//                   Le pilotage de la performance par Skello est une interface
//                   développée spécialement pour nos clients. L’objectif ? Obtenir
//                   une visibilité globale de la santé de son organisation et de
//                   ses établissements. Nous avons conçu cette solution de
//                   pilotage grâce à vos indicateurs de performance et les données
//                   du planning de nos clients.
//                 </p>
//                 <p>
//                   Voici le détail des indicateurs que les clients pourront
//                   analyser pour optimiser leur gestion et leur planification :
//                 </p>
//                 <ul className="list-wrap">
//                   <li>
//                     <span>Chiffre d’affaires.</span>Il correspond à la somme des
//                     ventes de biens ou de services hors taxes réalisés par un
//                     établissement dans le cadre d’une activité professionnelle
//                     courante.
//                   </li>
//                   <li>
//                     <span>Masse salariale chargée.</span>Cet indicateur
//                     correspond à la masse salariale additionnée aux cotisations
//                     patronales.
//                   </li>
//                   <li>
//                     <span>Ratio de masse salariale chargée</span>/ CA. Cet
//                     indicateur indique le ratio entre le coût de la masse
//                     salariale chargée sur le revenu réalisé par l’établissement.
//                     Il est possible de le calculer en fonction du prévisionnel
//                     et du réalisé.
//                   </li>
//                   <li>
//                     <span>Heures travaillées et heures d’absences.</span>Cet
//                     indicateur correspond à la somme des heures travaillées et à
//                     la somme des heures d’absences cumulées.
//                   </li>
//                   <li>
//                     <span>Heures travaillées par poste.</span>Ce ratio indique
//                     le nombre d’heures travaillées en fonction
//                   </li>
//                 </ul>
//                 <p>
//                   Un tableau de bord est un outil de gestion et d'évaluation de
//                   l’organisation d'une entreprise. Il est généralement constitué
//                   de plusieurs indicateurs de performance à des moments ou des
//                   périodes données. Le pilotage de la performance permet ainsi
//                   de comparer différents indicateurs et de les mettre en
//                   perspective. Le tableau de bord est donc un outil précieux
//                   lorsqu’il s’agit de surveiller ses performances et de
//                   planifier ses ressources pour ainsi optimiser sa performance.
//                 </p>
//              </div>
//             </div>

//             {/* comments */}
//             <EventComments />

//             {/* comment form */}
//             <EventCommentForm />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventDetails;

// import React, { useState, useEffect } from "react";
// import EventCommentForm from "./EventCommentForm";
// import EventComments from "./EventComments";
// import { getEventById } from "../../../services/eventsApi";
// import { useParams } from "react-router-dom";

// const EventDetails = () => {
//   const [eventDetails, setEventDetails] = useState(null);
//   const { eventId } = useParams(); // Utilisation du hook useParams pour obtenir l'ID de l'événement depuis l'URL

//   useEffect(() => {
//     // Function to fetch event details by ID
//     const fetchEventDetails = async () => {
//       try {
//         // Replace 'eventId' with the actual ID of the event you want to fetch
//         // const eventId = "65de6bf325f242d4a3148dca";

//         const eventData = await getEventById(eventId);
//         setEventDetails(eventData);
//       } catch (error) {
//         console.error("Error fetching event details:", error);
//       }
//     };

//     // Call the function to fetch event details
//     fetchEventDetails();
//   }, [eventId]); // Empty dependency array to ensure it only runs once on component mount


//   return (
//     <section className="blog-details-area pt-175 pb-120">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-xl-10">
//             {eventDetails && (
//               <div className="blog-details-wrap">
//                 <div className="bd-content-top text-center">

//                   <h2 className="title">
//                     {eventDetails.name}
//                   </h2>

//                   <div className="blog-meta-two bottom">
//                   <ul className="list-wrap">
//                       <li className="tag">
//                         <a href="#">Event</a>
//                       </li>
//                       <li>
//                         <i className="fal fa-clock"></i>{new Date(eventDetails.startDate).toLocaleString('tn-TN', {
//                           year: 'numeric',
//                           month: 'long',
//                           day: 'numeric',
//                           hour: 'numeric',
//                           minute: 'numeric'

//                         })}
//                       </li>

//                       <li>
//                         <i className="fal fa-clock"></i>{new Date(eventDetails.endDate).toLocaleString('tn-TN', {
//                           year: 'numeric',
//                           month: 'long',
//                           day: 'numeric',
//                           hour: 'numeric',
//                           minute: 'numeric'

//                         })}
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="blog-details-img">
//                   <img src="/img/blog/blog_details_img.jpg" alt="" />
//                 </div>
//                 <div className="bd-content-bottom">
//                   <h2 className="title">
//                   {eventDetails.name}

//                   </h2>
//                   <p>
//                     {eventDetails.description}
//                   </p>

//                 </div>
//               </div>
//             )}
//             {/* comments */}
//             <EventComments />
//             {/* comment form */}
//             <EventCommentForm />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventDetails;




import React, { useState, useEffect } from "react";
import EventCommentForm from "./EventCommentForm";
import EventComments from "./EventComments";
import { getEventById } from "../../../services/eventsApi";
import { getEventComments } from "../../../services/eventsApi";
import { useParams } from "react-router-dom";
import axios from 'axios';
const EventDetails = () => {
  const [eventDetails, setEventDetails] = useState(null);
  const { eventId } = useParams();
  const [comments, setComments] = useState([]);


  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const eventData = await getEventById(eventId);
        setEventDetails(eventData);
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    fetchEventDetails();
  }, [eventId]);
  console.log("evenementttttttt", eventId)
   // Fonction pour mettre à jour les commentaires après l'édition ou la suppression et l'ajout
  const updateComments = async () => {
    try {
      const updatedCommentsData = await getEventComments(eventId);
      setComments(updatedCommentsData);
      console.log("chbiik ma takhdemch",updatedCommentsData)
    } catch (error) {
      console.error("Erreur lors de la mise à jour des commentaires :", error);
    }
  };
   // Fonction pour filtrer les mots interdits
  const filterBadWords = async (comment) => {
    const encodedParams = new URLSearchParams();
    encodedParams.set('content', comment);
    encodedParams.set('censor-character', '*');

    const options = {
      method: 'POST',
      url: 'https://neutrinoapi-bad-word-filter.p.rapidapi.com/bad-word-filter',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'f73daeac29msh3b4d521f1fb4e92p1ecc8fjsnd18233e56279',
    'X-RapidAPI-Host': 'neutrinoapi-bad-word-filter.p.rapidapi.com'
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      return response.data['censored-content'];
    } catch (error) {
      console.error(error);
      return comment;
    }
  };
  return (
    <section className="blog-details-area pt-175 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="row">
            <div className="col-xl-10" id="1">
              {eventDetails && (
                <div className="blog-details-wrap">
                  <div className="bd-content-top text-center">
                    <h2 className="title">{eventDetails.name}</h2>
                    <div className="blog-meta-two bottom">
                      <ul className="list-wrap">
                        <li className="tag">
                          <a href="#">Event</a>
                        </li>
                        <li>
                          <i className="fal fa-clock"></i>{new Date(eventDetails.startDate).toLocaleString('tn-TN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric'
                          })}
                        </li>
                        <li>
                          <i className="fal fa-clock"></i>{new Date(eventDetails.endDate).toLocaleString('tn-TN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric'
                          })}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-details-img">
                    <img src={eventDetails.imageUrl} alt="" style={{ width: "750px", height: "425px" }} />

                  </div>
                  <div className="bd-content-bottom">
                    <h2 className="title">{eventDetails.name}</h2>
                    <p>{eventDetails.description}</p>
                  </div>
                </div>
              )}
              <EventComments
              commentsData={comments} 
              updateComments={updateComments}
              filterBadWords={filterBadWords}
              />
              
              <EventCommentForm
                updateComments={updateComments}
                filterBadWords={filterBadWords}
              />

              <div className="col-xl-10" id="contact-map" style={{ marginTop: 10 }}>
                <iframe
                  // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.498659342518!2d10.19659121570174!3d36.83714119857526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd35bf4304f6ab%3A0x898659c9fe7812b6!2sR%C3%A9sidence%20ennasr%201003%20Rue%20Ibrahim%20Cherif%2C%20Tunis%201003!5e0!3m2!1sen!2stn!4v1645745950299!5m2!1sen!2stn"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.498659342518!2d10.19659121570174!3d36.83714119857526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd35bf4304f6ab%3A0x898659c9fe7812b6!2sTunis%20Science%20City%2C%20Rue%20La%20Cit%C3%A9%20des%20Sciences%20%C3%A0%20Tunis%2C%20Tunis%201082!5e0!3m2!1sen!2stn!4v1645745950299!5m2!1sen!2stn"

                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;

// import React, { useState, useEffect } from "react";
// import EventCommentForm from "./EventCommentForm";
// import EventComments from "./EventComments";
// import { getEventById } from "../../../services/eventsApi";
// import { getEventComments } from "../../../services/eventsApi";
// import { useParams } from "react-router-dom";

// // const EventDetails = () => {
// //   const [eventDetails, setEventDetails] = useState(null);
// //   const { eventId } = useParams();

// //   useEffect(() => {
// //     const fetchEventDetails = async () => {
// //       try {
// //         const eventData = await getEventById(eventId);
// //         setEventDetails(eventData);
// //       } catch (error) {
// //         console.error("Error fetching event details:", error);
// //       }
// //     };

// //     fetchEventDetails();
// //   }, [eventId]);
// // // Fonction pour mettre à jour les commentaires après l'édition ou la suppression et l'ajout
// //   const updateComments = async () => {
// //     try {
// //       const updatedCommentsData = await getEventComments(eventId);
// //       setComments(updatedCommentsData);
// //       console.log("chbiik ma takhdemch",updatedCommentsData)
// //     } catch (error) {
// //       console.error("Erreur lors de la mise à jour des commentaires :", error);
// //     }
// //   };
//   const EventDetails = () => {
//     const [eventDetails, setEventDetails] = useState(null);
//     const { eventId } = useParams();
//     const [comments, setComments] = useState([]); // Assurez-vous de définir l'état des commentaires ici
  
//     useEffect(() => {
//       const fetchEventDetails = async () => {
//         try {
//           const eventData = await getEventById(eventId);
//           setEventDetails(eventData);
//           updateComments(); // Appelez updateComments après avoir récupéré les détails de l'événement
//         } catch (error) {
//           console.error("Error fetching event details:", error);
//         }
//       };
  
//       fetchEventDetails();
//     }, [eventId]);
  
//     const updateComments = async () => {
//       try {
//         const updatedCommentsData = await getEventComments(eventId);
//         setComments(updatedCommentsData);
//         console.log("Updated comments:", updatedCommentsData);
//       } catch (error) {
//         console.error("Error updating comments:", error);
//       }
//     };
  
  
//   return (
//     <section className="blog-details-area pt-175 pb-120">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="row">
//             <div className="col-xl-10" id="1">
//               {eventDetails && (
//                 <div className="blog-details-wrap">
//                   <div className="bd-content-top text-center">
//                     <h2 className="title">{eventDetails.name}</h2>
//                     <div className="blog-meta-two bottom">
//                       <ul className="list-wrap">
//                         <li className="tag">
//                           <a href="#">Event</a>
//                         </li>
//                         <li>
//                           <i className="fal fa-clock"></i>{new Date(eventDetails.startDate).toLocaleString('tn-TN', {
//                             year: 'numeric',
//                             month: 'long',
//                             day: 'numeric',
//                             hour: 'numeric',
//                             minute: 'numeric'
//                           })}
//                         </li>
//                         <li>
//                           <i className="fal fa-clock"></i>{new Date(eventDetails.endDate).toLocaleString('tn-TN', {
//                             year: 'numeric',
//                             month: 'long',
//                             day: 'numeric',
//                             hour: 'numeric',
//                             minute: 'numeric'
//                           })}
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="blog-details-img">
//                     <img src={eventDetails.imageUrl} alt="" style={{ width: "750px", height: "425px" }} />
//                   </div>
//                   <div className="bd-content-bottom">
//                     <h2 className="title">{eventDetails.name}</h2>
//                     <p>{eventDetails.description}</p>
//                   </div>
//                 </div>
//               )}
//               <EventComments eventId={eventId} updateComments={updateComments}/>
//               <EventCommentForm eventId={eventId} updateComments={updateComments}/>
//               <div className="col-xl-10" id="contact-map" style={{ marginTop: 10 }}>
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.498659342518!2d10.19659121570174!3d36.83714119857526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd35bf4304f6ab%3A0x898659c9fe7812b6!2sTunis%20Science%20City%2C%20Rue%20La%20Cit%C3%A9%20des%20Sciences%20%C3%A0%20Tunis%2C%20Tunis%201082!5e0!3m2!1sen!2stn!4v1645745950299!5m2!1sen!2stn"
//                   allowFullScreen
//                   loading="lazy"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventDetails;