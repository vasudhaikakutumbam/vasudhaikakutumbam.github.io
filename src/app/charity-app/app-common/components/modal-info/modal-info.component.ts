import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface ConfirmModel {
  title: string;
  messageParaOne: string;
  messageParaTwo: string;
  messageParaThree: string;
}

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css']
})
export class ModalInfoComponent extends DialogComponent<ConfirmModel, boolean> implements OnInit {
  title: string;
  messageParaOne: string;
  messageParaTwo: string;
  messageParaThree: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  ngOnInit() {
  }

  confirm() {
    this.close();
  }
}
