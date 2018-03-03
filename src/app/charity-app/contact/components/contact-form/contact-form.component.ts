import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';
import { ModalInfoComponent } from "../../../app-common/components/modal-info/modal-info.component";

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  firstName: String;
  email: String;
  message: String;

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
  }

  postMessage(contactForm: any) {
    if(contactForm.valid){
      this.dialogService.addDialog(ModalInfoComponent, {
        title: 'Message sent successfully',
        messageParaOne: 'Thanks for your message.',
        messageParaTwo: 'We will get back to you shortly.'
      }, {closeByClickingOutside:true});
      console.log(this.firstName + "|" + this.email + "|" + this.message);
      contactForm.resetForm();
    }
  }
}
