import React from 'react';
import styled from 'styled-components';
import { Typography } from '@rmwc/typography';
import empty from '../img/emptySchedule.svg';
import error from '../img/errorSchedule.png';

const Container = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1em;
`;

const PlaceholderImage = styled.img`
  margin-top: 3em;
  margin-bottom: 1em;
`;

export const EmptySchedule = () => {
  return (
    <Container>
      <Typography use="headline3">
        Brak rozkładu!
      </Typography>

      <Typography use="subtitle1">
        Nie został jeszcze opublikowany rozkład na ten dzień.
      </Typography>

      <PlaceholderImage src={empty} />
    </Container>
  )
};

export const ErrorSchedule = () => {
  return (
    <Container>
      <Typography use="headline4">
        Błąd podczas pobierania rozkładu!
      </Typography>

      <Typography use="subtitle1">
        Zrelaksuj się, powinniśmy to wkrótce naprawić. Może nie masz dostępu do internetu?
      </Typography>

      <PlaceholderImage src={error} />
    </Container>
  )
};