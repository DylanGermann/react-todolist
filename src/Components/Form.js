import { useState } from "react";
import Item from "./Item";
export default function Form(){



    return (

        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">

            <form action="" className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">Chose à faire</label>
                <input type="text" name="" id="todo" className="form-control" />
                <button className="mt-2 btn btn-primary d-block">Envoyez</button>
            </form>

            <h2>Liste des choses à faire :</h2>
            <ul className="list-group">
                <Item></Item>
                <Item></Item>
                <Item></Item>
            </ul>
        </div>

    )
}