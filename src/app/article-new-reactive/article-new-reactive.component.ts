import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

// Definir la función del validador personalizado aquí
function NameArticleValidator(control: AbstractControl): ValidationErrors | null {
  const forbiddenNames = ['Prueba', 'test', 'mock', 'fake']; // Agrega los nombres prohibidos según tus necesidades

  // Verificar si el valor del control está en la lista de nombres prohibidos
  if (control.value && forbiddenNames.includes(control.value.toLowerCase())) {
    return { forbiddenName: true }; // Devuelve un objeto con la propiedad forbiddenName
  }

  return null; // La validación es exitosa
}

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css']
})
export class ArticleNewReactiveComponent implements OnInit {
  articleForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.articleForm = this.fb.group({
      nombre: ['', [Validators.required, NameArticleValidator]],
      precio: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/), Validators.min(0.1)]],
      imagenUrl: ['', [Validators.required, Validators.pattern(/^(https?:\/\/)?\S+$/)]],
      enVenta: [false]
    });
  }

  get formControls() {
    return this.articleForm.controls;
  }

  onSubmit() {
    this.submitted = true;
  
    if (this.articleForm.valid) {
      const formData = this.articleForm.value;
  
      console.log('Datos recogidos correctamente:');
      console.log('Nombre:', formData.nombre);
      console.log('Precio:', formData.precio);
      console.log('URL de la imagen:', formData.imagenUrl);
      console.log('¿Está en venta?', formData.enVenta);
    } else {
      console.log("Formulario no válido. Por favor, complete todos los campos obligatorios y asegúrese de que el precio sea mayor o igual a 0,1€.");
    }
  
}
}