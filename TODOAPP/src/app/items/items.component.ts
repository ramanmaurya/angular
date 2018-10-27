import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Chart} from 'chart.js';



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
 chart: any;
  data;
  webUserCount = 27;
  webUserCount1 = 2;



  something: String = '';
    constructor( private dataservice: DataService) {
    }


    ngOnInit() {
  this.getbooks();

    }

  getbooks() {
  this.dataservice.getbooks().subscribe((resp) => {
  console.log(resp.body);
  this.data = resp.body;
  });
  }

  deleteitem(id) {
   this.dataservice.deleteItem(id).subscribe((res) => {
     console.log(res);
   });
  console.log('item id is: ' + id);
   this.getbooks();
  }

  getItem(index: number) {

    this.data.doc[index].show = !this.data.doc[index].show;

  }

 getWebUser() {

     for (const user of this.data.doc) {
      if (user.site_admin === false) {
      this.webUserCount++;
      } else if (user.site_admin === true) {
        this.webUserCount1++;

      }
    }
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 14, 27 , 29],
        datasets: [
          {
        data: [30,2],
        borderColor: '#3cba9f',
        fill: false
        },
        {
          data: [1,2,3,4,5,6,7,8,9,27],
        borderColor: '#ffcc00',
        fill: false

         }

        ]
      },
      options : {
        legend: {
          display : false
        },
        scales: {
           xAxes: [{
            display: true
             }],
             yAxes: [{
           display: true,
            }]
        }

      }
        });
    console.log(`${this.webUserCount} and ${this.webUserCount1}`);
  }


}
