import { Component, Input } from '@angular/core';
import { SecondaryButton } from '../secondary-button/secondary-button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButton, CommonModule],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css',
})
export class ItemCertificado {
  @Input() nomeAluno: string = '';
  @Input() dataEmissao = '';
  @Input() id: string = '';

  constructor(private router: Router){}

  redirecionarCertificado() {
    this.router.navigate(['/certificados', this.id]);
  }
}
