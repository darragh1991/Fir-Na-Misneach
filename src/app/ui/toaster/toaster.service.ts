import { Injectable, Signal, signal } from '@angular/core';
import { ToasterInfo } from './model/toaster-info.model';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  private promptToaster = signal(false);
  private toasterMessage = signal('');
  private toasterType = signal('');
  private readonly toasterDuration = 4000;

  renderToaster(toasterInfo: ToasterInfo): void {
    const { toasterMessage, promptToaster, toasterType } = toasterInfo;
    this.toasterMessage.set(toasterMessage);
    this.promptToaster.set(promptToaster);
    this.toasterType.set(toasterType);
    setTimeout(() => {
      this.promptToaster.set(false);
      this.toasterMessage.set('');
      this.toasterType.set('');
    }, this.toasterDuration);
  }

  getPromptToaster(): Signal<boolean> {
    return this.promptToaster.asReadonly();
  }

  getToasterMessage(): Signal<string> {
    return this.toasterMessage.asReadonly();
  }

  getToasterType(): Signal<string> {
    return this.toasterType.asReadonly();
  }
}
