import { Component, OnInit, Input} from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  faStar = faStar;
  @Input() movie;

  constructor() { }

  ngOnInit(): void {
  }

}
