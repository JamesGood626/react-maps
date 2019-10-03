import React from "react";
import styled from "styled-components";

const Span = styled.span`
  display: flex;
  flex-direction: column;
  height: 4rem;
  margin-bottom: 0.6rem;

  label {
    /* TODO: Apply a nice font-family */
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
  }

  input {
    height: 1.8rem;
    border: 0.1rem solid #222;
    background: rgba(0, 0, 0, 0);
  }
`;

export default function Textarea({ label, name, type, value, updateField }) {
  return (
    <Span>
      <label htmlFor={name}>{label}</label>
      <textarea type={type} value={value} onChange={updateField(name)} />
    </Span>
  );
}
