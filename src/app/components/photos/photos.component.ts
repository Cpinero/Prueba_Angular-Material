import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/Photo';
import { PhotosService } from '../../services/photos.service';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  public photos:Photo[] =[];
  constructor(public photoService:PhotosService) { }

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(
      photos => {
        console.log(photos);
        this.photos = photos
      },
      err => console.log(err)
    )
  }

  click(){
    alert('works');
  }

}
