import { Component } from '@angular/core';

export class PostsModel {

}

export type Post= {
  id:number;
  title:string;
  body: string;
  dateCreated: Date;
  userName: string;
  firstName: string;
  lastName: string;
}