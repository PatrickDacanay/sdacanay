import { Component,OnInit, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
/*  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;*/
  constructor(private observer: BreakpointObserver) {

  }
  ngOnInit(): void{
  }
  onResize(event: any) {
    console.log(event);
  }
/*  ngAfterViewInit() {
    this.observer.observe(['(max-width: 375px)']).subscribe((res)=>{
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    this.observer.observe(['(max-height: 228px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }*/
}
