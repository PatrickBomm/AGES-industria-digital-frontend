import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdvancedFiltersComponent } from './modal-advanced-filters.component';

describe('ModalAdvancedFiltersComponent', () => {
  let component: ModalAdvancedFiltersComponent;
  let fixture: ComponentFixture<ModalAdvancedFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAdvancedFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAdvancedFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
