import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

import { AppInitService } from './core/services/app-init.service';
import { Component, inject, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";

@Component({
  selector: 'app-root',
  imports: [MainLayoutComponent],
  standalone: true,
  template: `<app-main-layout />`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

}
