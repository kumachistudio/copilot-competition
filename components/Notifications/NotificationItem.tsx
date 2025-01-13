import React from 'react';

const NotificationItem = ({ notification }) => {
  return (
    <div>
      <p>{notification.message}</p>
      {/* Add more notification details here */}
    </div>
  );
};

export default NotificationItem;
