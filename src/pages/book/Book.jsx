import React, { useContext, useState } from 'react';
import {useParams} from "react-router-dom";
import {books} from "../../data/books";
import Rating from '../../components/book-slider/Rating';
import "./book.css";
import CartContext from '../../context/CartContext';

const Book = () => {
    const {addToCart} = useContext(CartContext);

    const {id}=useParams();

    const book = books.find(b => b.id === +id); //parseInt(id) == +id //the (+) is the shortcut for parseInt

    const [qty,setQty]= useState(1);



    return (
        <div className='book'>
            <div className="book-content">
                <img src={`/books/${book.image}`} alt={book.title} className='book-content-img' />
                <div className="book-content-info">
                    <h1 className="book-title">{book.title}</h1>
                    <div className="book-author">
                        by <span>{book.author}</span>(Author)
                    </div>
                    <Rating rating={book.rating} reviews={book.reviews}/>
                    <div className="book-add-to-cart">
                        <input min="1" max="100" type="number" className='book-add-to-cart-input'
                         value={qty} onChange={e => setQty(e.target.value)}/>
                        <button onClick={() => addToCart({...book,quantity:qty})} className="book-add-to-cart-btn">
                            <i className="bi bi-cart-plus"></i>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
            <p className="book-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione aperiam natus distinctio magnam eligendi corrupti dolore nam. Ducimus voluptatem laborum dicta numquam. Iusto soluta optio possimus, a esse dolorum iure?Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem esse, ea hic iusto asperiores quasi architecto nostrum repellendus, impedit facilis assumenda rerum dolorem, eligendi dicta corporis? Quaerat rerum sed asperiores.</p>
            <div className="book-icons">
                <div className="book-icon">
                    <small>Print Length</small>
                    <i className="bi bi-file-earmark-break">
                        <b>{book.printLength} Pages</b>
                    </i>
                </div>
                <div className="book-icon">
                    <small>Language</small>
                    <i className="bi bi-globe">
                        <b>{book.language} </b>
                    </i>
                </div>
                <div className="book-icon">
                    <small>Publication date</small>
                    <i className="bi bi-calendar3">
                        <b>{book.PublicationDate} Pages</b>
                    </i>
                </div>
            </div>
        </div>
    );
}

export default Book;
