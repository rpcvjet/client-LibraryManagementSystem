import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Member } from './member';
import { Observable, BehaviorSubject } from 'rxjs';

const BASE_URL = 'http://localhost:8000/api/member';

@Injectable({ providedIn: 'root' })
export class MemberSectionService {
  searchOption = [];
  public memberData: Member[];

  private memberID = new BehaviorSubject(null);
  currentId = this.memberID.asObservable();

  constructor(private httpClient: HttpClient) {}

  getURL() {
    return `${BASE_URL}`;
  }

  getMemberbyId(id): Observable<any> {
    return this.httpClient.get(`${BASE_URL}/${id}`);
  }

  getAll() {
    return this.httpClient.get(`${BASE_URL}/all`);
  }

  getMembersHasBooks() {
    return this.httpClient.get('http://localhost:8000/api/booksout');
  }

  createMember(member) {
    console.log('member', member);
    return this.httpClient.post(`${BASE_URL}/add`, member);
  }

  updateMemberForm(member) {
    return this.httpClient.put(`${BASE_URL}/update`, member);
  }

  getCheckedOutBooksByMember(memberid) {
    return this.httpClient.get(
      `http://localhost:8000/api/booksout/${memberid}`,
      memberid
    );
  }

  // deleteMember(memberid) {
  //   return this.httpClient.delete(this.getMemberbyId(memberid));
  // }
}
