import { Component } from '@angular/core';

@Component({
    selector: 'a01Component',
    template: `
        <div class="panel-heading">
            <h3>Template Base Form</h3>
        </div>
        <div class="panel-body">
            <form>
                <div>
                    <label>UserName:</label>
                    <input type="text" class="form-control">
                    <input type="text" class="form-control">
                </div>
                <br>

                <div>
                    <label>SSN:</label>
                    <input type="text" class="form-control">
                </div>
                <br>

                <div>
                    <label>Password:</label>
                    <input type="text" class="form-control">
                </div>
                <br>

                <div>
                    <label>Confirm password : </label>
                    <input type="password" class="form-control">
                </div>
                <br>

                <div>
                    <label>Department : </label>
                    <select class="form-control">
                        <option></option>
                    </select>
                </div>
                <br>
                
                <button class="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    `
})
export class A01Component{
    public ary: string[] = ['Salary', 'Department']
    public dept: string = 'Salary';
    public firstName: string = 'HongGilDong';
    
}
