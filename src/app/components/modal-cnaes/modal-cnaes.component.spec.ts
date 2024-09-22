import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCnaesComponent } from './modal-cnaes.component';

describe('ModalCnaesComponent', () => {
  let component: ModalCnaesComponent;
  let fixture: ComponentFixture<ModalCnaesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCnaesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCnaesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
