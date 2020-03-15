import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';// import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEdit , fas} from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movies = [];
  @Output() selectMovie = new EventEmitter();

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faEdit, faTrash);
   }

  ngOnInit(): void {
  }

  movieClicked(movie) {
    this.selectMovie.emit(movie)
  }

}
