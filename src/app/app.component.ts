import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [{
    fieldGroupClassName: 'row',
    fieldGroup: [{
        className: 'col-2',
        type: 'select',
        key: 'user_title',
        templateOptions: {
          label: 'Title',
          placeholder: 'select',
          required: true,
          options: [
            {value: "Mr", label: "Mr"},
            {value: "Mrs", label: "Mrs"},
            {value: "Ms", label: "Ms"}
          ]
        },
      },
      {
        className: 'col-10',
        type: 'input',
        key: 'user_name',
        templateOptions: {
          label: 'Name',
          placeholder: 'Elon Musk',
          required:true,
          maxLength: 25,
        },
      }]
  },
  {
    key: 'user_email',
    type: 'input',
    templateOptions: {
      label: 'Email',
      placeholder: 'name@example.com',
      pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$",
      required:true,
      maxLength: 50
    }
  },
  {
    key: 'user_password',
    type: 'input',
    templateOptions: {
      label: 'password',
      type: 'password',
      placeholder: 'Your password',
      //pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$",
      required:true,
      maxLength: 50
    }
  },
  {
    key: 'user_phone',
    type: 'input',
    templateOptions: {
      type: 'number',
      label: 'Phone Number',
      placeholder: '8987653467',
      //pattern:"^[6-9]\d{9}$",
      required:true,
      maxLength: 10
    }
  },
    {
      key: 'user_street',
      type: 'input',
      templateOptions: {
        label: 'Address',
        placeholder: 'House-120A Rick Street ',
        required:true,
        maxLength: 100
      }
    },
    {
      key: 'user_cityname',
      type: 'input',
      templateOptions: {
        label: 'City',
        required:true,
        placeholder: 'Patna',
        maxLength: 30,
      }
    },
    {
      key: 'user_state',
      type: 'select',
      templateOptions: {
        label: 'State',
        placeholder: 'Select',
        required: true,
        options: [
          { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
          { value: 'Arunachal Pradesh', label: 'Arunachal Pradesh' },
          { value: 'Assam', label: 'Assam' },
          { value: 'Bihar', label: 'Bihar' },
          { value: 'Chattisgarh', label: 'Chattisgarh' },
          { value: 'Goa', label: 'Goa' },
          { value: 'Gujarat', label: 'Gujarat' },
          { value: 'Haryana', label: 'Haryana' },
          { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
          { value: 'Jammu and Kashmir', label: 'Jammu and Kashmir' },
          { value: 'Jharkhand', label: 'Jharkhand' },
          { value: 'Karnataka', label: 'Karnataka' },
          { value: 'Kerala', label: 'Kerala' },
          { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
          { value: 'Maharashtra', label: 'Maharashtra' },
          { value: 'Manipur', label: 'Manipur' },
          { value: 'Meghalaya', label: 'Meghalaya' },
          { value: 'Mizoram', label: 'Mizoram' },
          { value: 'Nagaland', label: 'Nagaland' },
          { value: 'Odisha', label: 'Odisha' },
          { value: 'Punjab', label: 'Punjab' },
          { value: 'Rajasthan', label: 'Rajasthan' },
          { value: 'Sikkim', label: 'Sikkim' },
          { value: 'Tamil Nadu', label: 'Tamil Nadu' },
          { value: 'Telangana', label: 'Telangana' },
          { value: 'Tripura', label: 'Tripura' },
          { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
          { value: 'Uttrakhand', label: 'Uttrakhand' },
          { value: 'West Bengal', label: 'West Bengal' },
        ]
      }
    }
  ];

  onSubmit() {
    alert(
      JSON.stringify(this.model, null, 4)
    );
  }
}