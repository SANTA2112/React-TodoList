import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  margin: 20px 0;
`;

export const Text = styled.p`
  font-size: 16px;
  padding-right: 10px;
`;

export const ButtonWrap = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
  flex: 0 0 auto;
  padding-right: 4px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 50%;
  background-color: #25a59a96;
  color: #fff;
  cursor: pointer;
  width: 35px;
  height: 35px;
  outline: none;
  transition: background-color .3s;
  &:hover {
    background-color: #25a59a;
  }
`;
