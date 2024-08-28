import React, { useMemo } from "react";
import {
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from "@ant-design/icons";
import { Button, Divider, notification, Space } from "antd";
const Context = React.createContext({
  name: "Default",
});
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `Maverick liked your status`,
      description: (
        <Context.Consumer>{({ name }) => `Hello, Maverick liked your status`}</Context.Consumer>
      ),
      placement,
    });
  };
  const contextValue = useMemo(
    () => ({
      name: "Ant Design",
    }),
    [],
  );
  return (
    <Context.Provider value={contextValue}>
      {contextHolder}

      <Divider />
      <Space>
        <Button
          type="primary"
          onClick={() => openNotification("bottomRight")}
          icon={<RadiusBottomrightOutlined />}
        >
          bottomRight
        </Button>
      </Space>
    </Context.Provider>
  );
};
export default App;
