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
    const data = this.params.data;
    this.params.updateClicked(data);
  }

  deleteCellClicked() {
    const data = this.params.data;
    this.params.deleteClicked(data);
  }

}
