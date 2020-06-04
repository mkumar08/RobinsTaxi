import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit{
  
  @ViewChild('mobile', {static: false}) mobileMenu: ElementRef;
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.mobileMenu.nativeElement.style.display = "none";
  }

  menuClicked(){
    this.mobileMenu.nativeElement.style.display = 'flex';

  }

  closeClicked(){
    this.mobileMenu.nativeElement.style.display = "none";
  }

}
