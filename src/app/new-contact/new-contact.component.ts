import {Component, EventEmitter,OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  @Output() newContactEvent = new EventEmitter();
  // ---- déclaration d'un nouvel objet vide
      nouveauContact ={
        name : null,
        email :null,
        te:null,
      };

      constructor() { }

      ngOnInit(): void {
      }

  /**
   * Cette fonction se déclanche à la soumission du formulaire.
   */
  submitContact(): void {
    // console.log(this.nouveauContact)
    // lorsque le formulaire est soumis, j'émets un évennement qui sera écouté par mon application et qui récupèrera les données du nouveau contact

    this.newContactEvent.emit(this.nouveauContact);
// réinitialise notre nouveau contact apres la soumission.
    this.nouveauContact = {
      name:null,
      email:null,
      tel:null
    };
  }
}
