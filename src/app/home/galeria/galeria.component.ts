import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NasaServiceService } from 'src/app/Services/nasa-service.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {
  JSONall: Object;

  constructor( private service: NasaServiceService,
     private ruta: ActivatedRoute ) { }

  ngOnInit(): void {
    this.ruta.params.subscribe( param => {
      const url: string = 'https://images-api.nasa.gov/search?q='+param['planet']+'&media_type=image';
      console.log(url);
      this.service.getApiData(url).subscribe(datos => {
        // console.log(datos['collection'].items); 
        this.JSONall = datos['collection'].items;
      });
    });

   
    
  }

}
