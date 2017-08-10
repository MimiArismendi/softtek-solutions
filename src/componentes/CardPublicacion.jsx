import React from 'react';
import { Button, Tag, Chip, Card, Collection, CollectionItem, Icon, Collapsible, CollapsibleItem, Row, Col, Badge } from 'react-materialize';
import '../TarjetaPublicacion.css';
import ModalReto from './ModalReto.jsx'; 

export default class CardPublicacion extends React.Component{
    render(){
        return(
            <Card actions={[<a href='#'>Ver mas ...</a>]}>
                <Row>
                    <h5>Nombre Usuario</h5>
                    <Col m={7}/>
                    <Col m={5}>
                        <div className="bordeColor">Necesidad</div>
                    </Col>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga itaque facere neque ad est delectus explicabo, similique illum laborum ut quam enim asperiores excepturi perferendis dolorum dolores ea tenetur ipsam?
                    </div>
                    <Collection>
                        <CollectionItem href='#'>Reto 1</CollectionItem>
                        <CollectionItem href='#'>Reto 2</CollectionItem>
                        <CollectionItem href='#'>Reto 3</CollectionItem>
                    </Collection>
                    <Col m={6}>
                        <ModalReto className="botonReto"/>
                    </Col>
                    <Col m={5}>
                        <Button className="botonReto">
                            <i className="material-icons">&#xE0BF;</i>
                        </Button>
                    </Col>
                    <Col m={3}>
                        <div className="centrarElementos">
                            <i className="material-icons">&#xE8DC;</i><span>12</span>
                            
                        </div>
                    </Col>
                    <Col m={12}>
                        <div className="margenTop">
                            <Tag>tag</Tag>
                            <Tag>tag</Tag>
                            <Tag>tag</Tag>
                        </div>
                    </Col>
                </Row>
            </Card>
        )
    }
}