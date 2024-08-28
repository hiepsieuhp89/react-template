import React from "react";
import MyModal from "./components/MyModal";
import Text1 from "./components/Text1";
import "./index.css";
import ComputerList from "./components/ComputerList";

const App = () => {
  const hoTen = "Maverick 999";

  const sinhViens = [
    "Maverick",
    "Dang Vu",
    "Truong",
    "Phuong Anh",
    "An Nguyen",
    "Binh Tran",
    "Chau Pham",
    "Dat Hoang",
    "Duc Le",
    "Emilia Vu",
    "Hanh Nguyen",
    "Hieu Bui",
    "Hung Tran",
    "Khanh Pham",
    "Lam Vu",
    "Lien Hoang",
    "Long Nguyen",
    "Mai Bui",
    "Minh Chau",
    "My Linh",
    "Nam Nguyen",
    "Ngoc Tran",
    "Phat Le",
    "Phuong Bui",
    "Quang Hoang",
    "Quynh Vu",
    "Son Nguyen",
    "Tam Bui",
    "Thao Tran",
    "Thu Hoang",
    "Tuan Le",
    "Van Nguyen",
    "Vinh Bui",
    "Yen Tran",
    "Bao Chau",
    "Cam Le",
    "Dai Hoang",
    "Diep Nguyen",
    "Doan Bui",
    "Duong Vu",
    "Gia Khanh",
    "Ha Le",
    "Hai Pham",
    "Hieu Tran",
    "Hoang Anh",
    "Khai Hoang",
    "Khoa Bui",
    "Linh Nguyen",
    "Manh Vu",
    "Minh Pham",
    "Nga Tran",
    "Nhat Hoang",
    "Phuong Le",
    "Quoc Nguyen",
    "Tam Vu",
    "Thanh Bui",
    "Thi Tran",
    "Thien Hoang",
    "Thuong Le",
    "Tuan Anh",
    "Uyen Nguyen",
    "Viet Hoang",
    "Yen Bui",
    "Anh Le",
    "Bao Hoang",
    "Chi Pham",
    "Duc Nguyen",
    "Ha Tran",
    "Hieu Le",
    "Hoa Vu",
    "Hung Nguyen",
    "Khanh Hoang",
    "Lan Pham",
    "Linh Bui",
    "Mai Hoang",
    "Nam Hoang",
    "Ngoc Vu",
    "Phu Le",
    "Phuong Tran",
    "Quynh Bui",
    "Son Hoang",
    "Tai Vu",
    "Thao Nguyen",
    "Thanh Hoang",
    "Tien Bui",
    "Tram Le",
    "Tri Nguyen",
    "Tuan Pham",
    "Van Hoang",
    "Vy Le",
    "Xuan Nguyen",
    "Yen Hoang",
    "Anh Bui",
    "Bao Le",
    "Cam Hoang",
  ];

  function hienThiHello(element, index) {
    const ketQua = "sinh vien thu " + (index + 1) + " :" + element;

    return <Text1 hoTen={ketQua} />;
  }

  return (
    <>
      <ComputerList />
    </>
  );
};

export default App;
