import { Component, OnDestroy } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-modal-cnaes',
  standalone: true,
  imports: [ButtonModule, DialogModule],
  templateUrl: './modal-cnaes.component.html',
  styleUrl: './modal-cnaes.component.css'
})
export class ModalCnaesComponent  {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
