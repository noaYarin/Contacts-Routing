export class Contact {
  name: string;
  age: number;
  dateOfBirth: Date;
  isLikeCold: boolean;
  constructor(
    name: string,
    age: number,
    dateOfBirth: Date,
    isLikeCold: boolean
  ) {
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
    this.isLikeCold = isLikeCold;
  }
}
