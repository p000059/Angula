export class course {
   
    private id: number
    private name: String
    
    constructor(id: number, name: string){

        this.id = id
        this.name = name;
    }

    getCourses(){

        return ['Java','Angula','Less','SASS']
    }
}