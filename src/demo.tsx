import React from "react";
import "./index.css";
import type { BadgeProps, CalendarProps } from "antd";
import { Badge, Calendar } from "antd";
import dayjs, { Dayjs } from "dayjs";
import viVN from "antd/es/date-picker/locale/vi_VN";
import "dayjs/locale/vi"; // Import Vietnamese locale
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.locale("vi"); // Set Day.js to use the Vietnamese locale
dayjs.extend(localizedFormat);

// Customize the day names
const customViVN = {
  ...viVN,
  lang: {
    ...viVN.lang,
    weekdays: [
      "Chủ nhật",
      "Thứ 2",
      "Thứ 3",
      "Thứ 4",
      "Thứ 5",
      "Thứ 6",
      "Thứ 7",
    ],
    weekdaysShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
  },
};

const formatNumber = (num: number) => {
  return num.toLocaleString("vi-VN"); // Format numbers according to Vietnamese locale
};

const getListData = (value: Dayjs) => {
  const startDate = dayjs("2024-08-25");
  let contentNumber = 0;

  if (value.isAfter(startDate) || value.isSame(startDate)) {
    const dayDifference = value.diff(startDate, "days");
    contentNumber = 1000 + dayDifference * 1000; // Each day adds 1000 VND
  }

  let listData: { type: string; content: string }[] = [];

  if (contentNumber > 0) {
    listData = [
      { type: "info", content: `${formatNumber(contentNumber)} đồng` },
    ];
  }

  return listData;
};

const getMonthData = (value: Dayjs) => {
  const startDate = dayjs("2024-08-25");
  const daysInMonth = value.daysInMonth();
  let sum = 0;

  for (let day = 1; day <= daysInMonth; day++) {
    const currentDate = value.startOf("month").date(day);

    if (currentDate.isAfter(startDate) || currentDate.isSame(startDate)) {
      const dayDifference = currentDate.diff(startDate, "days");
      const contentNumber = 1000 + dayDifference * 1000; // Each day adds 1000 VND
      sum += contentNumber;
    }
  }

  return sum > 0 ? sum : null;
};

const App: React.FC = () => {
  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{formatNumber(num) + " đồng"}</section>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge
              status={item.type as BadgeProps["status"]}
              text={item.content}
            />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };
console.log(customViVN)
  return <Calendar cellRender={cellRender} locale={customViVN} />;
};

export default App;
