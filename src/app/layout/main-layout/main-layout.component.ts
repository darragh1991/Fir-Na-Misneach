import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ToasterComponent } from '../../ui/toaster/toaster.component';
@Component({
    selector: 'app-main-layout',
    imports: [RouterOutlet, RouterLink, ToasterComponent],
    standalone: true,
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
