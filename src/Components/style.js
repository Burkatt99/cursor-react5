import styled from "styled-components";
import "./fonts.css";

export const Block = styled.div`
  margin: 10% 35%;
  width: 27%;
  height: auto;
  background-color: #1a1a1a;
  padding-bottom: 40px;
`;
export const Icon = styled.div`
  width: 35px;
  height: 35px;
  background-color: pink;
  border-radius: 100%;
  margin: 60px 45% 10px;
`;
export const Img = styled.img`
  width: 60%;
  height: auto;
  margin-top: 6px;
  background-color: pink;
`;
export const Person = styled.div`
  display: flex;
  padding-left: 45px;
`;
export const Title = styled.h3`
  font-size: 20px;
  color: white;
  font-family: "Roboto", sans-serif;
  padding-bottom: 20px;
`;
export const Input = styled.input`
  width: 65%;
  height: 35px;
  margin: 10px 15%;
  border: 0.5px solid ${(props) => props.color || "whitesmoke"};
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0);
  padding-left: 10px;
  outline: none;
  color: whitesmoke;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
`;
export const Name = styled(Input)`
  width: 32%;
  margin: 10px;
  font-size: 12px;
`;
export const Check = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 16%;
`;
export const Button = styled.button`
  width: 70%;
  height: 25px;
  margin: 30px 15% 0;
  border-radius: 5px;
  background-color: #94bdd1;
  outline: none;
  border: 0px solid #94bdd1;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  &:hover {
    cursor: pointer;
    border: 2px solid grey;
  }
`;
export const AskIn = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 15% 40px;
`;
export const AskUp = styled(AskIn)`
  justify-content: flex-end;
`;
export const Span = styled.span`
  font-size: 10px;
  font-family: "Roboto", sans-serif;
  color: #94bdd1;
  margin-bottom: 35px;
  text-decoration: none;
`;
export const End = styled(Span)`
  color: #a7b6be;
  padding-bottom: 35px;
`;
