import React from "react";

import { Button, EmptyLayout } from "../../components";
import { FooterAuth } from "../components/FooterAuth";
import { HeaderAuth } from "../components/HeaderAuth";
import { useHistory } from "react-router-dom";

const Error404 = () => {
  const history = useHistory();

  return (
    <EmptyLayout>
      <EmptyLayout.Section center>
        {/* START Header */}
        <HeaderAuth title='404 Sayfa Bulunamadı' />
        {/* END Header */}

        {/* START Bottom Links */}
        <div className='d-flex justify-content-center mb-5'>
          <Button color='primary' onClick={history.goBack}>
            Geri Dön
          </Button>
        </div>
        {/* END Bottom Links */}

        {/* START Footer */}
        <FooterAuth />
        {/* END Footer */}
      </EmptyLayout.Section>
    </EmptyLayout>
  );
};

export default Error404;
