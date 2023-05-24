import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographicInformationComponent } from './biographic-information.component';

describe('BiographicInformationComponent', () => {
  let component: BiographicInformationComponent;
  let fixture: ComponentFixture<BiographicInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiographicInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiographicInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
