import { FC } from 'react';
import { Order } from '../types/types';

interface BasketItemProps extends Order {
  setOrder: (id: string) => void;
}

const BasketItem: FC<BasketItemProps> = (props) => {
  return (
    <li className="list-group-item">
      {props.name} {props.price}руб x{props.quantity}
      <button
        className="btn btn-primary"
        onClick={() => props.setOrder(props.id)}
      >
        Удалить из корзины
      </button>
    </li>
  );
};

export default BasketItem;
