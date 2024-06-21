import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const For = () => {
  return (
    <Form>
      <Form.Group controlId="formEmail">
        <Form.Label>البريد الإلكتروني</Form.Label>
        <Form.Control type="email" placeholder="أدخل بريدك الإلكتروني" />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>كلمة المرور</Form.Label>
        <Form.Control type="password" placeholder="أدخل كلمة المرور" />
      </Form.Group>
      <Button type="submit">تسجيل الدخول</Button>
    </Form>
  );
}

export default For;