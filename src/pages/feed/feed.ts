import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {


  public nome_usuario: string = "Rafael";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(nm1: number, nm2: number): void {
    //alert(nm1 + nm2);
  }
  ionViewDidLoad() {
    //this.somaDoisNumeros(7, 11);
  }

}
