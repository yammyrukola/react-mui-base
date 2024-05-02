import { FC } from 'react';
import { Order, Product } from '../types/types';
import GoodsItem from './GoodsItem';

interface GoodListProps {
  goods: Product[];
  setOrder: (data: Order) => void;
}

const GoodsList: FC<GoodListProps> = (props) => {
  const { goods, setOrder } = props;

  return (
    <div className="goods-list col-md-8">
      <div className="row">
        {goods.map((item) => (
          <GoodsItem key={item.id} setOrder={setOrder} {...item} />
        ))}
      </div>
    </div>
  );
};

export default GoodsList;
