import { TarefasService } from './tarefas.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {

  //Inicialização Tarefas

  tarefas: any[] = [];

  //criação do formulario

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private tarefasService: TarefasService
  ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      titulo: '',
      descricao: ''
    });

    this.getTarefas()
  }

  //Array de tarefas

  getTarefas() {
    this.tarefasService.getTarefas().subscribe(
      (data: any) => {
        this.tarefas = data;
      },
      (error: any) => {
        console.error('Erro ao obter tarefas:', error);
      }
    );
  }

  //Paginação:

  tarefasPorPag: number = 3;
  paginaAtual: number = 1;

  get tarefasPaginadas() {
    const inicio = (this.paginaAtual - 1) * this.tarefasPorPag;
    return this.tarefas.slice(inicio, inicio + this.tarefasPorPag);
  }

  totalPaginas() {
    return Math.ceil(this.tarefas.length / this.tarefasPorPag);
  }

  mudarPagina(pagina: number) {
    if (pagina < 1 || pagina > this.totalPaginas()) {
      return;
    }
    this.paginaAtual = pagina;
  }

  //Ações

  salvar(){
    alert('Tarefa salva')
  }

  limpar(){
    this.formulario.reset()
  }}


