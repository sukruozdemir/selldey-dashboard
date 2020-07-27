import React from "react";
import { Link } from "react-router-dom";

import {
  Form,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroup,
  Button,
  Label,
  EmptyLayout,
  ThemeConsumer,
} from "../../components";

import { HeaderAuth } from "../components/HeaderAuth";
import { FooterAuth } from "../components/FooterAuth";

const Error404 = () => (
  <EmptyLayout>
    <EmptyLayout.Section center>
      {/* START Header */}
      <HeaderAuth title='404 Sayfa Bulunamadı' />
      {/* END Header */}

      {/* START Bottom Links */}
      <div className='d-flex justify-content-center mb-5'>
        <Link className="btn btn-primary" to='/login'>Giriş Yap</Link>
      </div>
      {/* END Bottom Links */}

      {/* START Footer */}
      <FooterAuth />
      {/* END Footer */}
    </EmptyLayout.Section>
  </EmptyLayout>
);

export default Error404;
