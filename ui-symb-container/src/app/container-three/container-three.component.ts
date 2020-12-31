import { Component, OnInit } from '@angular/core';
import { ContainerThreeService } from './container-three.service';

@Component({
  selector: 'app-container-three',
  templateUrl: './container-three.component.html',
  styleUrls: ['./container-three.component.css']
})
export class ContainerThreeComponent implements OnInit {

  data: any ;
  constructor(private service : ContainerThreeService) {
    this.data = this.service.getJSON();
 
   }

  ngOnInit() {
  }


}
