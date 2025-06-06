import { Injectable } from "@angular/core";
import { Aluno } from "./aluno.model";

@Injectable({ providedIn: "root" })
export class AlunoService {
  private alunos: Aluno[] = [
    new Aluno('João', 8, 1),
    new Aluno('Maria', 5.5, 2),
  ];

  listar(): Aluno[] {
    return this.alunos;
  }

  adicionar(aluno: Omit<Aluno, 'id'>) {
    const novoId = this.alunos.length + 1;
    const novoAluno = new Aluno(aluno.nome, aluno.nota, novoId);
    this.alunos.push(novoAluno);
  }
}
