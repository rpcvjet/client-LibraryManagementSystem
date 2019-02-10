import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberSectionService } from './member-section-service/member-section.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    MemberSectionService
  ]
})
export class CoreDataModule {}
