import { Component, OnInit, OnChanges } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = "angular-test-project";
    titleNotUsed = "This is not used in the  file.";

    testvariable: any; // variable not used test any
    testvariableUsed : any; // variable test Used any

                      List = []; // array not used  
    ListUsed = [1,2,3]; // array used 

    isVariable : Boolean = true; // boolean  not used 
    isVariableUsed : boolean = true; // boolean used 

    private testPrivate :string | undefined; // private property not used 
        private testPrivateUsed :string | undefined; // private property used 

    protected testProtected : any; // protected property not used 
    protected testProtectedUsed : any; // protected property used

    public testPublic : number = 0; //public property not used
    public testPublicoUsed : number = 10; //public property used 

    
    constructor() {}
    test() {
      const testConst ="test";
      const variable = "test Used variable";
      alert(variable);
      let testLet = "test";
      let variableLet = "let";
      alert(variableLet);
      var testVar = "test";
        // coments
        /* comment 
        coment 
        */
       console.log(this.title);
       console.log("test remove console.log");

       alert(this.testPublicoUsed);
             alert(this.testvariableUsed);
       alert(this.ListUsed);
          if(this.isVariableUsed){
        alert(this.testPrivateUsed);
       }else{
        alert(this.testProtectedUsed);
       }

       window.alert(this.title);
    }
}
