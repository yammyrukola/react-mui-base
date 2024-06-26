import React, { useState } from 'react';
import { goods } from './data/goods';
import { Order, Product } from './types/types';
import Search from './components/Search';
import GoodsList from './components/GoodsList';
import BasketList from './components/BasketList';

function App() {
  const [order, setOrder] = useState<Order[]>([]);
  const [search, setSearch] = useState<string>('');
  const [products, setProducts] = useState<Product[]>(goods);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setProducts(goods);
      setSearch('');
      return;
    }

    setSearch(e.target.value);
    setProducts(
      products.filter((good) =>
        good.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const addToOrder = (goodsItem: Order) => {
    let quantity = 1;

    const indexInOrder = order.findIndex((item) => item.id === goodsItem.id);

    if (indexInOrder > -1) {
      quantity = (order[indexInOrder].quantity ?? 0) + 1;

      setOrder(
        order.map((item) => {
          if (item.id !== goodsItem.id) return item;

          return {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity,
          };
        })
      );
    } else {
      setOrder([
        ...order,
        {
          id: goodsItem.id,
          name: goodsItem.name,
          price: goodsItem.price,
          quantity,
        },
      ]);
    }
  };

  const removeFromOrder = (goodsItem: string) => {
    setOrder(order.filter((item) => item.id !== goodsItem));
  };

  return (
    <div className="App">
      <div className="container">
        <Search value={search} onChange={handleChange} />
        <GoodsList goods={products} setOrder={addToOrder} />
        <BasketList order={order} setOrder={removeFromOrder} />
      </div>
    </div>
  );
}

export default App;
