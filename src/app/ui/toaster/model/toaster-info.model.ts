export interface ToasterInfo {
  toasterMessage: string,
  promptToaster: boolean,
  toasterType: 'warning' | 'danger' | 'success' | 'info';
}
