import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {

  // have a node tree structur where the apps property is binded in share html
  // in the share html we have the src as an array cuz we make the property apps to any and index the array files with i.image and i.titel
  public apps: any = [
    {
      image:'../assets/whatsapp-icon.png',
      title:'Whatsapp'
    },
    {
      image:'../assets/facebook-icon.png',
      title:'Facebook'
    },
    {
      image:'../assets/youtube-icon.png',
      title:'Youtube'
    },
    {
      image:'../assets/instagram-icon.png',
      title:'Instagram'
    },
    {
      image:'../assets/Gmail-icon.png',
      title:'G-mail'
    },
    {
      image:'../assets/beer-icon.png',
      title:'beer'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
