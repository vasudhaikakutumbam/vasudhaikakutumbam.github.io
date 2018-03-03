import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';

import { ModalInfoComponent } from '../../../app-common/components/modal-info/modal-info.component';

import { NeedsService } from '../../../services/needs.service';
import { Need } from '../../../services/need';

@Component({
  selector: 'causes-list',
  templateUrl: './causes-list.component.html',
  styleUrls: ['./causes-list.component.css']
})
export class CausesListComponent implements OnInit {

  needs: Need[];

  constructor(private dialogService: DialogService, private needsService: NeedsService) { }

  ngOnInit() {
    this.getCauses();
  }

  getCauses(): void {
    this.needsService.getNeeds().subscribe(causes => {this.needs = causes; console.log(this.needs);});
  }

  donate(need : Need){
    this.dialogService.addDialog(ModalInfoComponent, {
      title: need.name,
      // messageParaOne: 'Thanks for showing interest in donating for ' + need.name + ' cause.',
      messageParaTwo: need.details,
      messageParaThree: 'If you wish to contribute to this cause or if you know someone who can be benefitted by this cause, please contact us at ' + need.contact + '.'
    }, {closeByClickingOutside:true})
  }
}
