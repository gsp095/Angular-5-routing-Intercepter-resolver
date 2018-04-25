import { Component } from '@angular/core';
import {products} from '../app/productData/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public gridData: any[] = products;
  public value: Date = new Date();
  public dialogOpened = false;
  public isDraggable: any = true;
  public windowOpened = false;

    public close(component) {
      this[component + 'Opened'] = false;
    }

    public open(component) {
      this[component + 'Opened'] = true;
    }

    public action(status) {
      console.log(`Dialog result: ${status}`);
      this.dialogOpened = false;
    }
}
