import React from 'react';
import NotificationItem from './NotificationItem';

const NotificationList = ({ notifications }) => {
  return (
    <div>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

export default NotificationList;
