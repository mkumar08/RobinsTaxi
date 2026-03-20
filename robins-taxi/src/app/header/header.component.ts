import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class HeaderComponent implements AfterViewInit{

  @ViewChild('mobile', { static: false }) mobileMenu: ElementRef<HTMLElement>;
  servicesDropdownOpen = false;
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  ngAfterViewInit(){
    if (this.mobileMenu) {
      this.mobileMenu.nativeElement.style.display = 'none';
    }
  }

  menuClicked(){
    this.mobileMenu.nativeElement.style.display = 'flex';
    this.servicesDropdownOpen = false;

  }

  closeClicked(){
    this.mobileMenu.nativeElement.style.display = "none";
    this.servicesDropdownOpen = false;
  }

  toggleServicesDropdown(event: Event){
    event.preventDefault();
    event.stopPropagation();
    this.servicesDropdownOpen = !this.servicesDropdownOpen;
  }

  closeServicesDropdown(){
    this.servicesDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent){
    const target = event.target as Node;
    if (!this.elementRef.nativeElement.contains(target)) {
      this.servicesDropdownOpen = false;
    }
  }

}
