import { Button, FormGroup, TextField, FormLabel } from "@mui/material";
import React, { useState } from "react";

import useMemberState from "../hooks/useMemberState";

import LabelledCheckbox from "./LabelledCheckbox"

import styled from 'styled-components';

import { updateMember } from "../api";

export default function MemberRow ({ id, age, name, activities, rating }) {
  
  const [isEdit, setIsEdit] = useState(false)

  const {
    member,
    onNameChange,
    onAgeChange,
    onRatingChange,
    onActivityChange
  } = useMemberState({
    initName: name,
    initAge: age,
    initRating: rating,
    initActiviites: activities
  })

  const Cell = styled.td`
  padding: 0.5rem;
  text-align: center;
  `;

  const CellComponent = ({data, editableComponent}) => {
    if (!isEdit) {
      return <Cell>{data}</Cell>
    }

    if (isEdit) {
      return (
        <td>
          {editableComponent}
        </td>
      )
    }
  }

  const activityList = activities.map((activity, i) => (
    <div key={i}>{activity}</div>
  ))
  
  return (
    <tr key={id}>
      <CellComponent data={name} editableComponent={
        <TextField
            id="name"
            label="Name"
            value={member.name}
            onChange={onNameChange}
          />
      } />
      <CellComponent data={age} editableComponent={
        <TextField
          id="age"
          label="Age"
          value={member.age}
          onChange={onAgeChange}
        />
      } />
      <CellComponent data={rating} editableComponent={
        <TextField
            id="rating"
            label="Rating"
            value={member.rating}
            onChange={onRatingChange}
          />
      } />
      <CellComponent data={activityList} editableComponent={
        <FormGroup>
          <FormLabel component="legend">Activities</FormLabel>
          { Object.keys(member.activities).map(name => (
            <LabelledCheckbox
              name={name}
              checked={member.activities[name]}
              handleChange={onActivityChange}
            />
          ))}
        </FormGroup>
      } />
      <Button onClick={() => {
        isEdit && updateMember({...member, id})
        setIsEdit(prev => !prev)
      }}>
        {isEdit ? "Save" : "Edit"}
      </Button>
    </tr>
  )
}