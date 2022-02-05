import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 2rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1rem;
    color: var(--white);
    background: radial-gradient(118.75% 157.07% at 34.74% -18.75%, #527BC7 0%, #233F78 100%);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    cursor: pointer;

    transition: background filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }

    svg {
      margin-left: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    button {
      background: var(--white);
      padding: 2rem 1rem;

      border-radius: 1rem;

      svg {
        margin-left: initial;
      }
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 1px solid var(--white);
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 0.8rem;

    strong {
      font-size: 1.5rem;
      color: var(--text);
      line-height: 2rem;
    }

    p {
      font-size: 1rem;
      color: var(--text);
      line-height: 1.3rem;
    }
  }

`