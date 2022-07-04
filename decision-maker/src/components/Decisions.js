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
        "Farm Burger",
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
        <a href="https://26thai.com/">Visit Website</a>,
        <a href="https://www.srithaikitchen.com/">Visit Website</a>,
        <a href="http://littlebangkokatlanta.com/">Visit Website</a>,
        <a href="https://bangkokstationthaifood.com/">Visit Website</a>,
        <a href="https://www.tuktukatl.com/">Visit Website</a>
      ],
      // Japanese
      [
        <a href="https://www.jinyaramenbar.com/">Visit Website</a>,
        <a href="https://eightsushiatl.com/">Visit Website</a>,
        <a href="https://shoya-izakaya.com/">Visit Website</a>,
        <a href="https://www.nakatorestaurant.com/">Visit Website</a>,
        <a href="https://umiatlanta.com/">Visit Website</a>,
        <a href="https://www.wagayaatlanta.com/">Visit Website</a>
      ],
      // Indian
      [
        <a href="https://desispiceindianatlanta.com/">Visit Website</a>,
        <a href="https://www.chaipanidecatur.com/">Visit Website</a>,
        <a href="https://www.purnimabangladeshi.com/">Visit Website</a>,
        <a href="https://zyka.com/">Visit Website</a>,
        <a href="https://cafebombayatlanta.com/">Visit Website</a>,
        <a href="http://www.mastiatlanta.com/">Visit Website</a>,
        <a href="https://tablaatlanta.com/">Visit Website</a>,
        <a href="https://www.aamarindianatlanta.com/">Visit Website</a>
      ],
      // Brewery
      [
        <a href="https://www.sweetwaterbrew.com/">Visit Website</a>,
        <a href="https://newrealmbrewing.com/">Visit Website</a>,
        <a href="https://hopstix.com/">Visit Website</a>,
        <a href="https://boldmonkbrewingco.com/">Visit Website</a>,
        <a href="https://www.theporterbeerbar.com/">Visit Website</a>,
        <a href="https://www.wreckingbarbrewpub.com/">Visit Website</a>,
        <a href="https://www.torchedhopbrewing.com/">Visit Website</a>,
        <a href="https://mondaynightbrewing.com/">Visit Website</a>
      ],
      // Italian
      [
        <a href="https://www.amalfiatl.com/">Visit Website</a>,
        <a href="https://pastadapulcinella.com/menu">Visit Website</a>,
        <a href="https://no246.com/">Visit Website</a>,
        <a href="https://www.sottosottoatl.com/">Visit Website</a>,
        <a href="http://boccalupoatl.com/">Visit Website</a>,
        <a href="https://mezzalunaga.com/">Visit Website</a>,
        <a href="http://argosy-east.com/">Visit Website</a>,
        <a href="https://www.ammazza.com/">Visit Website</a>,
        <a href="https://fellinisatlanta.com/">Visit Website</a>,
        <a href="https://littleitalia.com/">Visit Website</a>
      ],
      // American
      [
        <a href="http://atlantabreakfastclub.com/">Visit Website</a>,
        <a href="https://www.yelp.com/biz/sun-in-my-belly-atlanta-12">Visit Website</a>,
        <a href="https://www.leonsfullservice.com/">Visit Website</a>,
        <a href="https://farmburger.com/menu/">Visit Website</a>,
        <a href="https://www.folkartrestaurant.com/">Visit Website</a>
      ],
      // Mediterranean
      [
        <a href="https://www.avivabykameel.com/">Visit Website</a>,
        <a href="https://ameersmediterranean.com/">Visit Website</a>,
        <a href="https://www.barakashawarmaatl.com/">Visit Website</a>,
        <a href="https://www.delbaratl.com/">Visit Website</a>,
        <a href="https://sufisatlanta.com/">Visit Website</a>,
        <a href="https://www.nicksfood.com/">Visit Website</a>,
        <a href="https://www.yallaatl.com/">Visit Website</a>
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