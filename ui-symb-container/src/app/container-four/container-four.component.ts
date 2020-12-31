import { Component, OnInit } from '@angular/core';
import { ContainerFourService } from './container-four.service';

@Component({
  selector: 'app-container-four',
  templateUrl: './container-four.component.html',
  styleUrls: ['./container-four.component.css']
})
export class ContainerFourComponent implements OnInit {

  
  data: any ;
  constructor(private service : ContainerFourService) {
    this.data = this.service.getJSON();
 
   }

  ngOnInit() {
  }

}
