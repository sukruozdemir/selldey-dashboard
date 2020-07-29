import React from "react";

import { Avatar } from "../../../components";
import ActivePassiveBadge from "../ActivePassiveBadge";

import { randomAvatar } from "../../../utilities";

const ProductCardDetail = ({
  productImageSrc,
  productTitle,
  productSiteUrl,
  productPrice,
  active,
}) => {
  return (
    <React.Fragment>
      <div className='d-flex justify-content-center my-3'>
        <Avatar.Image size='lg' src={randomAvatar()} />
      </div>
      <div className='mb-4 text-center'>
        <a className='h6 text-decoration-none' href='#!'>
          {productTitle}
        </a>
        <div className='text-center mt-2'>{productSiteUrl}</div>
        <div className='text-center mt-2'>
          <ActivePassiveBadge active={active} />
          {/*           <i className='fa fa-fw fa-turkish-lira mr-1'></i>
          {productPrice} */}
        </div>
      </div>
    </React.Fragment>
  );
};

export { ProductCardDetail };
