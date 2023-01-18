import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  visibleOperationalSystem: boolean = false
  visibleVirtualization: boolean = false
  visibleNetworkDevices: boolean = false
  visibleDataBase: boolean = false
  visibleProgrammingLanguages: boolean = false
  visibleSystemsTools: boolean = false
  visibleHardware: boolean = false
  visibleOthers: boolean = false

  showhideOperationalSystems() {
    this.visibleOperationalSystem = this.visibleOperationalSystem ? false : true
  }

  showVirtualization() {
    this.visibleVirtualization = this.visibleVirtualization ? false : true
  }

  showhideNetworkDevices() {
    this.visibleNetworkDevices = this.visibleNetworkDevices ? false : true
  }

  showhideDataBase() {
    this.visibleDataBase = this.visibleDataBase ? false : true
  }

  showhideProgrammingLanguages() {
    this.visibleProgrammingLanguages = this.visibleProgrammingLanguages ? false : true
  }

  showhideSystemsTools() {
    this.visibleSystemsTools = this.visibleSystemsTools ? false : true
  }

  showhideHardware() {
    this.visibleHardware = this.visibleHardware ? false : true
  }

  showhideOthers() {
    this.visibleOthers = this.visibleOthers ? false : true
  }
}
