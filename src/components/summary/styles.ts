import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  div {
    display: flex;
    align-items: center;

    background: var(--blue-light);
    padding: 1.5rem 2rem;
    border-radius: 1.25rem;
    color: var(--white);

    header {
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 0.25rem;

      background: var(--white);
    }

    span {
      margin-left: 0.5rem;
      
      p {
        font-size: 1rem;
      }

      strong {
        font-size: 1.5rem;
      }
    }

    &.income {
      background: var(--blue-light);
    }

    &.outcome {
      background: var(--red-light);
    }

    &.total {
      background: var(--green-light);
    }
    &.stretch {
      grid-template-columns: auto;
      align-content: stretch;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2 ,1fr);
    grid-gap: 1rem;

    div {
      padding: 1rem 0.5rem;

      svg {
        width: 2.3rem;
        height: 2.5rem;
      }
      &.total {
        grid-column: span 2/3;
        justify-content: center;
      }
    }
    
  }

`