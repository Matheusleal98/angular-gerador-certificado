import { Component, signal, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './_components/navbar/navbar';
import { Base } from './_components/base/base';
import  { CertificadoService } from './_services/certificado-service';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Base],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('gerador-certificado');

  constructor(private certificadoService: CertificadoService){}

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados');
    this.certificadoService.certificados = certificados ? JSON.parse(certificados) : [];
    console.log(this.certificadoService.certificados);
  }
}
