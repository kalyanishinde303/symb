import { Component, OnInit } from '@angular/core';
import { ContainerTwoService } from './container-two.service';

@Component({
  selector: 'app-container-two',
  templateUrl: './container-two.component.html',
  styleUrls: ['./container-two.component.css']
})
export class ContainerTwoComponent implements OnInit {

  data: any ;
  constructor(private service : ContainerTwoService) {
    this.data = this.service.getJSON();
 
   }

  ngOnInit() {
  }


}
