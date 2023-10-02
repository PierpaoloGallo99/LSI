import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfezioniMagazzinoComponent } from './confezioni-magazzino.component';

describe('ConfezioniMagazzinoComponent', () => {
  let component: ConfezioniMagazzinoComponent;
  let fixture: ComponentFixture<ConfezioniMagazzinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfezioniMagazzinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfezioniMagazzinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
