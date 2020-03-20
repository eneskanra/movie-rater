import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';// import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFilm);
   }
}
