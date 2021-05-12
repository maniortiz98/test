import { Component, OnInit } from '@angular/core';
import { Path } from '../../config'
import { CategoriesService } from "../../services/categories.service"


declare  var jQuery:any;
declare var $:any;
declare var Swal:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  path = Path.url;
  objectkeys = Object.keys;
  categories:any = [];
  arrayTitle:any =[];
  reander:Boolean = true 
  errors= [];
  

  constructor(private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getData().subscribe(resp=>{
      //console.log(resp);
      this.categories = resp;


      let rsp = Object.create(resp)

      let i;
      for(i in rsp){
        let par = rsp[i].title_list;
        this.arrayTitle.push(JSON.parse(par));
       //console.log(this.arrayTitle);
        //console.log(this.arrayTitle);
        
      }
      
    })

    let buton = document.getElementById('button')
    buton.addEventListener('click', () => {
      event.preventDefault()
      romper()
      
    })

    let buttoncel = document.getElementById('buttoncel')
    buttoncel.addEventListener('click', () => {
      event.preventDefault()
      romper()
      
    })

    let romper = function(){
     
        let caja = $('#caja');
        let cajacel = $('#cajacel');

        let nombrebuscae
        let uno = cajacel[0].value
        let dos = caja[0].value

        if (uno == "") {
          nombrebuscae = dos
        }else{
          nombrebuscae = uno
        }

        if (nombrebuscae == "") {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes introducir valores!',

        })
        }else{
          
          $("#catalogo").addClass("esconderpokemon");
          $("#resutPoket").removeClass("esconderpokemon");
          let p = document.getElementById('info')
          let xhttp = new XMLHttpRequest()
          xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${nombrebuscae}`)
          xhttp.send()
          xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                  let datoPokemon = JSON.parse(this.responseText)
                      $("#polemonbuscar").html(`

<style>
@media (min-width:1200px) {
        .bajotexto {
            display: none;
        }
    }
    @media (max-width:1199px) and (min-width:992px) {
        .bajotexto {
            display: none;
        }
    }
    @media (max-width:991px) and (min-width:768px) {
        .bajotexto {
            display: none;
        }
    }@media (max-width:767px) {
        .altotexto {
            display: none;
        }
    }
</style>
                      <div class="container p-5">
                      <div class="row ">
                          <div class="col-4 col-md-3">
                              <img src="${datoPokemon["sprites"]["other"].dream_world.front_default}" class="rounded float-left" alt="...">
                          </div>
                  
                          <div class="col-8 col-md-9">
                              <br>
                              <h5>${datoPokemon.name}</h5>
                              <a class="mr-20" style="background: #d8d8d8" href="#"> Manuel</a>
                              <p class="altotexto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio at, dicta ea dolorem aperiam molestiae ducimus? Tempora fugit officia magnam libero qui, illum debitis maiores minima sit voluptates molestiae.</p>
                          </div>
                          <div class="col-12 col-md-6">
                              <br>
                              <p class="bajotexto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore impedit fugiat soluta repellendus dicta rerum in rem obcaecati eos nostrum facere cumque, tenetur veritatis debitis magni, aperiam perspiciatis pariatur dolor!</p>
                          </div>
                      </div>
                      <br>
                      <div class="container">
                  
                          <div class="row">
                  
                              <div class="col-xl-4 col-lg-4 col-sm-4 col-4 ">
                                  <div class="ps-block--category" style="background: rgb(209, 209, 209);">
                                      <a class="ps-block__overlay" href="cardcolor"></a>
                                      <img style="width: 60%; " src="assets/img/insignias.png" alt="">
                                  </div>
                              </div>
                  
                              <div class="col-xl-4 col-lg-4 col-sm-4 col-4 ">
                                  <div class="ps-block--category" style="background: rgb(209, 209, 209);">
                                      <a class="ps-block__overlay" href="#"></a>
                                      <img style="width: 60%;" src="assets/img/pokebola1.png" alt="">
                                  </div>
                              </div>
                  
                              <div class="col-xl-4 col-lg-4 col-sm-4 col-4 ">
                                  <div class="ps-block--category" style="background: rgb(209, 209, 209);">
                                      <a class="ps-block__overlay" href="#"></a>
                                      <img style="width: 60%;" src="assets/img/huevo.png" alt="">
                                  </div>
                              </div>
                          </div>
                  
                      </div>
                      <br><br>
                      <h6>Stadistic</h6>
                      <div class="row">
                      <div class="col-xl-3 col-lg-3 col-sm-5 col-3 text-center">
                          <p class="">Hp</p>
                      </div>
                      <div class="col-xl-9 col-lg-9 col-sm-4 col-9 " style=" bottom: -6px;">
                            <div class="progress">
                            <div class="progress-bar" style="width:${datoPokemon.stats[0].base_stat}%;">${datoPokemon.stats[0].base_stat}%</div>
                              </div>
                      </div>
                      <div class="col-xl-3 col-lg-3 col-sm-5 col-3 text-center">
                          <p class="">Attack</p>
                      </div>
                      <div class="col-xl-9 col-lg-9 col-sm-4 col-9 " style=" bottom: -6px;">
                            <div class="progress">
                            <div class="progress-bar" style="width:${datoPokemon.stats[1].base_stat}%;">${datoPokemon.stats[1].base_stat}%</div>
                              </div>
                      </div>
                      <div class="col-xl-3 col-lg-3 col-sm-5 col-3 text-center">
                          <p class="">Defense</p>
                      </div>
                      <div class="col-xl-9 col-lg-9 col-sm-4 col-9 " style=" bottom: -6px;">
                            <div class="progress">
                            <div class="progress-bar" style="width:${datoPokemon.stats[2].base_stat}%;">${datoPokemon.stats[2].base_stat}%</div>
                              </div>
                      </div>
                      <div class="col-xl-3 col-lg-3 col-sm-5 col-3 text-center">
                          <p class="">Special-attack</p>
                      </div>
                      <div class="col-xl-9 col-lg-9 col-sm-4 col-9 " style=" bottom: -6px;">
                            <div class="progress">
                            <div class="progress-bar" style="width:${datoPokemon.stats[3].base_stat}%;">${datoPokemon.stats[3].base_stat}%</div>
                              </div>
                      </div>
                      <div class="col-xl-3 col-lg-3 col-sm-5 col-3 text-center">
                          <p class="">Special-defense</p>
                      </div>
                      <div class="col-xl-9 col-lg-9 col-sm-4 col-9 " style=" bottom: -6px;">
                            <div class="progress">
                            <div class="progress-bar" style="width:${datoPokemon.stats[4].base_stat}%;">${datoPokemon.stats[4].base_stat}%</div>
                              </div>
                      </div>
                      <div class="col-xl-3 col-lg-3 col-sm-5 col-3 text-center">
                          <p class="">speed</p>
                      </div>
                      <div class="col-xl-9 col-lg-9 col-sm-4 col-9 " style=" bottom: -6px;">
                            <div class="progress">
                            <div class="progress-bar" style="width:${datoPokemon.stats[5].base_stat}%;">${datoPokemon.stats[5].base_stat}%</div>
                              </div>
                      </div>
                      </div>
                  </div>
                `)
              }
          }
      }
        }
    
  }

  callback(){
    //let arraysubcategorias= [] 

    if(this.reander){

      let arraysubcategorias:any =[]
      this.reander = false
      
     

    }
  }
}
