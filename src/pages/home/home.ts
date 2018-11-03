import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetailPage} from '../detail/detail'; //Pagina detalles
import { HttpClient } from '@angular/common/http'; //// Para que tome al php
import { HttpHeaders } from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { FunctionCall } from '@angular/compiler';
//import {items} from '../home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[];
  longitud : any;
  ip_wamp: string ;
  header : object ;
  //localidad_get : string ;
  constructor(public navCtrl: NavController, public http: HttpClient) {
    //this.localidad = 'Rio Gallegos';
    /*
    this.localidad = {
      'localidad' : 'TELLIER'
    };
    */
  

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': ''
      })
    };

    //this.localidad_get = 'Rio%20Gallegos';
    this.items = [];
    this.longitud = 0;
    //this.ip_wamp = 'http://localhost/pruebas/Ionic/prueba.php?localidad='+this.localidad_get; //IP local
    this.ip_wamp = 'http://localhost/pruebas/Ionic/prueba.php'; //IP local
    //this.http.get(this.ip_wamp)
    this.http.get(this.ip_wamp)
    .subscribe((data : any) =>
      {
        console.log(this.ip_wamp);
        console.log("Encontro IP");
        //this.load(localidad);
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

  itemSelected(item){
    //alert(item.text);
    console.log(item);
    this.navCtrl.push(DetailPage, {
      item:item
    });
  }

  load(input_loc): void{
    var localidad = JSON.stringify({localidad: input_loc});
    this.http
    .post<string>(this.ip_wamp,localidad)
    .subscribe((data : any) =>
    {
      this.longitud = data['lenght'];
      console.log(this.longitud);
      for(let i = 0; i < this.longitud; i++){
        //alert(this.ip);
        //console.dir(data);
        //console.log(data[i][0]);
          this.items.push({
            text: data[i][0],
            direccion: data[i][1],
            telefono: data[i][2],
            pagina: data[i][3],
            id: i
          });  
        i++;
      } //Fin For
    },
    (error : any) =>
    {

    });
    
    
  }

}
