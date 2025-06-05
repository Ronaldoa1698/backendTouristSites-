import { TouristSite, Agency, Review } from '../types';
// Mock data for tourist sites
export const touristSites: TouristSite[] = [
  {
    id: '1',
    name: 'Mirador Cruz',
    description:
      'La Bella Durmiente es una icónica formación montañosa visible desde casi toda la ciudad de Tingo María, Huánuco. Su silueta, que recuerda el perfil de una mujer acostada, es parte fundamental del paisaje y cultura local. Rodeada de selva alta y biodiversidad, el sitio permite caminatas hacia miradores naturales donde se observan vistas panorámicas del valle y del Parque Nacional Tingo María.',
    shortDescription:
      'Formación montañosa emblemática de Tingo María con vistas panorámicas y rutas de senderismo.',
    imageUrl:
      'https://portal.andina.pe/EDPfotografia3/Thumbnail/2021/10/15/000816368W.jpg',
    location: {
      latitude: -9.289727516481264,
      longitude:-75.99703666785354,
      address: 'Tingo María, Huánuco, Perú',
    },
    distance: '5 km desde el centro',
    duration: '10 minutos',
    difficulty: 'Moderado',
    activities: ['Senderismo', 'Observación de aves', 'Fotografía'],
    agencyIds: ['1', '2', '7'],
  },
  {
    id: '2',
    name: 'Cueva de las Lechuzas',
    description:
      'Ubicada dentro del Parque Nacional Tingo María, esta cueva de origen kárstico alberga guácharos, aves nocturnas similares a los búhos. Su recorrido permite explorar 400 metros entre estalactitas y estalagmitas. Es un atractivo ideal para quienes buscan aventura, geología y observación de fauna en un mismo entorno.',
    shortDescription:
      'Cueva natural con guácharos, formaciones rocosas únicas y acceso controlado dentro del parque nacional.',
    imageUrl:
      'https://i.pinimg.com/736x/d5/43/8c/d5438c86c8e0c8fb96255589a53c8b27.jpg',
    location: {
      latitude: -9.328491472336955,
      longitude: -76.02684350185251,
      address: 'Parque Nacional Tingo María, Huánuco, Perú',
    },
    distance: '8 km desde el centro',
    duration: '30 minutos',
    difficulty: 'Fácil',
    activities: ['Espeleología', 'Observación de fauna', 'Fotografía'],
    agencyIds: ['1', '3', '5'],
  },
  {
    id: '3',
    name: 'Laguna Los Milagros',
    description:
      'Ubicada a unos 35 km de Tingo María, esta laguna amazónica ofrece un entorno natural ideal para paseos en bote, baños recreativos y gastronomía regional. Es un destino perfecto para una escapada de medio día, donde se puede disfrutar de la tranquilidad y el verdor característico de la selva alta.',
    shortDescription:
      'Laguna natural ideal para relajarse, nadar y disfrutar de la gastronomía típica.',
    imageUrl:
      'https://perutogethertravel.com/wp-content/uploads/2021/11/full-day-laguna-de-los-milagros.png',
    location: {
      latitude: -9.143204412838887,
      longitude: -75.99558435443329,
      address: 'Los Milagros, Leoncio Prado, Huánuco, Perú',
    },
    distance: '35 km desde Tingo María',
    duration: '40-50 minutos',
    difficulty: 'Fácil',
    activities: ['Natación', 'Paseos en bote', 'Gastronomía local', 'Fotografía'],
    agencyIds: ['2', '4', '5'],
  },
  {
    id: '4',
    name: 'Parque Nacional Tingo María',
    description:
      'Este parque nacional cuenta con más de 4,700 hectáreas de bosque nublado protegido. Es un punto clave para la conservación de la biodiversidad en la selva alta peruana. Entre sus principales atractivos están La Bella Durmiente, la Cueva de las Lechuzas y cataratas como Gloriapata. Se realizan caminatas, talleres educativos y avistamiento de fauna.',
    shortDescription:
      'Área natural protegida con senderos ecológicos, fauna diversa y patrimonio natural.',
    imageUrl:
      'https://caretas.pe/wp-content/uploads/2025/01/f42fe647-f741-4101-a93d-e783d720f22b-1170x658.jpg',
    location: {
      latitude: -9.3141,
      longitude: -76.0217,
      address: 'Rupa-Rupa, Leoncio Prado, Huánuco, Perú',
    },
    distance: '7 km desde el centro',
    duration: '20 minutos',
    difficulty: 'Moderado',
    activities: ['Senderismo', 'Observación de aves', 'Fotografía', 'Educación ambiental'],
    agencyIds: ['1', '2', '3'],
  },
  {
    id: '5',
    name: 'Catarata Gloriapata',
    description:
      'Esta catarata se encuentra a 13 km de Tingo María, en el distrito Mariano Dámaso Beraún. Para llegar se cruza un puente colgante y se realiza una caminata de 45 minutos. El trayecto es rico en vegetación, mariposas, aves como el gallito de las rocas y especies florales como orquídeas. Ideal para fotografía y contacto con la naturaleza.',
    shortDescription:
      'Catarata escondida en la selva, accesible tras una caminata rodeada de flora y fauna silvestre.',
    imageUrl:
      'https://caretas.pe/wp-content/uploads/2024/06/aeba9fc8-3947-48f6-9935-b7f4849ef125-1170x658.jpg',
    location: {
      latitude: -9.42399889810267,
      longitude: -75.97959852633355,
      address: 'Mariano Dámaso Beraún, Leoncio Prado, Huánuco, Perú',
    },
    distance: '15 km desde Tingo María',
    duration: '1-2 horas',
    difficulty: 'Moderado',
    activities: ['Senderismo', 'Natación', 'Fotografía'],
    agencyIds: ['3', '4'],
  },
  {
    id: '6',
    name: 'Aguas Sulfurosas de Jacintillo',
    description:
      'Manantiales termales ubicados a 24 km de Tingo María, conocidos por sus beneficios medicinales. Las piscinas naturales están rodeadas de vegetación selvática y son utilizadas para terapias naturales desde hace décadas. El lugar cuenta con infraestructura básica para visitantes.',
    shortDescription:
      'Aguas termales con propiedades curativas, ideales para relajarse y cuidar la salud.',
    imageUrl:
      'https://explorandomaravillas.com/wp-content/uploads/balneario-de-las-aguas-sulfurosas.jpg',
    location: {
      latitude: -9.323813797318577,
      longitude: -76.02734198876901,
      address: 'Jacintillo, Rupa Rupa, Huánuco, Perú',
    },
    distance: '24 km desde Tingo María',
    duration: '30 minutos',
    difficulty: 'Fácil',
    activities: ['Relajación', 'Terapia natural', 'Fotografía'],
    agencyIds: ['2', '5'],
  },
  {
    id: '7',
    name: 'Catarata Santa Carmen',
    description:
      'La catarata está formada por 2 saltos, siendo el primero de 25 metros de alto formando una poza natural de 14 metros de largo por 14 metros de ancho y 7 metros de profundidad. El segundo salto tiene una altura de 7 metros discurriendo a una poza de 9 metros de largo por 18 metros con una profundidad que sobrepasa los 2 metros. El centro poblado más cercano al recurso turístico es Santa Carmen, a lo largo del sendero que conduce a la catarata, el paisaje está compuesto por una quebrada con presencia de colinas bajas y elevaciones pronunciadas y adyacente a la caída principal se ubica una caverna cuya cavidad alcanza los 50 metros de profundidad.',
    shortDescription:
      'Se encuentra ubicado en la región natural Selva Alta o Rupa Rupa, su curso proviene de ojos de agua de las alturas de la quebrada Pérez y se alimentan en su trayecto por infiltración y escorrentía de pequeños riachuelos',
    imageUrl:
      'https://consultasenlinea.mincetur.gob.pe/fichaInventario//foto.aspx?cod=420432',
    location: {
      latitude: -9.348890473760468,
      longitude: -75.96820474051542,
      address: 'Catarata Santa Carmen, Las Palmas 10120',
    },
    distance: '8.9 km desde Tingo María',
    duration: '30 minutos',
    difficulty: 'Moderado',
    activities: ['Relajación', 'Terapia natural', 'Fotografía','Senderismo', 'Natación'],
    agencyIds: ['2', '5'],
  },
];

// Mock data for agencies
export const agencies: Agency[] = [
  {
    id: '1',
    name: 'Tingo tours',
    description: 'Agencia especializada en turismo de aventura y ecoturismo con más de 10 años de experiencia. Ofrecemos tours guiados a los principales atractivos de Tingo María con guías profesionales multilingües y equipos de primera calidad. Nuestra filosofía se centra en brindar experiencias seguras, educativas y respetuosas con el medio ambiente.',
    imageUrl: 'https://tinccotours.com/wp-content/uploads/2024/01/Logo-Tincco-Tours-Tingo-Maria-2024.png.webp',
    contactInfo: {
      phone: '+51 987 654 321',
      email: 'tingotours@gmail.com',
      website: 'tinccotours.com',
      whatsapp: '+51 987 654 321'
    },
    services: ['Tours guiados', 'Transporte turístico', 'Alquiler de equipos', 'Guías bilingües'],
    rating: 4.8,
    reviewCount: 125,
    siteIds: ['1', '2', '4', '6']
  },
  {
    id: '2',
    name: 'Explorando Tingo María',
    description: 'Somos una agencia comprometida con el turismo sostenible y la conservación de los ecosistemas. Nuestros tours están diseñados para minimizar el impacto ambiental mientras ofrecemos experiencias auténticas y enriquecedoras. Trabajamos directamente con comunidades locales para garantizar que el turismo beneficie a la economía local.',
    imageUrl: 'https://explorandomaravillas.com/wp-content/uploads/laguna-el-milagro-en-tingo-maria.jpg',
    contactInfo: {
      phone: '+51 945 559 596',
      email: 'exploraTingoMaria@gmail.com',
      website: 'www.facebook.com/explorandoTingoMariaTours/',
      whatsapp:'+51 945 559 596'
    },
    services: ['Ecoturismo', 'Senderismo', 'Observación de aves', 'Tours educativos'],
    rating: 4.6,
    reviewCount: 89,
    siteIds: ['1', '3', '4']
  },
  {
    id: '3',
    name: 'JUNGLA BIRDS & TURISMO',
    description: 'Especialistas en aventuras personalizadas para viajeros que buscan experiencias únicas. Adaptamos nuestros tours a tus intereses, condición física y tiempo disponible. Nuestros guías son expertos locales con profundo conocimiento de la región, su ecología, historia y cultura. Ofrecemos desde tranquilas caminatas familiares hasta desafiantes expediciones para aventureros experimentados.',
    imageUrl: 'https://junglabirds.com/wp-content/uploads/2024/05/Jungla-Birds-y-Turismo-Tingo-Maria.jpg',
    contactInfo: {
      phone: '+51 945 567 890',
      email: 'junglabirds@gmail.com',
      website: 'junglabirds.com',
      whatsapp:'+51 945 567 890'
    },
    services: ['Tours personalizados', 'Expediciones', 'Fotografía de naturaleza', 'Camping'],
    rating: 4.9,
    reviewCount: 76,
    siteIds: ['2', '4', '5']
  },
  {
    id: '4',
    name: 'Tingo Maria Nunash Tours',
    description: 'Ofrecemos servicios turísticos integrales con énfasis en la calidad y seguridad. Contamos con un equipo de profesionales capacitados y certificados en primeros auxilios y técnicas de supervivencia. Nuestra flota de vehículos modernos y equipos especializados garantizan confort y seguridad durante toda tu experiencia con nosotros.',
    imageUrl: 'https://www.tingomarianunashtours.com.pe/img/header_bg.jpg',
    contactInfo: {
      phone: '+51 922 233 445',
      email: 'nunashtours@gmail.com',
      website: 'www.tingomarianunashtours.com.pe/nosotros.php',
      whatsapp: '+51 922 233 445'
    },
    services: ['Tours de aventura', 'Transporte turístico', 'Alojamiento', 'Paquetes completos'],
    rating: 4.5,
    reviewCount: 102,
    siteIds: ['1', '3', '5']
  },
  {
    id: '5',
    name: 'Tingo María Trivar Exclusive Agencia de Viajes y Turismo',
    description: 'Empresa familiar con más de 15 años conectando visitantes con las maravillas naturales de Tingo María. Nos enorgullecemos de ofrecer un servicio personalizado y auténtico, compartiendo no solo los atractivos turísticos sino también nuestra cultura, tradiciones y gastronomía. Nuestros precios accesibles hacen que las bellezas de la selva peruana sean accesibles para todos.',
    imageUrl: 'https://explorandomaravillas.com/wp-content/uploads/parque-nacional-tingo-de-maria-1024x1017.jpg',
    contactInfo: {
      phone: '+51 914100180',
      email: 'huanucotravel@gmail.com',
      website: 'www.facebook.com/tingomariatrivar',
      whatsapp: '914100180'

    },
    services: ['Tours económicos', 'Gastronomía local', 'Experiencias culturales', 'Guiado en español'],
    rating: 4.7,
    reviewCount: 65,
    siteIds: ['2', '3', '6']
  },
    {
    id: '6',
    name: 'Tingo Xtremo ',
    description: 'Descubre tu lado más audaz y vive experiencias inolvidables con el turismo extremo de Tingo Xtremo',
    imageUrl: 'https://i.ibb.co/Gf8hG58F/TE.jpg',
    contactInfo: {
      phone: '+51 926246608',
      email: 'tingoxtremo@gmail.com',
      website: 'www.facebook.com/profile.php?id=100092565735858',
      whatsapp: '+51 926 246 608'

    },
    services: ['Tours de aventura'],
    rating: 4.7,
    reviewCount: 65,
    siteIds: ['2']
  },
  {
    id: '7',
    name: 'Tingo María Ruta Aventurera ',
    description: 'Agencia de viajes y turismos',
    imageUrl: 'https://i.ibb.co/CkdVchg/ruta.png',
    contactInfo: {
      phone: '+51 959578266',
      email: 'Rutaaventurera29@gmail.com',
      website: 'www.facebook.com/profile.php?id=100078787569258',
      whatsapp: '+51 959 578 266'

    },
    services: ['Tours de aventura'],
    rating: 4.7,
    reviewCount: 65,
    siteIds: ['2','1','3']
  },
  {
    id: '8',
    name: 'Tingo Maria PAL TOURS',
    description: 'Somos una agencia de viajes dedicada a promocionar los recursos Turisticos de la bella Ciudad de la Bella Durmiente Tingo María.',
    imageUrl: 'https://i.ibb.co/Wv3dQwkW/PT.jpg',
    contactInfo: {
      phone: '+51 989025672',
      email: '',
      website: 'www.facebook.com/tingomariapal',
      whatsapp: '+51 989 025 672'

    },
    services: ['Tours de aventura'],
    rating: 4.7,
    reviewCount: 65,
    siteIds: ['1','2','3','4','5']
  }
];

// Mock data for reviews
export const reviews: Review[] = [
  {
    id: '1',
    userId: '101',
    userName: 'Carlos Mendoza',
    agencyId: '1',
    rating: 5,
    comment: 'Excelente servicio. El guía fue muy profesional y conocedor de la zona. Totalmente recomendado para visitar la Cueva de las Lechuzas.',
    createdAt: '2025-04-26T10:15:00Z'
  },
  {
    id: '2',
    userId: '102',
    userName: 'Laura Sánchez',
    agencyId: '1',
    rating: 4,
    comment: 'Muy buena experiencia. El tour estuvo bien organizado aunque el transporte podría mejorar un poco.',
    createdAt: '2025-04-26T14:20:00Z'
  },
  {
    id: '3',
    userId: '103',
    userName: 'Pedro Quispe',
    agencyId: '2',
    rating: 5,
    comment: 'Increíble tour a La Bella Durmiente. Los guías son muy respetuosos con la naturaleza y brindan mucha información sobre la flora y fauna.',
    createdAt: '2025-04-26T18:30:00Z'
  },
  {
    id: '4',
    userId: '104',
    userName: 'María Rojas',
    agencyId: '3',
    rating: 5,
    comment: 'Contratamos un tour personalizado y superó nuestras expectativas. El guía se adaptó a nuestro ritmo y nos mostró lugares fuera de la ruta turística.',
    createdAt: '2025-04-27T09:00:00Z'
  },
  {
    id: '5',
    userId: '105',
    userName: 'Jorge Vargas',
    agencyId: '4',
    rating: 3,
    comment: 'El tour estuvo bien, pero hubo retrasos en la recogida del hotel. La experiencia en los lugares turísticos fue buena.',
    createdAt: '2025-04-27T12:45:00Z'
  },
  {
    id: '6',
    userId: '106',
    userName: 'Ana Castro',
    agencyId: '5',
    rating: 5,
    comment: 'Precio económico y excelente servicio. La comida local que incluía el tour fue deliciosa. Recomiendo totalmente Selva Tours.',
    createdAt: '2025-04-27T15:30:00Z'
  },
  {
    id: '7',
    userId: '107',
    userName: 'Roberto Flores',
    agencyId: '2',
    rating: 4,
    comment: 'Buen equilibrio entre aventura y educación ambiental. Los niños aprendieron mucho sobre la conservación de la selva.',
    createdAt: '2025-04-28T08:00:00Z'
  },
  {
    id: '8',
    userId: '108',
    userName: 'Lucía Torres',
    agencyId: '3',
    rating: 5,
    comment: 'Excelente experiencia de fotografía. El guía nos llevó a los mejores puntos para capturar la belleza de Tingo María.',
    createdAt: '2025-04-28T10:45:00Z'
  },
  {
    id: '9',
    userId: '109',
    userName: 'Daniel Pacheco',
    agencyId: '1',
    rating: 5,
    comment: 'Los equipos de seguridad estaban en perfecto estado y recibimos una buena capacitación antes de iniciar la aventura.',
    createdAt: '2025-04-28T13:10:00Z'
  },
  {
    id: '10',
    userId: '110',
    userName: 'Carmen Vega',
    agencyId: '4',
    rating: 4,
    comment: 'El alojamiento que nos recomendaron fue cómodo y bien ubicado. El tour cumplió con lo prometido.',
    createdAt: '2025-04-28T16:20:00Z'
  }
];