'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FaCalendarAlt, FaClock, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser, FaCheck, FaSpinner } from 'react-icons/fa';
import { addDays, format, startOfDay, isSameDay, isBefore } from 'date-fns';
import { fr } from 'date-fns/locale';

interface FormData {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  ville: string;
  prestation: string;
  date?: Date;
  creneau?: string;
  message?: string;
  rgpd: boolean;
}

const ContactSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, control, formState: { errors }, setValue, reset } = useForm<FormData>();

  // Configuration Web3Forms
  const accessKey = "4da21669-2628-4eb0-8c5a-eb674d8c0084";

  // Function to reset and show form again
  const handleNewMessage = () => {
    setShowForm(true);
    setIsSuccess(false);
    setResult(null);
    reset();
    setSelectedDate(null);
    setSelectedTime('');
  };

  // Générer les 14 prochains jours (exclure les dimanches)
  const getAvailableDates = () => {
    const dates = [];
    let currentDate = startOfDay(new Date());
    
    while (dates.length < 14) {
      // Exclure les dimanches (0 = dimanche)
      if (currentDate.getDay() !== 0) {
        dates.push(new Date(currentDate));
      }
      currentDate = addDays(currentDate, 1);
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  // Créneaux horaires disponibles
  const timeSlots = [
    { value: '08h00', label: '08h00', period: 'Matin' },
    { value: '09h00', label: '09h00', period: 'Matin' },
    { value: '10h00', label: '10h00', period: 'Matin' },
    { value: '11h00', label: '11h00', period: 'Matin' },
    { value: '14h00', label: '14h00', period: 'Après-midi' },
    { value: '15h00', label: '15h00', period: 'Après-midi' },
    { value: '16h00', label: '16h00', period: 'Après-midi' },
    { value: '17h00', label: '17h00', period: 'Après-midi' },
    { value: '18h00', label: '18h00', period: 'Soirée' },
    { value: '19h00', label: '19h00', period: 'Soirée' },
  ];

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setValue('date', date);
    setShowDatePicker(false);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setValue('creneau', time);
  };

  // Fonction pour formater les données avant envoi
  const handleFormSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setResult(null);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', accessKey);
      formDataToSend.append('name', `${data.prenom} ${data.nom}`);
      formDataToSend.append('email', data.email);
      formDataToSend.append('phone', data.telephone);
      formDataToSend.append('ville', data.ville);
      formDataToSend.append('prestation', data.prestation);
      formDataToSend.append('date_rendez_vous', selectedDate ? format(selectedDate, 'EEEE d MMMM yyyy', { locale: fr }) : 'Non spécifiée');
      formDataToSend.append('creneau_horaire', selectedTime || 'Non spécifié');
      formDataToSend.append('message', data.message || 'Aucun message spécifique');
      formDataToSend.append('rgpd', data.rgpd ? 'Accepté' : 'Non accepté');
      formDataToSend.append('from_name', 'France Solaire Website');
      formDataToSend.append('replyto', 'vuylsteker.pro@protonmail.com');
      formDataToSend.append('subject', `Nouvelle demande de devis - ${data.prestation} - ${data.prenom} ${data.nom}`);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });
      
      const responseData = await response.json();
      
      if (responseData.success) {
        setIsSuccess(true);
        setResult("Votre demande a été envoyée avec succès ! Nous vous recontacterons sous 24h.");
        setShowForm(false);
        reset();
        setSelectedDate(null);
        setSelectedTime('');
      } else {
        throw new Error(responseData.message || 'Une erreur est survenue');
      }
    } catch (error) {
      setIsSuccess(false);
      setResult("Erreur lors de l'envoi. Veuillez réessayer ou nous appeler directement.");
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-10 md:py-16 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
            <FaEnvelope className="w-7 h-7 md:w-8 md:h-8 text-green-600" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
            Demande de devis gratuit
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Prêt à commencer votre projet de rénovation énergétique ? Contactez nos experts pour un devis gratuit et personnalisé.
            </p>
            <p className="text-xs md:text-sm text-green-600 font-medium">
              Réponse garantie sous 24h • Devis gratuit • Déplacement offert
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          
          {/* Formulaire de contact */}
          {showForm && (
            <div className="bg-white rounded-xl shadow-xl p-4 md:p-6">
              {/* Error Message */}
              {!isSuccess && result && (
                <div className="bg-red-100 text-red-800 border border-red-200 p-4 rounded-lg text-sm mb-6">
                  <div className="flex items-center">
                    <FaEnvelope className="w-4 h-4 mr-2 text-red-600" />
                    {result}
                  </div>
                </div>
              )}
              
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center">
                <FaUser className="mr-3 text-green-600" />
                Demande de devis gratuit
              </h3>
              
              <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
                {/* Nom et Prénom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">
                      Prénom *
                    </label>
                    <input
                      {...register('prenom', { required: 'Le prénom est requis' })}
                      type="text"
                      id="prenom"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm text-gray-900"
                      placeholder="Votre prénom"
                    />
                    {errors.prenom && <p className="text-red-500 text-xs mt-1">{errors.prenom.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom *
                    </label>
                    <input
                      {...register('nom', { required: 'Le nom est requis' })}
                      type="text"
                      id="nom"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm text-gray-900"
                      placeholder="Votre nom"
                    />
                    {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom.message}</p>}
                  </div>
                </div>

                {/* Email et Téléphone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      {...register('email', { 
                        required: 'L\'email est requis',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Email invalide'
                        }
                      })}
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm text-gray-900"
                      placeholder="votre@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone *
                    </label>
                    <input
                      {...register('telephone', { required: 'Le téléphone est requis' })}
                      type="tel"
                      id="telephone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm text-gray-900"
                      placeholder="06 12 34 56 78"
                    />
                    {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone.message}</p>}
                  </div>
                </div>

                {/* Ville */}
                <div>
                  <label htmlFor="ville" className="block text-sm font-medium text-gray-700 mb-1">
                    Ville *
                  </label>
                  <input
                    {...register('ville', { required: 'La ville est requise' })}
                    type="text"
                    id="ville"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm text-gray-900"
                    placeholder="Votre ville"
                  />
                  {errors.ville && <p className="text-red-500 text-xs mt-1">{errors.ville.message}</p>}
                </div>

                {/* Type de prestation */}
                <div>
                  <label htmlFor="prestation" className="block text-sm font-medium text-gray-700 mb-1">
                    Type de prestation *
                  </label>
                  <select
                    {...register('prestation', { required: 'Le type de prestation est requis' })}
                    id="prestation"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm text-gray-900"
                  >
                    <option value="">Sélectionnez une prestation</option>
                    <option value="panneaux-solaires">Panneaux solaires</option>
                    <option value="pompe-chaleur">Pompe à chaleur</option>
                    <option value="isolation">Isolation thermique</option>
                    <option value="chaudiere">Chaudière</option>
                    <option value="ventilation">Ventilation VMC</option>
                    <option value="autre">Autre / Plusieurs prestations</option>
                  </select>
                  {errors.prestation && <p className="text-red-500 text-xs mt-1">{errors.prestation.message}</p>}
                </div>

                {/* Sélection de date améliorée */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaCalendarAlt className="inline mr-2 text-green-600" />
                      Date souhaitée pour le rendez-vous (optionnel)
                    </label>
                    
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setShowDatePicker(!showDatePicker)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm text-gray-900 text-left flex items-center justify-between bg-white hover:bg-gray-50"
                      >
                        <span className={selectedDate ? 'text-gray-900' : 'text-gray-400'}>
                          {selectedDate 
                            ? format(selectedDate, 'EEEE d MMMM yyyy', { locale: fr })
                            : 'Choisir une date'
                          }
                        </span>
                        <FaCalendarAlt className="text-gray-400" />
                      </button>

                      {showDatePicker && (
                        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                          <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                            {availableDates.map((date, index) => {
                              const isSelected = selectedDate && isSameDay(date, selectedDate);
                              const isToday = isSameDay(date, new Date());
                              
                              return (
                                <button
                                  key={index}
                                  type="button"
                                  onClick={() => handleDateSelect(date)}
                                  className={`p-2 text-xs rounded-lg text-left transition-colors ${
                                    isSelected
                                      ? 'bg-green-600 text-white'
                                      : isToday
                                      ? 'bg-green-100 text-green-800 border border-green-300'
                                      : 'bg-gray-50 hover:bg-green-50 text-gray-700'
                                  }`}
                                >
                                  <div className="font-medium">
                                    {format(date, 'EEE d MMM', { locale: fr })}
                                  </div>
                                  {isToday && (
                                    <div className="text-xs opacity-75">Aujourd'hui</div>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Sélection d'heure améliorée */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaClock className="inline mr-2 text-green-600" />
                      Créneau horaire souhaité (optionnel)
                    </label>
                    
                    <div className="grid grid-cols-5 gap-1.5">
                      {timeSlots.map((slot) => {
                        const isSelected = selectedTime === slot.value;
                        
                        return (
                          <button
                            key={slot.value}
                            type="button"
                            onClick={() => handleTimeSelect(slot.value)}
                            className={`py-1.5 px-1 text-xs rounded-md text-center transition-all ${
                              isSelected
                                ? 'bg-green-600 text-white shadow-sm'
                                : 'bg-gray-50 hover:bg-green-50 text-gray-700 border border-gray-200 hover:border-green-300'
                            }`}
                          >
                            <div className="font-medium text-xs">{slot.label}</div>
                            <div className="text-xs opacity-75 text-xs">{slot.period}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Votre projet (optionnel)
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm text-gray-900"
                    placeholder="Décrivez brièvement votre projet..."
                  />
                </div>

                {/* RGPD */}
                <div className="flex items-start">
                  <input
                    {...register('rgpd')}
                    type="checkbox"
                    id="rgpd"
                    className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor="rgpd" className="ml-2 text-xs text-gray-600">
                    J'accepte que mes données soient utilisées pour me recontacter dans le cadre de ma demande.
                  </label>
                </div>

                {/* Bouton de soumission */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg text-sm flex items-center justify-center ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="w-4 h-4 mr-2 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <FaCheck className="w-4 h-4 mr-2" />
                      Envoyer ma demande
                    </>
                  )}
                </button>
              </form>
            </div>
          )}

          {/* Success Confirmation Card */}
          {!showForm && isSuccess && (
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl shadow-xl p-6 md:p-8 border-2 border-green-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheck className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-3">
                  Message envoyé avec succès !
                </h3>
                
                <p className="text-green-700 text-base mb-6 leading-relaxed">
                  Votre demande de devis a bien été transmise à notre équipe.<br />
                  <span className="font-semibold">Nous vous recontacterons sous 24h</span> pour étudier votre projet.
                </p>
                
                <div className="bg-white rounded-lg p-4 mb-6 border border-green-200">
                  <div className="flex items-center justify-center text-green-700 text-sm">
                    <FaPhoneAlt className="w-4 h-4 mr-2" />
                    <span>Besoin d'aide immédiate ? Appelez-nous au </span>
                    <a href="tel:+33788066712" className="font-bold ml-1 hover:underline">
                      07 88 06 67 12
                    </a>
                  </div>
                </div>
                
                <button
                  onClick={handleNewMessage}
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <FaEnvelope className="w-4 h-4 mr-2" />
                  Envoyer un nouveau message
                </button>
              </div>
            </div>
          )}

          {/* Informations de contact */}
          <div className="space-y-4 md:space-y-6">
            
            {/* Expert dédié */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl shadow-xl p-4 md:p-6 text-white">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4 mt-0.5">
                  <FaUser className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">
                    Votre Expert Dédié
                  </h3>
                  <p className="text-green-100 text-sm mb-3">
                    Un expert/technicien FRANCE SOLAIRE vous accompagne :
                  </p>
                  <div className="flex items-center">
                    <FaPhoneAlt className="w-4 h-4 mr-2 text-green-200" />
                    <span className="text-xl font-bold">07 88 06 67 12</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coordonnées classiques */}
            <div className="bg-white rounded-xl shadow-xl p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                Autres coordonnées
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <FaEnvelope className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Email</p>
                    <p className="text-green-600 font-semibold text-sm">contact@france-solaire.fr</p>
                    <p className="text-xs text-gray-500">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <FaMapMarkerAlt className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Adresse</p>
                    <p className="text-gray-600 text-sm">16 Allée des Alouettes</p>
                    <p className="text-gray-600 text-sm">59250 HALLUIN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 