import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cad-prod',
  templateUrl: './cad-prod.page.html',
  styleUrls: ['./cad-prod.page.scss'],
})
export class CadProdPage implements OnInit {

  formCadastro: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.formCadastro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });

   }

  ngOnInit() {
  }

}
