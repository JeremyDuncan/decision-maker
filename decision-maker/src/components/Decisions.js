import React, { Component } from 'react'
class Decisions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedType: "",
      selectedPlace: "",
      url: ""
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
    var links = [
      // Mexican
      [
        <a href="https://www.yelp.com/biz/la-pastorcita-atlanta">Visit Website</a>,
        <a href="https://www.eltesoroatl.com/">Visit Website</a>,
        <a href="https://www.nuevolaredocantina.com/">Visit Website</a>,
        <a href="https://www.tinlizzyscantina.com/">Visit Website</a>,
        <a href="https://ttatl.com/">Visit Website</a>,
        <a href="https://elreydeltacoatl.com/">Visit Website</a>
      ],
      // Chinese
      [
        <a href="https://www.lameiziatl.com/">Visit Website</a>,
        <a href="https://www.bigbosschinese.com/">Visit Website</a>,
        <a href="https://urbanwuga.com/">Visit Website</a>,
        <a href="https://grandchinaatl.com/">Visit Website</a>,
        <a href="https://chongqinghotpotga.com/">Visit Website</a>
      ],
      // Vietmanese
      [
        <a href="https://www.atlantaeats.com/restaurants/nam-phuong/">Visit Website</a>,
        <a href="https://www.yelp.com/biz/pho-dai-loi-2-atlanta">Visit Website</a>,
        <a href="https://www.ladyha.com/">Visit Website</a>,
        <a href="https://poorcalvins.com/">Visit Website</a>,
        <a href="https://leesbakeryatl.com/">Visit Website</a>,
        <a href="https://banhmiquochuong.com/">Visit Website</a>,
        <a href="https://pho24decatur.com/order-online/">Visit Website</a>,
        <a href="https://www.lefatatl.com/">Visit Website</a>
      ],
      // Thai
      [
        "https://26thai.com/",
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
    this.setState({url: this.state.url = links[randomChoice][index]})    
  }

  render() {
    return (
      <div id="decision-wrapper">
        <button onClick={() => { this.handleClick() }}>Press for Selection</button>

        <div id="display-output">
          <div className="selection genre">{this.state.selectedType}</div>
          <div className="selection">{this.state.selectedPlace}</div>
          <div className="selection">{this.state.url}</div>
        </div>

      </div>
    )
  }
}
export default Decisions;