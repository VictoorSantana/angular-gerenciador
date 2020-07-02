import { Routes } from '@angular/router';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { TesteRotaComponent } from './teste-rota/teste-rota.component';

export const TarefasRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/teste',
        component: TesteRotaComponent
    },


];