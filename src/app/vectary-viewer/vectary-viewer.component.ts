import { Component } from '@angular/core';


@Component({
  selector: 'app-vectary-viewer',
  templateUrl: './vectary-viewer.component.html',
  styleUrls: ['./vectary-viewer.component.scss']
})
export class VectaryViewerComponent {
  constructor(){
    this.loadScripts();
  }

  loadScripts() {
    const dynamicScripts = [
      "https://www.vectary.com/viewer-api/v1/api.js"
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

}

