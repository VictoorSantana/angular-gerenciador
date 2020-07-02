import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarefa } from '../shared/tarefa.model';
import { NgForm } from '@angular/forms';
import { TarefaService } from '../service/tarefa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teste-rota',
  templateUrl: './teste-rota.component.html',
  //styleUrls: ['./teste-rota.component.css']
})
export class TesteRotaComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void {
    if(this.formTarefa.form.valid) {    
        this.tarefa.id = Math.round(Math.random() * 10100);    
        this.tarefaService.cadastrar(this.tarefa);
        this.router.navigate(['/tarefas']);
    }    
  }

}
