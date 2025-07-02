
const cakes = [
  // Pre Booking Order Only
  {
    name: "Chocolate Truffle",
    category: "Eggless",
    price1kg: 1200,
    priceHalfKg: 630,
      priceHeartKg: 1350,
  priceHeartHalfKg: 705,
    preBooking: true,
    image: "/Chocolate Truffle.jpg"
  },
  {
    name: "Elite Buter Scotch",
    category: "Eggless",
    price1kg: 1200,
    priceHalfKg: 630,
      priceHeartKg: 1350,
  priceHeartHalfKg: 705,
    preBooking: true,
    image: "/Elite Buter Scotch.jpg"
  },
  {
    name: "Classic Black Forest Cake",
    category: "Eggless",
    price1kg: 1100,
    priceHalfKg: 580,
    priceHeartKg: 1250,
  priceHeartHalfKg: 655,
    preBooking: true,
    image: "/Butter Scotch.jpg"
  },
  {
    name: " Black Forest Fresh Cream Cake",
    category: "Eggless",
    price1kg: 900,
    priceHalfKg: 475,
    priceHeartKg: 1150,
  priceHeartHalfKg: 605,
    preBooking: true,
    image: "/Black Forest Fresh Cream Cake.jpg"
  },
  
  {
    name: " Elite White Forest Cake",
    category: "Eggless",
    price1kg: 1100,
    priceHalfKg: 580,
    priceHeartKg:1250,
  priceHeartHalfKg: 655,
    preBooking: true,
    image: "/Elite White Forest Cake.jpg"
  },


  {
    name: "White Forest Fresh Cream cake",
    category: "Eggless",
    price1kg: 900,
    priceHalfKg: 475,
    priceHeartKg:1150,
  priceHeartHalfKg: 605,
    preBooking: true,
    image: "/White Forest.jpg"
  },
  {
    name: "Butter Scotch Fresh Cream cake",
    category: "Eggless",
    price1kg: 1000,
    priceHalfKg: 530,
    priceHeartKg:1150,
  priceHeartHalfKg: 605,
    preBooking: true,
    image: "/Butter.jpg"
  },
  {
    name: " Venilla Fresh Cream cake",
    category: "Eggless",
    price1kg: 750,
    priceHalfKg: 405,
    priceHeartKg:900,
  priceHeartHalfKg: 480,
    preBooking: true,
    image: "/Venilla Fresh Cream cake.jpg"
  },
  {
    name: " Rainbow cake",
    category: "Eggless",
    price1kg: 1300,
    priceHalfKg: 680,
    
    preBooking: true,
    image: "/Rainbow cake.png"
  },
  {
    name: " Chocolate Overloaded cake",
    category: "Eggless",
    price1kg: 1400,
    priceHalfKg: 730,
    priceHeartKg:1500,
  priceHeartHalfKg: 780,
    preBooking: true,
    image: "/Chocolate Overloaded cake.jpg"
  },
  {
    name: " Chocolate cake",
    category: "Eggless",
    price1kg: 900,
    priceHalfKg: 475,
    priceHeartKg:1150,
  priceHeartHalfKg: 605,
    preBooking: true,
    image: "/Chocolate Cake.jpg"
  },
  
  // OUR SPECIAL TOUCH/EGGLESS
  {
    label: "OUR SPECIAL TOUCH",
    name: "Red Velvet",
    category: "Eggless",
    price1kg: 1400,
    priceHalfKg: 730,
    priceHeartKg:1550,
  priceHeartHalfKg: 805,
    image: "/Red Velvet.jpg"
  },
  {
    label: "OUR SPECIAL TOUCH",
    name: "Gulab Jamun Cake",
    category: "Eggless",
    price1kg: 1200,
    priceHalfKg: 630,
    priceHeartKg:1350,
  priceHeartHalfKg: 705,
    image: "/Gulab Jamun Cake.png"
  },
  {
    label: "OUR SPECIAL TOUCH",
    name: "Rasamalai Cake",
    category: "Eggless",
    price1kg: 1300,
    priceHalfKg: 680,
    priceHeartKg:1450,
  priceHeartHalfKg: 755,
    image: "/Rasamalai.jpg"
  },
  {
    label: "OUR SPECIAL TOUCH",
    name: "Pisthochio Tres Leach Cake",
    category: "Eggless",
    price1kg: 1500,
    priceHalfKg: 780,
    priceHeartKg:1650,
  priceHeartHalfKg: 855,
    image: "/Pisthochio Tres Leach.jpg"
  },
  {
    label: "OUR SPECIAL TOUCH",
    name: "Rose Milk Cake",
    category: "Eggless",
    price1kg: 1200,
    priceHalfKg: 730,
    priceHeartKg:1350,
  priceHeartHalfKg: 705,
    image: "/Rose Milk.jpg"
  },
  {
    label: "OUR SPECIAL TOUCH",
    name: "Chocolate Tres Leach Cake",
    category: "Eggless",
    price1kg: 1250,
    priceHalfKg: 750,
    priceHeartKg:1400,
  priceHeartHalfKg: 730,
    image: "/cake.jpeg"
  },
  {
    label: "OUR SPECIAL TOUCH",
    name: "Fondant Theme Cake",
    category: "Eggless",
    image: "/Fondant Theme.jpg"
  },
  {
    label: "OUR SPECIAL TOUCH",
    name: "Rich Plum Cake (Alcohol free)",
    category: "Eggless",
    price1kg: 800,
    priceHalfKg: 430,
    image: "/Rich Plum.jpg"
  },

  // EGGLESS SPONGE CAKE
  {
    label: "EGGLESS SPONGE CAKE",
    name: "Mocha Cake",
    category: "Eggless Sponge",
    price1kg: 430,
    priceHalfKg: 240,
    image: "/Mocha.jpg"
  },
  {
    label: "EGGLESS SPONGE CAKE",
    name: "Venilla Cake",
    category: "Eggless Sponge",
    price1kg: 410,
    priceHalfKg: 230,
    image: "/Venilla.jpg"
  },
  {
    label: "EGGLESS SPONGE CAKE",
    name: "Carrot walnet cake",
    category: "Eggless Sponge",
    price1kg: 460,
    priceHalfKg: 260,
     priceHeartKg: 300,
  priceHeartHalfKg: 205,
    image: "/Carrot walnet.jpg"
  },

   // SUGAR & MAIDA FREE CAKE
  {
    label: "SUGAR & MAIDA FREE CAKE (Sponge)",
    name: "Whole Wheat Cake",
    
    price1kg: 430,
    priceHalfKg: 240,
    image: "/Whole Wheat Cake.jpg"
  },
  {
    label: "SUGAR & MAIDA FREE CAKE (Sponge)",
    name: "Banana Valnut Cake",
    
    price1kg: 460,
    priceHalfKg: 260,
    image: "/Banana Valnut.jpg"
  },
  {
    label: "SUGAR & MAIDA FREE CAKE (Sponge)",
    name: "Dates Cake",
    
    price1kg: 450,
    priceHalfKg: 250,
    image: "/Dates Cake.jpg"
  },
  {
    label: "SUGAR & MAIDA FREE CAKE (Sponge)",
    name: "Ragi Cake",
    
    price1kg: 440,
    priceHalfKg: 250,
    image: "/Ragi Cake.jpg"
  },

  // BROWNIES
  {
    label: "BROWNIE",
    name: "Plain BROWNIE ",
    category: "Brownie",
    priceEgg: 230,
  priceEggless: 260,
  priceGanache: 300,
  weight: "250g",
    image: "/Plain BROWNIE.png"
  },
  {
    label: "BROWNIE",
    name: "Chocochip BROWNIE ",
    category: "Brownie",
    priceEgg: 250,
  priceEggless: 280,
  priceGanache: 320,
  weight: "250g",
    image: "/Chocochip BROWNIE.png"
  },
  {
    label: "BROWNIE",
    name: "Nuts Brownie ",
    category: "Brownie",
    priceEgg: 280,
  priceEggless: 310,
  priceGanache: 350,
  weight: "250g",
    image: "/Nuts Brownie.jpg"
  },
  {
    label: "BROWNIE",
    name: "Double Chocolate Brownie ",
    category: "Brownie",
    priceEgg: 300,
  priceEggless: 330,
  priceGanache: 370,
  weight: "250g",
    image: "/Double Chocolate Brownie.png"
  },
   {
    label: "BROWNIE",
    name: "Blondie ",
    category: "Brownie",
    priceEgg: 300,
  priceEggless: 330,
  priceGanache: 370,
  weight: "250g",
    image: "/Blondie.jpg"
  },
  {
    label: "BROWNIE",
    name: "Wheat Brownie ",
    category: "Brownie",
    priceEgg: 250,
  priceEggless: 280,
  priceGanache: 320,
  weight: "250g",
    image: "/Wheat Brownie.jpg"
  },
  {
    label: "BROWNIE",
    name: "Ragi Brownie",
    category: "Brownie",
    priceEgg: 270,
  priceEggless: 300,
  priceGanache: 340,
  weight: "250g",
    image: "/Ragi Brownie.png"
  },
  // CUP CAKES
  {
  label: "CUP CAKES",
  name: "Vanilla Cup Cake ",
  category: "Eggless",
  quantity: "6 No.s",
  pricePlain: 120,
  priceFrosting: 210,
  image: "/Venilla cup.png"
},
  {
    label: "CUP CAKES",
    name: "Chocolate",
    category: "Eggless",
    quantity: "6 No.s",
  pricePlain: 120,
  priceFrosting: 210,
    image: "/Chocolate cup.png"
  },

  // COOKIES
  {
    label: "COOKIES",
    name: "Butter",
    category: "Cookie",
     priceEggless: 170,
     weight: "250g",
    image: "/Butter cookies.png"
  },
  {
    label: "COOKIES",
    name: "Wheat",
    category: "Cookie",
    priceEggless: 200,
     weight: "250g",
    image: "/Wheat cookies.jpg"
  },
  {
    label: "COOKIES",
    name: "Choco chip",
    category: "Cookie",
     priceEgg: 250,
     weight: "250g",
    image: "/Choco Chip.png"
  },
  

  // Muttai Mittai
  {
  label: "Sweet",
  name: "Muttai Mittai",
  category: "Cookie",
  price250g: 200,
  price500g: 400,
  weightOptions: ["250g", "500g"],
  image: "/Muttai Mittai.jpg"
}
];

export default cakes;
