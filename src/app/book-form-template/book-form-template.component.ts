import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-form-template',
  templateUrl: './book-form-template.component.html',
  styleUrls: ['./book-form-template.component.css']
})
export class BookFormTemplateComponent implements OnInit {

formSubmitted=false;
bookInfo = {
  title: "",
  author: "",
  genre: ""
}

displayTitle = "";

  onFormSubmit(formObj: NgForm){
    this.formSubmitted=true;

    this.bookInfo.title = formObj.value.title;
    this.bookInfo.author = formObj.value.author;
    this.bookInfo.genre = formObj.value.genre;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
