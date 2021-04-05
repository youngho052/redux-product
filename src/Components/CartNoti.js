import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import CartIcon from "./CartIcon";

export default function CartNoti() {
  const history = useHistory();
  const items = useSelector((store) => store.cartReducer);
  return (
    <Icon onClick={() => history.push("/cart")}>
      <ItemCount>
        <span>{items.length}</span>
      </ItemCount>
      <CartIcon width="32" height="32" />
    </Icon>
  );
}

const Icon = styled.div`
  position: relative;
`;

const ItemCount = styled.div`
  position: absolute;
  top: -7px;
  right: -7px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 19px;
  height: 20px;
  border-radius: 2px;
  background-color: #e82c23;
  font-size: 11px;
`;
