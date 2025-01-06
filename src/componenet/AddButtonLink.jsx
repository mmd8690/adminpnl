import React from 'react';
import { Link } from 'react-router-dom';

const AddButtonLink = ({href}) => {
    return (
        <Link to={href}>
        <span className="btn btn-success d-flex justify-content-center align-items-center">
          <i className="fa fa-plus text-light"></i>
        </span>
        </Link>
    );
}

export default AddButtonLink;
