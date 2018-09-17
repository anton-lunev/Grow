import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreStoreModule } from './+store/core-store.module';

@NgModule({
  imports: [
    CommonModule, CoreStoreModule
  ],
  declarations: [],
})
export class CoreModule {
}
