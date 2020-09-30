import { Component, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
@Component({
    selector: 'navbarmain',
    template: `
    <div class="cardz">
    <nav class="navbar navbar-expand-lg bg-warning">
      <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="list">
            <a class="nav-link" href="">Home</a>
          </li>
            <li class="list">
              <a class="nav-link">Apply Loan</a>
            </li>
            <li class="list">
              <a class="nav-link" routerLink="/aboutUs">About Us</a>
            </li>
            <li class="list">
                <a class="nav-link" href="https://www.lntinfotech.com">Our Partners</a>
            </li>
            <li class="list">
              <a class="nav-link" routerLink="/contactUs">Contact Us</a>
            </li>
          </ul>
      </div>
      </nav>
      </div>
    `,
    styleUrls: ['./navbarmain.component.css']
  }) 
  export class navBarMainComponent {}