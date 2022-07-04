import React, { Component } from 'react'
class Decisions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedType: "",
      selectedPlace: ""
    }
  }

  handleClick = () => {
    var choices = [
      "Mexican 🌮",
      "Chinese 🥡",
      "Vietmanese 🍜",
      "Thai 🍛",
      "Japanese 🍱",
      "Indian 🥘",
      "Brewery 🍻",
      "Italian 🍕",
      "American 🍔",
      "Mediterranean 🥙"
    ]

    var places = [
      // Mexican
      [
        "La Pastorcita",
        "El Tesoro",
        "Nuevo Laredo Cantina",
        "Tin Lizzy's Cantina",
        "Tacos and Tequilas Mexican Grill",
        "El Rey Del Taco"
      ],
      // Chinese
      [
        "La Mei Zi",
        "Big Boss",
        "Urban Wu",
        "Grand China Restaurant",
        "Chong Qing Hot Pot"
      ],
      // Vietmanese
      [
        "Nam Phuong",
        "Pho Dai Loi 2",
        "Lady Ha",
        "Poor Calvin's",
        "Lee's Bakery",
        "Quồc Hương Bánh Mì Fast Food",
        "Pho 24",
        "Le Fat"
      ],
      // Thai
      [
        "26 Thai Kitchen and Bar",
        "SriThai Thai Kitchen & Sushi Bar -Emory",
        "Little Bangkok",
        "Bangkok Station",
        "Tuk Tuk Thai Food Loft"
      ],
      // Japanese
      [
        "JINYA Ramen Bar",
        "Eight Sushi Lounge",
        "Shoya Izakaya",
        "Nakato Japanese Restaurant",
        "Umi",
        "Wagaya"
      ],
      // Indian
      [
        "Desie Spice",
        "Chai Pani",
        "Purnima Bangladeshi Cuisine",
        "Zyka",
        "Cafe Bombay",
        "Masti fun Indian Street Food",
        "Tabla",
        "Aamar Indian Cuisine"
      ],
      // Brewery
      [
        "SweetWater Brewing Company",
        "New Realm Brewing",
        "Hopstix",
        "Bold Monk",
        "The Porter Beer Bar",
        "Wrecking Bar Brewpub",
        "Torched Hop Brewing",
        "Monday Night Brewing"
      ],
      // Italian
      [
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
      // American
      [
        "Atlanta Breakfast Club",
        "Sun in My Belly",
        "Leon’s Full Service",
        "Argosy",
        "Folk Art Restaurant"
      ],
      // Mediterranean
      [
        "Aviva by Kameel",
        "Ameer’s Mediterranean Grill",
        "Baraka Shawarma",
        "Delbar Middle Eastern",
        "Sufi’s",
        "Nick’s Food To Go",
        "Yalla"
      ]
    ]

    var randomChoice = (Math.floor(Math.random() * choices.length))
    var index = (Math.floor(Math.random() * places[randomChoice].length))

    this.setState({selectedType: this.state.selectedType = choices[randomChoice]})
    this.setState({selectedPlace: this.state.selectedType = places[randomChoice][index]})    
  }

  render() {
    return (
      <div id="decision-wrapper">
        <button onClick={() => { this.handleClick() }}>Press for Selection</button>
        <div className="selection genre">{this.state.selectedType}</div>
        <div className="selection">{this.state.selectedPlace}</div>

      </div>
    )
  }
}
export default Decisions;