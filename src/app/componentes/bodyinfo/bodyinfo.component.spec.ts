import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyinfoComponent } from './bodyinfo.component';

describe('BodyinfoComponent', () => {
  let component: BodyinfoComponent;
  let fixture: ComponentFixture<BodyinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
