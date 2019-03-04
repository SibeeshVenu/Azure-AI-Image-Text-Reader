import { Component } from '@angular/core';
import { DetectionService } from '../detection.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  lines: string;
  stringResult: string;
  submitted = false;
  constructor(private detectionService: DetectionService) {
  }

  public myreg = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;

  url = new FormControl('', [Validators.required, Validators.pattern(this.myreg)]);

  markTouched() {
    this.url.markAsTouched();
    this.url.updateValueAndValidity();
  }

  async submit() {
    if (this.url.value) {
      this.submitted = true;
      const result: any = await this.detectionService.post(this.url.value);
      if (result) {
        const resultArray: Array<string> = [];
        this.lines = result.regions[0].lines.forEach((obj: any) => {
          obj.words.forEach((word: any) => {
            resultArray.push(word.text);
          });
        });
        this.stringResult = resultArray.join(' ');
      }
    }
  }
}
