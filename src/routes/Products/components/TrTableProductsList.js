import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import {
  Button,
  Media,
  Avatar,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "./../../../components";
import ActivePassiveBadge from "../../components/ActivePassiveBadge";
import { randomAvatar } from "./../../../utilities";

import { FetchContext } from "../../../context/FetchContext";
import { mutate } from "swr";

const ContentDelete = ({ closeToast, title, onDelete }) => (
  <Media>
    <Media middle left className='mr-3'>
      <i className='fa fa-fw fa-2x fa-close'></i>
    </Media>
    <Media body>
      <Media heading tag='h6'>
        Dikkat!
      </Media>
      <p>"{title}" adlı ürünü silmek üzeresiniz. Emin misiniz?</p>
      <div className='d-flex mt-2'>
        <Button color='danger' onClick={onDelete}>
          <i className='fa fa-trash mr-2' /> Evet, Sil
        </Button>
        <Button color='link' onClick={closeToast} className='ml-2 text-danger'>
          İptal
        </Button>
      </div>
    </Media>
  </Media>
);

const ContentSuccess = ({ title }) => (
  <Media>
    <Media middle left className='mr-3'>
      <i className='fa fa-fw fa-2x fa-check'></i>
    </Media>
    <Media body>
      <Media heading tag='h6'>
        Başarılı!
      </Media>
      <p>"{title}" adlı ürün başarıyla silindi!</p>
    </Media>
  </Media>
);

const ContentError = ({ text }) => (
  <Media>
    <Media middle left className='mr-3'>
      <i className='fa fa-fw fa-2x fa-close'></i>
    </Media>
    <Media body>
      <Media heading tag='h6'>
        Hata!
      </Media>
      <p>Ürün bir hata oluştu</p>
      <p>{text}</p>
    </Media>
  </Media>
);

const TrTableProductsList = ({ id, title, description, site, active }) => {
  const fetchContext = useContext(FetchContext);

  const onDelete = () => {
    toast.dismiss();

    fetchContext.authAxios
      .delete(`/products/${id}`)
      .then(() => {
        toast.success(<ContentSuccess title={title} />, { delay: 2500 });
        mutate("/products");
      })
      .catch((error) => {
        toast.error(<ContentError text={error.response.data.message} />);
      });
  };

  const notifyDelete = () => {
    toast.dismiss();
    toast.error(<ContentDelete title={title} onDelete={onDelete} />, {
      closeOnClick: false,
    });
  };

  return (
    <React.Fragment>
      <tr key={id} className='py-3'>
        <td>
          <Media>
            <Media left className='d-flex align-self-center mr-3'>
              <Avatar.Image
                size='lg'
                src={randomAvatar()}
                className='align-self-center'
              />
            </Media>
            <Media body>
              <a className='mt-0 d-flex text-decoration-none' href='#!'>
                {title}
              </a>
              <span>{site}</span>
            </Media>
          </Media>
        </td>
        <td className='align-middle'>{description}</td>
        <td className='align-middle'>
          <h5>
            <ActivePassiveBadge active={active} />
          </h5>
        </td>
        <td className='align-middle text-right'>
          <UncontrolledButtonDropdown>
            <DropdownToggle color='link' className='pr-0'>
              <i className='fa fa-gear'></i>
              <i className='fa fa-angle-down ml-2' />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link to={`/dashboard/details/product/${id}`}>
                  <i className='fa fa-fw fa-folder-open mr-2'></i>
                  Görüntüle
                </Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={notifyDelete}>
                <i className='fa fa-fw fa-trash mr-2'></i>
                Sil
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </td>
      </tr>
    </React.Fragment>
  );
};

TrTableProductsList.propTypes = {
  id: PropTypes.node,
};
TrTableProductsList.defaultProps = {
  id: "1",
};

export { TrTableProductsList };
