import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-header-picture',
  templateUrl: './header-picture.component.html',
  styleUrls: ['./header-picture.component.css']
})
export class HeaderPictureComponent implements OnInit {
  // This can and should be updated to be way more flexible, but for a personal site I don't really care
  imageLocation = "https://firebasestorage.googleapis.com/v0/b/ihsten-personal-site-backend.appspot.com/o/profile.jpg?alt=media&token="
  constructor() { }

  ngOnInit(): void {
    this.imageLocation += environment.FIREBASE_PROFILE_PICTURE_KEY
  }

}
