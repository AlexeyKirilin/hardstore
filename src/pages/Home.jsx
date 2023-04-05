import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../redux/slices/FilterSlise';
import Sort from '../components/Sort';
import ProductBlock from '../components/ProductBlock/ProductBlock';
import Skeleton from '../components/ProductBlock/Skeleton';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';
import axios from 'axios';

const Home = () => {

  const { sort, currentPage, searchValue} = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const [categoryId, setCategoryId] = useState(0);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number))
  }

  const onChangeCategory = (index) => {
    setCategoryId(index)
  }

  useEffect(() => {
    setIsLoading(true)
  
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `search=${searchValue}` : '';

    axios.get(`https://6423f5ebd6152a4d48031b38.mockapi.io/products?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}&${search}`)
      .then(res => {
        setItems(res.data)
        setIsLoading(false)
      })

    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

    const products = items.map((obj) => <ProductBlock key={obj.id} {...obj} />)

    const skeleton = [... new Array(8)].map((_, index) => <Skeleton key={index}/>)

    return (
        <div className='conteiner'>
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
                <Sort />
            </div>
            <h2 className="content__title">Все товары</h2>
            <div className="content__items">
                {
                isLoading ? skeleton : products
                }
          </div> 
          <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </div>
    );
};

export default Home;