import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  visibleTecnologo: boolean = false
  visibleMicroEmpreendedor: boolean = false
  visibleAssessor: boolean = false
  visibleAssistantTechnician: boolean = false
  visibleComputerTechnician: boolean = false
  visibleWebDesigner: boolean = false

  showHideTecnologo() {
    this.visibleTecnologo = this.visibleTecnologo ? false : true
  }

  showHideMicroEmpreendedor() {
    this.visibleMicroEmpreendedor = this.visibleMicroEmpreendedor ? false : true
  }

  showHideAssessor(){
    this.visibleAssessor = this.visibleAssessor ? false : true
  }

  showHideAssistantTechnician(){
    this.visibleAssistantTechnician = this.visibleAssistantTechnician ? false : true
  }

  showHideComputerTechnician(){
    this.visibleComputerTechnician = this.visibleComputerTechnician ? false : true
  }

  showHideWebDesigner(){
    this.visibleWebDesigner = this.visibleWebDesigner ? false : true
  }
}
