import { Component, OnInit, OnChanges } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-root',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
    title = 'angular-test-project';
    testvariable: any; // variable 1
    List = []; // array
    isVariable : Boolean = true; // boolean 
    private testPrivate :string | undefined; // private property
    protected testProtected : any; // protected property
    public testPublic : number = 0; //public property
    
    constructor() {}
    ngOnInit(): void {
        
    }
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
       console.log("test remove console.log");

    }
}
