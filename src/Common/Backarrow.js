import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './Backarrow.module.css';

const BackArrow = ({ to }) => {
  return (
    <Link to={to} className={styles['back-arrow-link']}> {/* Use the 'to' prop as the link path */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100px"
        viewBox="0 0 512 512"
        className={styles['back-arrow']}
      >
        <polygon
          points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256"
        />
      </svg>
    </Link>
  );
};

export default BackArrow;
