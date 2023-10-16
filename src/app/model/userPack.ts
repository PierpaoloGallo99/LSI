export class UserPack {
  name:string="";
  password:string="";
  role:number | undefined=0;

  constructor(name: string, pass: string, role: number | undefined) {
    this.name=name; this.password=pass; this.role=role;
  }
}
