import { Component, OnInit } from '@angular/core';
import { navItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './mainapp.component.html',
  styleUrls: ['./mainapp.component.scss']
})
export class MainappComponent implements OnInit {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  public year = new Date().getFullYear();

  constructor() {
    this.changes = new MutationObserver(mutations => {
      this.sidebarMinimized = document.body.classList.contains(
        'sidebar-minimized'
      );
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

  ngOnInit() {}
}
