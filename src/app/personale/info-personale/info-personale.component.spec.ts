import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPersonaleComponent } from './info-personale.component';

describe('InfoPersonaleComponent', () => {
  let component: InfoPersonaleComponent;
  let fixture: ComponentFixture<InfoPersonaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPersonaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPersonaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
