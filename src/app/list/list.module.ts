import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { TweetsService } from '../services/tweets.service';

export const materialModules = [
  MatButtonModule,
  MatCardModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatIconModule
];

@NgModule({
  exports: [
    materialModules
  ],
  imports: [
    materialModules,
  ],
  providers: [TweetsService]
})
export class ListModule {
}
