import { Component, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Input, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isDefined } from '../utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["labelButton"];
const _c1 = function (a0, a1) { return { "selected": a0, "focused": a1 }; };
function AeSelectComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function AeSelectComponent_button_8_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r6); const item_r3 = ctx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.optionSelect(item_r3, $event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c1, item_r3.value === ctx_r1.value, i_r4 === ctx_r1.optionId));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r3.label, " ");
} }
function AeSelectComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵtext(1, "No items for select");
    i0.ɵɵelementEnd();
} }
const _c2 = function (a0) { return { "ae-expanded": a0 }; };
export class AeSelectComponent {
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
}
AeSelectComponent.ɵfac = function AeSelectComponent_Factory(t) { return new (t || AeSelectComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
AeSelectComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AeSelectComponent, selectors: [["ae-select"]], viewQuery: function AeSelectComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.labelButton = _t.first);
    } }, hostVars: 2, hostBindings: function AeSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function AeSelectComponent_click_HostBindingHandler($event) { return ctx.onClick($event); }, false, i0.ɵɵresolveDocument)("keydown", function AeSelectComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyDown($event); });
    } if (rf & 2) {
        i0.ɵɵstyleProp("display", ctx.hidden);
    } }, inputs: { options: "options", isHidden: ["hidden", "isHidden"] }, outputs: { changeEvent: "change" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => AeSelectComponent),
                multi: true,
            }
        ])], decls: 10, vars: 7, consts: [[1, "ae-font", "ae-picker", 3, "ngClass"], ["tabindex", "0", "type", "button", "role", "button", 1, "ae-picker-label", 3, "tabIndex", "click"], ["labelButton", ""], ["viewBox", "0 0 18 18"], ["points", "7 11 9 13 11 11 7 11", 1, "ae-stroke"], ["points", "7 7 9 5 11 7 7 7", 1, "ae-stroke"], [1, "ae-picker-options"], ["tabindex", "-1", "type", "button", "role", "button", "class", "ae-picker-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "dropdown-item", 4, "ngIf"], ["tabindex", "-1", "type", "button", "role", "button", 1, "ae-picker-item", 3, "ngClass", "click"], [1, "dropdown-item"]], template: function AeSelectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵelementStart(1, "button", 1, 2);
        i0.ɵɵlistener("click", function AeSelectComponent_Template_button_click_1_listener($event) { return ctx.toggleOpen($event); });
        i0.ɵɵtext(3);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(4, "svg", 3);
        i0.ɵɵelement(5, "polygon", 4);
        i0.ɵɵelement(6, "polygon", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(7, "span", 6);
        i0.ɵɵtemplate(8, AeSelectComponent_button_8_Template, 2, 5, "button", 7);
        i0.ɵɵtemplate(9, AeSelectComponent_span_9_Template, 2, 0, "span", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c2, ctx.isOpen));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("tabIndex", -1);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("", ctx.label, " ");
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngForOf", ctx.options);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.options.length);
    } }, directives: [i1.NgClass, i1.NgForOf, i1.NgIf], styles: [".ae-font.ae-picker{color:#444}.ae-font.ae-picker,.ae-font .ae-picker-label{display:inline-block;float:left;position:relative;vertical-align:middle;width:100%}.ae-font .ae-picker-label{background-color:#fff;border:1px solid #ddd;cursor:pointer;font-size:85%;height:100%;line-height:26px;min-width:2rem;overflow:hidden;padding-left:8px;padding-right:10px;text-align:left;text-overflow:clip;white-space:nowrap}.ae-font .ae-picker-label:before{background:linear-gradient(90deg,#fff,#fff);content:\"\";height:100%;position:absolute;right:0;top:0;width:20px}.ae-font .ae-picker-label:focus{outline:none}.ae-font .ae-picker-label:hover{background-color:#f1f1f1;cursor:pointer;transition:.2s ease}.ae-font .ae-picker-label:hover:before{background:linear-gradient(90deg,#f5f5f5 100%,#fff 0)}.ae-font .ae-picker-label:disabled{background-color:#f5f5f5;cursor:not-allowed;pointer-events:none}.ae-font .ae-picker-label:disabled:before{background:linear-gradient(90deg,#f5f5f5 100%,#fff 0)}.ae-font .ae-picker-label svg{margin-top:-9px;position:absolute;right:0;top:50%;width:18px}.ae-font .ae-picker-label svg:not(:root){overflow:hidden}.ae-font .ae-picker-label svg .ae-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ae-font .ae-picker-options{background-color:#fff;border:1px solid transparent;box-shadow:0 2px 8px rgba(0,0,0,.2);display:none;min-width:100%;position:absolute;white-space:nowrap;z-index:3}.ae-font .ae-picker-options .ae-picker-item{background-color:transparent;border:0 solid #ddd;cursor:pointer;display:block;min-width:2rem;padding-bottom:5px;padding-left:5px;padding-top:5px;text-align:left;width:100%;z-index:3}.ae-font .ae-picker-options .ae-picker-item.selected{background-color:#fff4c2;color:#06c}.ae-font .ae-picker-options .ae-picker-item.focused,.ae-font .ae-picker-options .ae-picker-item:hover{background-color:#fffa98}.ae-font.ae-expanded{display:block;margin-top:-1px;z-index:1}.ae-font.ae-expanded .ae-picker-label,.ae-font.ae-expanded .ae-picker-label svg{color:#ccc;z-index:2}.ae-font.ae-expanded .ae-picker-label svg .ae-stroke{stroke:#ccc}.ae-font.ae-expanded .ae-picker-options{border-color:#ccc;display:block;margin-top:-1px;top:100%;z-index:3}"], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AeSelectComponent, [{
        type: Component,
        args: [{
                selector: 'ae-select',
                templateUrl: './ae-select.component.html',
                styleUrls: ['./ae-select.component.scss'],
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => AeSelectComponent),
                        multi: true,
                    }
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { options: [{
            type: Input
        }], isHidden: [{
            type: Input,
            args: ['hidden']
        }], hidden: [{
            type: HostBinding,
            args: ['style.display']
        }], changeEvent: [{
            type: Output,
            args: ['change']
        }], labelButton: [{
            type: ViewChild,
            args: ['labelButton', { static: true }]
        }], onClick: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }], handleKeyDown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWUtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJDOi9wbGF0YW5hLXByb2plY3QvYW5ndWxhci1lZGl0b3Itc2Z4L3Byb2plY3RzL2FuZ3VsYXItZWRpdG9yL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9hZS1zZWxlY3QvYWUtc2VsZWN0LmNvbXBvbmVudC50cyIsImxpYi9hZS1zZWxlY3QvYWUtc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQUUsV0FBVyxFQUN2QixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXVCLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLFVBQVUsQ0FBQzs7Ozs7OztJQ04vQixpQ0FJTTtJQURBLDhPQUFvQztJQUNwQyxZQUNOO0lBQUEsaUJBQVM7Ozs7O0lBSEgsOEdBQXlFO0lBRXpFLGVBQ047SUFETSw4Q0FDTjs7O0lBQ0EsZ0NBQW9EO0lBQUEsbUNBQW1CO0lBQUEsaUJBQU87OztBRG9CbEYsTUFBTSxPQUFPLGlCQUFpQjtJQTBCNUIsWUFBb0IsS0FBaUIsRUFDakIsQ0FBWTtRQURaLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsTUFBQyxHQUFELENBQUMsQ0FBVztRQTFCdkIsWUFBTyxHQUFtQixFQUFFLENBQUM7UUFLdEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBTWIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQU1lLFdBQU0sR0FBRyxjQUFjLENBQUM7UUFFdEQsNkRBQTZEO1FBQzNDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQXNFbkQsYUFBUSxH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Q2pFLGlCQUFNO1FBQ1IsaUJBQVM7UUFDVCxvQkFDRTtRQURGLCtCQUNFO1FBQUEsd0VBSU07UUFFTixvRUFBb0Q7UUFDdEQsaUJBQU87UUFDVCxpQkFBTzs7UUFqQnlCLGdFQUFrQztRQUN4RCxlQUFlO1FBQWYsNkJBQWU7UUFBNkcsZUFDbEk7UUFEa0kseUNBQ2xJO1FBUU0sZUFBMkM7UUFBM0MscUNBQTJDO1FBS3JCLGVBQXVCO1FBQXZCLDBDQUF1Qjs7a0REb0IxQyxpQkFBaUI7Y0FiN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztnQkFDekMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDO3dCQUNoRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGO3FGQUVVLE9BQU87a0JBQWYsS0FBSztZQUVXLFFBQVE7a0JBQXhCLEtBQUs7bUJBQUMsUUFBUTtZQWdCZSxNQUFNO2tCQUFuQyxXQUFXO21CQUFDLGVBQWU7WUFHVixXQUFXO2tCQUE1QixNQUFNO21CQUFDLFFBQVE7WUFFMEIsV0FBVztrQkFBcEQsU0FBUzttQkFBQyxhQUFhLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDO1lBbUN4QyxPQUFPO2tCQUROLFlBQVk7bUJBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUF3RDFDLGFBQWE7a0JBRFosWUFBWTttQkFBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEF0dHJpYnV0ZSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZiwgSG9zdEJpbmRpbmcsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge2lzRGVmaW5lZH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RPcHRpb24ge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgdmFsdWU6IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZS1zZWxlY3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hZS1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FlLXNlbGVjdC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBBZVNlbGVjdENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFlU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgQElucHV0KCkgb3B0aW9uczogU2VsZWN0T3B0aW9uW10gPSBbXTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCdoaWRkZW4nKSBpc0hpZGRlbjogYm9vbGVhbjtcclxuXHJcbiAgc2VsZWN0ZWRPcHRpb246IFNlbGVjdE9wdGlvbjtcclxuICBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIG9wdGlvbklkID0gMDtcclxuXHJcbiAgZ2V0IGxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZE9wdGlvbiAmJiB0aGlzLnNlbGVjdGVkT3B0aW9uLmhhc093blByb3BlcnR5KCdsYWJlbCcpID8gdGhpcy5zZWxlY3RlZE9wdGlvbi5sYWJlbCA6ICdTZWxlY3QnO1xyXG4gIH1cclxuXHJcbiAgb3BlbmVkID0gZmFsc2U7XHJcblxyXG4gIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRPcHRpb24udmFsdWU7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKSBoaWRkZW4gPSAnaW5saW5lLWJsb2NrJztcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1uYXRpdmUgbm8tb3V0cHV0LXJlbmFtZVxyXG4gIEBPdXRwdXQoJ2NoYW5nZScpIGNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdsYWJlbEJ1dHRvbicsIHtzdGF0aWM6IHRydWV9KSBsYWJlbEJ1dHRvbjogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICBwcml2YXRlIHI6IFJlbmRlcmVyMixcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHRoaXMub3B0aW9uc1swXTtcclxuICAgIGlmIChpc0RlZmluZWQodGhpcy5pc0hpZGRlbikgJiYgdGhpcy5pc0hpZGRlbikge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhpZGUoKSB7XHJcbiAgICB0aGlzLmhpZGRlbiA9ICdub25lJztcclxuICB9XHJcblxyXG4gIG9wdGlvblNlbGVjdChvcHRpb246IFNlbGVjdE9wdGlvbiwgZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5zZXRWYWx1ZShvcHRpb24udmFsdWUpO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnNlbGVjdGVkT3B0aW9uLnZhbHVlKTtcclxuICAgIHRoaXMuY2hhbmdlRXZlbnQuZW1pdCh0aGlzLnNlbGVjdGVkT3B0aW9uLnZhbHVlKTtcclxuICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlT3BlbihldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgLy8gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZDtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcclxuICBvbkNsaWNrKCRldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoJGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm9wZW5lZDtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWUpIHtcclxuICAgIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHNldFZhbHVlKHZhbHVlKSB7XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRFbCA9IHRoaXMub3B0aW9ucy5maW5kKChlbCwgaSkgPT4ge1xyXG4gICAgICBpbmRleCA9IGk7XHJcbiAgICAgIHJldHVybiBlbC52YWx1ZSA9PT0gdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIGlmIChzZWxlY3RlZEVsKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBzZWxlY3RlZEVsO1xyXG4gICAgICB0aGlzLm9wdGlvbklkID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZTogYW55ID0gKCkgPT4ge1xyXG4gIH1cclxuICBvblRvdWNoZWQ6IGFueSA9ICgpID0+IHtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm4pIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuKSB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmxhYmVsQnV0dG9uLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgY29uc3QgZGl2ID0gdGhpcy5sYWJlbEJ1dHRvbi5uYXRpdmVFbGVtZW50O1xyXG4gICAgY29uc3QgYWN0aW9uID0gaXNEaXNhYmxlZCA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnO1xyXG4gICAgdGhpcy5yW2FjdGlvbl0oZGl2LCAnZGlzYWJsZWQnKTtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgaGFuZGxlS2V5RG93bigkZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5vcGVuZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coJGV2ZW50LmtleSk7XHJcbiAgICAvLyBpZiAoS2V5Q29kZVskZXZlbnQua2V5XSkge1xyXG4gICAgc3dpdGNoICgkZXZlbnQua2V5KSB7XHJcbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XHJcbiAgICAgICAgdGhpcy5faGFuZGxlQXJyb3dEb3duKCRldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxyXG4gICAgICAgIHRoaXMuX2hhbmRsZUFycm93VXAoJGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnU3BhY2UnOlxyXG4gICAgICAgIHRoaXMuX2hhbmRsZVNwYWNlKCRldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0VudGVyJzpcclxuICAgICAgICB0aGlzLl9oYW5kbGVFbnRlcigkZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdUYWInOlxyXG4gICAgICAgIHRoaXMuX2hhbmRsZVRhYigkZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdFc2NhcGUnOlxyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnQmFja3NwYWNlJzpcclxuICAgICAgICB0aGlzLl9oYW5kbGVCYWNrc3BhY2UoKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIC8vIH0gZWxzZSBpZiAoJGV2ZW50LmtleSAmJiAkZXZlbnQua2V5Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgLy8gdGhpcy5fa2V5UHJlc3MkLm5leHQoJGV2ZW50LmtleS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIF9oYW5kbGVBcnJvd0Rvd24oJGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25JZCA8IHRoaXMub3B0aW9ucy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHRoaXMub3B0aW9uSWQrKztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9oYW5kbGVBcnJvd1VwKCRldmVudCkge1xyXG4gICAgaWYgKHRoaXMub3B0aW9uSWQgPj0gMSkge1xyXG4gICAgICB0aGlzLm9wdGlvbklkLS07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlU3BhY2UoJGV2ZW50KSB7XHJcblxyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUVudGVyKCRldmVudCkge1xyXG4gICAgdGhpcy5vcHRpb25TZWxlY3QodGhpcy5vcHRpb25zW3RoaXMub3B0aW9uSWRdLCAkZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZVRhYigkZXZlbnQpIHtcclxuXHJcbiAgfVxyXG5cclxuICBfaGFuZGxlQmFja3NwYWNlKCkge1xyXG5cclxuICB9XHJcbn1cclxuIiwiPHNwYW4gY2xhc3M9XCJhZS1mb250IGFlLXBpY2tlclwiIFtuZ0NsYXNzXT1cInsnYWUtZXhwYW5kZWQnOmlzT3Blbn1cIj5cclxuICA8YnV0dG9uIFt0YWJJbmRleF09XCItMVwiICNsYWJlbEJ1dHRvbiB0YWJpbmRleD1cIjBcIiB0eXBlPVwiYnV0dG9uXCIgcm9sZT1cImJ1dHRvblwiIGNsYXNzPVwiYWUtcGlja2VyLWxhYmVsXCIgKGNsaWNrKT1cInRvZ2dsZU9wZW4oJGV2ZW50KTtcIj57e2xhYmVsfX1cclxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAxOCAxOFwiPlxyXG4gICAgIDwhLS0gPHVzZSB4PVwiMFwiIHk9XCIwXCIgeGxpbms6aHJlZj1cIi4uL2Fzc2V0cy9pY29ucy5zdmcjaG9tXCI+PC91c2U+LS0+XHJcbiAgICAgIDxwb2x5Z29uIGNsYXNzPVwiYWUtc3Ryb2tlXCIgcG9pbnRzPVwiNyAxMSA5IDEzIDExIDExIDcgMTFcIj48L3BvbHlnb24+XHJcbiAgICAgIDxwb2x5Z29uIGNsYXNzPVwiYWUtc3Ryb2tlXCIgcG9pbnRzPVwiNyA3IDkgNSAxMSA3IDcgN1wiPjwvcG9seWdvbj5cclxuICAgIDwvc3ZnPlxyXG4gIDwvYnV0dG9uPlxyXG4gIDxzcGFuIGNsYXNzPVwiYWUtcGlja2VyLW9wdGlvbnNcIj5cclxuICAgIDxidXR0b24gdGFiaW5kZXg9XCItMVwiIHR5cGU9XCJidXR0b25cIiByb2xlPVwiYnV0dG9uXCIgY2xhc3M9XCJhZS1waWNrZXItaXRlbVwiXHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBvcHRpb25zOyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgICAgIFtuZ0NsYXNzXT1cInsnc2VsZWN0ZWQnOiBpdGVtLnZhbHVlID09PSB2YWx1ZSwgJ2ZvY3VzZWQnOiBpID09PSBvcHRpb25JZH1cIlxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9wdGlvblNlbGVjdChpdGVtLCAkZXZlbnQpXCI+XHJcbiAgICAgICAgICB7e2l0ZW0ubGFiZWx9fVxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8c3BhbiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiAqbmdJZj1cIiFvcHRpb25zLmxlbmd0aFwiPk5vIGl0ZW1zIGZvciBzZWxlY3Q8L3NwYW4+XHJcbiAgPC9zcGFuPlxyXG48L3NwYW4+XHJcbiJdfQ==