import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-detail',
  template: `
    <p>
      Displaying person with id {{ personId }}
    </p>
  `,
  styles: []
})
export class PersonDetailComponent implements OnInit {
  personId;
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.personId = this.activeRoute.snapshot.params['personId'];
    // this.activeRoute.params.subscribe(data => {
    //   this.personId = data['personId'];
    // });
  }
}
