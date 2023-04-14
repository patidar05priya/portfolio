import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service'
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 
  success = false;
  error = false;
  model: any = {};
  formData!: FormGroup;
  constructor(private contactService: ContactService, private builder: FormBuilder,){}

  ngOnInit() {
    this.formData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });
  }

  onSubmit(FormData: any) {
    this.contactService.PostMessage(FormData)
      .subscribe(response => {
        window.open("https://mailthis.to/confirm", "_blank");
        this.success = true;
        this.error = false;
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
        this.success = false;
        this.error = true;
      })
      this.reset()
  }

  reset(){
    this.formData.reset();
    setTimeout(() => {
      this.success = false;
      this.error = false;
    }, 2000); 
   
  }

  


}
