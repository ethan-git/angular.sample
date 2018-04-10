import { Component } from '@angular/core';

@Component({
    selector: 'a03Component',
    template: `
        <div class="panel-heading">
            <h3>Reactive Base Form</h3>
        </div>
        <div class="panel-body">

            <form>
                <div>
                    <label>UserName:</label>
                    <div>
                        <input type="text" class="form-control">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <br>

                <div>
                    <label>SSN: </label>
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
                    <select>
                        <option></option>
                    </select>
                </div>
                <br>

                <div>
                    <label>Age: </label>
                    <input type="number" class="form-control">
                </div>
                <br>
                <button class="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>

        <div class="panel-body">
            All: <br>
            Bind: <br>
            Getter: <br>
        </div>
    `
})
export class A03Component{

}
