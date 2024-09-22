import { Component, OnDestroy } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { StepperModule } from 'primeng/stepper';
import { Divisao } from '../../interfaces/divisao';
import { divisaoMock } from '../../mocks/divisoesMock';

@Component({
  selector: 'app-modal-cnaes',
  standalone: true,
  imports: [ButtonModule, DialogModule, StepperModule],
  templateUrl: './modal-cnaes.component.html',
  styleUrl: './modal-cnaes.component.css'
})
export class ModalCnaesComponent  {
  divisoes: Divisao[] = divisaoMock;

  divisoesString = this.divisoes.reduce((accumulator, divisao) => {
    return accumulator + divisao.nome + ', ';
  }, '').slice(0, -2)

  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
