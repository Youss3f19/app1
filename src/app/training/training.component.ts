import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [],
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})
export class TrainingComponent {
  @Input() name!: string;
  @Input( 'duration') nbr!: number;
    @Input() isFree!: boolean;
}
