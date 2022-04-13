import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isLikeCold',
})
export class IsLikeColdPipe implements PipeTransform {
  transform(likeCold: boolean): string {
    let snowflakeIcon = '../../assets/images/snowflake.png';
    let fireIcon = '../../assets/images/fire-flame.png';
    return likeCold ? snowflakeIcon : fireIcon;
  }
}
