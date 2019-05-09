import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { QuestionDataService } from '../services/question-data.service';
import { QuestaoCustom } from '../questao';
import { ExameCustom } from '../exame';
import { AccessPage } from '../access/access.page';

@Component({
  selector: 'app-login-studant',
  // templateUrl: './login-studant.page.html',
  templateUrl: '../access/access.page.html',
  styleUrls: ['./login-studant.page.scss'],
})
export class LoginStudantPage extends AccessPage implements OnInit {

  ngOnInit() {
    this.valuesDefault();
    this.title = 'Login Aluno';
    this.labelText1 = 'Username';
    this.labelText2 = 'Password';
    this.typeLabel2 = 'password';
    this.buttonText = 'Acessar';
  }

  letsGO() {
    if (this.label1 === '') {
      this.showAlert('Aviso', 'Por favor, informe o seu username!');
    } else if (this.label2 === '') {
      this.showAlert('Aviso', 'Por favor, informe o sua senha!');
    } else {
      if (this.label1 === 'aluno' && this.label2 === '1234') {
        this.resetValues();
        this.router.navigate(['fazer-exame', 0]);
      } else {
        this.resetValues();
        this.showAlert('Aviso', 'Usuário incorreto, tente novamente!');
      }
    }
  }

  resetValues() {
    this.label1 = '';
    this.label2 = '';
  }

}
