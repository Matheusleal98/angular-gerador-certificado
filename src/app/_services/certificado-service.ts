import { Injectable } from '@angular/core';
import type { Certificado } from '../interfaces/certificado';

@Injectable({
  providedIn: 'root',
})
export class CertificadoService {
  certificados: Certificado[] = [];

  adicionarCertificado(certificado: Certificado) {
    this.certificados.push(certificado);
  }

}
