export interface IBook {
  id: number;
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  title: string;
  pages: number;
  year: number;
  rating: number;
  isPlay: boolean;
};

//export class Book {
//  id: number;
//  author: string;
//  country: string;
//  imageLink: string;
//  language: string;
//  link: string;
//  title: string;
//  pages: number;
//  year: number;

//  constructor(id: number, author: string, country: string, imageLink: string, language: string, link: string, title: string, pages: number, year: number) {
//    this.id = id;
//    this.author = author;
//    this.country = country;
//    this.imageLink = imageLink;
//    this.language = language;
//    this.link = link;
//    this.title = title;
//    this.pages = pages;
//    this.year = year;
//  }
//}
