import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const heroes = [
      { id: 11, name: 'Arya' },
      { id: 12, name: 'Sansa' },
      { id: 13, name: 'Jon' },
      { id: 14, name: 'Khaleesi' },
      { id: 15, name: 'Samwell' },
      { id: 16, name: 'Brienne' },
      { id: 17, name: 'Sir Davoss' },
      { id: 18, name: 'Brandon' },
      { id: 19, name: 'Tyrion' },
      { id: 20, name: 'Jamie' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
