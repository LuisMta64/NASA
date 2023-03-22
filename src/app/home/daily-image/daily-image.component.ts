import { Component, OnInit } from '@angular/core';
import { NasaServiceService } from './../../Services/nasa-service.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-daily-image',
  templateUrl: './daily-image.component.html',
  styleUrls: ['./daily-image.component.scss']
})
export class DailyImageComponent implements OnInit {
  urlDailyImage: string = 'https://api.nasa.gov/planetary/apod?api_key=iqiaWquQGec3fedeY54HRY0CvOFsgcz1yRxMlHW9';
  
  explanation: string = '';
  date: string = '';
  urlMedia: SafeResourceUrl = '';
  title: string = '';
  mediaType: string = '';
  
  constructor( private service: NasaServiceService, private dom:DomSanitizer ) { }

  ngOnInit(): void {

    this.service.getApiData(this.urlDailyImage).subscribe(datos => {

      console.log(datos['media_type']);

      this.date = datos['date'];
      this.explanation = datos['explanation'];
      this.title = datos['title'];
      this.mediaType = datos['media_type'];

      if(datos['media_type'] != "image"){
        console.log(this.urlMedia);
        this.urlMedia = this.dom.bypassSecurityTrustResourceUrl(datos['url']); 
      }else{
        this.urlMedia = datos['url']; 
      }

      

    });
  }

}
