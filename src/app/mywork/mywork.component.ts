import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss']
})
export class MyworkComponent implements OnInit {
  modelimg;
  modeltitle;
  constructor() { }

  ngOnInit() {
  }
  imagetomodel(frist,title){
  this.modelimg=frist.src;
  this.modeltitle=title;
  }
}
