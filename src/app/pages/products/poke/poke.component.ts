import { Component, OnInit } from '@angular/core';
import { CategoriesService } from "../../../services/categories.service"
import { Path } from '../../../config'

import { ActivatedRoute } from '@angular/router';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.css']
})
export class PokeComponent implements OnInit {

  path = Path.url;

  pokemon = [];
  name = [];
  image = [];



  constructor(private activatedRoute: ActivatedRoute,private categoriesService:CategoriesService) { }
  
  ngOnInit(): void {

    let params = this.activatedRoute.snapshot.params["params"]
    

    this.categoriesService.getDataPoketinformation(params).subscribe(resp=>{
      

      let getproduct = [];
      getproduct.push(resp)
      let name = getproduct[0].name
      let image = getproduct[0].sprites.other.dream_world.front_default
      this.name.push(name)
      this.image = image

      let abili = resp["abilities"][0].ability.name

      let array = []
      this.categoriesService.getDataPoketability(abili).subscribe(resp=>{
       
        resp["effect_entries"][0].effect
        
        array.push(resp["effect_entries"][0].effect)

        $(".abilityinfo").html(`
        ${resp["effect_entries"][0].effect}
      `)

        
      })
     
      

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
