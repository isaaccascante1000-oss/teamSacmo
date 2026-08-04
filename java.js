/**
 * Casa del Yigüirro — Joyería Fina
 * Catálogo con hash routing, sin índices ambiguos
 */

const PRODUCTS = [
  {
    id: "anillo-solitario-aurelia",
    nombre: "Anillo Solitario Aurelia",
    categoria: "Anillo",
    precio_crc: 1850000,
    precio_usd: 3500,
    impuestos: "IVA incluido (13%)",
    stock: 2,
    imagenes: [
      { src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80", alt: "Anillo solitario con diamante sobre fondo oscuro" },
      { src: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80", alt: "Detalle del engaste del anillo en oro amarillo" }
    ],
    descripcion_corta: "Solitario en oro amarillo 18k con diamante natural certificado GIA de 0.75 ct. Diseño clásico que favorece la entrada de luz.",
    descripcion_larga: "El Anillo Solitario Aurelia está elaborado en oro amarillo de 18 quilates y presenta un diamante natural con certificación GIA de 0.75 quilates. Su diseño clásico de cuatro garras favorece la entrada de luz y permite un uso cómodo en el día a día. La pieza pesa aproximadamente 3.2 gramos y está disponible en tallas 5 a 7. Cada anillo incluye estuche de presentación, certificado gemológico y garantía de un año contra defectos de fabricación. Ideal para quienes valoran la precisión y la durabilidad de los materiales certificados.",
    bullets_tecnicos: [
      "Oro amarillo 18k (750 milésimas de pureza)",
      "Diamante natural certificado GIA, 0.75 ct",
      "Talla brillante (round brilliant cut)",
      "Engaste de cuatro garras en oro sólido",
      "Peso estimado de la pieza: 3.2 gramos",
      "Tallas disponibles: 5, 6 y 7",
      "Incluye estuche de presentación y certificado"
    ],
    beneficios: [
      "Certificación GIA que respalda la calidad del diamante",
      "Diseño atemporal que no pasa de moda con los años",
      "Servicio de ajuste de talla incluido durante el primer año"
    ],
    especificaciones: {
      "Metal": "Oro amarillo 18k",
      "Piedra principal": "Diamante natural",
      "Quilates": "0.75 ct",
      "Certificado": "GIA",
      "Peso aproximado": "3.2 g",
      "Tallas": "5, 6, 7"
    },
    insignias: ["Certificado GIA", "Oro 18k", "Hecho a mano"],
    servicios: {
      entrega: "Entrega gratuita en GAM. Envíos nacionales por correo certificado en 2 a 4 días hábiles. Courier internacional disponible bajo cotización.",
      pagos: "SINPE Móvil, tarjeta de crédito o débito, transferencia bancaria y efectivo en tienda. Pagos en dólares sujetos a tasa del día.",
      garantia: "Garantía de 1 año contra defectos de fabricación. No cubre golpes, caídas ni desgaste normal. Servicio de pulido gratuito durante el primer año.",
      cuidados: "Limpiar con paño de microfibra. Evitar contacto con productos químicos agresivos. Retirar antes de actividades físicas intensas."
    }
  },
  {
    id: "reloj-cronografo-tecali",
    nombre: "Reloj Cronógrafo Tecali",
    categoria: "Reloj",
    precio_crc: 2450000,
    precio_usd: 4600,
    impuestos: "IVA incluido (13%)",
    stock: 1,
    imagenes: [
      { src: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80", alt: "Reloj cronógrafo con esfera azul y correa de cuero" },
      { src: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80", alt: "Vista lateral del reloj mostrando la caja de acero" }
    ],
    descripcion_corta: "Cronógrafo automático con movimiento mecánico de cuerda automática. Caja de acero inoxidable, cristal de zafiro y correa de cuero genuino.",
    descripcion_larga: "El Reloj Cronógrafo Tecali incorpora un movimiento automático de cuerda mecánica con reserva de marcha de aproximadamente 42 horas. Su caja de acero inoxidable de 316L mide 42 milímetros de diámetro y está protegida por cristal de zafiro sintético, altamente resistente a arañazos. La esfera incluye función cronógrafo, indicador de fecha a las 4 horas y luminiscencia en manecillas. La correa de cuero genuino se fija mediante pasadores de liberación rápida. Resistencia al agua de 100 metros. Incluye estuche, manual de usuario y garantía de 2 años.",
    bullets_tecnicos: [
      "Movimiento automático mecánico (estimado)",
      "Reserva de marcha: aproximadamente 42 horas",
      "Caja de acero inoxidable 316L, 42 mm de diámetro",
      "Cristal de zafiro sintético antirreflejante",
      "Correa de cuero genuino con pasadores rápidos",
      "Resistencia al agua: 100 metros (10 ATM)",
      "Funciones: cronógrafo, fecha, segundero central",
      "Garantía del fabricante: 2 años"
    ],
    beneficios: [
      "Movimiento automático que no requiere batería",
      "Cristal de zafiro que mantiene la claridad con el uso",
      "Servicio de mantenimiento recomendado cada 4 a 5 años"
    ],
    especificaciones: {
      "Movimiento": "Automático mecánico",
      "Reserva de marcha": "~42 horas",
      "Caja": "Acero inoxidable 316L",
      "Diámetro": "42 mm",
      "Cristal": "Zafiro sintético",
      "Resistencia al agua": "100 m",
      "Correa": "Cuero genuino"
    },
    insignias: ["Movimiento automático", "Cristal de zafiro", "Resistente al agua 100m"],
    servicios: {
      entrega: "Entrega gratuita en GAM. Envíos nacionales por correo certificado en 2 a 4 días hábiles. Asegurado durante el transporte.",
      pagos: "SINPE Móvil, tarjeta de crédito o débito, transferencia bancaria y efectivo en tienda. Pagos en dólares sujetos a tasa del día.",
      garantia: "Garantía de 2 años contra defectos de fabricación. Servicio de mantenimiento preventivo disponible. No cubre golpes ni inmersión fuera de los límites indicados.",
      cuidados: "Evitar impactos fuertes. Enjuagar con agua dulce después de contacto con agua salada. Guardar en estuche cuando no se use."
    }
  },
  {
    id: "collar-perlas-guanacaste",
    nombre: "Collar de Perlas Guanacaste",
    categoria: "Collar",
    precio_crc: 420000,
    precio_usd: 790,
    impuestos: "IVA incluido (13%)",
    stock: 5,
    imagenes: [
      { src: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80", alt: "Collar de perlas cultivadas blancas sobre fondo terciopelo" },
      { src: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80", alt: "Detalle del broche de plata del collar de perlas" }
    ],
    descripcion_corta: "Collar de perlas cultivadas de agua dulce con broche de plata 925. Longitud de 45 cm. Brillo natural y superficie lisa.",
    descripcion_larga: "El Collar de Perlas Guanacaste está compuesto por perlas cultivadas de agua dulce con diámetro estimado de 7 a 8 milímetros cada una. Presentan brillo natural, superficie lisa y tonalidad blanca con sutil iridiscencia. El broche de seguridad está elaborado en plata de ley 925 y permite un cierre firme. La longitud total del collar es de 45 centímetros, lo que lo sitúa a la altura del cuello de forma elegante. Incluye estuche de terciopelo y garantía de 6 meses. Las perlas cultivadas son producto de procesos naturales asistidos, lo que garantiza su origen sostenible.",
    bullets_tecnicos: [
      "Perlas cultivadas de agua dulce, 7-8 mm de diámetro",
      "Broche de seguridad en plata de ley 925",
      "Longitud total: 45 centímetros",
      "Brillo natural con sutil iridiscencia",
      "Nudo entre perlas para evitar rozamiento",
      "Incluye estuche de terciopelo",
      "Garantía de 6 meses contra defectos de fabricación"
    ],
    beneficios: [
      "Pieza versátil para uso diario o eventos formales",
      "Perlas cultivadas de origen sostenible",
      "Broche de seguridad que evita pérdidas accidentales"
    ],
    especificaciones: {
      "Material": "Perlas cultivadas de agua dulce",
      "Diámetro perlas": "7-8 mm",
      "Broche": "Plata 925",
      "Longitud": "45 cm",
      "Peso estimado": "18 g"
    },
    insignias: ["Perlas cultivadas", "Plata 925", "Origen sostenible"],
    servicios: {
      entrega: "Entrega gratuita en GAM. Envíos nacionales por correo certificado en 2 a 4 días hábiles.",
      pagos: "SINPE Móvil, tarjeta de crédito o débito, transferencia bancaria y efectivo en tienda.",
      garantia: "Garantía de 6 meses contra defectos de fabricación. No cubre roturas por caídas ni contacto con perfumes o cosméticos.",
      cuidados: "Limpiar con paño suave húmedo. Evitar contacto con perfumes, lociones y productos químicos. Guardar en estuche para evitar arañazos."
    }
  },
  {
    id: "aretes-zafiro-talamanca",
    nombre: "Aretes Zafiro Talamanca",
    categoria: "Aretes",
    precio_crc: 680000,
    precio_usd: 1280,
    impuestos: "IVA incluido (13%)",
    stock: 3,
    imagenes: [
      { src: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", alt: "Aretes con zafiros azules y diamantes sobre fondo negro" },
      { src: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80", alt: "Vista frontal de los aretes mostrando el cierre de mariposa" }
    ],
    descripcion_corta: "Aretes en oro blanco 18k con zafiros naturales de 1.20 ct totales y acentos de diamantes. Cierre de mariposa de seguridad.",
    descripcion_larga: "Los Aretes Zafiro Talamanca están elaborados en oro blanco de 18 quilates y presentan dos zafiros naturales con peso total estimado de 1.20 quilates. Cada zafiro presenta corte ovalado y tonalidad azul intenso. Los acentos de diamantes naturales rodean la piedra principal, aportando luminosidad adicional. El sistema de cierre es tipo mariposa con seguro, diseñado para mayor seguridad durante el uso. Peso estimado de la pieza: 2.8 gramos. Incluyen estuche de presentación y garantía de un año. Los zafiros naturales pueden presentar inclusiones propias de su formación geológica.",
    bullets_tecnicos: [
      "Oro blanco 18k con baño de rodio",
      "Zafiros naturales, peso total estimado: 1.20 ct",
      "Corte ovalado con tonalidad azul intenso",
      "Acentos de diamantes naturales (estimado)",
      "Cierre de mariposa con seguro de seguridad",
      "Peso estimado: 2.8 gramos",
      "Incluye estuche de presentación",
      "Garantía de 1 año contra defectos de fabricación"
    ],
    beneficios: [
      "Piedras preciosas naturales con características geológicas únicas",
      "Cierre de seguridad que reduce el riesgo de pérdida",
      "Diseño que combina color y brillo de forma equilibrada"
    ],
    especificaciones: {
      "Metal": "Oro blanco 18k",
      "Piedra principal": "Zafiro natural",
      "Quilates totales": "1.20 ct",
      "Acentos": "Diamantes naturales",
      "Peso estimado": "2.8 g",
      "Cierre": "Mariposa con seguro"
    },
    insignias: ["Zafiros naturales", "Oro 18k", "Cierre de seguridad"],
    servicios: {
      entrega: "Entrega gratuita en GAM. Envíos nacionales por correo certificado en 2 a 4 días hábiles.",
      pagos: "SINPE Móvil, tarjeta de crédito o débito, transferencia bancaria y efectivo en tienda.",
      garantia: "Garantía de 1 año contra defectos de fabricación. Servicio de limpieza ultrasónica gratuito durante el primer año.",
      cuidados: "Limpiar con paño de microfibra. Evitar golpes directos. Retirar antes de nadar o ducharse. Guardar en estuche individual."
    }
  },
  {
    id: "pulsera-esmeralda-irazu",
    nombre: "Pulsera Esmeralda Irazú",
    categoria: "Pulsera",
    precio_crc: 1250000,
    precio_usd: 2350,
    impuestos: "IVA incluido (13%)",
    stock: 1,
    imagenes: [
      { src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80", alt: "Pulsera de oro con esmeraldas en fila sobre superficie reflectante" },
      { src: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80", alt: "Detalle del cierre de la pulsera y los engastes de las esmeraldas" }
    ],
    descripcion_corta: "Pulsera de oro amarillo 18k con esmeraldas naturales en fila. Peso total estimado de piedras: 2.50 ct. Cierre de caja con seguro.",
    descripcion_larga: "La Pulsera Esmeralda Irazú está elaborada en oro amarillo de 18 quilates y presenta una fila de esmeraldas naturales con peso total estimado de 2.50 quilates. Cada esmeralda está engastada en garras de oro que permiten la entrada de luz y resaltan el color verde característico de la piedra. El cierre de caja incluye doble seguro para mayor tranquilidad. Longitud de 18 centímetros. Peso estimado total: 8.5 gramos. Incluye estuche de presentación y garantía de un año. Las esmeraldas naturales presentan inclusiones típicas, conocidas en gemología como jardín, que certifican su origen natural.",
    bullets_tecnicos: [
      "Oro amarillo 18k (750 milésimas)",
      "Esmeraldas naturales, peso total estimado: 2.50 ct",
      "Engaste en garras de oro sólido",
      "Cierre de caja con doble seguro",
      "Longitud: 18 centímetros",
      "Peso estimado: 8.5 gramos",
      "Incluye estuche de presentación",
      "Garantía de 1 año contra defectos de fabricación"
    ],
    beneficios: [
      "Esmeraldas naturales con inclusiones que certifican su origen",
      "Cierre de doble seguro para uso diario con tranquilidad",
      "Servicio de ajuste de medida disponible bajo cotización"
    ],
    especificaciones: {
      "Metal": "Oro amarillo 18k",
      "Piedra principal": "Esmeralda natural",
      "Quilates totales": "2.50 ct (estimado)",
      "Longitud": "18 cm",
      "Peso estimado": "8.5 g",
      "Cierre": "Caja con doble seguro"
    },
    insignias: ["Esmeraldas naturales", "Oro 18k", "Doble seguro"],
    servicios: {
      entrega: "Entrega gratuita en GAM. Envíos nacionales por correo certificado en 2 a 4 días hábiles. Asegurado durante el transporte.",
      pagos: "SINPE Móvil, tarjeta de crédito o débito, transferencia bancaria y efectivo en tienda.",
      garantia: "Garantía de 1 año contra defectos de fabricación. No cubre golpes ni caídas. Servicio de pulido gratuito durante el primer año.",
      cuidados: "Evitar golpes y contacto con productos químicos. Limpiar con paño suave. Guardar en estuche para evitar arañazos entre piedras."
    }
  },
  {
    id: "reloj-diver-poas",
    nombre: "Reloj Diver Poás",
    categoria: "Reloj",
    precio_crc: 890000,
    precio_usd: 1680,
    impuestos: "IVA incluido (13%)",
    stock: 4,
    imagenes: [
      { src: "https://images.unsplash.com/photo-1526045431048-f857369baa09?w=800&q=80", alt: "Reloj diver con bisel giratorio y correa de caucho" },
      { src: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80", alt: "Vista trasera del reloj mostrando la tapa de fondo con grabado" }
    ],
    descripcion_corta: "Reloj diver de cuarzo con bisel giratorio unidireccional, caja de acero y resistencia al agua de 200 metros. Correa de caucho.",
    descripcion_larga: "El Reloj Diver Poás es un instrumento de tiempo diseñado para resistir condiciones exigentes. Incorpora movimiento de cuarzo de alta precisión con batería de larga duración. La caja de acero inoxidable de 316L mide 44 milímetros de diámetro y está equipada con bisel giratorio unidireccional, función esencial para el cálculo de tiempo de inmersión. El cristal de zafiro sintético y la resistencia al agua de 200 metros lo hacen apto para buceo recreativo. La correa de caucho resistente se ajusta cómodamente a la muñeca. Incluye estuche, manual y garantía de 2 años.",
    bullets_tecnicos: [
      "Movimiento de cuarzo de alta precisión",
      "Caja de acero inoxidable 316L, 44 mm de diámetro",
      "Bisel giratorio unidireccional con inserto cerámico",
      "Cristal de zafiro sintético antirreflejante",
      "Resistencia al agua: 200 metros (20 ATM)",
      "Correa de caucho resistente con hebilla de acero",
      "Luminiscencia en manecillas e índices",
      "Garantía del fabricante: 2 años"
    ],
    beneficios: [
      "Resistencia al agua de 200 m apta para buceo recreativo",
      "Movimiento de cuarzo que no requiere cuerda diaria",
      "Bisel cerámico que mantiene el color con el uso"
    ],
    especificaciones: {
      "Movimiento": "Cuarzo de alta precisión",
      "Caja": "Acero inoxidable 316L",
      "Diámetro": "44 mm",
      "Cristal": "Zafiro sintético",
      "Resistencia al agua": "200 m",
      "Correa": "Caucho resistente",
      "Bisel": "Cerámico unidireccional"
    },
    insignias: ["Resistente al agua 200m", "Cristal de zafiro", "Cuarzo de precisión"],
    servicios: {
      entrega: "Entrega gratuita en GAM. Envíos nacionales por correo certificado en 2 a 4 días hábiles.",
      pagos: "SINPE Móvil, tarjeta de crédito o débito, transferencia bancaria y efectivo en tienda.",
      garantia: "Garantía de 2 años contra defectos de fabricación. Se recomienda revisión de estanqueidad cada 2 años. No cubre golpes ni inmersión fuera de los límites.",
      cuidados: "Enjuagar con agua dulce después de contacto con agua salada. Evitar ajustar el bisel bajo el agua. Guardar en lugar seco."
    }
  },
  {
    id: "anillo-compromiso-arenal",
    nombre: "Anillo de Compromiso Arenal",
    categoria: "Anillo",
    precio_crc: 2100000,
    precio_usd: 3950,
    impuestos: "IVA incluido (13%)",
    stock: 2,
    imagenes: [
      { src: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80", alt: "Anillo de compromiso con diamante central y pavé de diamantes en el aro" },
      { src: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80", alt: "Vista lateral del anillo mostrando el pavé y la altura del engaste" }
    ],
    descripcion_corta: "Anillo de compromiso en oro blanco 18k con diamante central de 1.00 ct certificado y pavé de diamantes en el aro. Diseño elegante con altura moderada.",
    descripcion_larga: "El Anillo de Compromiso Arenal está elaborado en oro blanco de 18 quilates con baño de rodio para mayor brillo. Presenta un diamante central de 1.00 quilate con certificación gemológica que acredita su calidad en color, claridad y corte. El aro está decorado con pavé de diamantes naturales que aportan luminosidad continua. El engaste de seis garras eleva la piedra central a una altura moderada, facilitando el uso diario sin sacrificar presencia visual. Peso estimado: 4.1 gramos. Tallas disponibles: 5, 6 y 7. Incluye estuche de presentación, certificado gemológico y garantía de un año.",
    bullets_tecnicos: [
      "Oro blanco 18k con baño de rodio",
      "Diamante central certificado, 1.00 ct",
      "Pavé de diamantes naturales en el aro",
      "Engaste de seis garras en oro sólido",
      "Altura moderada para uso diario cómodo",
      "Peso estimado: 4.1 gramos",
      "Tallas disponibles: 5, 6 y 7",
      "Incluye certificado gemológico y estuche"
    ],
    beneficios: [
      "Diamante central certificado con trazabilidad documentada",
      "Diseño con altura moderada que permite uso diario",
      "Servicio de ajuste de talla incluido durante el primer año"
    ],
    especificaciones: {
      "Metal": "Oro blanco 18k",
      "Piedra principal": "Diamante natural certificado",
      "Quilates central": "1.00 ct",
      "Acentos": "Pavé de diamantes naturales",
      "Peso estimado": "4.1 g",
      "Tallas": "5, 6, 7"
    },
    insignias: ["Diamante certificado", "Oro 18k", "Pavé de diamantes"],
    servicios: {
      entrega: "Entrega gratuita en GAM. Envíos nacionales por correo certificado en 2 a 4 días hábiles. Asegurado durante el transporte.",
      pagos: "SINPE Móvil, tarjeta de crédito o débito, transferencia bancaria y efectivo en tienda.",
      garantia: "Garantía de 1 año contra defectos de fabricación. Servicio de pulido y baño de rodio gratuito durante el primer año.",
      cuidados: "Limpiar con paño de microfibra. Evitar contacto con productos químicos. Retirar antes de actividades físicas. Guardar en estuche."
    }
  },
  {
    id: "collar-diamantes-cocos",
    nombre: "Collar Diamantes Cocos",
    categoria: "Collar",
    precio_crc: 950000,
    precio_usd: 1790,
    impuestos: "IVA incluido (13%)",
    stock: 3,
    imagenes: [
      { src: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?w=800&q=80", alt: "Collar con colgante de diamantes en forma de gota sobre cadena de oro" },
      { src: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80", alt: "Detalle del colgante mostrando los diamantes en engaste de bisel" }
    ],
    descripcion_corta: "Collar con colgante de diamantes naturales en oro amarillo 18k. Cadena de eslabones con cierre de mosquetón. Diseño delicado y luminoso.",
    descripcion_larga: "El Collar Diamantes Cocos presenta un colgante con diamantes naturales engastados en bisel de oro amarillo 18k. La cadena de eslabones redondos mide 42 centímetros de longitud y se cierra con mosquetón de seguridad. El diseño del colgante permite que los diamantes capturen la luz desde múltiples ángulos, generando un efecto luminoso sutil y elegante. Peso estimado de los diamantes: 0.35 quilates totales. Peso de la pieza: 3.8 gramos. Incluye estuche de presentación y garantía de un año. La cadena es resistente al desgaste diario gracias al espesor de sus eslabones.",
    bullets_tecnicos: [
      "Oro amarillo 18k en colgante y cadena",
      "Diamantes naturales engastados en bisel",
      "Peso estimado de diamantes: 0.35 ct totales",
      "Cadena de eslabones redondos, 42 cm",
      "Cierre de mosquetón de seguridad",
      "Peso estimado de la pieza: 3.8 gramos",
      "Incluye estuche de presentación",
      "Garantía de 1 año contra defectos de fabricación"
    ],
    beneficios: [
      "Diamantes naturales con brillo verificado",
      "Cadena resistente al desgaste diario",
      "Cierre de seguridad que evita pérdidas accidentales"
    ],
    especificaciones: {
      "Metal": "Oro amarillo 18k",
      "Piedra principal": "Diamante natural",
      "Quilates totales": "0.35 ct",
      "Longitud": "42 cm",
      "Peso estimado": "3.8 g",
      "Cierre": "Mosquetón de seguridad"
    },
    insignias: ["Diamantes naturales", "Oro 18k", "Cierre de seguridad"],
    servicios: {
      entrega: "Entrega gratuita en GAM. Envíos nacionales por correo certificado en 2 a 4 días hábiles.",
      pagos: "SINPE Móvil, tarjeta de crédito o débito, transferencia bancaria y efectivo en tienda.",
      garantia: "Garantía de 1 año contra defectos de fabricación. Servicio de limpieza ultrasónica gratuito durante el primer año.",
      cuidados: "Limpiar con paño de microfibra. Evitar contacto con perfumes y cosméticos. Guardar en estuche para evitar enredos."
    }
  },
  {
    id: "pendientes-rubi-orosi",
    nombre: "Pendientes Rubí Orosi",
    categoria: "Aretes",
    precio_crc: 780000,
    precio_usd: 1470,
    impuestos: "IVA incluido (13%)",
    stock: 2,
    imagenes: [
      { src: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80", alt: "Pendientes con rubíes rojos intensos y halo de diamantes" },
      { src: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", alt: "Vista trasera mostrando el cierre de presión y la estructura del pendiente" }
    ],
    descripcion_corta: "Pendientes en oro rosa 18k con rubíes naturales de 1.50 ct totales y halo de diamantes. Cierre de presión con seguro.",
    descripcion_larga: "Los Pendientes Rubí Orosi están elaborados en oro rosa de 18 quilates, un tono cálido que complementa el color rojo intenso de los rubíes naturales. Cada pendiente presenta un rubí central con peso total estimado de 1.50 quilates, rodeado por un halo de diamantes naturales que amplifican la luminosidad general. El cierre de presión incluye seguro adicional para mayor tranquilidad. Peso estimado de la pieza: 3.1 gramos. Incluyen estuche de presentación y garantía de un año. Los rubíes naturales pueden presentar inclusiones características que certifican su origen geológico.",
    bullets_tecnicos: [
      "Oro rosa 18k con acabado pulido",
      "Rubíes naturales, peso total estimado: 1.50 ct",
      "Halo de diamantes naturales (estimado)",
      "Cierre de presión con seguro de seguridad",
      "Peso estimado: 3.1 gramos",
      "Incluye estuche de presentación",
      "Garantía de 1 año contra defectos de fabricación"
    ],
    beneficios: [
      "Rubíes naturales con color rojo intenso y características geológicas propias",
      "Halo de diamantes que aumenta la percepción de tamaño y brillo",
      "Cierre con seguro diseñado para uso prolongado con tranquilidad"
    ],
    especificaciones: {
      "Metal": "Oro rosa 18k",
      "Piedra principal": "Rubí natural",
      "Quilates totales": "1.50 ct",
      "Acentos": "Diamantes naturales",
      "Peso estimado": "3.1 g",
      "Cierre": "Presión con seguro"
    },
    insignias: ["Rubíes naturales", "Oro rosa 18k", "Halo de diamantes"],
    servicios: {
      entrega: "Entrega gratuita en GAM. Envíos nacionales por correo certificado en 2 a 4 días hábiles.",
      pagos: "SINPE Móvil, tarjeta de crédito o débito, transferencia bancaria y efectivo en tienda.",
      garantia: "Garantía de 1 año contra defectos de fabricación. Servicio de limpieza ultrasónica gratuito durante el primer año.",
      cuidados: "Limpiar con paño suave. Evitar golpes directos. Retirar antes de nadar o ducharse. Guardar en estuche individual."
    }
  },
  {
    id: "reloj-clasico-manuel-antonio",
    nombre: "Reloj Clásico Manuel Antonio",
    categoria: "Reloj",
    precio_crc: 1350000,
    precio_usd: 2540,
    impuestos: "IVA incluido (13%)",
    stock: 3,
    imagenes: [
      { src: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80", alt: "Reloj clásico de vestir con esfera blanca y correa de cuero marrón" },
      { src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80", alt: "Vista de perfil del reloj mostrando la caja fina y la corona" }
    ],
    descripcion_corta: "Reloj clásico de vestir con movimiento automático, caja de acero de 40 mm, esfera blanca con índices aplicados y correa de cuero italiano.",
    descripcion_larga: "El Reloj Clásico Manuel Antonio es una pieza de relojería tradicional que combina elegancia atemporal con mecánica confiable. Incorpora movimiento automático de cuerda mecánica con reserva de marcha de aproximadamente 38 horas. La caja de acero inoxidable pulido mide 40 milímetros de diámetro y 9 milímetros de grosor, lo que permite que se deslice cómodamente bajo el puño de una camisa. La esfera blanca mate presenta índices aplicados, manecillas dauphine y segundero fino. El cristal de zafiro sintético protege la esfera de arañazos. La correa de cuero italiano genuino se cierra con hebilla de acero. Incluye estuche, manual y garantía de 2 años.",
    bullets_tecnicos: [
      "Movimiento automático mecánico (estimado)",
      "Reserva de marcha: aproximadamente 38 horas",
      "Caja de acero inoxidable pulido, 40 mm de diámetro",
      "Grosor de caja: 9 milímetros",
      "Cristal de zafiro sintético",
      "Esfera blanca mate con índices aplicados",
      "Correa de cuero italiano genuino con hebilla de acero",
      "Garantía del fabricante: 2 años"
    ],
    beneficios: [
      "Perfil delgado de 9 mm que se ajusta cómodamente bajo el puño",
      "Movimiento automático que no requiere batería",
      "Diseño atemporal apropiado para ocasiones formales y uso diario"
    ],
    especificaciones: {
      "Movimiento": "Automático mecánico",
      "Reserva de marcha": "~38 horas",
      "Caja": "Acero inoxidable pulido",
      "Diámetro": "40 mm",
      "Grosor": "9 mm",
      "Cristal": "Zafiro sintético",
      "Correa": "Cuero italiano genuino"
    },
    insignias: ["Movimiento automático", "Perfil delgado", "Cristal de zafiro"],
    servicios: {
      entrega: "Entrega gratuita en GAM. Envíos nacionales por correo certificado en 2 a 4 días hábiles.",
      pagos: "SINPE Móvil, tarjeta de crédito o débito, transferencia bancaria y efectivo en tienda.",
      garantia: "Garantía de 2 años contra defectos de fabricación. Servicio de mantenimiento preventivo disponible. No cubre golpes ni caídas.",
      cuidados: "Evitar impactos fuertes y campos magnéticos intensos. Guardar en estuche cuando no se use. Servicio de mantenimiento recomendado cada 4 a 5 años."
    }
  }
];

/* ============================================
   Utilidades
   ============================================ */

function formatPriceCRC(amount) {
  return "₡" + amount.toLocaleString("es-CR");
}

function formatPriceUSD(amount) {
  return "~$" + amount.toLocaleString("en-US") + " USD";
}

function getStockStatus(stock) {
  if (stock === 0) return { label: "Agotado", className: "stock-out", dot: "out" };
  if (stock <= 2) return { label: `Solo ${stock} unidades`, className: "stock-low", dot: "low" };
  return { label: `${stock} unidades disponibles`, className: "", dot: "" };
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ============================================
   Toast
   ============================================ */

function showToast(message, type = "info") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

/* ============================================
   Render: Inicio
   ============================================ */

function renderHome() {
  const featured = PRODUCTS.slice(0, 3);
  const cards = featured.map(p => `
    <article class="product-card" tabindex="0" data-id="${escapeHtml(p.id)}" role="link" aria-label="Ver ${escapeHtml(p.nombre)}">
      <div class="card-image-wrap">
        <img src="${escapeHtml(p.imagenes[0].src)}" alt="${escapeHtml(p.imagenes[0].alt)}" loading="lazy">
        ${p.stock <= 2 && p.stock > 0 ? `<span class="card-badge stock-low">Últimas unidades</span>` : ""}
        ${p.stock === 0 ? `<span class="card-badge stock-out">Agotado</span>` : ""}
      </div>
      <div class="card-body">
        <span class="card-category">${escapeHtml(p.categoria)}</span>
        <h3 class="card-title">${escapeHtml(p.nombre)}</h3>
        <p class="card-desc">${escapeHtml(p.descripcion_corta)}</p>
        <div class="card-footer">
          <div>
            <div class="card-price-crc">${formatPriceCRC(p.precio_crc)}</div>
            <div class="card-price-usd">${formatPriceUSD(p.precio_usd)}</div>
          </div>
          <span class="card-link">Ver detalle</span>
        </div>
      </div>
    </article>
  `).join("");

  return `
    <section class="hero">
      <h1 class="hero-title">Joyería con raíces costarricenses</h1>
      <p class="hero-subtitle">Seleccionamos piezas de joyería fina y relojería con criterio de calidad, certificación y servicio postventa. Atendemos con la calidez de siempre.</p>
      <a href="#/catalogo" class="hero-cta">Explorar catálogo <span class="arrow">→</span></a>
    </section>
    <section style="margin-top:48px">
      <div class="catalog-header">
        <h2 class="catalog-title">Piezas destacadas</h2>
        <span class="catalog-count">3 de ${PRODUCTS.length} productos</span>
      </div>
      <div class="product-grid">${cards}</div>
      <div style="text-align:center; margin-top:40px;">
        <a href="#/catalogo" class="btn-secondary">Ver catálogo completo</a>
      </div>
    </section>
  `;
}

/* ============================================
   Render: Catálogo
   ============================================ */

let currentFilter = "Todos";

function renderCatalog() {
  const filtered = currentFilter === "Todos" ? PRODUCTS : PRODUCTS.filter(p => p.categoria === currentFilter);
  const categories = ["Todos", ...new Set(PRODUCTS.map(p => p.categoria))];

  const filterButtons = categories.map(cat => `
    <button class="filter-btn ${cat === currentFilter ? "active" : ""}" data-filter="${escapeHtml(cat)}">${escapeHtml(cat)}</button>
  `).join("");

  const cards = filtered.map(p => `
    <article class="product-card" tabindex="0" data-id="${escapeHtml(p.id)}" role="link" aria-label="Ver ${escapeHtml(p.nombre)}">
      <div class="card-image-wrap">
        <img src="${escapeHtml(p.imagenes[0].src)}" alt="${escapeHtml(p.imagenes[0].alt)}" loading="lazy">
        ${p.stock <= 2 && p.stock > 0 ? `<span class="card-badge stock-low">Últimas unidades</span>` : ""}
        ${p.stock === 0 ? `<span class="card-badge stock-out">Agotado</span>` : ""}
      </div>
      <div class="card-body">
        <span class="card-category">${escapeHtml(p.categoria)}</span>
        <h3 class="card-title">${escapeHtml(p.nombre)}</h3>
        <p class="card-desc">${escapeHtml(p.descripcion_corta)}</p>
        <div class="card-footer">
          <div>
            <div class="card-price-crc">${formatPriceCRC(p.precio_crc)}</div>
            <div class="card-price-usd">${formatPriceUSD(p.precio_usd)}</div>
          </div>
          <span class="card-link">Ver detalle</span>
        </div>
      </div>
    </article>
  `).join("");

  return `
    <div class="catalog-header">
      <div>
        <h1 class="catalog-title">Catálogo</h1>
        <span class="catalog-count">${filtered.length} producto${filtered.length !== 1 ? "s" : ""}</span>
      </div>
      <div class="filter-bar">${filterButtons}</div>
    </div>
    <div class="product-grid">${cards}</div>
  `;
}

/* ============================================
   Render: Detalle de producto
   ============================================ */

function renderProductDetail(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) {
    return `<div class="page-section"><h1 class="page-title">Producto no encontrado</h1><p class="page-text">El producto solicitado no existe en nuestro catálogo. <a href="#/catalogo" style="color:var(--color-dorado)">Volver al catálogo</a></p></div>`;
  }

  const stock = getStockStatus(p.stock);
  const bullets = p.bullets_tecnicos.map(b => `<li>${escapeHtml(b)}</li>`).join("");
  const benefits = p.beneficios.map(b => `<li>${escapeHtml(b)}</li>`).join("");
  const specs = Object.entries(p.especificaciones).map(([k, v]) => `
    <div class="detail-spec">
      <span class="detail-spec-label">${escapeHtml(k)}</span>
      <span class="detail-spec-value">${escapeHtml(v)}</span>
    </div>
  `).join("");
  const insignias = p.insignias.map(i => `<span class="insignia">${escapeHtml(i)}</span>`).join("");
  const thumbs = p.imagenes.map((img, idx) => `
    <button class="detail-thumb ${idx === 0 ? "active" : ""}" data-index="${idx}" aria-label="Ver imagen ${idx + 1}">
      <img src="${escapeHtml(img.src)}" alt="${escapeHtml(img.alt)}">
    </button>
  `).join("");

  return `
    <div class="detail-view">
      <button class="detail-back" onclick="history.back()">← Volver</button>
      <div class="detail-grid">
        <div class="detail-gallery">
          <div class="detail-main-image">
            <img id="detail-main-img" src="${escapeHtml(p.imagenes[0].src)}" alt="${escapeHtml(p.imagenes[0].alt)}">
          </div>
          <div class="detail-thumbs">${thumbs}</div>
        </div>
        <div class="detail-info">
          <span class="detail-category">${escapeHtml(p.categoria)}</span>
          <h1 class="detail-title">${escapeHtml(p.nombre)}</h1>
          <p class="detail-desc">${escapeHtml(p.descripcion_larga)}</p>

          <div class="detail-price-box">
            <div class="detail-price-crc">${formatPriceCRC(p.precio_crc)}</div>
            <div class="detail-price-usd">${formatPriceUSD(p.precio_usd)}</div>
            <div class="detail-price-note">${escapeHtml(p.impuestos)} · Precios en dólares aproximados, sujetos a tasa del día.</div>
          </div>

          <div class="detail-stock">
            <span class="stock-dot ${stock.dot}"></span>
            <span>${stock.label}</span>
          </div>

          <div class="detail-insignias">${insignias}</div>

          <div>
            <h2 class="detail-section-title">Especificaciones técnicas</h2>
            <ul class="detail-bullets">${bullets}</ul>
          </div>

          <div>
            <h2 class="detail-section-title">Beneficios verificables</h2>
            <ul class="detail-benefits">${benefits}</ul>
          </div>

          <div>
            <h2 class="detail-section-title">Ficha técnica</h2>
            <div class="detail-specs">${specs}</div>
          </div>

          <div>
            <h2 class="detail-section-title">Servicios incluidos</h2>
            <div class="detail-services">
              <div class="service-box">
                <h4>Entrega</h4>
                <p>${escapeHtml(p.servicios.entrega)}</p>
              </div>
              <div class="service-box">
                <h4>Pagos</h4>
                <p>${escapeHtml(p.servicios.pagos)}</p>
              </div>
              <div class="service-box">
                <h4>Garantía</h4>
                <p>${escapeHtml(p.servicios.garantia)}</p>
              </div>
              <div class="service-box">
                <h4>Cuidados</h4>
                <p>${escapeHtml(p.servicios.cuidados)}</p>
              </div>
            </div>
          </div>

          <div class="detail-actions">
            <button class="btn-primary" id="btn-consultar" ${p.stock === 0 ? "disabled" : ""}>
              ${p.stock === 0 ? "Producto agotado" : "Solicitar asesoría"}
            </button>
            <a href="https://wa.me/50688882222?text=Hola,%20me%20interesa%20el%20producto%20${encodeURIComponent(p.nombre)}" target="_blank" rel="noopener" class="btn-secondary">Consultar por WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ============================================
   Render: Nosotros
   ============================================ */

function renderAbout() {
  return `
    <div class="page-section">
      <h1 class="page-title">Sobre Casa del Yigüirro</h1>
      <p class="page-text">Casa del Yigüirro nació en 2018 con una idea sencilla: ofrecer en Costa Rica piezas de joyería fina y relojería seleccionadas con criterio técnico, sin exageraciones ni promesas vacías. Nuestro nombre rinde homenaje al yigüirro, ave nacional de Costa Rica, símbolo de la llegada de la temporada de lluvias y de la conexión con la tierra.</p>
      <p class="page-text">Trabajamos con proveedores que comparten nuestro estándar de calidad. Cada pieza que ofrecemos cuenta con identificación clara de materiales, pesos estimados y condiciones de garantía. No inventamos certificaciones ni exageramos beneficios. Preferimos que la calidad se demuestre con hechos: oro de 18k, diamantes con informes gemológicos, movimientos mecánicos con reserva de marcha verificable.</p>
      <p class="page-text">Atendemos desde San José con envíos a todo el país. Aceptamos SINPE Móvil, tarjetas, transferencias y efectivo. Todos los precios incluyen IVA. Si tiene dudas sobre una pieza, le recomendamos solicitar una asesoría personalizada antes de comprar.</p>
    </div>
  `;
}

/* ============================================
   Render: Contacto
   ============================================ */

function renderContact() {
  return `
    <div class="page-section">
      <h1 class="page-title">Contacto</h1>
      <p class="page-text">Puede comunicarse con nosotros por cualquiera de los siguientes canales. Atendemos de lunes a sábado de 9:00 a.m. a 6:00 p.m. Los mensajes por WhatsApp reciben respuesta en un plazo máximo de 24 horas en días hábiles.</p>
      <div class="contact-grid">
        <div class="contact-card">
          <h3>WhatsApp</h3>
          <p>+(506) 8888-2222<br>Respuesta en 24 horas hábiles</p>
        </div>
        <div class="contact-card">
          <h3>Teléfono</h3>
          <p>+(506) 2222-8888<br>Lun-Sab, 9am-6pm</p>
        </div>
        <div class="contact-card">
          <h3>Correo electrónico</h3>
          <p>correo@casadelyiguiro.com<br>Consultas y cotizaciones</p>
        </div>
        <div class="contact-card">
          <h3>Ubicación</h3>
          <p>San José, Costa Rica<br>Entregas en GAM sin costo</p>
        </div>
      </div>
    </div>
  `;
}

/* ============================================
   Routing y navegación
   ============================================ */

function handleRoute() {
  const hash = window.location.hash || "#/";
  const app = document.getElementById("app");
  let content = "";

  if (hash === "#/" || hash === "#" || hash === "") {
    content = renderHome();
  } else if (hash === "#/catalogo") {
    content = renderCatalog();
  } else if (hash === "#/nosotros") {
    content = renderAbout();
  } else if (hash === "#/contacto") {
    content = renderContact();
  } else if (hash.startsWith("#/producto/")) {
    const id = hash.replace("#/producto/", "");
    content = renderProductDetail(id);
  } else {
    content = renderHome();
  }

  app.innerHTML = content;
  window.scrollTo({ top: 0, behavior: "smooth" });
  attachEventListeners();
}

/* ============================================
   Event listeners dinámicos
   ============================================ */

function attachEventListeners() {
  // Tarjetas de producto
  document.querySelectorAll(".product-card").forEach(card => {
    const id = card.dataset.id;
    const navigate = () => { window.location.hash = `#/producto/${id}`; };
    card.addEventListener("click", navigate);
    card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); navigate(); } });
  });

  // Filtros de catálogo
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentFilter = btn.dataset.filter;
      handleRoute();
    });
  });

  // Thumbs de galería en detalle
  document.querySelectorAll(".detail-thumb").forEach(thumb => {
    thumb.addEventListener("click", () => {
      const idx = thumb.dataset.index;
      const p = PRODUCTS.find(x => x.id === window.location.hash.replace("#/producto/", ""));
      if (!p) return;
      const mainImg = document.getElementById("detail-main-img");
      if (mainImg) {
        mainImg.src = p.imagenes[idx].src;
        mainImg.alt = p.imagenes[idx].alt;
      }
      document.querySelectorAll(".detail-thumb").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
    });
  });

  // Botón de asesoría
  const btnConsultar = document.getElementById("btn-consultar");
  if (btnConsultar && !btnConsultar.disabled) {
    btnConsultar.addEventListener("click", () => {
      showToast("Su solicitud de asesoría ha sido registrada. Nos comunicaremos en 24 horas hábiles.", "success");
    });
  }
}

/* ============================================
   Menú móvil
   ============================================ */

function initMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
    menu.hidden = !isOpen;
  });

  menu.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      menu.hidden = true;
    });
  });
}

/* ============================================
   Inicialización
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  handleRoute();
  initMobileMenu(); 
  window.addEventListener("hashchange", handleRoute);
});
