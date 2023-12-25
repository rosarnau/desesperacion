import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css']
})
export class ArticleNewTemplateComponent implements OnInit {
  articleForm: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.articleForm = this.fb.group({
      articleName: ['', Validators.required],
      articlePrice: [0, [Validators.required, Validators.min(0), Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      imageUrl: ['', [Validators.required, Validators.pattern(/^(https?:\/\/[a-zA-Z0-9]+\.[a-zA-Z]{2,3}(\/\S*)?)$/)]],
      isForSale: [false]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.articleForm.valid) {
      // Aquí puedes manejar la lógica para guardar la información del artículo.
      // Puedes enviar los datos a un servicio o hacer lo que sea necesario.
      console.log('Artículo guardado:', this.articleForm.value);

      // Puedes reiniciar el formulario después de enviar los datos si es necesario.
      this.resetForm();
    } else {
      // El formulario no es válido, puedes mostrar mensajes de error o realizar acciones adecuadas.
      console.log('Formulario no válido. Verifica los campos.');
    }
  }

  resetForm() {
    this.submitted = false;
    this.articleForm.reset({
      articleName: '',
      articlePrice: 0,
      imageUrl: '',
      isForSale: false
    });
  }
}