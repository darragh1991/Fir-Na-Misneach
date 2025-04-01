import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  private promptToaster = signal(false);
  private toasterMessage = signal('');
  private toasterType = signal('');
  private readonly toasterDuration = 4000;

  renderToaster(toasterMessage: string, promptToaster: boolean, toasterType: string): void {
    this.toasterMessage.set(toasterMessage);
    this.promptToaster.set(promptToaster);
    this.toasterType.set(toasterType);
    setTimeout(() => {
      this.promptToaster.set(false);
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
