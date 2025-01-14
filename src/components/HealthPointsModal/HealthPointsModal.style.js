import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 300px;

  h2 {
    font-size: 24px;
    color: var(--red);
    padding: 16px 0;
    text-align: center;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    input {
      height: 50px;
      width: 200px;
      margin-bottom: 16px;
      padding: 14px 24px;
      background: transparent;
      font-size: 18px;
      font-family: 'Vollkorn SC', serif;
      color: var(--black);
      border: 2px solid var(--black);

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      &[type=number] {
        -moz-appearance: textfield;
      }
    }
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 8px;
`
