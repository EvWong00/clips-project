import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import IClip from 'src/app/models/clip.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  @Input() activeClip: IClip | null = null 
  
  constructor(private modal: ModalService) {

  }

  ngOnInit(): void {
      this.modal.register('editClip')
  }

  ngOnDestroy() {
      this.modal.unregister('editClip')
  }
}
