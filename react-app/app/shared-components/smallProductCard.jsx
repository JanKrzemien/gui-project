import React from 'react';
import { useNavigate } from 'react-router'
import 'material-icons/iconfont/material-icons.css'

export const SmallProductCard = ({product}) => {
    const navigate = useNavigate()
  
    const handleClick = () => {
        navigate(product.book_id ? `/product/${product.book_id}` : `/group/${product.group_id}`)
    }

    return (
        <div
            onClick={handleClick}
            style={{
                cursor: "pointer",
                display: "flex",
                width: "100%",
                marginBottom: "10px",
            }}    
        >
            <img src={product.book_id ? product.productPicture : product.groupPicture} alt="pic"
                style={{
                    objectFit: "cover",
                    height: "140px",
                }}
            />
            <div style={{
                display: "flex",
                flexDirection: "column",
                padding: "5px",
            }}>
                <p>
                    {
                        product.book_id ? product.title : product.name
                    }
                </p>
                <p>
                    {
                        product.book_id ? product.author : `Last active: ${product.lastActive}`
                    }
                </p>
                {
                    product.book_id ? (
                        <div className="rating-container">
                            <span className="rating">{product.globalRating}</span>
                            <span className="material-icons">star</span>
                        </div>
                    ) : ':)'
                }
            </div>
        </div>
    )
}
