import { Component, OnInit, ViewChild, type ElementRef } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';

import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { CertificadoService } from '../../_services/certificado-service';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css',
})
export class Certificado implements OnInit {

  id: string | null = null;
  certificado: any | undefined;

  @ViewChild('certificadoContainer') certificadoElement!: ElementRef;

  constructor(private certificadoService: CertificadoService, private route: ActivatedRoute){}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.certificado = this.certificadoService.certificados.find(item => item.id == this.id);
    })
  }

  downloadCertificado(): void {
    if (this.certificado.undefined) return;

    html2canvas(this.certificadoElement.nativeElement, { scale: 2 }).then(
      canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('imagem/png');
        link.download = 'certificado_' + this.certificado?.nome.replaceAll(' ', '_') + '.png';
        link.click();
      }
    )
  }
}
