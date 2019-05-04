import { Pipe, PipeTransform } from '@angular/core';
import { Member } from '@front-lms/core-data';

@Pipe({
  name: 'memberFilter'
})
export class MemberFilterPipe implements PipeTransform {
  transform(members: Member[], searchTerm: string): Member[] {
    if (!members || !searchTerm) {
      return null;
    }
    return members.filter(
      member =>
        member.member_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
        -1
    );
  }
}
