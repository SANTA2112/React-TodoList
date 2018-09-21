import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,.5);
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Header = styled.p`
  font-size: 24px;
  margin-bottom: 15px;
`;

export const Wrap = styled.div`
  background-color: #fff;
  border-radius: 10px;
  border: 3px solid black;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 55px;
  padding: 10px 0;
  text-align: center;
  border: none;
  background-color: #25a59a96;
  transition: background-color .3s;
  color: #fff;
  &:hover {
    background-color: #25a59a;
  }
  &:first-child {
    margin-right: 15px;
  }
`;
