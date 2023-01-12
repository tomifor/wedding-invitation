export const CONFIG = {
  title: 'Euge y Tomi',
  description: 'Invitación de casamiento',
  metaImagePreview: 'https://i.ibb.co/5L8xjGg/Captura-de-pantalla-2023-01-08-a-la-s-23-30-46.png',
  sectionsEnabled: {
    welcomeEnabled: true,
    countdownEnabled: true,
    locationEnabled: true,
    giftEnabled: true,
    socialEnabled: true,
    rsvpEnabled: true,
    phraseEnabled: true,
    photoGallery: true,
  },
  color: {
    primary: '',
    primaryBackground: '',
    secondary: '',
    secondaryBackground: ''
  }
}

export const SECTIONS = {
  countdown: {
    date: '2023-03-11T17:00:00'
  },
  location: {
    ceremonyDescription: 'Parroquia San Benito',
    ceremonyUrl: 'https://goo.gl/maps/pL1xYbtiGQ5WdArT6',
    partyDescription: 'Espacio Márquez',
    partyUrl: 'https://goo.gl/maps/QS5BVijizbwGot8i9',
  },
  gift: {
    description: 'Si querés ayudarnos en este nuevo camino..',
    accounts: [
      {cbu: '0150986501000002161494', alias: 'eugeytomi2023', bank: 'ICBC', logo: 'icbc.png', accountHolder: 'Olivero Ham Tomás', accountNumber: '-', accountType: 'pesos'},
    ]
  },
  rsvp: {
    title: 'CONFIRMAR ASISTENCIA',
    description: 'Esperamos que seas parte de este día. ¡Confirmanos tu asistencia!',
    redirect: 'https://docs.google.com/forms/d/e/1FAIpQLSd5lL2jkw9mAIEkeGvGWVaWbCzOuQNsIFefWit0u7x7IRAIMA/viewform?vc=0&c=0&w=1&flr=0',
  },
  social: {
    hashtag: '#EugeyTomi',
    url: 'https://www.instagram.com/explore/tags/eugeytomi/',
    description: '',
    buttonLabel: ''
  },
  phrase: {
    mainText: '¡Gracias por acompañarnos!',
    secondaryText: 'E&T',
  }
}
