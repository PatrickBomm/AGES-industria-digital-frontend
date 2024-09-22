import { Component, Input } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-modal-advanced-filters',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  templateUrl: './modal-advanced-filters.component.html',
  styleUrl: './modal-advanced-filters.component.css'
})
export class ModalAdvancedFiltersComponent {
  @Input() open: boolean = false;
}
