import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './service/tarefa.service';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TesteRotaComponent } from './teste-rota/teste-rota.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [
    ListarTarefaComponent, 
    TesteRotaComponent
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
