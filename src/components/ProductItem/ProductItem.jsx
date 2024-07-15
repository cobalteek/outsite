import React from 'react';
import Button from "../Button/Button";
import './ProductItem.css';

const ProductItem = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={'product ' + className}>
            <div className={'img'}>{product.img}</div>
            <div className={'title'}>{product.title}</div>
            <div className={'price'}>
                <span>Стоимость: <b>{product.price} алмаз</b></span>
            </div>
            <Button className={'add-btn'} onClick={onAddHandler}>
                Найти на карте
            </Button>
        </div>
    );
};

export default ProductItem;
