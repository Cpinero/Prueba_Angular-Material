import { Component } from '@angular/core';
import { PhotosService } from './services/photos.service';
import { Photo } from './models/Photo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  public albumsId = [1,2,3];
  constructor(public photoService:PhotosService){}


}
