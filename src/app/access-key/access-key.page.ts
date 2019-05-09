import { Component, OnInit } from '@angular/core';
import { ExameCustom } from '../exame';
import { QuestaoCustom } from '../questao';
import { QuestionDataService } from '../services/question-data.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AccessPage } from '../access/access.page';

@Component({
  selector: 'app-access-key',
  // template: `<app-access></app-access>`,
  templateUrl: '../access/access.page.html',
  // templateUrl: './access-key.page.html',
  styleUrls: ['./access-key.page.scss'],
})
export class AccessKeyPage extends AccessPage implements OnInit {

  ID = 0;
  flag = false;

  ngOnInit() {
    this.valuesDefault();
    this.title = 'Aluno';
    this.labelText1 = 'Digite seu nome:';
    this.labelText2 = 'Digite a chave de acesso:';
    this.typeLabel2 = 'text';
    this.buttonText = 'Fazer exame';
  }

  letsGO() {
    console.log(this.label1);
    if (this.label1 === '' || this.label1 === null) {
      this.showAlert('Aviso', 'O campo nome do aluno deve ser preenchido!');
    } else if (this.label2 === '' || this.label2 === null) {
      this.showAlert('Aviso', 'O campo chave do exame deve ser preenchido!');
    } else {
      for (const exame of this.qstData.examesArray) {
        if (this.label2 === exame.key) {
          this.flag = true;
          break;
        }
        this.ID++;
      }

      if (this.flag) {
        this.resetValues();
        this.router.navigate(['fazer-exame', this.ID]);
      } else {
        this.label2 = '';
        this.showAlert('Aviso', 'A chave está incorreta. Tente novamente!');
      }
    }
  }

  resetValues() {
    this.label1 = '';
    this.label2 = '';
    this.ID = 0;
    this.flag = false;
  }

}
