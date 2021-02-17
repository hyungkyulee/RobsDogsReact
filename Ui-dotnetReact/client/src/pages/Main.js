import React, {useEffect, useState} from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap'

import config from '../config.json'

import DogOwnerRegistration from '../components/DogOwnerRegistration'
import DogOwnerSearch from '../components/DogOwnerSearch'

const Main = () => {
  const [ownderId, setOwnerId] = useState('')
  const [openBox, setOpenBox] = useState(false)
  const [dogName, setdogName] = useState('')

  useEffect(() => {
  }, [])

  return (
    <Container>
      <Row>
        <Col md={12} >
          <h1>Rob's dogs</h1>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2>Introduction</h2>
        </Col>
      </Row>
      <Row style={{textAlign: 'left'}}>
        <Col md={12} style={{fontSize: '0.7rem'}}>
          <p>When this system was built, Rob had one dog. Recently Rob's wife has insisted they get more dogs. As a result, this system needs updating to accommodate the new additions to their family. </p>

          <p>Rob's first dog is named Willow, he now has two additional dogs named "Nook" and "Sox". </p>

          <p>
              Please improve this system to display the name of all three of Rob's dogs in the dog names column in the table below(Willow, Nook, Sox). Please focus on the following points:
              <ul>
                  <li>Extend the entities to allow for a list of dogs</li>
                  <li>Refactor the DogOwner Service and DogOwner repository to allow this to be injectable</li>
                  <li>Fix any broken Unit tests</li>
              </ul>
          </p>

          <p>Rob's friend(bob) insists on using only ReactJs, and as such has created a demo app showing how easy it is. Please complete bob's demo by displaying the list of robs dogs in the relevant component</p>

          <p>You do not need to interact with a database, feel free to edit the data returned in the file named "Ui\Data\DogOwnerRepository.cs", changing the entity structure as required. </p>
          <p>StructureMap is installed and configured to use default conventions (drop the I) and scan all assemblies so you will not have to configure any DI container.</p>
          <p>Moq is installed into Ui.Tests to allow you to develop the unit testing in the Ui, feel free to add Moq anywhere else you see fit.</p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          {
            openBox &&
              <DogOwnerRegistration onOpen={setOpenBox} />
          }
          <Button variant="primary" onClick={() => setOpenBox(true)}>Registration</Button>  
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <DogOwnerSearch />
        </Col>
      </Row>
    </Container>
      
  )
}

export default Main