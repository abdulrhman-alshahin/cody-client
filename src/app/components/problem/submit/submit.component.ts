import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
})
export class SubmitComponent implements OnInit {
  constructor() {}
  fileName = '';

  ngOnInit(): void {}
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      console.log(this.fileName);
      // const formData = new FormData();
      // formData.append("thumbnail", file);
      // const upload$ = this.http.post("/api/thumbnail-upload", formData);
      // upload$.subscribe();
    }
  }
}
