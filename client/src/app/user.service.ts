export class User{
  private username;
  constructor()
  {
    this.username='';

  }
  public getUserName()
  {
    return this.username;
  }
  public setUserName(name){
    this.username=name;
  }
}
