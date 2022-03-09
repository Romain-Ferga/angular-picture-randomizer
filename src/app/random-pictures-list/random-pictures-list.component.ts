import { Component, OnInit } from '@angular/core';
import { IRandomPicture } from '../interfaces/IRandomPicture';
import { mockRandomPictures } from '../mock-random-pictures';
import { RandomPicturesProviderService } from '../services/random-pictures-provider.service';

@Component({
  selector: 'app-random-pictures-list',
  templateUrl: './random-pictures-list.component.html',
  styleUrls: ['./random-pictures-list.component.css']
})
export class RandomPicturesListComponent implements OnInit {

  randomPicturesList:Array<IRandomPicture> = new Array<IRandomPicture>();

  constructor(private randomPicturesServices:RandomPicturesProviderService) { }

  ngOnInit(): void {

    this.randomPicturesServices.getRandomPictureList().subscribe(randomPicturesList => {

      this.randomPicturesList = randomPicturesList;

    });

  }

}
