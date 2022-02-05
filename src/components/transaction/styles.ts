import styled, { css } from 'styled-components'

interface ContainerProps {
  minWidth?: boolean
}

export const Container = styled.div<ContainerProps>`
  margin-top: 4rem;

  ${props =>
    props.minWidth &&
    css`
      height: 38vh;
      margin: 4rem 0;
      overflow-y: auto;
    `}

  h1 {
    font-size: 2.2rem;
    color: var(--text);
    line-height: 2.3rem;
    margin-bottom: 1.5rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: var(--white);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 1rem 2rem;
    border-radius: 1rem;


    > div {
      display: flex;
      justify-content: center;
      align-items: center;


      header {
        img {
          width: 2rem;
          height: 2rem;
        }
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 1rem;

        strong  {
          font-size: 1rem;
          color: var(--text);
          line-height: 2rem;
        }

        p {
          font-size: 0.8rem;
          color: var(--text);
          line-height: 1.3rem;
        }
      }
    }
  }

  strong {
    font-size: 1.5rem;
    color: var(--red);
    line-height: 2rem;
  }

  div + div {
    margin-top: 1rem;
  }


  @media (max-width: 768px) {
    > div {
      &.margin {
      margin-bottom: 5rem;
    }
    }
    
  }
`