import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-component-image',
  templateUrl: './component-image.component.html',
  styleUrls: ['./component-image.component.scss']
})
export class ComponentImageComponent implements OnInit {
  @Input() JSONimage: Object;
  urlImage: string;

  constructor(  ) { }

  ngOnInit(): void {
  }

}
