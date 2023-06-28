import React from 'react';
import { DatePicker, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { setError } from 'store/modules/app/reduser';

const Main = () => {
  const dispatch = useDispatch();

  return (
    <Space direction='vertical'>
      <button onClick={() => dispatch(setError('err'))}>
        Show notification
      </button>
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

export default Main;
