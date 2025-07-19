import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import s from './BookForm.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CustomDatePicker.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookForm = () => {
  const BookingSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, 'Too short')
      .max(50, 'Too long')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    date: Yup.date().required('Required'),
    comment: Yup.string().max(500, 'Too long'),
  });

  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className={s.wrapper}>
      <div className={s.titles}>
        <h2 className={s.title}>Book your campervan now</h2>
        <p className={s.subtitle}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <Formik
        initialValues={{ name: '', email: '', date: '', comment: '' }}
        validationSchema={BookingSchema}
        onSubmit={(values, { resetForm }) => {
          console.log('Booking submitted:', values);
          toast.success('Your booking has been successfully submitted!');
          resetForm();
          setSelectedDate(null);
        }}
      >
        {({ setFieldValue }) => (
          <Form className={s.form}>
            <div>
              <Field
                className={s.field}
                type="text"
                name="name"
                placeholder="Name*"
                id={nanoid()}
              />
              <ErrorMessage className={s.error} name="name" component="span" />
            </div>

            <div>
              <Field
                className={s.field}
                type="email"
                name="email"
                placeholder="Email*"
                id={nanoid()}
              />
              <ErrorMessage className={s.error} name="email" component="span" />
            </div>

            <div>
              <DatePicker
                className={s.field}
                selected={selectedDate}
                placeholderText="Booking date*"
                onChange={date => {
                  setSelectedDate(date);
                  setFieldValue('date', date);
                }}
                dateFormat="yyyy-MM-dd"
                name="date"
              />
              <ErrorMessage name="date" component="div" className={s.error} />
            </div>

            <div>
              <Field
                as="textarea"
                className={s.field}
                name="comment"
                placeholder="Comment"
                id={nanoid()}
                rows="4"
              />
              <ErrorMessage
                className={s.error}
                name="comment"
                component="span"
              />
            </div>

            <button className={s.button} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default BookForm;
