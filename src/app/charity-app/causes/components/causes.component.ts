import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: ['./causes.component.css']
})
export class CausesComponent implements OnInit {
  pageTitle:String = 'Our Causes';
  pageDescription:String = 'Together we can make a Difference';

  constructor() { }

  ngOnInit() {
  }

}
