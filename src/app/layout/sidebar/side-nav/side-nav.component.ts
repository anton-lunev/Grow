import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'grow-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() isLoading: boolean;

  ngOnInit() {}
}
