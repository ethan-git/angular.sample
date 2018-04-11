import { Component } from '@angular/core';

@Component({
    selector: 'a04Component',
    template: `
        <div class="panel-heading">
            <h3>Reactive Form</h3>
        </div>
        <div class="panel-body">
            <form>
                <label>ID</label>
                <input type="name" class="form-control">

                <label>E-Mail</label>
                <input type="email" class="form-control">

                <label>Product</label>
                <div>
                    <div>
                        <input class="form-control">
                    </div>
                </div>

                <label>Name</label>
                <div>
                    <input type="text" class="form-control">
                    <input type="text" class="form-control">
                </div>

                <button type="button" class="btn btn-primary">Add Product</button>
                <button type="submit" class="btn btn-danger">Submit</button>
            </form>
            <hr>
            <label>Form Value: </label>
            <pre></pre>
        </div>
    `
})
export class A04Component{

}
