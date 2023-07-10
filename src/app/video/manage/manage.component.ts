import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  videoOrder: string = '';
  clips: any[] = [];
  
  openModal(event: Event, clip: any) {
    // Implementation of the openModal method
  }

  deleteClip(event: Event, clip: any) {
    // Implementation of the deleteClip method
  }

  constructor(private router: Router) {}

  sort(event: any) {
    // Sorting logic
  }

  copyToClipboard(event: Event, docID: string) {
    // Copy logic
  }
}
