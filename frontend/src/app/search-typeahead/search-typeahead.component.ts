import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Observable, from} from 'rxjs';
import {debounceTime, switchMap, map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {ITmdbsearchdata} from '../searchdata';
import { RouterLink } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-typeahead',
  templateUrl: './search-typeahead.component.html',
  styleUrls: ['./search-typeahead.component.css'],
})


export class SearchTypeaheadComponent implements OnInit {

  constructor(private _httpclient: HttpClient, private router: Router) { }

  objSelected;
  searching;
  searchFailed

  form;

  @Output() SelectEmitter = new EventEmitter();

  ngOnInit(): void {
  }


  auto_complete(curr_string){
    // this._httpclient.get<ITmdbsearchdata[]>(`https://angnodehw-309323.wl.r.appspot.com/search/${curr_string}`).subscribe(data => this.suggestions = data);
    this._httpclient.get<ITmdbsearchdata[]>(`http://103.121.74.162:9095/search/${curr_string}`).subscribe(data => this.suggestions = data);
    // this._httpclient.get<ITmdbsearchdata[]>(`http://localhost:8080/search/${curr_string}`).subscribe(data => this.suggestions = data);
    // console.log(this.suggestions);
    return this.suggestions;

  }

  // something(){
  //   this.router.navigate(['/mylist'])
  // }

  public suggestions = new Array();
  public model: any;
  public asyncSelected;

  // pipe runs the nested arguments to it in sequence 
  // debouncetime emits the source observable after given time
  // map is mapping the current_typed string to a function to return data

  
  searchfnc = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(50),
      map( currently_typed => currently_typed === '' ? [] : this.auto_complete(currently_typed).slice(0,7) )
      // map(current_typed => current_typed === '' ? [] : statesWithFlags.filter(v => v.name.toLowerCase().indexOf(current_typed.toLowerCase()) > -1).slice(0, 10))
    )

  formatter = (x: {name: string}) => x.name;

  Navigate(input,cat,id){
    // console.log(input.value)
    // id = ''
    // input.value = '';
    // this.model = null;
    this.SelectEmitter.emit();
    this.router.navigate([`/watch/${cat}/${id}`])
    // routerLink="/watch/{{r['category']}}/{{r['id']}}"

  }

  selectObj(obj: any) {
    obj.preventDefault();
    this.model = null;
    this.objSelected = obj;
}

blurObj() {
   
    if(!this.objSelected) {
      
      this.form.get('obj').setValue('');
    }

  }
}
