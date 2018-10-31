import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetailPage} from '../detail/detail';
import { HttpClient } from '@angular/common/http'; //// Para que tome al php

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[];
  ip_wamp: string ;
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.items = [];
    this.ip_wamp = 'http://localhost/pruebas/Ionic/prueba.php'; //IP local
    this.http.get(this.ip_wamp)
    .subscribe((data : any) =>
      {
        console.log("Encontro IP");
        this.load();
      },
      (error : any) =>
      {
        console.log("No encontro, corregido");
        this.ip_wamp = prompt("IP incorrecta, ingrese otra", "http://192.168.0.34/pruebas/Ionic/prueba.php");
        // "http://xxx.xxx.x.xxx/pruebas/Ionic/prueba.php"
        //this.ip = 'http://localhost/pruebas/Ionic/prueba.php';
        //alert(this.ip);
        this.load();
      });
  }

  itemSelected(item){
    //alert(item.text);
    this.navCtrl.push(DetailPage, {
      item:item
    })
  }

  load(): void{
    for(let i = 0; i<10;i++){
      //alert(this.ip);
      this.http
      .get(this.ip_wamp)
      .subscribe((data : any) =>
      {
         console.dir(data);
         this.items.push({
          text: data[i],
          id: i
        });
      },
      (error : any) =>
      {
         console.dir(error);
         //this.ip = prompt("IP incorrecta, ingrese otra", "http://localhost/pruebas/Ionic/prueba.php");
         //ip = 'http://localhost/pruebas/Ionic/prueba.php'; //Si no funciona la ip local intenta con otra
         //this.load(i,ip);
      });
    }
    
  }

}
