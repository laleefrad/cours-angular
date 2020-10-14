/** pour déclarer une classe comme composant de notre application, on importe component via "@angular/core
 * **/
import {Component} from '@angular/core';

/**c'est ce qu'on appelle un décorateur
 * il va nous permettre de donner les renseignements sur notre composant
 */


@Component({
  /** Le sélécteurest l'ID, l'identifiant unique du composant au sein de l'application **/


  selector: 'app-root',
  /** c'est la partie visible de notre composant. C'est ce qui s'affiche à notre utilisateur **/

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  /** Déclarer le style CSS spécifique à ce composant */
})
export class AppComponent {
  /** la classe contient les données du composant
   Dans l'architecture MVVM, notre classe correspond au Model'*/


  /** déclaration d'une propriété (variable) **/
  title = 'Gestion de Contact';
  contactProfil = null;


  /** déclaration d'un objet contact */
  unContact = {
    id: 1,
    name: 'Nora DARFILAL',
    email: 'nora.darfilal@gmail.com ',
    tel: '06 52 19 73 11'
  };
  /** tableau de contacts */
  mesContacts = [
    {
      id: 1,
      name: 'Hugo LIEGEARD',
      email: 'hugo@biyn.media',
      tel: '07 83 97 15 15'
    },
    {
      id: 2,
      name: 'Nora DARFILAL',
      email: 'nora.darfilal@gmail.com',
      tel: '07 83 20 71 94'
    },
    {
      id: 3,
      name: 'Manon DERYDT',
      email: 'manon.derydt@gmail.com',
      tel: '07 96 52 41 23'
    },
    {
      id: 4,
      name: 'Olga KORDIAK',
      email: 'olga.kordiak@gmail.com',
      tel: '01 56 89 78 45'
    },
  ];

  /** permet d'afficher les informations d'un objet contact */
  displayContact(contactClique): void {
    console.log(contactClique);
    this.contactProfil = contactClique;

  }
}
