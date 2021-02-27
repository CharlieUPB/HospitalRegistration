import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent {
  
  @Input() formTitle: string;
  @Input() formSubtitle: string;
  @Input() formOptions: FormlyFormOptions;
  @Input() model: any;
  @Input() fieldsConfig: FormlyFieldConfig[];
  @Output() onModelSave = new EventEmitter<any>();

  form = new FormGroup({});

  onSubmit() {
		if (this.form.valid) {
      this.onModelSave.emit(this.model);
    }
  }

  cleanModel() {
    this.model = {};
  }

}
