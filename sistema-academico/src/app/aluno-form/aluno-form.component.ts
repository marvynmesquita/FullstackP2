import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AlunoService } from '../aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.css'
})
export class AlunoFormComponent {
  fb = inject(FormBuilder);
  service = inject(AlunoService);
  router = inject(Router);

  form = this.fb.group({
    nome: ['', Validators.required],
    nota: [0, [Validators.required, Validators.min(0), Validators.max(10)]]
  });

  salvar() {
    if (this.form.valid){
      const { nome, nota } = this.form.value;
      this.service.adicionar({ nome: nome as string, nota: nota as number });
      alert('Aluno adicionado com sucesso!');
      this.router.navigate(['/']);
    }
  }
}
