import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user: User = new User();
  id: any;
  constructor(private _httpClient: HttpClient, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params.id;
    this._httpClient.get('http://jsonplaceholder.typicode.com/users/' + this.id).subscribe(result => {
      this.user = result;
      console.log(this.user);
    }, errors => {
      console.log(errors)
    })
  }

  UpdateUser() {
    this._httpClient.put('http://jsonplaceholder.typicode.com/users/' + this.id, this.user).subscribe(result => {
      console.log('User Updated Successfully');
      console.log(this.user)
      this._router.navigate(['/users']);
    }, errors => {
      console.log(errors);
    })
  }

}
