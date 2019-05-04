import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Member } from './member';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:8000/api/member';

@Injectable({ providedIn: 'root' })
export class MemberSectionService {
  searchOption = [];
  public memberData: Member[];

  constructor(private httpClient: HttpClient) {}

  getURL() {
    return `${BASE_URL}`;
  }

  getMemberbyId(id) {
    return `${this.getURL()}/${id}`;
  }

  getAll() {
    return this.httpClient.get(`${BASE_URL}/all`);
  }

  createMember(member) {
    return this.httpClient.post(`${BASE_URL}/add`, member);
  }

  updateMember(member) {
    return this.httpClient.patch(this.getMemberbyId(member.id), member);
  }

  deleteMember(memberid) {
    return this.httpClient.delete(this.getMemberbyId(memberid));
  }
}
