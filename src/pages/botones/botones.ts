import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'; //// Para que tome al php
import { HttpHeaders } from '@angular/common/http';
/**
 * Generated class for the BotonesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-botones',
  templateUrl: 'botones.html',
})
export class BotonesPage {

  items: any[];
  longitud : any;
  ip_wamp: string ;
  header : object ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.items = [];
    this.longitud = 0;
    //this.ip_wamp = 'http://localhost/pruebas/Ionic/prueba.php?localidad='+this.localidad_get; //IP local
    this.ip_wamp = 'http://localhost/pruebas/Ionic/botones.php'; //IP local
    //this.http.get(this.ip_wamp)
    this.http.get(this.ip_wamp)
    .subscribe((data : any) =>
      {
        this.longitud = data['lenght'];
        console.log(this.longitud);
        console.log(this.ip_wamp);
        console.log("Encontro IP");
        for(let i = 0; i < this.longitud; i++){
          //alert(this.ip);
          //console.dir(data);
          console.log(data[i][0]);
            this.items.push({
              text: data[i][0],
              id: i
            });  
          
        } //Fin For
      },
      (error : any) =>
      {
        console.log("No encontro, corregir");
        console.log(this.ip_wamp);
        this.ip_wamp = prompt("IP incorrecta, ingrese otra", "http://192.168.0.34/pruebas/Ionic/prueba.php");
        // "http://xxx.xxx.x.xxx/pruebas/Ionic/prueba.php"
        //this.ip = 'http://localhost/pruebas/Ionic/prueba.php';
        //alert(this.ip);
        //this.load(localidad);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BotonesPage');
  }

}
