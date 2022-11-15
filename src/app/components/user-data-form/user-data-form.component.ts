import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.css']
})
export class UserDataFormComponent implements OnInit {

  @Output() e: EventEmitter<string> = new EventEmitter();

  fullName: string = '';
  address: string = '';
  creditCard!: number;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.e.emit(this.fullName);
  }

}
