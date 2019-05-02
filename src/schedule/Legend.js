import React,{Component} from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Wrapper = styled.footer`
  width: 100%;

  background-color: white;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  min-height: 78px;
  padding-left: 0.5em;
  padding-right: 0.5em;
  
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: start;
  }
`;

const LegendIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 2px;
  background-color: ${props => props.color}
  
  margin-right: 5px;
  
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  margin-top: 5px;
`;

const LegendItem = ({color, title}) => {
  return (
    <ItemWrapper>
      <LegendIcon color={color}/>
      <header>{title}</header>
    </ItemWrapper>
  )
};

const Legend = (props) => {
  return (
    <Wrapper>
      <LegendItem color={theme.COLOR_GREAT} title="Dużo wolnych torów"/>
      <LegendItem color={theme.COLOR_OK} title="Jest OK"/>
      <LegendItem color={theme.COLOR_LOW} title="Kiepsko"/>
      <LegendItem color={theme.COLOR_NONE} title="Brak wolnych torów"/>
    </Wrapper>
  )
};

export default Legend;