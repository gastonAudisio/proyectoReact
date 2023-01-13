const databaseItems = [
    {
        id: 1,
        title: "1984",
        category: "Suspenso",
        stock: 3,
        imgurl:
          "/assets/img/1984.svg",
        price: 7500,
        detail: 2001,
      },
    
      {
        id: 3,
        title: "Arsene Lupin",
        category: "Suspenso",
        stock: 3,
        imgurl:
          "/assets/img/lupin.svg",
        price: 5000,
        detail: 2001,
      },
      {
        id: 4,
        title: "La Vuelta al Mundo en 80 Dias",
        category: "Suspenso",
        stock: 3,
        imgurl:
          "/assets/img/vuelta.svg",
        price: 4000,
        detail: 2001,
      },
      {
        id: 4,
        title: "El Libro de la Selva",
        category: "Suspenso",
        stock: 3,
        imgurl:
          "/assets/img/libro selva.svg",
        price: 4000,
        detail: 2001,
      },
   
]

function getItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(databaseItems);
      }, 2000);
    });
  }
  
  export function getSingleItem() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(databaseItems[0]);
      }, 2000);
    });
  }

  export default getItems;