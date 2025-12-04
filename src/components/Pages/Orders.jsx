import React from 'react';

const Orders = () => {
      return (
            <div className='max-w-sm mx-auto'>
                  <h2 className='text-primary font-bold'>Your Orders History</h2>
                  <div>
                        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Sl</th>
        <th>Product Item</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Hp Monitor</td>
        <td>1</td>
        <td>$ 400</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Head Phone</td>
        <td>1</td>
        <td>$ 200</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Key Board</td>
        <td>1</td>
        <td>$ 100</td>
      </tr>
    </tbody>
  </table>
</div>
                  </div>
            </div>
      );
};

export default Orders;