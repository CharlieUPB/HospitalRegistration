import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionsCellRendererComponent } from './custom-cells/actions-cell-renderer/actions-cell-renderer.component';

@Component({
  selector: 'app-dynamic-grid',
  templateUrl: './dynamic-grid.component.html',
  styleUrls: ['./dynamic-grid.component.css']
})
export class DynamicGridComponent implements OnInit {

  @Input() columnsConfig;
  @Input() columnsData;
  @Input() gridTitle;
  @Input() gridSubtitle;
  @Output() onModelDelete = new EventEmitter<any>();
  @Output() onModelUpdate = new EventEmitter<any>();

  frameworkComponents = {
    actionsCellRenderer: ActionsCellRendererComponent
  };

  actionsConfig = {
    field: 'Actions',
    cellRenderer: 'actionsCellRenderer',
    cellRendererParams: {
      deleteClicked: this.modelDeleteClicked.bind(this),
      updateClicked: this.modelUpdateClicked.bind(this)
    },
    minWidth: 150,
  }

  gridOptions = {
    enableBrowserTooltips: true
  }
    

  ngOnInit() {
    this.columnsConfig = [
      this.actionsConfig,
      ...this.columnsConfig
      ];
  }

  modelDeleteClicked(data: any) {
    this.onModelDelete.emit(data);
  }

  modelUpdateClicked(data: any) {
    this.onModelUpdate.emit(data);
  }

}
