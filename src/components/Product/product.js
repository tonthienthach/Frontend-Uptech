import React from 'react';
import classNames from 'classnames/bind';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './product.module.scss';
import { RatingStar } from '../Icons/Icons';
import { Link } from 'react-router-dom'


const cx = classNames.bind(styles);
const btnText = 'Thêm vào giỏ'
function ProductCard(props) {



    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(
                <div className={cx('star-styles')}>
                    <RatingStar key={i} />
                </div>
            );
        }

        return stars;
    };

    return (
        <Card style={{ width: '100%' }} className={cx('pCard')}>
            <div className={cx('pImg-wrapper')}>
                <p className={cx('sale-tag')}>Giảm {props.salePercents}%</p>
                <Link to={'/product-detail'}>
                    <Card.Img className={cx('pImg')} variant="top" src={props.url} />
                </Link>

            </div>
            <Card.Body className={cx('card-content')}>
                <Link to={'/search'}>
                    <p className={cx('pCate')}>{props.pCate}</p>
                </Link>

                <Link to={'/product-detail'}>
                    <Card.Title className={cx('pName')}>{props.pName}</Card.Title>
                </Link>
                <div className={cx('pPrice')}>
                    <span className={cx('oldPrice')}>{props.oldPrice.toLocaleString('vi-VN')}đ</span>
                    <span className={cx('newPrice')}>{(props.oldPrice - props.oldPrice * (props.salePercents / 100)).toLocaleString('vi-VN')}đ</span>
                </div>
                {/* <div className={cx('rating-display')}>
                    <div className={cx('rating-stars')}>
                        <div className={cx('stars')}>
                            <div className={cx('stars-wrapper')}>
                                {renderStars(props.stars)}
                            </div>
                        </div>
                        <span className={cx('ratingNumber')}>({props.ratingNumber})</span>
                    </div>
                    <span className={cx('origin')}>{props.origin}</span>
                </div> */}
                <div className={cx('btn-wrapper')}>
                    <Button className={cx('btn-add-to-cart')} variant="primary">{btnText}</Button>
                </div>

            </Card.Body>
        </Card>
    );
}

export default ProductCard;