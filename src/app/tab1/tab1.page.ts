import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  toggle1: boolean = false;
  toggle2: boolean = false;
  toggle3: boolean = false;
  inputText: string = '';
  peso: number; 

  calcularDosagem() {
    console.log('Calculando dosagem...');
    console.log('Toggle 1:', this.toggle1);
    console.log('Toggle 2:', this.toggle2);
    console.log('Toggle 3:', this.toggle3);
    console.log('Texto Inserido:', this.inputText);

    if (this.peso < 0) {
      console.log('Peso não pode ser negativo. Definindo como zero.');
      this.peso = 0;
    }

    console.log('Peso:', this.peso);
  }

  toggleInput() {
    if (!this.toggle1) {
      this.inputText = ''; 
    }
  }
}
