import React, { Component } from 'react';import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class OrganisationList extends Component  {
    render() {

        const {
            isLoading,
            organisationList,
            error,
            getOrganisation
        } = this.props;

        return (
            <>
                <h3 className = 'text-center'>
                    total search result : { organisationList.total_count }
                </h3>
                <Row>
                    <Col className = 'text-truncate'>
                        <h5>name</h5>
                    </Col>
                    <Col className = 'text-truncate text-center'>
                        <h5>type</h5>
                    </Col>
                    <Col/>
                </Row>

                {
                    organisationList.items.map( item => {
                        return (
                            <Row key={ item.id }>
                                <Col className = 'text-truncate'>
                                    { item.login }
                                </Col>
                                <Col className = 'text-truncate text-center'>
                                    { item.type }
                                </Col>
                                <Col className = 'text-truncate text-right'>
                                    <Link to = {`/organisation/${ item.login }`}>
                                        <p onClick = {() => getOrganisation( item.login )}>
                                            more info...
                                        </p>
                                    </Link>
                                </Col>
                            </Row>
                        );
                    })
                }
            </>)
    }

};


OrganisationList.propTypes = {
    organisationList : PropTypes.object,
    getOrganisation : PropTypes.func,
};