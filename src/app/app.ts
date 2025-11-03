import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './_components/navbar/navbar';
import { Base } from './_components/base/base';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Base],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gerador-certificado');
}
