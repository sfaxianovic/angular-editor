import { NgModule } from '@angular/core';
import { AngularEditorComponent } from './angular-editor.component';
import { AngularEditorToolbarComponent } from './angular-editor-toolbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AeSelectComponent } from './ae-select/ae-select.component';
export class AngularEditorModule {
}
AngularEditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule, FormsModule, ReactiveFormsModule
                ],
                declarations: [AngularEditorComponent, AngularEditorToolbarComponent, AeSelectComponent],
                exports: [AngularEditorComponent, AngularEditorToolbarComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1lZGl0b3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IkM6L3BsYXRhbmEtcHJvamVjdC9hbmd1bGFyLWVkaXRvci1zZngvcHJvamVjdHMvYW5ndWxhci1lZGl0b3Ivc3JjLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItZWRpdG9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBQyw2QkFBNkIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFTcEUsTUFBTSxPQUFPLG1CQUFtQjs7O1lBUC9CLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUI7aUJBQy9DO2dCQUNELFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLDZCQUE2QixFQUFFLGlCQUFpQixDQUFDO2dCQUN4RixPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSw2QkFBNkIsQ0FBQzthQUNqRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FuZ3VsYXJFZGl0b3JDb21wb25lbnR9IGZyb20gJy4vYW5ndWxhci1lZGl0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHtBbmd1bGFyRWRpdG9yVG9vbGJhckNvbXBvbmVudH0gZnJvbSAnLi9hbmd1bGFyLWVkaXRvci10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFlU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9hZS1zZWxlY3QvYWUtc2VsZWN0LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0FuZ3VsYXJFZGl0b3JDb21wb25lbnQsIEFuZ3VsYXJFZGl0b3JUb29sYmFyQ29tcG9uZW50LCBBZVNlbGVjdENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0FuZ3VsYXJFZGl0b3JDb21wb25lbnQsIEFuZ3VsYXJFZGl0b3JUb29sYmFyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhckVkaXRvck1vZHVsZSB7XHJcbn1cclxuIl19