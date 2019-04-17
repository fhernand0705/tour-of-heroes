import { Component, OnInit } from '@angular/core';
import { House } from '../house';
import { HouseService } from '../house.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})

export class HousesComponent implements OnInit {
  houses: House[]; //defining houses property for template binding

  constructor(private houseService: HouseService) { }

  ngOnInit() {
    this.getHouses();
  }

  getHouses(): void {
    this.houseService.getHouses()
    .subscribe((houses: House[]) => this.houses = houses);
  }

}
