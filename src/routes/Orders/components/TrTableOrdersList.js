import React from "react";
import faker from "faker/locale/tr";
import _ from "lodash";
import { Link } from "react-router-dom";

import {
  Badge,
  Progress,
  Avatar,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "./../../../components";
import { randomAvatar } from "./../../../utilities";

/*eslint-disable */
const status = [
  <Badge pill color='success'>
    Aktif
  </Badge>,
  <Badge pill color='danger'>
    Askıya Alındı
  </Badge>,
  <Badge pill color='warning'>
    Bekliyor
  </Badge>,
  <Badge pill color='secondary'>
    Durduruldu
  </Badge>,
];
/*eslint-enable */
/*eslint-disable */
const tasksCompleted = ["25", "50", "70", "90"];
/*eslint-enable */

const TrTableOrdersList = () => (
  <React.Fragment>
    {_.times(12, (index) => (
      <tr key={index}>
        <td className='align-middle'>
          <div className='text-inverse'>
            <Link to='#'>
              <i className='fa fa-fw fa-lg fa-star-o'></i>
            </Link>
          </div>
        </td>
        <td className='align-middle'>
          <div>
            <Link to='/apps/tasks/list' className='text-decoration-none'>
              {faker.company.catchPhrase()}
            </Link>
          </div>
          <span>
            Son Düzenleyen: {faker.name.firstName()} {faker.name.lastName()}{" "}
            <br />
            {faker.date.weekday()}, 12 {faker.date.month()}, 2020
          </span>
        </td>
        <td className='align-middle'>{status[index % 4]}</td>
        <td className='align-middle'>
          <Progress
            value={tasksCompleted[index % 4]}
            style={{ height: "5px" }}
            className='mb-2'
          />
          <div>
            Görev Tamamlandı:
            <span className='text-inverse'>36/94</span>
          </div>
        </td>
        <td className='align-middle'>
          <Avatar.Image size='md' src={randomAvatar()} />
        </td>
        <td className='align-middle text-right'>
          <UncontrolledButtonDropdown>
            <DropdownToggle color='link' outline>
              <i className='fa fa-gear' />
              <i className='fa fa-angle-down ml-2' />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <i className='fa fa-fw fa-folder-open mr-2'></i>
                Görüntüle
              </DropdownItem>
              <DropdownItem>
                <i className='fa fa-fw fa-ticket mr-2'></i>
                Yeni Görev Ekle
              </DropdownItem>
              <DropdownItem>
                <i className='fa fa-fw fa-paperclip mr-2'></i>
                Dosya Ekle
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <i className='fa fa-fw fa-trash mr-2'></i>
                Sil
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </td>
      </tr>
    ))}
  </React.Fragment>
);

export { TrTableOrdersList };
