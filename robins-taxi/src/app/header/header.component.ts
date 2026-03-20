import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [RouterLink, TranslateModule]
})
export class HeaderComponent implements AfterViewInit{

  @ViewChild('mobile', { static: false }) mobileMenu: ElementRef<HTMLElement>;
  servicesDropdownOpen = false;
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly translate = inject(TranslateService);

  get currentLang(): string {
    return this.translate.currentLang || this.translate.defaultLang;
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

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
