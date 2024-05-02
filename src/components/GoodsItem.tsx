import { FC } from 'react';
import { Order } from '../types/types';

interface GoodsItemProps {
  id: string;
  name: string;
  price: number;
  setOrder: (data: Omit<Order, 'quantity'>) => void;
  // setOrder: (data: Order) => void;
}

const GoodsItem: FC<GoodsItemProps> = (props) => {
  const { name, price, setOrder } = props;

  return (
    <div className="col-12 col-md-6 px-md-2">
      <div className="card">
        <img
          src={`https://via.placeholder.com/300x150.png?text=${name.slice(
            0,
            12
          )}`}
          className="card-img-top"
          alt={name}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Цена: {price} руб.</p>
          <button
            className="btn btn-primary"
            onClick={() =>
              setOrder({
                id: props.id,
                name: props.name,
                price: props.price,
              })
            }
          >
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoodsItem;
