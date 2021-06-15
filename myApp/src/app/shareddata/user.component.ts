export class User{
    private userId :number;
	private name :string;
	private password:string;
	private phone :string;
    private email :string;
    

    constructor(name ?:any, phone ?:any, email ?:any ,password?:any,userId ?:any,){
        this.email = email;
        this.userId = userId;
        this.name = name;
        this.password = password;
        this.phone = phone

    }


}

