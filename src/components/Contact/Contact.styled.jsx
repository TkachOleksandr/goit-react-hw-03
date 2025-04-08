import styled from 'styled-components';

export const Item = styled.li`
  padding: 12px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.span`
  font-size: 16px;
`;

export const DeleteButton = styled.button`
  padding: 6px 12px;
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background-color: #d32f2f;
  }
`;