import { TarefasService } from './tarefas.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {

  //Inicialização tarefas

  tarefas: any[] = [];

  //criação do formulario

  formulario: FormGroup;

  //Construtor

  constructor(
    private fb: FormBuilder,
    private tarefasService: TarefasService
  ) { }

  //Inicialização do componente

  ngOnInit(): void {
    this.formulario = this.fb.group({
      id: '',
      titulo: '',
      descricao: ''
    });

    this.getTarefas()
  }

  //Obtendo as tarefas via API

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

  //Ações dos botões da aplicação

  excluir(id: number){
    if (confirm('Tem certeza que deseja excluir a tarefa?')) {
    this.tarefasService.deleteTarefas(id).subscribe(
      (data: any) => {
        this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
      },
      (error: any) => {
        console.error('Erro ao excluir tarefa:', error);
      }
    );
  }
  }

  salvar(){
    this.tarefasService.addTarefas(this.formulario.value).subscribe(
      (data: any) => {
        this.tarefas.push(data);
        this.formulario.reset();
      },
      (error: any) => {
        console.error('Erro ao adicionar tarefa:', error);
      }
    )
  }

  limpar(){
    this.formulario.reset()
  }}



