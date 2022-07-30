import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})

// export class ProductAlertsComponent implements OnInit {
//   constructor() { }
//   ngOnInit(): void {
//   }
// }
export class ProductAlertsComponent {
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
}
