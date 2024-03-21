import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

const orderData = [
  {
    orderId: 123456,
    orderType: 'Coffee',
    employeeName: 'Esther Howard',
    designation :'Designation Type',
    customerName: 'Leslie Alexander',
    arrival: 'Arrived at 09:30 Pm',
    expectedTime: '09:50pm',
    deliveryTime: '09:45pm',
    deliveryStatus: 'Delivered',
  },
  {
    orderId: 123456,
    orderType: 'Tea',
    employeeName: 'Cameron Williamson',
    designation :'Designation Type',
    customerName: 'Cody Fisher',
    arrival: 'Arrived at 10:30 Pm',
    expectedTime: '10:45pm',
    deliveryTime: '11:00pm',
    deliveryStatus: 'Delayed',
  },
  {
    orderId: 123456,
    orderType: 'Food',
    employeeName: 'Jenny Wilson',
    designation :'Designation Type',
    customerName: 'Albert Flores',
    arrival: 'Arrived at 11:30 Pm',
    expectedTime: '12:45pm',
    deliveryTime: '',
    deliveryStatus: 'Inprocess',
  },
  {
    orderId: 123456,
    orderType: 'Juice',
    employeeName: 'Guy Hawkins',
    designation :'Designation Type',
    customerName: 'Marvin McKinney',
    arrival: 'Arrived at 12:30 Pm',
    expectedTime: '12:45pm',
    deliveryTime: '12:38pm',
    deliveryStatus: 'Delivered',
  },
];




const OrderTable = () => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden w-full bg-white mt-5">

      <div className="flex items-center p-4 ">
        <span className="mr-10 text-2xl font-Lato font-bold ">Order Activity</span>
        <div className="ml-48">
          <Select
            defaultValue="Order Type"
            style={{ width: 120, height:35,  fontSize: '20px' }}
            >
            <Option value="option1" style={{ fontSize: '16px' }}>Option 1</Option>
            <Option value="option2">Option 2</Option>
            <Option value="option3">Option 3</Option>
            </Select>
        </div>
        <div className="ml-7">
          <Select
            defaultValue="Select Employee"
            style={{ width: 150, height:35,  fontSize: '20px' }}
            >
            <Option value="option1" style={{ fontSize: '16px' }}>Option 1</Option>
            <Option value="option2">Option 2</Option>
            <Option value="option3">Option 3</Option>
            </Select>
        </div>
        <div className="ml-7">
          <Select className='hover:border-[#8C68CD]'
            defaultValue="Department"
            style={{ width: 150, height:35, fontSize: '20px' }}
            >
            <Option value="option1">Option 1</Option>
            <Option value="option2">Option 2</Option>
            <Option value="option3">Option 3</Option>
            </Select>
        </div>
        <div className="ml-7 ">
          <Select 
            defaultValue="Date and Time"
            style={{ width: 150, height:35, fontSize: '20px' }}
            >
            <Option value="option1" className='text-xl'>Option 1</Option>
            <Option value="option2" className='text-xl'>Option 2</Option>
            <Option value="option3" className='text-xl'>Option 3</Option>
            </Select>
        </div>
        
      </div>
      <div className='p-4'>
      <table className="w-full text-sm text-left table-auto p-4">
        <thead className="text-sm text-white bg-[#6F42C1]  font-Lato ">
          <tr>
            <th className="p-2 whitespace-nowrap font-Lato">Order ID and Type</th>
            <th className="p-2 whitespace-nowrap font-Lato">Employee Name</th>
            <th className="p-2 whitespace-nowrap font-Lato">Customer Name</th>
            <th className="p-2 whitespace-nowrap font-Lato">Delivery Time</th>
            <th className="p-2 whitespace-nowrap font-Lato">Delivery Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {orderData.map((order) => (
            <tr key={order.orderId} className=" hover:bg-gray-100">
              <td className="p-2 whitespace-nowrap">
                <div className="text-[#2D3436] mb-1 font-Lato">#{order.orderId}</div>
                <div className="text-[#818586] font-Lato">{order.orderType}</div>
              </td>
              <td className="p-2 whitespace-nowrap font-Lato">
                <div className="text-[#2D3436] mb-1">{order.employeeName}</div>
                <div className="text-[#818586]">{order.designation}</div>
              </td>
              <td className="p-2 whitespace-nowrap font-Lato">
                <div className="text-[#2D3436] mb-1">{order.customerName}</div>
                <div className="text-[#818586]">{order.arrival}</div>
              </td>
              <td className="p-2 whitespace-nowrap font-Lato">
                <div className="text-[#818586] mb-1">Expected Time <span className="text-[#2D3436]">{order.expectedTime}</span></div>
                <div className="text-[#818586]">Delivered Time <span className="text-[#2D3436]">{order.deliveryTime ? order.deliveryTime : '-'}</span></div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <span
                  className={`px-2 py-1 rounded-md font-Lato text-sm ${
                    order.deliveryStatus === 'Delivered'
                      ? 'bg-[#D5E2DD] text-[#317159]'
                      : order.deliveryStatus === 'Inprocess'
                      ? 'bg-[#F1EAD4] text-[#BD992A]'
                      : order.deliveryStatus === 'Delayed'
                      ? 'bg-[#F0D7D3] text-[#B93A28]'
                      : ''
                  }`}
                >
                  {order.deliveryStatus}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default OrderTable;




