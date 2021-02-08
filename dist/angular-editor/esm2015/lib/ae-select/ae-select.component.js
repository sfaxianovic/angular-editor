var AeSelectComponent_1;
import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Input, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isDefined } from '../utils';
let AeSelectComponent = AeSelectComponent_1 = class AeSelectComponent {
    constructor(elRef, r) {
        this.elRef = elRef;
        this.r = r;
        this.options = [];
        this.disabled = false;
        this.optionId = 0;
        this.opened = false;
        this.hidden = 'inline-block';
        // tslint:disable-next-line:no-output-native no-output-rename
        this.changeEvent = new EventEmitter();
        this.onChange = () => {
        };
        this.onTouched = () => {
        };
    }
    get label() {
        return this.selectedOption && this.selectedOption.hasOwnProperty('label') ? this.selectedOption.label : 'Select';
    }
    get value() {
        return this.selectedOption.value;
    }
    ngOnInit() {
        this.selectedOption = this.options[0];
        if (isDefined(this.isHidden) && this.isHidden) {
            this.hide();
        }
    }
    hide() {
        this.hidden = 'none';
    }
    optionSelect(option, event) {
        event.stopPropagation();
        this.setValue(option.value);
        this.onChange(this.selectedOption.value);
        this.changeEvent.emit(this.selectedOption.value);
        this.onTouched();
        this.opened = false;
    }
    toggleOpen(event) {
        // event.stopPropagation();
        if (this.disabled) {
            return;
        }
        this.opened = !this.opened;
    }
    onClick($event) {
        if (!this.elRef.nativeElement.contains($event.target)) {
            this.close();
        }
    }
    close() {
        this.opened = false;
    }
    get isOpen() {
        return this.opened;
    }
    writeValue(value) {
        if (!value || typeof value !== 'string') {
            return;
        }
        this.setValue(value);
    }
    setValue(value) {
        let index = 0;
        const selectedEl = this.options.find((el, i) => {
            index = i;
            return el.value === value;
        });
        if (selectedEl) {
            this.selectedOption = selectedEl;
            this.optionId = index;
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.labelButton.nativeElement.disabled = isDisabled;
        const div = this.labelButton.nativeElement;
        const action = isDisabled ? 'addClass' : 'removeClass';
        this.r[action](div, 'disabled');
        this.disabled = isDisabled;
    }
    handleKeyDown($event) {
        if (!this.opened) {
            return;
        }
        // console.log($event.key);
        // if (KeyCode[$event.key]) {
        switch ($event.key) {
            case 'ArrowDown':
                this._handleArrowDown($event);
                break;
            case 'ArrowUp':
                this._handleArrowUp($event);
                break;
            case 'Space':
                this._handleSpace($event);
                break;
            case 'Enter':
                this._handleEnter($event);
                break;
            case 'Tab':
                this._handleTab($event);
                break;
            case 'Escape':
                this.close();
                $event.preventDefault();
                break;
            case 'Backspace':
                this._handleBackspace();
                break;
        }
        // } else if ($event.key && $event.key.length === 1) {
        // this._keyPress$.next($event.key.toLocaleLowerCase());
        // }
    }
    _handleArrowDown($event) {
        if (this.optionId < this.options.length - 1) {
            this.optionId++;
        }
    }
    _handleArrowUp($event) {
        if (this.optionId >= 1) {
            this.optionId--;
        }
    }
    _handleSpace($event) {
    }
    _handleEnter($event) {
        this.optionSelect(this.options[this.optionId], $event);
    }
    _handleTab($event) {
    }
    _handleBackspace() {
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], AeSelectComponent.prototype, "options", void 0);
__decorate([
    Input('hidden'),
    __metadata("design:type", Boolean)
], AeSelectComponent.prototype, "isHidden", void 0);
__decorate([
    HostBinding('style.display'),
    __metadata("design:type", Object)
], AeSelectComponent.prototype, "hidden", void 0);
__decorate([
    Output('change'),
    __metadata("design:type", Object)
], AeSelectComponent.prototype, "changeEvent", void 0);
__decorate([
    ViewChild('labelButton', { static: true }),
    __metadata("design:type", ElementRef)
], AeSelectComponent.prototype, "labelButton", void 0);
__decorate([
    HostListener('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], AeSelectComponent.prototype, "onClick", null);
__decorate([
    HostListener('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], AeSelectComponent.prototype, "handleKeyDown", null);
AeSelectComponent = AeSelectComponent_1 = __decorate([
    Component({
        selector: 'ae-select',
        template: "<span class=\"ae-font ae-picker\" [ngClass]=\"{'ae-expanded':isOpen}\">\r\n  <button [tabIndex]=\"-1\" #labelButton tabindex=\"0\" type=\"button\" role=\"button\" class=\"ae-picker-label\" (click)=\"toggleOpen($event);\">{{label}}\r\n    <svg viewBox=\"0 0 18 18\">\r\n     <!-- <use x=\"0\" y=\"0\" xlink:href=\"../assets/icons.svg#hom\"></use>-->\r\n      <polygon class=\"ae-stroke\" points=\"7 11 9 13 11 11 7 11\"></polygon>\r\n      <polygon class=\"ae-stroke\" points=\"7 7 9 5 11 7 7 7\"></polygon>\r\n    </svg>\r\n  </button>\r\n  <span class=\"ae-picker-options\">\r\n    <button tabindex=\"-1\" type=\"button\" role=\"button\" class=\"ae-picker-item\"\r\n          *ngFor=\"let item of options; let i = index\"\r\n          [ngClass]=\"{'selected': item.value === value, 'focused': i === optionId}\"\r\n          (click)=\"optionSelect(item, $event)\">\r\n          {{item.label}}\r\n    </button>\r\n    <span class=\"dropdown-item\" *ngIf=\"!options.length\">No items for select</span>\r\n  </span>\r\n</span>\r\n",
        encapsulation: ViewEncapsulation.None,
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => AeSelectComponent_1),
                multi: true,
            }
        ],
        styles: [".ae-font.ae-picker{color:#444}.ae-font.ae-picker,.ae-font .ae-picker-label{display:inline-block;float:left;position:relative;vertical-align:middle;width:100%}.ae-font .ae-picker-label{background-color:#fff;border:1px solid #ddd;cursor:pointer;font-size:85%;height:100%;line-height:26px;min-width:2rem;overflow:hidden;padding-left:8px;padding-right:10px;text-align:left;text-overflow:clip;white-space:nowrap}.ae-font .ae-picker-label:before{background:linear-gradient(90deg,#fff,#fff);content:\"\";height:100%;position:absolute;right:0;top:0;width:20px}.ae-font .ae-picker-label:focus{outline:none}.ae-font .ae-picker-label:hover{background-color:#f1f1f1;cursor:pointer;transition:.2s ease}.ae-font .ae-picker-label:hover:before{background:linear-gradient(90deg,#f5f5f5 100%,#fff 0)}.ae-font .ae-picker-label:disabled{background-color:#f5f5f5;cursor:not-allowed;pointer-events:none}.ae-font .ae-picker-label:disabled:before{background:linear-gradient(90deg,#f5f5f5 100%,#fff 0)}.ae-font .ae-picker-label svg{margin-top:-9px;position:absolute;right:0;top:50%;width:18px}.ae-font .ae-picker-label svg:not(:root){overflow:hidden}.ae-font .ae-picker-label svg .ae-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ae-font .ae-picker-options{background-color:#fff;border:1px solid transparent;box-shadow:0 2px 8px rgba(0,0,0,.2);display:none;min-width:100%;position:absolute;white-space:nowrap;z-index:3}.ae-font .ae-picker-options .ae-picker-item{background-color:transparent;border:0 solid #ddd;cursor:pointer;display:block;min-width:2rem;padding-bottom:5px;padding-left:5px;padding-top:5px;text-align:left;width:100%;z-index:3}.ae-font .ae-picker-options .ae-picker-item.selected{background-color:#fff4c2;color:#06c}.ae-font .ae-picker-options .ae-picker-item.focused,.ae-font .ae-picker-options .ae-picker-item:hover{background-color:#fffa98}.ae-font.ae-expanded{display:block;margin-top:-1px;z-index:1}.ae-font.ae-expanded .ae-picker-label,.ae-font.ae-expanded .ae-picker-label svg{color:#ccc;z-index:2}.ae-font.ae-expanded .ae-picker-label svg .ae-stroke{stroke:#ccc}.ae-font.ae-expanded .ae-picker-options{border-color:#ccc;display:block;margin-top:-1px;top:100%;z-index:3}"]
    }),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2])
], AeSelectComponent);
export { AeSelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWUtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJDOi9wbGF0YW5hLXByb2plY3QvYW5ndWxhci1lZGl0b3Itc2Z4L3Byb2plY3RzL2FuZ3VsYXItZWRpdG9yL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9hZS1zZWxlY3QvYWUtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQUUsV0FBVyxFQUN2QixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXVCLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQW9CbkMsSUFBYSxpQkFBaUIseUJBQTlCLE1BQWEsaUJBQWlCO0lBMEI1QixZQUFvQixLQUFpQixFQUNqQixDQUFZO1FBRFosVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixNQUFDLEdBQUQsQ0FBQyxDQUFXO1FBMUJ2QixZQUFPLEdBQW1CLEVBQUUsQ0FBQztRQUt0QyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFNYixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBTWUsV0FBTSxHQUFHLGNBQWMsQ0FBQztRQUV0RCw2REFBNkQ7UUFDM0MsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBc0VuRCxhQUFRLEdBQVEsR0FBRyxFQUFFO1FBQ3JCLENBQUMsQ0FBQTtRQUNELGNBQVMsR0FBUSxHQUFHLEVBQUU7UUFDdEIsQ0FBQyxDQUFBO0lBbkVFLENBQUM7SUFuQkosSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxD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QztRQUV6QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtRQUNyQyxTQUFTLEVBQUU7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFpQixDQUFDO2dCQUNoRCxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7O0tBQ0YsQ0FBQztxQ0EyQjJCLFVBQVU7UUFDZCxTQUFTO0dBM0JyQixpQkFBaUIsQ0FnTDdCO1NBaExZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQXR0cmlidXRlLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLCBIb3N0QmluZGluZyxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7aXNEZWZpbmVkfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdE9wdGlvbiB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICB2YWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FlLXNlbGVjdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FlLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWUtc2VsZWN0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEFlU2VsZWN0Q29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWVTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICBASW5wdXQoKSBvcHRpb25zOiBTZWxlY3RPcHRpb25bXSA9IFtdO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcclxuICBASW5wdXQoJ2hpZGRlbicpIGlzSGlkZGVuOiBib29sZWFuO1xyXG5cclxuICBzZWxlY3RlZE9wdGlvbjogU2VsZWN0T3B0aW9uO1xyXG4gIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgb3B0aW9uSWQgPSAwO1xyXG5cclxuICBnZXQgbGFiZWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkT3B0aW9uICYmIHRoaXMuc2VsZWN0ZWRPcHRpb24uaGFzT3duUHJvcGVydHkoJ2xhYmVsJykgPyB0aGlzLnNlbGVjdGVkT3B0aW9uLmxhYmVsIDogJ1NlbGVjdCc7XHJcbiAgfVxyXG5cclxuICBvcGVuZWQgPSBmYWxzZTtcclxuXHJcbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZE9wdGlvbi52YWx1ZTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpIGhpZGRlbiA9ICdpbmxpbmUtYmxvY2snO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW5hdGl2ZSBuby1vdXRwdXQtcmVuYW1lXHJcbiAgQE91dHB1dCgnY2hhbmdlJykgY2hhbmdlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2xhYmVsQnV0dG9uJywge3N0YXRpYzogdHJ1ZX0pIGxhYmVsQnV0dG9uOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcjogUmVuZGVyZXIyLFxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdGhpcy5vcHRpb25zWzBdO1xyXG4gICAgaWYgKGlzRGVmaW5lZCh0aGlzLmlzSGlkZGVuKSAmJiB0aGlzLmlzSGlkZGVuKSB7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZSgpIHtcclxuICAgIHRoaXMuaGlkZGVuID0gJ25vbmUnO1xyXG4gIH1cclxuXHJcbiAgb3B0aW9uU2VsZWN0KG9wdGlvbjogU2VsZWN0T3B0aW9uLCBldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLnNldFZhbHVlKG9wdGlvbi52YWx1ZSk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuc2VsZWN0ZWRPcHRpb24udmFsdWUpO1xyXG4gICAgdGhpcy5jaGFuZ2VFdmVudC5lbWl0KHRoaXMuc2VsZWN0ZWRPcHRpb24udmFsdWUpO1xyXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVPcGVuKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAvLyBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxyXG4gIG9uQ2xpY2soJGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5jb250YWlucygkZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMub3BlbmVkO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZSkge1xyXG4gICAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWUpIHtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICBjb25zdCBzZWxlY3RlZEVsID0gdGhpcy5vcHRpb25zLmZpbmQoKGVsLCBpKSA9PiB7XHJcbiAgICAgIGluZGV4ID0gaTtcclxuICAgICAgcmV0dXJuIGVsLnZhbHVlID09PSB2YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHNlbGVjdGVkRWwpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHNlbGVjdGVkRWw7XHJcbiAgICAgIHRoaXMub3B0aW9uSWQgPSBpbmRleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlOiBhbnkgPSAoKSA9PiB7XHJcbiAgfVxyXG4gIG9uVG91Y2hlZDogYW55ID0gKCkgPT4ge1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbikge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm4pIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubGFiZWxCdXR0b24ubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICBjb25zdCBkaXYgPSB0aGlzLmxhYmVsQnV0dG9uLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCBhY3Rpb24gPSBpc0Rpc2FibGVkID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyc7XHJcbiAgICB0aGlzLnJbYWN0aW9uXShkaXYsICdkaXNhYmxlZCcpO1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcclxuICBoYW5kbGVLZXlEb3duKCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgaWYgKCF0aGlzLm9wZW5lZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZygkZXZlbnQua2V5KTtcclxuICAgIC8vIGlmIChLZXlDb2RlWyRldmVudC5rZXldKSB7XHJcbiAgICBzd2l0Y2ggKCRldmVudC5rZXkpIHtcclxuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcclxuICAgICAgICB0aGlzLl9oYW5kbGVBcnJvd0Rvd24oJGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnQXJyb3dVcCc6XHJcbiAgICAgICAgdGhpcy5faGFuZGxlQXJyb3dVcCgkZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdTcGFjZSc6XHJcbiAgICAgICAgdGhpcy5faGFuZGxlU3BhY2UoJGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnRW50ZXInOlxyXG4gICAgICAgIHRoaXMuX2hhbmRsZUVudGVyKCRldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ1RhYic6XHJcbiAgICAgICAgdGhpcy5faGFuZGxlVGFiKCRldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0VzY2FwZSc6XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdCYWNrc3BhY2UnOlxyXG4gICAgICAgIHRoaXMuX2hhbmRsZUJhY2tzcGFjZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgLy8gfSBlbHNlIGlmICgkZXZlbnQua2V5ICYmICRldmVudC5rZXkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAvLyB0aGlzLl9rZXlQcmVzcyQubmV4dCgkZXZlbnQua2V5LnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUFycm93RG93bigkZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbklkIDwgdGhpcy5vcHRpb25zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgdGhpcy5vcHRpb25JZCsrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUFycm93VXAoJGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25JZCA+PSAxKSB7XHJcbiAgICAgIHRoaXMub3B0aW9uSWQtLTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9oYW5kbGVTcGFjZSgkZXZlbnQpIHtcclxuXHJcbiAgfVxyXG5cclxuICBfaGFuZGxlRW50ZXIoJGV2ZW50KSB7XHJcbiAgICB0aGlzLm9wdGlvblNlbGVjdCh0aGlzLm9wdGlvbnNbdGhpcy5vcHRpb25JZF0sICRldmVudCk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlVGFiKCRldmVudCkge1xyXG5cclxuICB9XHJcblxyXG4gIF9oYW5kbGVCYWNrc3BhY2UoKSB7XHJcblxyXG4gIH1cclxufVxyXG4iXX0=