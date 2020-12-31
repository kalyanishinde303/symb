import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerFiveComponent } from './container-five.component';

describe('ContainerFiveComponent', () => {
  let component: ContainerFiveComponent;
  let fixture: ComponentFixture<ContainerFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
