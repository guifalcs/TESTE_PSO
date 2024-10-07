import { TarefasService } from './../tarefas.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.scss']
})
export class EditarTarefaComponent implements OnInit {

  //Inicialização tarefas

  tarefas: any[] = [];

  constructor(
    private tarefasService: TarefasService,
    private fb: FormBuilder,
  ) { }

  //criação do formulario

  formulario: FormGroup;

  ngOnInit(): void {

    this.formulario = this.fb.group({
      id: this.idTarefa,
      titulo: null,
      descricao: null
    });
  }

   @Input() idTarefa: number
   @Output() fecharModal = new EventEmitter()
   @Output() atualizar = new EventEmitter()

  cancelar() {
    this.fecharModal.emit();
  }

   salvar() {
    const tarefa = {
      id: this.idTarefa,
      titulo: this.formulario.get("titulo")?.value,
      descricao: this.formulario.get("descricao")?.value
    };

    this.tarefasService.editarTarefas(this.idTarefa, tarefa).subscribe(
      () => {
        this.atualizar.emit({atualzarForm: true});
        this.fecharModal.emit();
      },
      (error) => {
        console.error('Erro ao editar tarefa:', error);
      }
    );
   }

}
