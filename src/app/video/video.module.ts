import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { ManageComponent } from './manage/manage.component'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManageComponent,
    
  ],
  imports: [
    CommonModule,
    VideoRoutingModule,
    FormsModule,
    
  ]
})
export class VideoModule { }
