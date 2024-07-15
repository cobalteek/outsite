import React, {useState} from 'react';
import helmet from "../../images/iron/iron_helmet.svg";
import chestplate from "../../images/iron/iron_chestplate.svg";
import leggins from "../../images/iron/iron_leggins.svg";
import boots from "../../images/iron/iron_boots.svg";
import sword from "../../images/iron/iron_sword.svg";
import pickaxe from "../../images/iron/iron_pickaxe.svg";
import axe from "../../images/iron/iron_axe.svg";
import shovel from "../../images/iron/iron_shovel.svg";
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";

const products = [
    {id: '1', img: <img src={helmet} className="img" alt="Железный шлем" />, title: 'Железный шлем', price: 1},
    {id: '2', img: <img src={chestplate} className="img" alt="Железный шлем"/>, title: 'Железный нагрудник', price: 1},
    {id: '3', img: <img src={leggins} className="img" alt="Железный шлем"/>, title: 'Железные поножи', price: 1},
    {id: '4', img: <img src={boots} className="img" alt="Железный шлем"/>, title: 'Железные ботинки', price: 1},
    {id: '5', img: <img src={sword} className="img" alt="Железный шлем"/>, title: 'Железный меч', price: 1},
    {id: '6', img: <img src={pickaxe} className="img" alt="Железный шлем" />, title: 'Железная кирка', price: 1},
    {id: '7', img: <img src={axe} className="img" alt="Железный шлем"/>, title: 'Железный топор', price: 1},
    {id: '8', img: <img src={shovel} className="img" alt="Железный шлем"/>, title: 'Железная лопата', price: 1},
]

const ProductList = () => {

    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;
