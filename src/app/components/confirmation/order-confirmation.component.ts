import { Component, OnInit } from '@angular/core';
import { faGifts } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  name!: string | null;
  totalPrice: number = 0;
  fagift = faGifts;
  constructor(private rou: ActivatedRoute) { }

  ngOnInit(): void {
    this.rou.paramMap.subscribe(params => {
      this.name = params.get('name');
      this.totalPrice = Number(params.get('total'));
    })
  }

}
