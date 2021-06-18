import React, { useState } from 'react';
import { Container, 
    Col, 
    Form, 
    FormGroup, 
    Label, 
    ButtonDropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem,
    Button } from 'reactstrap';
import ContactFormStc from "./contactForm.stc";

const FormContact = (props) => {
    const [dropdownOpen, setOpen] = useState(false);
    const [dropdownOpen1, setOpen1] = useState(false);
    const [dropdownOpen2, setOpen2] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  const toggle1 = () => setOpen1(!dropdownOpen1);
  const toggle2 = () => setOpen2(!dropdownOpen2);

  return (
    <ContactFormStc>
    <Form >
      <Container>
      <FormGroup row>      
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
        <Label for="etablissement" size="lg">Series De Bac</Label><br></br>
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
        <Label for="etablissement" size="lg">Pays</Label><br></br>
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
        <Label for="etablissement" size="lg">Villes</Label><br></br>
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