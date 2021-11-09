import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FindArtistService} from "../service/find-artist.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private testService: FindArtistService) {
    this.searchForm = this.formBuilder.group({
      artistName: ['']
    })
  }

  ngOnInit(): void {
  }

  getArtist() {
    const name = this.searchForm.get("artistName")?.value
    if (name.length === 0) {
      return
    }
    this.testService.findArtistAlbum(name);
  }
}
