export const CONFIG = {
  title: 'Euge y Tomi',
  description: 'Invitación de casamiento',
  metaImagePreview: '',
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
    date: '2023-03-11T19:30:00'
  },
  location: {
    ceremonyDescription: 'Los invitamos a acompañarnos en la ceremonia religiosa el día 11 de marzo a las 19:30 hs en la Basílica del Santísimo Sacramento',
    ceremonyUrl: 'https://goo.gl/maps/pL1xYbtiGQ5WdArT6',
    partyDescription: 'Los esperamos después de la ceremonia en "La Escondida de Olivos"',
    partyUrl: 'https://goo.gl/maps/QS5BVijizbwGot8i9',
  },
  gift: {
    description: 'Si querés ayudarnos en este nuevo camino..',
    accounts: [
      // {cbu: '15003038-00030361002478', alias: 'vickygarcea', bank: 'HSBC', logo: 'hsbc.png', accountHolder: 'Garcea, Maria Victoria', accountNumber: '3036100247', accountType: 'pesos'},
      // {cbu: '15003038-00030380705596', alias: 'vickygarceausd', bank: 'HSBC', logo: 'hsbc.png', accountHolder: 'Garcea, Maria Victoria', accountNumber: '3038070559', accountType: 'dólares'}
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
