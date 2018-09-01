import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionTestingComponent } from './collection-testing.component';

describe('CollectionTestingComponent', () => {
  let component: CollectionTestingComponent;
  let fixture: ComponentFixture<CollectionTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
