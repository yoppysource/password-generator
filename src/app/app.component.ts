import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length =0;
  includeLetter = false;
  includeNum = false;
  includeSymbols = false;
  password = '';

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }


  onButtonClick() {
    const numbers= '1234567890';
    const letters = 'qwertyuiopasdfghjklzxcvbnm';
    const symbols = '!@#';

    let vaildChars = '';

    if(this.includeLetter){
      vaildChars += letters;
    }
    if(this.includeNum){
      vaildChars += numbers;
    }
    if(this.includeSymbols) {
      vaildChars += symbols;
    }

    let generatedPassword = '';
    for (let i=0; i< this.length; i++){
      // 0<x<1사이 인거 추출 하고 length만큼 곱해 그리고 소수점 때라
      const index = Math.floor(Math.random() * vaildChars.length);
      generatedPassword += vaildChars[index];
    }
    this.password = generatedPassword;
  }

  onChangeUseLetters(){
    this.includeLetter = !this.includeLetter;
  }

  onChangeUseNum(){
    this.includeNum = !this.includeNum;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }


  getName() {
    return 'Jun';
  }
}

