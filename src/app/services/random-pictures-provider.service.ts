import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IRandomPicture } from '../interfaces/IRandomPicture';

@Injectable({
  providedIn: 'root'
})
export class RandomPicturesProviderService {

  randomPicturesList:Array<IRandomPicture> = new Array<IRandomPicture>();
  static idIncrement = 0;

  constructor() {

    this.addRandomPicture('https://picsum.photos/id/1084', '/367/267', 'Phoque you', 'Des phoques / des morses ? Qu\'en sais-je');
    this.addRandomPicture('https://picsum.photos/id/1062', '/367/267', 'Oba-san', 'Un bulldog français tout mignon');
    this.addRandomPicture('https://picsum.photos/id/611', '/367/267', 'Le lac des cygnes', 'Ils sont beaucoup ces batards, c\'est un signe !');
    this.addRandomPicture('https://picsum.photos/id/237', '/367/267', 'Black Labrador', 'N\'est il pas adorable');
    this.addRandomPicture('https://picsum.photos/id/718', '/367/267', 'WolfGang Amadeous', 'Le mozar des loups, cela dit, il n\'a pas l\'air très serein ton pote..');
    this.addRandomPicture('https://picsum.photos/id/593', '/367/267', 'Eye of the Tiger', 'Les pates croisés tel un CEO');

  }

  addRandomPicture(url:string, size:string, title:string, description:string){

    this.randomPicturesList.push({

      id: RandomPicturesProviderService.idIncrement, 
      url: url,
      size: size,
      title: title,
      description: description

    })

    RandomPicturesProviderService.idIncrement++;

  }

  getRandomPictureList(): Observable<IRandomPicture[]> {

    return of(this.randomPicturesList);

  }

}
