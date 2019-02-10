import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Member} from './member';
import { Observable } from 'rxjs';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class MemberSectionService {
  searchOption = [];
  public memberData: Member[];
  model = 'users';

  constructor(private httpClient: HttpClient) { }

  getURL() {
    return `${BASE_URL}`;
  }

  getMemberbyId(id) {
    return `${this.getURL()}/${id}`;
  }

  getAll(): Observable<Member[]> {
    return this.httpClient.get<Member[]>(this.getURL());
  }

  createMember(member) {
    return this.httpClient.post(this.getURL(), member);
  }

  updateMember(member) {
    return this.httpClient.patch(this.getMemberbyId(member.id), member);
  }

  deleteMember(memberid) {
    return this.httpClient.delete(this.getMemberbyId(memberid));
  }

  filteredListOptions() {

    let members = this.memberData;
        let filteredPostsList = [];
        for (let member of members) {
            for (let options of this.searchOption) {
                if (options.name === member.name) {
                  filteredPostsList.push(member);
                }
            }
        }
        this.memberData = filteredPostsList;
        return filteredPostsList;
  }

}
