import React from 'react'
import Card from './Card'

const burgers = [
  {
    img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Classic Burger",
    price: 149,
    intro: "Juicy beef patty with fresh lettuce, tomato, and cheese.",
    // tag:0,
    
  },
  {
    img: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNoZWVzZWJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Cheese Burger",
    price: 179,
    intro: "Loaded with double cheese and grilled  patty.",
    // tag:0,
    
  },
  {
    img: "https://images.unsplash.com/photo-1651993841930-946a700c1524?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNoaWNrZW4lMjBidXJnZXJ8ZW58MHx8MHx8fDA%3D",
    name: "Chicken Burger",
    price: 169,
    intro: "Crispy chicken fillet with mayo and lettuce.",
    // tag:0,
    
  },
  {
    img: "https://images.unsplash.com/photo-1563551342926-21cc8d785013?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzA2fHx2ZWclMjBidXJnZXJ8ZW58MHx8MHx8fDA%3D",
    name: "Veg Burger",
    price: 129,
    intro: "Crunchy vegetable patty with fresh veggies.",
    // tag:0,
    
  },
  {
    img: "https://images.unsplash.com/photo-1625711398265-c8c83d1ee959?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGJicSUyMGJ1cmdlciUzQVNtb2t5JTIwQkJRJTIwc2F1Y2UlMjB3aXRoJTIwZ3JpbGxlZCUyMHBhdHR5JTIwYW5kJTIwb25pb25zfGVufDB8fDB8fHww",
    name: "BBQ Burger",
    price: 199,
    intro: "Smoky BBQ sauce with grilled patty and onions.",
    // tag:0,
    
  },
  {
    img: "https://images.unsplash.com/photo-1713636342682-fd6f2c7eb1cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNwaWN5JTIwYnVyZ2VySG90JTIwYW5kJTIwc3BpY3klMjBidXJnZXIlMjB3aXRoJTIwamFsYXBlJUMzJUIxb3MlMjBhbmQlMjBzcGljeSUyMHNhdWNlLnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Spicy Burger",
    price: 189,
    intro: "Hot and spicy burger with jalapeños and spicy sauce.",
    // tag:0,
    
  },
  {
    img: "https://images.unsplash.com/photo-1683882330182-eb8f64d7231c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaHJvb20lMjBidXJnZXIlMjBDcmVhbXklMjBtdXNocm9vbSUyMHNhdWNlJTIwd2l0aCUyMG1lbHRlZCUyMGNoZWVzZS58ZW58MHx8MHx8fDA%3D",
    name: "Mush Melt",
    price: 209,
    intro: "Creamy mushroom sauce with melted cheese.",
    // tag:0,
    
  },
  {
    img: "https://images.unsplash.com/photo-1599155253646-7989e08c05c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvdWJsZSUyMHBhdHR5JTIwYnVyZ2VyfGVufDB8fDB8fHww",
    name: "Patty Burger",
    price: 249,
    intro: "Two juicy patties with extra cheese and veggies.",
    // tag:0,
    
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Crispy  Burger",
    price: 189,
    intro: "Extra crispy chicken with crunchy lettuce.",
    // tag:0,
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1668202962176-4c2e68743def?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJhY29uJTIwYnVyZ2VyfGVufDB8fDB8fHww",
    name: "Bacon Burger",
    price: 269,
    intro: "Beef patty topped with crispy bacon and cheddar.",
    // tag:0,
    
  },
];


const App = () => {
  return (
    <div className="h-full w-full bg-gray-150 p-3 flex gap-15 flex-wrap">
      {burgers.map((elem)=>
       <Card img={elem.img} name={elem.name} price={elem.price} intro={elem.intro} tag={elem.tag}/>)}
    </div>
  )
}

export default App