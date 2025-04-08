import styled from 'styled-components';

export const PageWrapper = styled.div`
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eef1f4;
`;

export const Container = styled.div`
  width: 800px;
  padding: 20px;
  background-color: #fdfdfd;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: 20px;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const SubTitle = styled.h2`
  text-align: center;
`;