import React from 'react';
import VerticalNav from '../components/VerticalNav';
import './AdminLayout.scss';
const AdminLayout = ({ children }) => {
  return (
    <div className="adminLayout">
      <div className="controlPanel">
        <div className="sidebar">
          <VerticalNav />
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
