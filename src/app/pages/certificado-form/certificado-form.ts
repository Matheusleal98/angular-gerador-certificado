import { Component } from '@angular/core';
import { FormsModule, type NgControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import type { Certificado } from '../../interfaces/certificado';
import { CertificadoService } from '../../_services/certificado-service';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButton,  PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css',
})
export class CertificadoForm {
  atividade: string = '';

  certificado: Certificado = {
    atividades: [],
    nome: '',
    dataEmissao: ''
  };

  constructor(private certificadoService: CertificadoService) {}

  validarCampo(control: NgControl) {
    return control.invalid && control.touched;
  }

  validarFormulario(): boolean {
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0;
  }

  adicionarAtividade() {
    this.certificado.atividades.push(this.atividade);
    this.atividade = '';
  }

  excluirAtividade(index: number) {
    this.certificado.atividades.splice(index, 1);
  }

  submit() {
    if (!this.validarFormulario()) return;
    this.certificado.dataEmissao = this.dataAtual();
    this.certificadoService.adicionarCertificado(this.certificado);
  }

  dataAtual(){
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
  }
}
