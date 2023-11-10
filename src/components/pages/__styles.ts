import styled from "styled-components";

const NavWrapper = styled.div`
  magin-left: 10px;
  font-size: 20px;
  // NavWrapper === & если вложенность больше то пишем так & > a > a > span
  & > a {
    text-decoration: none;
    color: #1e3786;
  }

  & > a.active {
    text-decoration: none;
    color: #03eaff;
  }

  & > a:hover {
    color: steelblue;
  }

`


export const S = {
    NavWrapper
}