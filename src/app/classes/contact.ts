export class Contact {
  id: string;
  name?: string;
  age: number;
  dateOfBirth: Date;
  isLikeCold: boolean;
  constructor(
    id: string,
    name: string,
    age: number,
    dateOfBirth: Date,
    isLikeCold: boolean
  ) {
    this.id = id;
    this.setName(name);
    this.age = age;
    this.dateOfBirth = dateOfBirth;
    this.isLikeCold = isLikeCold;
  }
  setName(name: string) {
    if (name.length < 1) {
      throw new Error('Name is too short');
    } else {
      this.name = name;
    }
  }
}
