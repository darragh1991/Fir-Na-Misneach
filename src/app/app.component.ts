
import { Component, ChangeDetectionStrategy } from '@angular/core';
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
