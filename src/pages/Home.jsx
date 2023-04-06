import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage, setCategoryId } from '../redux/slices/FilterSlise';
import { fetchProduct } from '../redux/slices/ProductSlice';
import Sort from '../components/Sort';
import ProductBlock from '../components/ProductBlock/ProductBlock';
import Skeleton from '../components/ProductBlock/Skeleton';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';

const Home = () => {
  const dispatch = useDispatch();

  const { categoryId, sort, currentPage, searchValue } = useSelector((state) => state.filter);
  const { items, status } = useSelector((state) => state.product);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const onChangeCategory = useCallback((index) => {
    dispatch(setCategoryId(index));
  }, []);

  const getProducts = async () => {
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `search=${searchValue}` : '';

    dispatch(
      fetchProduct({
        sortBy,
        order,
        category,
        search,
        currentPage,
      }),
    );

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getProducts();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const products = items.map((obj) => <ProductBlock key={obj.id} {...obj} />);

  const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="conteiner">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>
      <h2 className="content__title">Все товары</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка</h2>
          <p>К сожалению, не удалось получить товары. Попробуйте повторить попытку позже</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeleton : products}</div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
