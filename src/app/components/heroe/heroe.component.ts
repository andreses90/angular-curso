import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

heroe:any = {};
logoCompania:string;

  constructor(private activatedRoute: ActivatedRoute, private heroesService:HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      // console.log(params['id']);
      this.heroe = this.heroesService.getHeroe(params['id']);
      console.log(this.heroe);

    })
  }

  ngOnInit() {
    // this.setLogoCompania(this.heroe.casa);
  }

// setLogoCompania(casa:string){
// if(casa=='Marvel'){
//   this.logoCompania='assets/img/marvel-logo.png';
// }else{
//   this.logoCompania='assets/img/dc-logo.png';
// }

// }

}
