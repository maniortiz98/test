import { Component, OnInit } from '@angular/core';
import { Path } from '../../../config'

declare var jQuery:any;
declare var $:any;
declare var Swal:any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  path = Path.url;
  card = []
  render = true;
  nose= []

  constructor() { }

  ngOnInit(): void {

    let poke_container = document.getElementById('poke_container');
    let pokemons_number = 100;
    let colors = {
        fire: '#ff8282',
        grass: '#92d091',
        electric: '#ffe356',
        water: '#92dcff',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#5bff7d',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#d4d4d4',
        fighting: '#E6E0D4',
        normal: '#F5F5F5'
    };
    let main_types = Object.keys(colors);

    let fetchPokemons = async() => {
        for (let i = 1; i <= pokemons_number; i++) {
            await getPokemon(i);
        }
    };

    let getPokemon = async id => {
        let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        let res = await fetch(url);
        let pokemon = await res.json();
        createPokemonCard(pokemon);
    };

    function createPokemonCard(pokemon) {
        let pokemonEl = document.createElement('div');
        pokemonEl.classList.add('pokemon');
       
    let poke_types = pokemon.types.map(type => type.type.name);
    let type = main_types.find(type => poke_types.indexOf(type) > -1);
    let name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    let color = colors[type];

        pokemonEl.style.backgroundColor = color;

        let pokeInnerHTML = `
        <style>
        h1 {
            letter-spacing: 3px;
        }
        
        .poke-container {
            
          display: flex;
          flex-wrap: wrap;
          align-items: space-between;
          justify-content: center;
          margin: 0 auto;
          max-width: 1200px;
        }
        
        .pokemon {
            background-color: #eee;
            border-radius: 5px;
            box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
            margin: 10px;
            padding: 20px;
            text-align: center;
            height: 299px;
        }
        
       .img-container {
        
      }
        
        .pokemon {
            background-color: rgba(255, 255, 255, 0.6);
            border-radius: 10%;
            width: 120px;
            height: 120px;
            text-align: center;
            height: 299px;
        }
        .pokemon  {
          margin-top: 20px;
          max-width: 90%;
      }
        
         .img-container img {
           
        }
        
        .pokemon .info {
            margin-top: 20px;
        }
        
        .pokemon .number {
            background-color: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            font-size: 0.8em;
            padding: 5px 10px;
        }
        
        .pokemon .name {
            margin: 15px 0 7px;
            letter-spacing: 1px;
        }
        /* SOCIAL PANEL CSS */
        
        .social-panel-container {
            position: fixed;
            right: 0;
            bottom: 80px;
            transform: translateX(100%);
            transition: transform 0.4s ease-in-out;
        }
        
        .social-panel-container.visible {
            transform: translateX(-10px);
        }
        
        .social-panel {
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 16px 31px -17px rgba(0, 31, 97, 0.6);
            border: 5px solid #001F61;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: 'Muli';
            position: relative;
            height: 169px;
            width: 370px;
            max-width: calc(100% - 10px);
        }
        
        .social-panel button.close-btn {
            border: 0;
            color: #97A5CE;
            cursor: pointer;
            font-size: 20px;
            position: absolute;
            top: 5px;
            right: 5px;
        }
        
        .social-panel button.close-btn:focus {
            outline: none;
        }
        
        .social-panel p {
            background-color: #001F61;
            border-radius: 0 0 10px 10px;
            color: #fff;
            font-size: 14px;
            line-height: 18px;
            padding: 2px 17px 6px;
            position: absolute;
            top: 0;
            left: 50%;
            margin: 0;
            transform: translateX(-50%);
            text-align: center;
            width: 235px;
        }
        
        .social-panel p i {
            margin: 0 5px;
        }
        
        .social-panel p a {
            color: #FF7500;
            text-decoration: none;
        }
        
        .social-panel h4 {
            margin: 20px 0;
            color: #97A5CE;
            font-family: 'Muli';
            font-size: 14px;
            line-height: 18px;
            text-transform: uppercase;
        }
        
        .social-panel ul {
            display: flex;
            list-style-type: none;
            padding: 0;
            margin: 0;
        }
        
        .social-panel ul li {
            margin: 0 10px;
        }
        
        .social-panel ul li a {
            border: 1px solid #DCE1F2;
            border-radius: 10%;
            color: #001F61;
            font-size: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;
            width: 50px;
            text-decoration: none;
        }
        
        .social-panel ul li a:hover {
            border-color: #FF6A00;
            box-shadow: 0 9px 12px -9px #FF6A00;
        }
        
        .floating-btn {
            border-radius: 5px;
            background-color: #001F61;
            border: 1px solid #001F61;
            box-shadow: 0 16px 22px -17px #03153B;
            color: #fff;
            cursor: pointer;
            font-size: 16px;
            line-height: 20px;
            padding: 12px 20px;
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 999;
        }
        
        .floating-btn:hover {
            background-color: #ffffff;
            color: #001F61;
        }
        
        .floating-btn:focus {
            outline: none;
        }
        
        .floating-text {
            background-color: #001F61;
            border-radius: 5px ;
            color: #fff;
            font-family: 'Muli';
            padding: 7px 15px;
            position: fixed;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
        }
        
        .floating-text a {
            color: #FF7500;
            text-decoration: none;
        }
        
        @media screen and (max-width: 480px) {
            .social-panel-container.visible {
                transform: translateX(0px);
            }
            .floating-btn {
                right: 10px;
            }
        }
    </style>
    
        <div class="">
            <br>
            <a href="detalle/${name.toLowerCase()}">
                <div class="contorno">
                    <br>
                    <div class="img-container  mx-auto pokeimage">
                    <img style="height: 30%;" class="card-img-top" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="Card image cap">
                    </div>
                    <div class=" text-center">
                        <br>
                        <span class="number">${pokemon.id
                          .toString()
                          .padStart(3, '0')}</span>

                        <h6 class="name image" >${name}</h6>
                        <small class="type">Type: <span>${type}</span></small>
                    </div>
                </div>
            </a>
          
        </div>
        <br>
    `;
        pokemonEl.innerHTML = pokeInnerHTML;

        poke_container.appendChild(pokemonEl);
    }

    fetchPokemons();


 
  

   
  }

}
