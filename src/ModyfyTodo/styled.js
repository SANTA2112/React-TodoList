import styled from 'styled-components';

export const Input = styled.textarea`
  border-radius: 5px;
  width: 250px;
  height: 100px;
  margin-bottom: 10px;
  outline: none;
  border: 1px solid grey;
  resize: none;
  padding: 10px;
  &:focus {
    border-color: #25a59a;
  }
  /* width */
  ::-webkit-scrollbar {
      width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
      background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
      background: #25a59a;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
      background: #25a59a96;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;
