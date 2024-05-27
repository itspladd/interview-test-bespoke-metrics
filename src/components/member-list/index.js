import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import AddMemberForm from "../AddMemberForm";
import MemberRow from "../MemberRow";
import { getData } from '../../api'

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  padding: 0 5rem;
`;

const Filters = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 1rem 0;
  > input {
    max-width: 10rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
`;

const Table = styled.table`
  width: calc(100% - 10rem);
  padding: 0 5rem;
  max-width: 100%;
  background: #fff;
  border-radius: 5px;
  border-collapse: collapse;
  box-shadow: 0px 1px 5px 2px #d3d1d1;
`;

export const Thead = styled.thead`
  background: lightgrey;
`;

const TH = styled.th`
  padding: 0.5rem;
  text-align: center;
`;

export const SearchBar = () => (
  <Input
    type="text"
    placeholder="Search for a member"
  />
);

const MemberList = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getData(setMembers);
  }, []);

  return (
    <Block>
      <h1>My Club's Members</h1>
      <Filters>
        <SearchBar />
      </Filters>
      <AddMemberForm setMembers={setMembers} />
      <Table>
        <Thead>
          <tr>
            <TH>Name</TH>
            <TH>Age</TH>
            <TH>Member Rating</TH>
            <TH>Activities</TH>
          </tr>
        </Thead>
        <tbody>
          {members.map((member) => (
            <MemberRow {...member} key={member.id} />
          ))}
        </tbody>
      </Table>
    </Block>
  );
};

export default MemberList;
