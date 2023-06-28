"use client"

import Layout from "@/components/Layout";
import { useState } from "react";

export default function NewProducts(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);

    return (
        <Layout>
            <h1>New Products</h1>
            <label> Product name</label>
            <input type="text" 
                placeholder="Product Name"
                value={title}  
                onChange={p => setTitle(p.target.value)}/>
            <label>Description</label>
            <textarea 
                placeholder="Description"
                value={description}
                onChange={p =>setDescription(p.target.value)} ></textarea>
            <label>Price</label>
            <input type="number"
                placeholder="Price"
                value={price}
                onChange={p => setPrice(p.target.value)}
                />
            <button className="btn-primary">Save</button>
        </Layout>
    );
}