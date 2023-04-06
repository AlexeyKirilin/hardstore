import { useFormik } from 'formik';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import arrowLeft from '../../assets/img/grey-arrow-left.svg';
import styles from './FormOrder.module.scss';

const FormOrder = () => {
  const { totalPrice } = useSelector((state) => state.cart);

  const [valueCvv, setValueCvv] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      cardNumber: '',
      month: '',
      year: '',
      cvv: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, 'Минимум 2 символа').required('Обязательное поле!'),
      email: Yup.string().email('Неправильный email адрес').required('Обязательное поле!'),
      cardNumber: Yup.number()
        .min(15, 'Необходимо ввести 16 символов')
        // .max(16, 'Необходимо ввести 16 символов')
        .required('Обязательное поле!'),
      month: Yup.string().required('Выберите месяц'),
      year: Yup.string().required('Выберите год'),
    }),
    onSubmit: () => alert('Успешно оплачено!'),
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.root}>
      <Link to="/cart" className={styles.btnBack}>
        <img src={arrowLeft} alt="arrow-left" />
        <span style={{ marginLeft: '10px' }}>Вернуться назад</span>
      </Link>
      <div className={styles.form}>
        <h2 className={styles.title}>Оформление заказа на сумму {totalPrice} ₽ </h2>
        <div className={styles.wrapperInput}>
          <label className={styles.labelName}>Ваше имя</label>
          <div className={styles.innerError}>
            <input
              name="name"
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className={styles.input}
              placeholder="Введите ваше имя"
            />
            {formik.errors.name && formik.touched.name ? (
              <div className={styles.error}>{formik.errors.name}</div>
            ) : null}
          </div>

          <label className={styles.labelName}>Ваш email</label>
          <div className={styles.innerError}>
            <input
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className={styles.input}
              onBlur={formik.handleBlur}
              placeholder="Введите email"
            />
            {formik.errors.email && formik.touched.email ? (
              <div className={styles.error}>{formik.errors.email}</div>
            ) : null}
          </div>
        </div>
        <p>Выберите пункт выдачи заказа:</p>
        <div className={styles.inner}>
          <label className={styles.label}>
            <div className={styles.wrapper}>
              <input
                className={styles.checkbox}
                value={formik.values.radio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="radio"
                name="radio"
              />
              <div className={styles.city}>Г.Ульяновск, ул. Минаева, д 11.</div>
            </div>
            <p className={styles.time}>11:00 – 20:00, без выходных</p>
          </label>
        </div>

        <div className={styles.inner}>
          <label className={styles.label}>
            <div className={styles.wrapper}>
              <input
                className={styles.checkbox}
                type="radio"
                value={formik.values.radio}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="radio"
              />
              <div className={styles.city}>Г.Ульяновск, ул. Гончарова, д 26.</div>
            </div>
            <p className={styles.time}>9:00 – 19:00, без выходных</p>
          </label>
        </div>
        <div className={styles.inner}>
          <label className={styles.label}>
            <div className={styles.wrapper}>
              <input
                className={styles.checkbox}
                type="radio"
                onBlur={formik.handleBlur}
                value={formik.values.radio}
                onChange={formik.handleChange}
                name="radio"
              />
              <div className={styles.city}>Г.Ульяновск, ул. Льва Толстого, д 7.</div>
            </div>
            <p className={styles.time}>10:00 – 19:00, без выходных</p>
          </label>
        </div>
        <div className={styles.inner}>
          <label className={styles.label}>
            <div className={styles.wrapper}>
              <input
                className={styles.checkbox}
                type="radio"
                onBlur={formik.handleBlur}
                value={formik.values.radio}
                onChange={formik.handleChange}
                name="radio"
              />
              <div className={styles.city}>Г.Ульяновск, ул. Минаева, д 24.</div>
            </div>
            <p className={styles.time}>10:00 – 19:00, без выходных</p>
          </label>
        </div>
        <div className={styles.inner}>
          <label className={styles.label}>
            <div className={styles.wrapper}>
              <input
                className={styles.checkbox}
                type="radio"
                value={formik.values.radio}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="radio"
              />
              <div className={styles.city}>Г.Ульяновск, ул. Карла Маркса, д 35.</div>
            </div>
            <p className={styles.time}>10:00 – 19:00, без выходных</p>
          </label>
        </div>

        <div>
          <h2 className={styles.title}>Заполнение данных карты</h2>
          <div className={styles.cardWrapper}>
            <label className={styles.cardLabel}>Номер карты</label>
            <div className={styles.innerError}>
              <input
                className={styles.cardInput}
                name="cardNumber"
                type="number"
                onBlur={formik.handleBlur}
                value={formik.values.cardNumber}
                // onChange={(e) => setValueCardNumber((e.target.value).slice(0,16))}
                onChange={formik.handleChange}
                placeholder="Введите номер карты"
              />
              {formik.errors.cardNumber && formik.touched.cardNumber ? (
                <div className={styles.error}>{formik.errors.cardNumber}</div>
              ) : null}
            </div>
          </div>
          <div className={styles.cardInner}>
            <div className={styles.selectError}>
              <select
                name="month"
                value={formik.values.month}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}>
                <option value="">Месяц</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              {formik.errors.month && formik.touched.month ? (
                <div className={styles.error}>{formik.errors.month}</div>
              ) : null}
            </div>
            <div className={styles.selectError}>
              <select
                name="year"
                value={formik.values.year}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}>
                <option value="">Год</option>
                <option value="1">2023</option>
                <option value="2">2024</option>
                <option value="3">2025</option>
                <option value="4">2026</option>
                <option value="5">2027</option>
                <option value="6">2028</option>
                <option value="7">2029</option>
                <option value="8">2030</option>
                <option value="9">2031</option>
                <option value="10">2032</option>
              </select>
              {formik.errors.year && formik.touched.year ? (
                <div className={styles.error}>{formik.errors.year}</div>
              ) : null}
            </div>
            <input
              className={styles.cvvInput}
              value={valueCvv}
              required
              onChange={(e) => setValueCvv(e.target.value.slice(0, 3))}
              type="number"
              name="cvv"
              placeholder="CVV"
            />
            {formik.errors.cvv && formik.touched.cvv ? (
              <div className={styles.error}>{formik.errors.cvv}</div>
            ) : null}
          </div>
          <button type="submit" className={styles.btn}>
            <span>Оплатить</span>
          </button>
        </div>
      </div>
    </form>
    // </div>
  );
};

export default FormOrder;
