const bebidasMockup = [
  {
    id: 1,
    title: "Cerveza IPA",
    price: 5.99,
    stock: 51,
    description: "Cerveza India Pale Ale, ligeramente amarga y aromática.",
    category: "Cervezas",
    img: "url_de_la_imagen1.jpg",
  },
  {
    id: 2,
    title: "Vino Tinto Reserva",
    price: 12.99,
    stock: 30,
    description: "Vino tinto reserva de alta calidad, cosecha 2015.",
    category: "Vinos",
    img: "url_de_la_imagen2.jpg",
  },
  {
    id: 3,
    title: "Whisky Escocés",
    price: 29.99,
    stock: 20,
    description: "Whisky escocés de malta, suave y ahumado.",
    category: "Licores",
    img: "url_de_la_imagen3.jpg",
  },
  {
    id: 4,
    title: "Ron Añejo",
    price: 19.99,
    stock: 25,
    description: "Ron añejo de 7 años de barrica, ideal para cócteles.",
    category: "Licores",
    img: "url_de_la_imagen4.jpg",
  },
  {
    id: 5,
    title: "Ginebra Premium",
    price: 24.99,
    stock: 15,
    description: "Ginebra premium con una mezcla de botánicos.",
    category: "Licores",
    img: "url_de_la_imagen5.jpg",
  },
  {
    id: 6,
    title: "Soda Limón",
    price: 1.49,
    stock: 50,
    description: "Soda de limón refrescante, ideal para mezclar con licores.",
    category: "Refrescos",
    img: "url_de_la_imagen6.jpg",
  },
  {
    id: 7,
    title: "Sidra",
    price: 6.99,
    stock: 35,
    description: "Sidra refrescante, perfecta para celebraciones.",
    category: "Cervezas",
    img: "url_de_la_imagen7.jpg",
  },
  {
    id: 8,
    title: "Champán Brut",
    price: 35.99,
    stock: 10,
    description: "Champán brut de alta calidad, perfecto para celebraciones.",
    category: "Vinos",
    img: "url_de_la_imagen8.jpg",
  },
  {
    id: 9,
    title: "Tequila Reposado",
    price: 27.99,
    stock: 15,
    description: "Tequila reposado en barricas de roble, suave y elegante.",
    category: "Licores",
    img: "url_de_la_imagen9.jpg",
  },
  {
    id: 10,
    title: "Té de Manzanilla",
    price: 2.29,
    stock: 30,
    description: "Té de manzanilla calmante, perfecto para relajarse.",
    category: "Tés",
    img: "url_de_la_imagen10.jpg",
  },
  {
    id: 11,
    title: "Cerveza Lager",
    price: 4.99,
    stock: 60,
    description:
      "Cerveza Lager suave y refrescante, perfecta para cualquier ocasión.",
    category: "Cervezas",
    img: "url_de_la_imagen11.jpg",
  },
  {
    id: 12,
    title: "Ginebra de Bayas",
    price: 23.99,
    stock: 15,
    description:
      "Ginebra con infusiones de bayas silvestres, exquisitamente aromática.",
    category: "Licores",
    img: "url_de_la_imagen12.jpg",
  },
  {
    id: 13,
    title: "Refresco de Uva",
    price: 1.99,
    stock: 45,
    description: "Refresco de uva con un sabor dulce y refrescante.",
    category: "Refrescos",
    img: "url_de_la_imagen13.jpg",
  },
  {
    id: 14,
    title: "Jugo de Limón Natural",
    price: 2.49,
    stock: 50,
    description: "Jugo de limón recién exprimido, ideal para cócteles.",
    category: "Bebidas sin alcohol",
    img: "url_de_la_imagen14.jpg",
  },
  {
    id: 15,
    title: "Cerveza Porter",
    price: 6.49,
    stock: 40,
    description:
      "Cerveza Porter oscura y robusta con notas a café y chocolate.",
    category: "Cervezas",
    img: "url_de_la_imagen15.jpg",
  },
  {
    id: 16,
    title: "Vodka de Frambuesa",
    price: 29.99,
    stock: 20,
    description: "Vodka de frambuesa con un toque frutal y refrescante.",
    category: "Licores",
    img: "url_de_la_imagen16.jpg",
  },
  {
    id: 17,
    title: "Té Verde con Menta",
    price: 2.29,
    stock: 30,
    description: "Té verde con menta fresca, ideal para momentos relajantes.",
    category: "Tés",
    img: "url_de_la_imagen17.jpg",
  },
  {
    id: 18,
    title: "Whisky Bourbon",
    price: 22.99,
    stock: 25,
    description: "Whisky bourbon con un toque de caramelo y vainilla.",
    category: "Licores",
    img: "url_de_la_imagen18.jpg",
  },
  {
    id: 19,
    title: "Cerveza Ámbar",
    price: 5.99,
    stock: 30,
    description: "Cerveza ámbar con un equilibrio entre maltas y lúpulos.",
    category: "Cervezas",
    img: "url_de_la_imagen19.jpg",
  },
  {
    id: 20,
    title: "Ron Blanco",
    price: 16.99,
    stock: 25,
    description: "Ron blanco suave y versátil, perfecto para cócteles.",
    category: "Licores",
    img: "url_de_la_imagen20.jpg",
  },
  {
    id: 21,
    title: "Vodka de Lujo",
    price: 39.99,
    stock: 12,
    description: "Vodka de lujo destilado varias veces, pureza excepcional.",
    category: "Licores",
    img: "url_de_la_imagen21.jpg",
  },
  {
    id: 22,
    title: "Cerveza de Trigo",
    price: 5.99,
    stock: 40,
    description:
      "Cerveza de trigo suave y refrescante con notas a plátano y clavo.",
    category: "Cervezas",
    img: "url_de_la_imagen22.jpg",
  },
  {
    id: 23,
    title: "Ron Dorado",
    price: 14.99,
    stock: 20,
    description:
      "Ron dorado envejecido en barricas de roble, suavidad excepcional.",
    category: "Licores",
    img: "url_de_la_imagen23.jpg",
  },
  {
    id: 24,
    title: "Agua con Gas",
    price: 1.79,
    stock: 60,
    description: "Agua mineral con gas, perfecta como refresco.",
    category: "Bebidas sin alcohol",
    img: "url_de_la_imagen24.jpg",
  },
  {
    id: 25,
    title: "Té de Hibisco",
    price: 2.49,
    stock: 30,
    description: "Té de hibisco afrutado y refrescante, sin cafeína.",
    category: "Tés",
    img: "url_de_la_imagen25.jpg",
  },
  {
    id: 26,
    title: "Vino Rosado",
    price: 7.99,
    stock: 35,
    description: "Vino rosado ligero y afrutado, ideal para aperitivos.",
    category: "Vinos",
    img: "url_de_la_imagen26.jpg",
  },
  {
    id: 27,
    title: "Cerveza Lager",
    price: 4.99,
    stock: 60,
    description:
      "Cerveza Lager suave y refrescante, perfecta para cualquier ocasión.",
    category: "Cervezas",
    img: "url_de_la_imagen27.jpg",
  },
  {
    id: 28,
    title: "Ginebra de Bayas",
    price: 23.99,
    stock: 15,
    description:
      "Ginebra con infusiones de bayas silvestres, exquisitamente aromática.",
    category: "Licores",
    img: "url_de_la_imagen28.jpg",
  },
  {
    id: 29,
    title: "Refresco de Uva",
    price: 1.99,
    stock: 45,
    description: "Refresco de uva con un sabor dulce y refrescante.",
    category: "Refrescos",
    img: "url_de_la_imagen29.jpg",
  },
  {
    id: 30,
    title: "Jugo de Limón Natural",
    price: 2.49,
    stock: 50,
    description: "Jugo de limón recién exprimido, ideal para cócteles.",
    category: "Bebidas sin alcohol",
    img: "url_de_la_imagen30.jpg",
  },
  {
    id: 31,
    title: "Cerveza Porter",
    price: 6.49,
    stock: 40,
    description:
      "Cerveza Porter oscura y robusta con notas a café y chocolate.",
    category: "Cervezas",
    img: "url_de_la_imagen31.jpg",
  },
  {
    id: 32,
    title: "Vodka de Frambuesa",
    price: 29.99,
    stock: 20,
    description: "Vodka de frambruesa con un toque frutal y refrescante.",
    category: "Licores",
    img: "url_de_la_imagen32.jpg",
  },
  {
    id: 33,
    title: "Té Verde con Menta",
    price: 2.29,
    stock: 30,
    description: "Té verde con menta fresca, ideal para momentos relajantes.",
    category: "Tés",
    img: "url_de_la_imagen33.jpg",
  },
  {
    id: 34,
    title: "Whisky Bourbon",
    price: 22.99,
    stock: 25,
    description: "Whisky bourbon con un toque de caramelo y vainilla.",
    category: "Licores",
    img: "url_de_la_imagen34.jpg",
  },
  {
    id: 35,
    title: "Cerveza Ámbar",
    price: 5.99,
    stock: 30,
    description: "Cerveza ámbar con un equilibrio entre maltas y lúpulos.",
    category: "Cervezas",
    img: "url_de_la_imagen35.jpg",
  },
  {
    id: 36,
    title: "Ron Blanco",
    price: 16.99,
    stock: 25,
    description: "Ron blanco suave y versátil, perfecto para cócteles.",
    category: "Licores",
    img: "url_de_la_imagen36.jpg",
  },
  {
    id: 37,
    title: "Refresco de Naranja",
    price: 1.79,
    stock: 50,
    description: "Refresco de naranja refrescante y lleno de sabor.",
    category: "Refrescos",
    img: "url_de_la_imagen37.jpg",
  },
  {
    id: 38,
    title: "Vino Espumoso",
    price: 10.99,
    stock: 15,
    description: "Vino espumoso para brindis especiales, con burbujas finas.",
    category: "Vinos",
    img: "url_de_la_imagen38.jpg",
  },
  {
    id: 39,
    title: "Tequila Silver",
    price: 19.99,
    stock: 20,
    description: "Tequila silver suave y cristalino, perfecto para chupitos.",
    category: "Licores",
    img: "url_de_la_imagen39.jpg",
  },
  {
    id: 40,
    title: "Café Espresso Doble",
    price: 4.49,
    stock: 35,
    description: "Doble espresso con un sabor intenso y cuerpo aterciopelado.",
    category: "Cafés",
    img: "url_de_la_imagen40.jpg",
  },
  {
    id: 41,
    title: "Combo de Cervezas",
    price: 15.99,
    stock: 20,
    description:
      "Disfruta de una selección de cervezas variadas, incluyendo cerveza IPA, Sidra y Cerveza Porter.",
    category: "Combos",
    img: "url_de_la_imagen_combo1.jpg",
  },
  {
    id: 42,
    title: "Combo de Cócteles Clásicos",
    price: 24.99,
    stock: 15,
    description:
      "Saborea cócteles clásicos en casa, incluyendo Whisky Escocés, Ron Añejo y Vodka Premium.",
    category: "Combos",
    img: "url_de_la_imagen_combo2.jpg",
  },
  {
    id: 43,
    title: "Combo de Refrescos Variados",
    price: 8.99,
    stock: 25,
    description:
      "Refresca tu día con una selección de refrescos variados, como Soda Limón, Refresco de Uva, Cerveza Lager y Refresco de Naranja.",
    category: "Combos",
    img: "url_de_la_imagen_combo3.jpg",
  },
  {
    id: 44,
    title: "Combo de Licores",
    price: 32.99,
    stock: 18,
    description:
      "Degusta una variedad de licores de alta calidad, como Ron Dorado, Ginebra de Bayas y Tequila Reposado.",
    category: "Combos",
    img: "url_de_la_imagen_combo4.jpg",
  },
  {
    id: 45,
    title: "Combo de Vinos",
    price: 29.99,
    stock: 12,
    description:
      "Explora una selección de vinos premium, incluyendo Vino Tinto Reserva, Vino Blanco y Vino Espumoso.",
    category: "Combos",
    img: "url_de_la_imagen_combo5.jpg",
  },
  {
    id: 46,
    title: "Combo de Cervezas Artesanales",
    price: 18.99,
    stock: 22,
    description:
      "Prueba una variedad de cervezas artesanales, como Stout, IPA y Ámbar, en este combo especial.",
    category: "Combos",
    img: "url_de_la_imagen_combo6.jpg",
  },
  {
    id: 47,
    title: "Combo de Cervezas y Aperitivos",
    price: 21.99,
    stock: 17,
    description:
      "Acompaña tus cervezas con aperitivos variados, como nueces, papas fritas y pretzels, en este combo.",
    category: "Combos",
    img: "url_de_la_imagen_combo7.jpg",
  },
  {
    id: 48,
    title: "Combo de Whiskys de Malta",
    price: 45.99,
    stock: 10,
    description:
      "Degusta una selección de whiskys de malta de diferentes regiones, perfecto para amantes del whisky.",
    category: "Combos",
    img: "url_de_la_imagen_combo8.jpg",
  },
  {
    id: 49,
    title: "Combo de Vodka y Mixers",
    price: 27.99,
    stock: 14,
    description:
      "Crea tus propios cócteles con vodka y mixers variados incluidos en este combo.",
    category: "Combos",
    img: "url_de_la_imagen_combo9.jpg",
  },
  {
    id: 50,
    title: "Combo de Bebidas Tropicales",
    price: 19.99,
    stock: 20,
    description:
      "Viaja a través del sabor con una selección de bebidas tropicales, como Ron de Coco y Piña Colada mix.",
    category: "Combos",
    img: "url_de_la_imagen_combo10.jpg",
  },
];
