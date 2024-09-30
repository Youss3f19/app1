import { Component, Input } from '@angular/core';
import { TrainingComponent } from "../training/training.component";

@Component({
  selector: 'app-training-list',
  standalone: true,
  imports: [TrainingComponent],
  templateUrl: './training-list.component.html',
  styleUrl: './training-list.component.css'
})
export class TrainingListComponent {
  trainings = [
    {name:'Introduction à Angular', nbDays: 3, isFree: false},
    {name:'Grid & Flexbox', nbDays: 3, isFree: true},
    {name:'Node JS avancé', nbDays: 4, isFree: false},
    {name:'HTML5 & CSS', nbDays: 2, isFree: true}
    ]
    
    
}
