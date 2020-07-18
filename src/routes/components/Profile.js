import React from "react";

import { Avatar } from "./../../components";
import { randomAvatar } from "./../../utilities";

const Profile = ({
  avatarSrc,
  title,
  subTitle,
  descrpition,
  descriptionIcon,
}) => {
  return (
    <React.Fragment>
      <div className='d-flex justify-content-center my-3'>
        <Avatar.Image size='lg' src={randomAvatar()} />
      </div>
      <div className='mb-4 text-center'>
        <a className='h6 text-decoration-none' href='#!'>
          {title}
        </a>
        <div className='text-center mt-2'>{subTitle}</div>
        <div className='text-center'>
          <i className={`fa ${descriptionIcon} mr-1`}></i>
          {descrpition}
        </div>
      </div>
    </React.Fragment>
  );
};

export { Profile };
