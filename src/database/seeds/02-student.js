// const faker = require('faker');

// const fakeStudent = () => {
//   const dataRows = [];
//   for (var i = 0; i <= 2; i++) {
//     dataRows.push({
//       name: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       avatar: faker.image.avatar()
//     });
//   }
//   return dataRows;
// };

const fake = [
  {
    id: 1,
    name: "Aarón",
    lastName: "Landeros",
    avatar:
      "https://i1.wp.com/www.hsh.mx/wp-content/uploads/2016/09/default-user-img.jpg?ssl="
  },
  {
    id: 2,
    name: "Abel",
    lastName: "Hernández",
    avatar: "/img/Abel-Hernandez.jpg"
  },
  {
    id: 3,
    name: "Alexis",
    lastName: "Olveres",
    avatar: "/img/AlexisOlveres.jpeg"
  },
  {
    id: 4,
    name: "Benjamín",
    lastName: "Lezama",
    avatar: "/img/benjaminLezama.jpg"
  },
  {
    id: 5,
    name: "César",
    lastName: "Juárez",
    avatar: "/img/cesarJuarez.jpg"
  },
  {
    id: 6,
    name: "Christian",
    lastName: "Aguirre",
    avatar: "/img/Chrstian_Aguirre_Perez.jpg"
  },
  {
    id: 7,
    name: "Daniel",
    lastName: "Freeman",
    avatar: "/img/DanielFreeman.jpg"
  },
  {
    id: 8,
    name: "Diego",
    lastName: "Ortega",
    avatar: "/img/DiegoOrtega.png"
  },
  {
    id: 9,
    name: "José",
    lastName: "Zecua",
    avatar: "/img/JoseZecua.jpg"
  },
  {
    id: 10,
    name: "Julio",
    lastName: "Amador",
    avatar: "/img/julioAmador.jpg"
  },
  {
    id: 11,
    name: "Luis Vicente",
    lastName: "Tinoco",
    avatar: "/img/LuisVicenteTinoco.jpg"
  },
  {
    id: 12,
    name: "Marco",
    lastName: "Sandoval",
    avatar: `/img/Marco_Sandoval.jpg`
  },
  {
    id: 13,
    name: "Marco",
    lastName: "Zamora",
    avatar: "/img/marco_zamora.jpg"
  },
  {
    id: 14,
    name: "Sandy",
    lastName: "Mulato",
    avatar: "/img/sandy_mulato.jpeg"
  }
];
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("student")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("student").insert(fake);
    });
};
