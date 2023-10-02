import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottiInEsposizioneComponent } from './prodotti-in-esposizione.component';

describe('ProdottiInEsposizioneComponent', () => {
  let component: ProdottiInEsposizioneComponent;
  let fixture: ComponentFixture<ProdottiInEsposizioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdottiInEsposizioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdottiInEsposizioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
