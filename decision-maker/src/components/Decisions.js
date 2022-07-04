import React, { Component } from 'react'
class Decisions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      choices: [
        "Mexican",
        "Chinese",
        "Vietmanese",
        "Thai",
        "Japanese",
        "Indian",
        "Brewery",
        "Italian",
        "American",
        "Mediterranean"
      ],
      mexican: [
        "La Pastorcita",
        "El Tesoro",
        "Nuevo Laredo Cantina",
        "Tin Lizzy's Cantina",
        "Tacos and Tequilas Mexican Grill",
        "El Rey Del Taco"
      ],
      chinese: [
        "La Mei Zi",
        "Big Boss",
        "Urban Wu",
        "Grand China Restaurant",
        "Chong Qing Hot Pot"
      ],
      vietmanese: [
        "Nam Phuong",
        "Pho Dai Loi 2",
        "Lady Ha",
        "Poor Calvin's",
        "Lee's Bakery",
        "Quồc Hương Bánh Mì Fast Food",
        "Pho 24",
        "Le Fat"
      ],
      thai: [
        "26 Thai Kitchen and Bar",
        "SriThai Thai Kitchen & Sushi Bar -Emory",
        "Little Bangkok",
        "Bangkok Station",
        "Tuk Tuk Thai Food Loft"
      ],
      japanese: [
        "JINYA Ramen Bar",
        "Eight Sushi Lounge",
        "Shoya Izakaya",
        "Nakato Japanese Restaurant",
        "Umi",
        "Wagaya"
      ],
      indian: [
        "Desie Spice",
        "Chai Pani",
        "Purnima Bangladeshi Cuisine",
        "Zyka",
        "Cafe Bombay",
        "Masti fun Indian Street Food",
        "Tabla",
        "Aamar Indian Cuisine"
      ],
      brewery: [
        "SweetWater Brewing Company",
        "New Realm Brewing",
        "Hopstix",
        "Bold Monk",
        "The Porter Beer Bar",
        "Wrecking Bar Brewpub",
        "Torched Hop Brewing",
        "Monday Night Brewing"
      ],
      italian: [
        "Amalfi Cucina & Mercato",
        "Pasta Da Pulcinella",
        "No. 246",
        "Sotto Sotto",
        "BoccaLupo",
        "Mezza Luna",
        "Argosy",
        "Ammazza",
        "Fellini’s Pizza",
        "Antico Pizza"
      ],
      american: [
        "Atlanta Breakfast Club",
        "Sun in My Belly",
        "Leon’s Full Service",
        "Argosy",
        "Folk Art Restaurant"
      ],
      mediterranean: [
        "Aviva by Kameel",
        "Ameer’s Mediterranean Grill",
        "Baraka Shawarma",
        "Delbar Middle Eastern",
        "Sufi’s",
        "Nick’s Food To Go",
        "Yalla"
      ]
    }
  }

  // Functions...
  handleClick = () => {
    var randomChoice = (Math.floor(Math.random() * this.state.choices.length))
    alert(randomChoice)
    //var randomRestaurant = (Math.floor(Math.random() * this.state.quote.length))


      
    
  }

  render() {
    return (
      <div>
        <h2>Decisions Component</h2>
        <button onClick={() => { this.handleClick() }}>Press Generate Random Selection</button>

      </div>
    )
  }
}
export default Decisions;