import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { QuestionDataService } from '../services/question-data.service';
import { QuestaoCustom } from '../questao';
import { ExameCustom } from '../exame';

@Component({
  selector: 'app-login-studant',
  templateUrl: './login-studant.page.html',
  styleUrls: ['./login-studant.page.scss'],
})
export class LoginStudantPage implements OnInit {

  username = '';
  password = '';

  constructor(private router: Router,
              private alertCtrl: AlertController,
              private qstData: QuestionDataService) { }

  ngOnInit() {
    this.valuesDefault();
  }

  makeExame() {
    if (this.username === '') {
      this.showAlert('Aviso', 'Por favor, informe o seu username!');
    } else if (this.password === '') {
      this.showAlert('Aviso', 'Por favor, informe o sua senha!');
    } else {
      if (this.username === 'aluno' && this.password === '1234') {
        this.resetValues();
        this.router.navigate(['fazer-exame', 0]);
      } else {
        this.username = '';
        this.password = '';
        this.showAlert('Aviso', 'Usuário incorreto, tente novamente!');
      }
    }
  }

  resetValues() {
    this.username = '';
    this.password = '';
  }

  async showAlert(title: string, msg: string) {
    const alerta = await this.alertCtrl.create({
      header: title,
      message: msg,
      buttons: ['OK']
    });
    await alerta.present();
  }

  valuesDefault() {
    const qst = new QuestaoCustom();
    qst.textoQst = 'Qual o time que mais vezes foi campeão brasileiro?';
    qst.categoria = 'História';
    qst.alternativas = [
      { val: 'Bahia', isChecked: false },
      { val: 'Palmeiras', isChecked: true },
      { val: 'Grêmio', isChecked: false }
    ];
    qst.opcEscolha = 'unica';
    qst.textoLivre = null;
    qst.id = '1111';

    const qst2 = new QuestaoCustom();
    qst2.textoQst = 'Quais times abaixo são vencedores da Libertadores?';
    qst2.categoria = 'História';
    qst2.alternativas = [
      { val: 'Santos', isChecked: true },
      { val: 'São Paulo', isChecked: true },
      { val: 'Vitória', isChecked: false }
    ];
    qst2.opcEscolha = 'multipla';
    qst2.textoLivre = null;
    qst2.id = '2222';

    const qst3 = new QuestaoCustom();
    qst3.textoQst = 'Qual time foi campeão da Copa do Brasil de 2018?';
    qst3.categoria = 'Física';
    qst3.alternativas = null;
    qst3.opcEscolha = 'texto';
    qst3.textoLivre = 'Cruzeiro';
    qst3.id = '3333';

    let exame = new ExameCustom();
    exame.nameExame = 'Default System';

    exame.questoes.push(qst);
    exame.questoes.push(qst2);
    exame.questoes.push(qst3);
    exame.key = 'mendouce';

    this.qstData.examesArray.push(exame);
  }

}
