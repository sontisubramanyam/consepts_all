import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HeroService } from '../service/hero.service';
import { EmployeeDetails } from '../model_classes/employeeDetails';
import { trigger, transition, style, animate } from '@angular/animations';
import { ConfirmDialogService } from '../_confirm-dialog/confirm-dialog/confirm-dialog.service';
import { LoaderService } from '../_loader-service/-loader.service';
import { SortByPipe } from '../sortingbypipe/sorting'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger(
      'opacityAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('700ms', style({ opacity: 0 }))
      ])
    ]
    )
  ],
})

export class HomeComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  addUserButton: boolean;
  showResourceDetails: boolean = false;
  private taxSS = new Subject();
  busy = true;
  employeeDetailsone: EmployeeDetails[] = [];
  editData: any;
  hideTabledta: boolean = true;
  firstName: any;
  EmployeeDetails: any[];

  constructor(private formBuilder: FormBuilder, private heroService: HeroService, private ConfirmDialogService: ConfirmDialogService, private loaderService: LoaderService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      acceptTerms: [false, Validators.requiredTrue]
    });
    this.getUserDet();
  }
  get f() { return this.registerForm.controls; }

  onCancel() {
    this.showResourceDetails = false;
    this.registerForm.reset();
  }

  cancelbutton() {

  }

  registersub() {

    this.heroService.saveObject('', this.getApiFormattedJson())
      .pipe(takeUntil(this.taxSS))
      .subscribe(
        (data: any) => {
          this.getUserDet();
          this.showResourceDetails = false;
          if (data.body.status) {
            // this.toastrService.success('Tax Added Successfully', 'Success');
          } else {
            const error: string = data.body.description;
            // this.toastrService.error(error, 'Error');
          }
        }, error => {
          // console.log(error);
        }
      );
  }

  editSavedatails() {
    this.editData
    this.heroService.editSaveDetails(this.editData.id, this.getApiFormattedJson())
      .pipe(takeUntil(this.taxSS))
      .subscribe(
        (data: any) => {
          this.getUserDet();
          this.showResourceDetails = false;
          this.hideTabledta = true;
          // this.toastrService.success('Tax Added Successfully', 'Success');
        }, error => {
          // console.log(error);
        }
      );
  }


  setBusy(isBusy: boolean) {
    this.busy = isBusy;
  }

  getUserDet() {
    this.loaderService.display(true);
    this.heroService.getObject("")
      .pipe(takeUntil(this.taxSS))
      .subscribe(
        (data: any[]) => {
          // this.dataSource = new MatTableDataSource(data);
          // this.dataSource.paginator = this.paginator;
          // this.dataSource.sort = this.sort;
          this.EmployeeDetails = data;
          this.loaderService.display(false);
        },
        error => { },
        () => {

        }
      );
  }

  getApiFormattedJson() {
    return {
      title: this.registerForm.controls.title.value,
      firstName: this.registerForm.controls.firstName.value,
      lastName: this.registerForm.controls.lastName.value,
      email: this.registerForm.controls.email.value,
      acceptTerms: this.registerForm.controls.acceptTerms.value
    };
  }

  editSaveDetails(data: EmployeeDetails) {
    this.showResourceDetails = true;
    this.addUserButton = false;
    this.editData = data;
    this.registerForm = this.formBuilder.group({
      title: [data.title],
      firstName: [data.firstName],
      lastName: [data.lastName],
      email: [data.email],
      acceptTerms: [data.acceptTerms]
    });
  }

  deleteUserDetails(item: EmployeeDetails) {

    this.ConfirmDialogService.confirm('Please confirm..', 'Do you really want to Delete')
      .then((confirmed) => {
        if (confirmed) {
          this.heroService.deleteEmployee("", item.id)
            .subscribe((data: EmployeeDetails) => {
              this.getUserDet();
            });
        }
      });

  }


  // .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

  openModal() {
    this.showResourceDetails = true;
    this.addUserButton = true;
  }

  search() {
    this.employeeDetailsone = this.EmployeeDetails.filter(res => {
      return res.this.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase())
    });
  }
 


}







