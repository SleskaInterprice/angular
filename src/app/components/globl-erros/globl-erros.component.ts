import { Component } from '@angular/core';
import { ErrorService } from 'src/app/services/error.serviece';

@Component({
  selector: 'app-globl-erros',
  templateUrl: './globl-erros.component.html',
  styleUrls: ['./globl-erros.component.scss']
})
export class GloblErrosComponent {
  constructor(public errorService: ErrorService) {
  }
}
