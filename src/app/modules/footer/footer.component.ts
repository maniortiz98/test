import { Component, OnInit } from '@angular/core';
import { Path } from '../../config'
import { CategoriesService } from "../../services/categories.service"


declare  var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  path = Path.url;
  objectkeys = Object.keys;
  categories:any = []
  categorieslist = [] 
  reander:Boolean = true
  constructor(private categoriesService:CategoriesService) { }

  ngOnInit(): void {

   

  }

  callback(){
    if (this.reander) {
      this.reander = false
      let array = []
      //console.log(this.reander);
      

    }
  }


}
