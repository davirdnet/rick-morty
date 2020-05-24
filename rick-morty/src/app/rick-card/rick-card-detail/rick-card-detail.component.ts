import { RickCardService } from './../rick-card.service';
import { RickCardDetailService } from './rick-card-detail.service';
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-rick-card-detail',
  templateUrl: './rick-card-detail.component.html',
  styleUrls: ['./rick-card-detail.component.scss']
})
export class RickCardDetailComponent implements OnInit {

  public rickId;
  rick;

  constructor(
    private rickCardDetailService: RickCardDetailService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.route.params.subscribe(params => this.rickId = params['id']);
  }

  ngOnInit(): void {
    this.getRickCard();
  }

  getRickCard() {
    this.rick = this.rickCardDetailService.getRicky(this.rickId).subscribe(
      cards => cards.map(card => {
        this.rick = card;
      })
    );
  }

  goHistoric(name) {
    this.router.navigateByUrl('/trip-historic/' + name);
  }

  registerTrip() {
    this.dialog.open(RegisterTripModalComponent, {
      data: this.rick
    });
  }
}

@Component({
  selector: 'app-register-trip-modal',
  templateUrl: 'register-trip/register-trip-modal.html',
  styleUrls: ['register-trip/register-trip-modal.scss']
})

export class RegisterTripModalComponent implements OnInit {

  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar,
    private rickCardDetailService: RickCardDetailService,
    private rickCardService: RickCardService
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.form = this.formBuilder.group({
      atual: [''],
      destino: ['', [Validators.required]]
    });
  }
  limparFormulario() {
    this.form.reset();
  }

  register() {
    const saveForm = {
      rick_name: this.data.name,
      origin: this.form.get('atual').value,
      destiny: this.form.get('destino').value,
      current_dimension: this.form.get('destino').value,
    };

    this.rickCardDetailService
      .postTrip(saveForm)
      .subscribe(
        resultEdit => {
          if (resultEdit) {
            this.snackBar.open('Registro inserido com sucesso!', null, {
              duration: 2000,
              verticalPosition: 'top'
            });
          }
        }
      );

    const rickUpate = {
      name: this.data.name,
      current_dimension: this.form.get('destino').value
    };

    this.rickCardService
      .postTrip(this.data.id, rickUpate)
      .subscribe();
  }

}
