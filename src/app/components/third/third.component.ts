import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';


@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit{

  isEven?: boolean;

  constructor(public dataServ: DataService) {}

  ngOnInit(): void {
    this.dataServ.counter.subscribe({
      next: (value: number) => {
        const square = value * value;
        if (square % 2 === 0) {
          this.isEven = true;
        } else {
          this.isEven = false;
        }
      },
      error: err => console.log('errore', err)
    })
  }

}
