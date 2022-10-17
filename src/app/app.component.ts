import { Component, ElementRef, ViewChild,AfterViewInit } from '@angular/core';
 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  
  title = 'SearchBarTask';
   className='test';
  searchText: any;
  hii!:string;
 @ViewChild('nameef')nameERef!:ElementRef; 
  user:any;
  paths = [
    { id: 1, name: 'sachincricket', path: '/assets/image/sachin1.jfif' },
    { id: 2, name: 'dhonicricket' , path: '/assets/image/dhoni.png'},
    { id:13, name: 'rohitcricket' , path: '/assets/image/rohit.jpg'},
    { id:14, name: 'cr7football' , path: '/assets/image/cr7.jfif' },
    { id: 5, name: 'messifootball' , path: '/assets/image/messi.jfif'},
    { id: 6, name: 'neymarfootball' , path: '/assets/image/ney.jfif'},
    { id: 7, name: 'kohlicricket' , path: '/assets/image/kohli.jfif'},
    { id: 8, name: 'pvsindhubadminton' , path: '/assets/image/pv.jfif'},
    { id: 9, name: 'ViswanathanAnanthchess' , path: '/assets/image/viswanathanchess.jpg'},
    { id: 10, name: 'magnuscarlsanchess' , path: '/assets/image/magnuschess.jfif'},
    { id: 11, name: 'sainanehwalbadminton' , path: '/assets/image/sain.jpg'}
    ,{ id: 12, name: 'undertakerwwe' , path: '/assets/image/under.jpg'}
  ];
  name: any;
test='uihsihsiushsiu<p></p>';
  print(event: any){
    console.log(event);
    this.name=event.target.value; 
  }

  greet(hiii:any){
    if(hiii==='arav'){
      alert("welcome back arav")
    }
    this.hii=hiii;
   
  }

  ngAfterViewInit(){
    this.nameERef.nativeElement.focus();
  }
  

}
