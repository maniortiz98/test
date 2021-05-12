import { Component, OnInit } from '@angular/core';
import { CategoriesService } from "../../../services/categories.service"
import { Path } from '../../../config'


declare var jQuery:any;
declare var $:any;
declare var Swal:any;



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  path = Path.url;

  card = [];

  render = true;
  contador = [];
  errors= [];

  constructor(private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getDataPoketcate().subscribe(resp=>{
      this.card = resp["results"]
     

      
      
      
    })
    this.categoriesService.getDataPoketinformation(290).subscribe(resp=>{

      
    })
    this.categoriesService.getDataPokedext().subscribe(resp=>{
    })


      let butoncerrar = document.getElementById('cerrarinfo')
      butoncerrar.addEventListener('click', () => {
        $("#resutPoket").addClass("esconderpokemon");
        $("#catalogo").removeClass("esconderpokemon");
      })

         
  }
  callback(){
    if (this.render) {
      this.render = false

      let image = $('.image');
      let pokeimage = $('.pokeimage');
      let num = $('.num');

      for (let i = 0; i < image.length; i++) {

        let vulueImage = image[i].attributes.poke.nodeValue
        let imagepoket = ""

     

        this.categoriesService.getDataPoketinformation(vulueImage).subscribe(resp=>{

          imagepoket =resp["sprites"]["other"].dream_world.front_default;
          $(num[i]).html(`
              <p class="card-text ">#${resp["id"]}</p>
          `)


          $(pokeimage[i]).append(`
                  <img style="height: 200px;" class="card-img-top" src="${imagepoket}" alt="Card image cap">
          `)
        },error=>{
          this.errors = error;
          
        })
      }
         
    
    }
  }
}
