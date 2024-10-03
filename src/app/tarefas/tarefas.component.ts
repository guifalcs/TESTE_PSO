import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  tarefas = [
    {
      titulo: 'Estudar Node JS',
      descricao: "Preciso aprender a criar um servidor backend utilizando Node.js, conectá-lo ao MySQL para gerenciar dados e alimentar o frontend, garantindo que as informações sejam transmitidas de forma eficiente.",
      dataCriacao: '3/10/24'
    },
    {
      titulo: 'Praticar Git',
      descricao: "Preciso aprender a criar um servidor backend utilizando Node.js, conectá-lo ao MySQL para gerenciar dados e alimentar o frontend, garantindo que as informações sejam transmitidas de forma eficiente.",
      dataCriacao: '3/10/24'
    },
    {
      titulo: 'Finalizar projeto de frontend',
      descricao: "Preciso aprender a criar um servidor backend utilizando Node.js, conectá-lo ao MySQL para gerenciar dados e alimentar o frontend, garantindo que as informações sejam transmitidas de forma eficiente.",
      dataCriacao: '3/10/24'
    },
    {
      titulo: 'Ler um livro sobre design de software',
      descricao: "Escolher um livro que aborde padrões de design e boas práticas na construção de software.",
      dataCriacao: '3/10/24'
    },
    {
      titulo: 'Fazer um curso de APIs REST',
      descricao: "Encontrar um curso online que ensine a criar e consumir APIs RESTful, aplicando conceitos de segurança.",
      dataCriacao: '3/10/24'
    },
    {
      titulo: 'Configurar ambiente de desenvolvimento',
      descricao: "Instalar e configurar o Visual Studio Code, extensões necessárias e ferramentas para desenvolvimento eficiente.",
      dataCriacao: '3/10/24'
    }
  ]

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
    alert('Limpado')
  }}


