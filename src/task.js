import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
border: 1px solid lightgrey;
border-radius: 2px;
paddding: 8px;
margin-buttom: 8px;
`;

export default class Task extends React.Component {
  render() {
    return <Container>{this.props.task.content}</Container>;
  }
}
