import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/pizzaBlock';
import Sceleton from '../components/pizzaBlock/Sceleton';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isloading, setisLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0); //вынесли стейт сортировки и категорий в Home
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating', //при открытии изначально выбирается сортировка по популярности
  });

  React.useEffect(() => {
    setisLoading(true);
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'; // проверяй,есть ли "-" в сортировке . если есть ,то делай по возрастанию,иначе по убыванию
    const sortBy = sortType.sortProperty.replace('-', ''); //удаляем минус
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    fetch(
      `https://62b5bb0842c6473c4b38ef97.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}`,
    )
      // fetch - функция,которая делает запрос с сервера (mockapi)
      .then((res) => res.json())
      .then((JSON) => {
        setItems(JSON);
        setisLoading(false);
        //когда будет запрос,переконвертируй в json и используй в консоли
      });
    window.scrollTo(0, 0); // при рендере отскроль вверх
  }, [categoryId, sortType]);
  //если будет менять сортировка или категория,всегда делай запрос на получение новых пицц.

  //таким образом делает запрос на бэкэнд
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onclickCategory={(i) => setCategoryId(i)} />
        {/* Home получает какой-то параметр из Catigories и сохраняет в свой стейт*/}
        <Sort value={sortType} onclickSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isloading
          ? [...new Array(6)].map((_, index) => <Sceleton key={index} />)
          : items.map((value) => <PizzaBlock key={value.id} {...value} />)}
        {/* если идет загрузка (React.useState(true)) создай нам массив из 6 indefund и замени на Sceleton, иначе если
            загрузка не идет ( setisLoading(false);),то возьми обьект и отрендери PizzaBlock */}
      </div>
    </div>
  );
};
export default Home;
