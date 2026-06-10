import { Component, inject, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('triangle');

  builder = inject(FormBuilder);
  triangleForm = this.builder.group({
    base: '',
    height: '',
    area: ''
  });

  onSubmit(){
    this.startCalc();
  }
  calcArea(base: number, height: number){
    return base * height / 2;
  }
  startCalc() {
    console.log("számolás . . .");
    const base = Number(this.triangleForm.value.base);
    const height = Number(this.triangleForm.value.height);
    const area = this.calcArea(base, height);
    this.triangleForm.get('area')?.setValue(String(area));
  }
  
}
