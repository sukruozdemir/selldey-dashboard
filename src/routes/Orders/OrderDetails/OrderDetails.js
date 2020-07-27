import React from "react";
import { useParams } from "react-router-dom";
import faker from "faker/locale/tr";

import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  CustomInput,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "../../../components";
import { HeaderMain } from "../../components/HeaderMain";

function OrderDetails() {
  const params = useParams();

  // TODO: if id not changed, send post

  return (
    <Container fluid>
      <HeaderMain
        title={`Sipariş - ${faker.name.firstName()} ${faker.name.lastName()} (${faker.phone.phoneNumber()})`}
        className='mb-5 mt-4'
      />
      <Row>
        <Col lg={12}>
          <h1 className='mr-3 display-4 text-muted'>#{params.orderNo}</h1>

          <Card className='mb-3 mt-3'>
            <CardBody>
              {/* START Form */}
              <Form>
                {/* START Input */}
                <FormGroup>
                  <Label for='input-2'>Input</Label>
                  <Input
                    type='text'
                    name=''
                    id='input-2'
                    placeholder='Enter Name...'
                  />
                </FormGroup>
                {/* END Input */}
                {/* START Input */}
                <FormGroup>
                  <Label for='inputPassword-2'>Password</Label>
                  <Input
                    type='password'
                    name='password'
                    id='inputPassword-2'
                    placeholder='Password...'
                  />
                </FormGroup>
                {/* END Input */}
                {/* START Radios */}
                <FormGroup>
                  <Label for='operatingSystem' className='pt-0'>
                    Operating System
                  </Label>
                  <div>
                    <CustomInput
                      type='radio'
                      id='operatingSystem1'
                      name='operatingSystem'
                      label='OSX'
                      inline
                      defaultChecked
                    />
                    <CustomInput
                      type='radio'
                      id='operatingSystem2'
                      name='operatingSystem'
                      label='Windows'
                      inline
                    />
                    <CustomInput
                      type='radio'
                      id='operatingSystem3'
                      name='operatingSystem'
                      label='Linux'
                      inline
                      disabled
                    />
                  </div>
                </FormGroup>
                {/* END Radios */}
                {/* START Select */}
                <FormGroup>
                  <Label for='country-selector-2'>Country</Label>
                  <CustomInput
                    type='select'
                    name='customSelect'
                    id='country-selector-2'
                  >
                    <option value=''>Select Country...</option>
                    <option>United States of America (US)</option>
                    <option>United Kingdom (UK)</option>
                    <option>Australia</option>
                    <option>Canada</option>
                    <option>Other...</option>
                  </CustomInput>
                </FormGroup>
                {/* END Select */}
                {/* START File Select */}
                <FormGroup>
                  <Label for='addCv2'>Add CV</Label>
                  <CustomInput
                    type='file'
                    id='addCv2'
                    name='customFile'
                    label='Choose file...'
                  />
                  <FormText color='muted'>
                    Accepted formats: pdf, doc, txt. Max file size 7Mb
                  </FormText>
                </FormGroup>
                {/* END File Select */}
                {/* START Textarea */}
                <FormGroup>
                  <Label for='message-2'>Message</Label>
                  <Input
                    type='textarea'
                    name='text'
                    id='message-2'
                    placeholder='Enter Your Message...'
                    className='mb-2'
                  />
                  <CustomInput
                    type='checkbox'
                    id='iConfirm'
                    label='I confirm that I have read the Terms.'
                    className='mb-3'
                  />
                  <Button color='primary'>Save</Button>
                </FormGroup>
                {/* END Textarea */}
              </Form>
              {/* END Form */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default OrderDetails;
