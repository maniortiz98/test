import { Component, OnInit } from '@angular/core';
import { CategoriesService } from "../../../services/categories.service"
import { Path } from '../../../config'
import { ActivatedRoute } from '@angular/router';


declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  path = Path.url;
  image = [];
  name = ""
  constructor(private categoriesService:CategoriesService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {

    let params = this.activatedRoute.snapshot.params["param"]

    this.name = params.toUpperCase() 
    console.log(params);

    this.categoriesService.getDataPoketinformation(params).subscribe(resp=>{
      let getproduct = [];
      getproduct.push(resp)
      let image = getproduct[0].sprites.other.dream_world.front_default
      this.image = image



      let tipoPokemon = getproduct[0].types[0]["type"].name
      let abili = resp["abilities"][0].ability.name

      let array = []
      this.categoriesService.getDataPoketability(abili).subscribe(resp=>{
       
        resp["effect_entries"][0].effect
        
        array.push(resp["effect_entries"][0].effect)

        $("#infoability").html(`
        ${resp["effect_entries"][0].effect}
      `)

        
      })
 

    if (tipoPokemon == "fire") {
        $('.panel').addClass('fire');
    }else if(tipoPokemon == "grass"){
      $('.panel').addClass('grass');
    }
    else if(tipoPokemon == "electric"){
      $('.panel').addClass('electric');
    }
    else if(tipoPokemon == "water"){
      $('.panel').addClass('water');
    }
    else if(tipoPokemon == "ground"){
      $('.panel').addClass('ground');
    }
    else if(tipoPokemon == "rock"){
      $('.panel').addClass('rock');
    }
    else if(tipoPokemon == "fairy"){
      $('.panel').addClass('fairy');
    }
    else if(tipoPokemon == "poison"){
      $('.panel').addClass('poison');
    }
    else if(tipoPokemon == "bug"){
      $('.panel').addClass('bug');
    }
    else if(tipoPokemon == "dragon"){
      $('.panel').addClass('dragon');
    }
    else if(tipoPokemon == "psychic"){
      $('.panel').addClass('psychic');
    }
    else if(tipoPokemon == "flying"){
      $('.panel').addClass('flying');
    }
    else if(tipoPokemon == "fighting"){
      $('.panel').addClass('fighting');
    }
    else if(tipoPokemon == "normal"){
      $('.panel').addClass('normal');
    }else{
      alert("error")
    }
    


    
    $("#Abilidad").html(`
        ${resp["abilities"][0].ability.name}
      `)
      $("#AbilidadDos").html(`
      ${resp["abilities"][1].ability.name}
    `)
      $("#Tipo").html(`
      ${resp["types"][0].type.name}
    `)


      $("#hp").html(`
          <div class="progress-bar" style="width:${getproduct[0].stats[0].base_stat}%;">${getproduct[0].stats[0].base_stat}%</div>
      `)
      $("#Attack").html(`
          <div class="progress-bar" style="width:${getproduct[0].stats[1].base_stat}%;">${getproduct[0].stats[1].base_stat}%</div>
      `)
      $("#Defense").html(`
          <div class="progress-bar" style="width:${getproduct[0].stats[2].base_stat}%;">${getproduct[0].stats[2].base_stat}%</div>
      `)
      $("#Specialattack").html(`
          <div class="progress-bar" style="width:${getproduct[0].stats[3].base_stat}%;">${getproduct[0].stats[3].base_stat}%</div>
      `)
      $("#Specialdefense").html(`
          <div class="progress-bar" style="width:${getproduct[0].stats[4].base_stat}%;">${getproduct[0].stats[4].base_stat}%</div>
      `)
      $("#speed").html(`
          <div class="progress-bar" style="width:${getproduct[0].stats[5].base_stat}%;">${getproduct[0].stats[5].base_stat}%</div>
      `)
    })
  }

}
