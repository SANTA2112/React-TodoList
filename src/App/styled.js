import styled from 'styled-components';

export const MainWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 550px;
  padding: 20px;
  background-color: #fff;
`;

export const Header = styled.h1`
  font-size: 56px;
  margin-bottom: 14px;
  font-weight: 400;
  text-align: center;
`;

export const Group = styled.div`
  position: relative;
`;

export const GroupSpan = styled.span`
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: .5;
`;

export const GroupSpan2 = styled.span`
  position: relative;
  display: block;
  width: 100%;
  &::before {
    content: '';
    height: 1px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background-color: #25a59a;
    transition: .2s ease all;
    left: 50%;
  }
  &::after {
    content: '';
    height: 1px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background-color: #25a59a;
    transition: .2s ease all;
    right: 50%;
  }
`;

export const GroupLabel = styled.label`
  color: #969696;
  font-size: 18px;
  font-weight: 400;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: .2s ease all;
`;


export const GroupInput = styled.input`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #969696;
  &:focus {
    outline: none;
    ${Group} ~ .highlight {
      animation: inputHighlighter 0.3s ease;
    }
  }
  &:focus ~ ${GroupLabel} {
    top: -20px;
    font-size: 14px;
  }
  &:focus ~ ${GroupSpan2}:before {
    width: 50%;
  }
  &:focus ~ ${GroupSpan2}:after {
    width: 50%;
  }
  @keyframes inputHighlighter {
    from {
      background: #5264AE;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
`;

export const Form = styled.form`
  margin-bottom: 30px;
`;

export const Todos = styled.ul`
  list-style: none;
  height: 250px;
  overflow-y: auto;
  /* width */
  ::-webkit-scrollbar {
      width: 6px;
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
