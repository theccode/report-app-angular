import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VectaryViewerComponent } from './vectary-viewer.component';

describe('VectaryViewerComponent', () => {
  let component: VectaryViewerComponent;
  let fixture: ComponentFixture<VectaryViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VectaryViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VectaryViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
