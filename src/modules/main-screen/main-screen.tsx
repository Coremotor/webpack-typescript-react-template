import React from 'react';
import { Button, DatePicker, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { setError } from 'modules/_shared/app/store/app/reduser';

const MainScreen = () => {
  const dispatch = useDispatch();

  return (
    <Space direction='vertical'>
      <Button onClick={() => dispatch(setError('err'))}>
        Show notification
      </Button>
      <DatePicker />
      <div style={{ width: 400, marginBottom: 50 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cum
        dolore est exercitationem fugiat nisi nostrum quaerat velit. Aliquam
        deserunt dolorem illo maiores nesciunt nulla officia quae quam rerum
        sunt.
      </div>
      <div style={{ width: 400, marginBottom: 50 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cum
        dolore est exercitationem fugiat nisi nostrum quaerat velit. Aliquam
        deserunt dolorem illo maiores nesciunt nulla officia quae quam rerum
        sunt.
      </div>
      <div style={{ width: 400, marginBottom: 50 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cum
        dolore est exercitationem fugiat nisi nostrum quaerat velit. Aliquam
        deserunt dolorem illo maiores nesciunt nulla officia quae quam rerum
        sunt.
      </div>
      <div style={{ width: 400, marginBottom: 50 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cum
        dolore est exercitationem fugiat nisi nostrum quaerat velit. Aliquam
        deserunt dolorem illo maiores nesciunt nulla officia quae quam rerum
        sunt.
      </div>
      <div style={{ width: 400, marginBottom: 50 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cum
        dolore est exercitationem fugiat nisi nostrum quaerat velit. Aliquam
        deserunt dolorem illo maiores nesciunt nulla officia quae quam rerum
        sunt.
      </div>
      <div style={{ width: 400, marginBottom: 50 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cum
        dolore est exercitationem fugiat nisi nostrum quaerat velit. Aliquam
        deserunt dolorem illo maiores nesciunt nulla officia quae quam rerum
        sunt.
      </div>
      <div style={{ width: 400, marginBottom: 50 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cum
        dolore est exercitationem fugiat nisi nostrum quaerat velit. Aliquam
        deserunt dolorem illo maiores nesciunt nulla officia quae quam rerum
        sunt.
      </div>
      <div style={{ width: 400, marginBottom: 50 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cum
        dolore est exercitationem fugiat nisi nostrum quaerat velit. Aliquam
        deserunt dolorem illo maiores nesciunt nulla officia quae quam rerum
        sunt.
      </div>
      <div style={{ width: 400, marginBottom: 50 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cum
        dolore est exercitationem fugiat nisi nostrum quaerat velit. Aliquam
        deserunt dolorem illo maiores nesciunt nulla officia quae quam rerum
        sunt.
      </div>
    </Space>
  );
};

export default MainScreen;
