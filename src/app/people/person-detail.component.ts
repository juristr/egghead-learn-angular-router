import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-detail',
  template: `
    <p>
      person-detail works!
    </p>
    <div *ngIf="shouldShowChildren">
      We should also load the children.
    </div>
  `,
  styles: []
})
export class PersonDetailComponent implements OnInit {
  shouldShowChildren = false;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.shouldShowChildren =
      this.activatedRoute.snapshot.queryParams['showChilds'] === 'true';

    // this.activatedRoute.queryParams.subscribe(data => {
    //   this.shouldShowChildren = data['showChilds'] === 'true';
    // });
  }
}
