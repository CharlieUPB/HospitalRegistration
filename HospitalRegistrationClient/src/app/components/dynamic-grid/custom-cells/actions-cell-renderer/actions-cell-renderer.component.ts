import { Component } from '@angular/core';

@Component({
  selector: 'app-actions-cell-renderer',
  templateUrl: './actions-cell-renderer.component.html',
  styleUrls: ['./actions-cell-renderer.component.css']
})
export class ActionsCellRendererComponent {

  params;

  agInit(params): void {
    this.params = params;
  }

  updateCellClicked() {
    const index = this.params.rowIndex;
    this.params.updateClicked(index);
  }

  deleteCellClicked() {
    const index = this.params.rowIndex;
    this.params.deleteClicked(index);
  }

}
