import { Component, OnInit } from '@angular/core';
import { ContainerOneService } from './container-one.service';


@Component({
  selector: 'app-container-one',
  templateUrl: './container-one.component.html',
  styleUrls: ['./container-one.component.css']
})
export class ContainerOneComponent implements OnInit {

  data: any ;
  constructor(private service : ContainerOneService) {
    this.data = this.service.getJSON();
  console.log(this.data);
   }

  ngOnInit() {
  }

}
