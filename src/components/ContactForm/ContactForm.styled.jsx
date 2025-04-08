import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 100%;
  padding: 16px;
  background: #f4f4f4;
  border-radius: 12px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

export const ErrorText = styled.div`
  color: crimson;
  font-size: 0.85em;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;