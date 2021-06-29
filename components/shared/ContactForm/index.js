import React, { useState } from 'react';
import { Container, 
    Row,
    Col, 
    Form, 
    FormGroup, 
    Label, 
    ButtonDropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem,
    Button } from 'reactstrap';
import Titre from "../Titre";
import ContactFormStc from "./contactForm.stc";
import SousTitle from '../SousTitle';

const FormContact = (props) => {
    const [dropdownOpen, setOpen] = useState(false);
    const [dropdownOpen1, setOpen1] = useState(false);
    const [dropdownOpen2, setOpen2] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  const toggle1 = () => setOpen1(!dropdownOpen1);
  const toggle2 = () => setOpen2(!dropdownOpen2);

  return (
    <ContactFormStc>
    <Container className="mb-5">
        <Row>
          <Col lg="4">
            
          </Col>

          <Col lg="4" className="header__form">
            <SousTitle text__transform="uppercase" font__weight="500" text__align="center" color="#8c89a2" padding__bottom="0" texte="ÉTABlISSEMENTS" className="sousTitle__formContact mb-0" /><br></br>
            <Titre couleur="#3f3a64" poid_font="700" taille="34px" text__align="center" className="mt-0" texte="La liste des écoles" />
          </Col>

          <Col smlg="4">
            
          </Col>

        </Row>
    </Container>

    <Form >
      <Container>
      <FormGroup row className="the-form">      
        <Col className="col-sm-3" xl={3}>
        <Label for="etablissement" size="lg">Type D'etablissement</Label><br></br>
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className="btn__Drop">
            <DropdownToggle caret>
            Selectionner
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        </Col>

        <Col className="col-sm-3" xs={3}>
        <Label for="bac" size="lg">Series De Bac</Label><br></br>
            <ButtonDropdown isOpen={dropdownOpen1} toggle={toggle1} className="btn__Drop">
            <DropdownToggle caret>
                Selectionner
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        </Col>

        <Col className="col-sm-3" xs={3}>
        <Label for="pays" size="lg">Pays</Label><br></br>
            <ButtonDropdown isOpen={dropdownOpen2} toggle={toggle2} className="btn__Drop">
            <DropdownToggle caret>
            Selectionner
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        </Col>
      </FormGroup>

      <FormGroup row>      
        <Col className="col-sm-3" xl={3}>
        <Label for="ville" size="lg">Villes</Label><br></br>
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className="btn__Drop">
            <DropdownToggle caret>
            Selectionner
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        </Col>

        <Col className="col-md-3" xs={3}>
        <Button color="primary" size="lg" block className="btn__recherch"> Recherche
        </Button>
        </Col>

        <Col className="col-sm-3" xs={3}>
        
        </Col>
      </FormGroup>
    </Container>
    </Form>
    </ContactFormStc>
  );
}

export default FormContact;