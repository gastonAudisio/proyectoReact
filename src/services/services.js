const databaseItems = [
    {
        id: 1,
        title: "1984",
        category: "cienciaFiccion",
        stock: 3,
        imgurl:
          "/assets/img/1984.svg",
        price: 7500,
        detail: 2001,
        
      },
    
      {
        id: 3,
        title: "Arsene Lupin",
        category: "detectives",
        stock: 3,
        imgurl:
          "/assets/img/lupin.svg",
        price: 5000,
        detail: 2001,
        
      },
      {
        id: 4,
        title: "La Vuelta al Mundo en 80 Dias",
        category: "aventura",
        stock: 3,
        imgurl:
          "/assets/img/vuelta.svg",
        price: 4000,
        detail: 2001,
        
      },
      {
        id: 4,
        title: "El Libro de la Selva",
        category: "aventura",
        stock: 3,
        imgurl:
          "/assets/img/libro selva.svg",
        price: 4000,
        detail: 2000,
        
      },
   
]


export default function getItems() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(databaseItems);
    }, 1);
  });
}

export function getSingleItem(itemid) {
  
  let itemReq = databaseItems.find((item) => {
    
    return item.id === parseInt(itemid);
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (itemReq !== undefined) resolve(itemReq);
      else reject("Item no encontrado en la base de datos.");
    }, 200);
  });
}

export function getItemsByCategory(categoryid) {
  let itemsCat = databaseItems.filter((item) => item.category === categoryid);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(itemsCat);
    }, 200);
  });
}