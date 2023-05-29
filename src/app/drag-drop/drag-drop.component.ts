import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent {
  uploadUrl: string = 'http://localhost:8888/api/report/upload';
  params = new HttpParams().set('file', 'file');
}
