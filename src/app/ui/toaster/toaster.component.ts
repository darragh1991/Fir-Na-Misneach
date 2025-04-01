import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ToasterService } from './toaster.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToasterComponent {

  private readonly toasterService = inject(ToasterService);
  protected readonly promptToaster = this.toasterService.getPromptToaster();
  protected readonly toasterMessage = this.toasterService.getToasterMessage();
  protected readonly toasterType = this.toasterService.getToasterType();
}
