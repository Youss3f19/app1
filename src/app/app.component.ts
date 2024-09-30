import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrainingListComponent } from "./training-list/training-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TrainingListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp4';
}
