export class Professional {
  constructor(
    private name: string,
    private age: number,
    private weight: number,
    private height: number,
    private isRetired: boolean,
    private nationality: string,
    private oscarsNumber: number,
    private profession: string
  ) {}

  public printAll(){
    for (const key in this) {
            console.log(this[key]) ;
    }
  }

  
}
