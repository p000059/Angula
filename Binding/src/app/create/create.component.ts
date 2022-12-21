import { filter, map } from 'rxjs/operators';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ScreateService } from './screate.service';
import { Person } from './../person/Person';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  forms!: FormGroup;
  
  lstPerson: Person[] = []
  objPerson = new Person();
  
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient){
    
  }
  ngOnInit(): void {
    
    /* this.forms = new FormGroup({
      name: new FormControl(null),
      age: new FormControl(null),
      email: new FormControl(null)
    })*/

    this.forms = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(80)]],
      age: [null],
      email: [null,[Validators.email]]
    })
  }

  onSubmit(){
    console.log(this.forms)

    this.http.post('https://httpbin.org/post', JSON.stringify(this.forms.value))
    //.map((res: any) => res)
    .subscribe((data: any) => {
      console.log(data)
      this.onReset()
    })
  }

  onReset(){
    this.forms.reset()
  }

  checkValidTouched(field: any){
    return !this.forms.get(field)?.valid && this.forms.get(field)?.touched
  }

  implementCSSerror(field: any){
    return {
      'has-error': this.checkValidTouched(field),
      'has-feedback': this.checkValidTouched(field)
    }
  }
}
