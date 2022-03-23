import {AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, OnInit, Type, ViewChild} from '@angular/core';
import {InsertionDirective} from './insertion.directive';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, AfterViewInit {

  childComponentType: Type<any>;
  componentRef: ComponentRef<any>;

  @ViewChild(InsertionDirective)
  insertionPoint: InsertionDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  onOverlayClicked(evt: MouseEvent) {
    // close the dialog
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation();
  }

  loadChildComponent(componentType: Type<any>) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    const viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
