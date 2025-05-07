import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

export default function DropdownGenre({ setGenre }) {
  const handleSelect = (eventKey) => {
    setGenre(eventKey);
  };

  return (
    <div style={{ paddingLeft: 100 }}>
      <Dropdown className="genres-box">
        <DropdownButton
          variant="secondary"
          onSelect={handleSelect}
          title="Gen film"
        >
          <div className="three-column">
            <Dropdown.Item eventKey="Acțiune">Action</Dropdown.Item>
            <Dropdown.Item eventKey="Animație">Animațion</Dropdown.Item>
            <Dropdown.Item eventKey="Aventură">Adventure</Dropdown.Item>
            <Dropdown.Item eventKey="Comedie">Comedy</Dropdown.Item>
            <Dropdown.Item eventKey="Copii">Children</Dropdown.Item>
            <Dropdown.Item eventKey="Crimă">Crime</Dropdown.Item>
            <Dropdown.Item eventKey="Documentar">Documentary</Dropdown.Item>
            <Dropdown.Item eventKey="Dramă">Drama</Dropdown.Item>
            <Dropdown.Item eventKey="Familie">Family</Dropdown.Item>
            <Dropdown.Item eventKey="Fantezie">Fantasy</Dropdown.Item>
            <Dropdown.Item eventKey="Horror">Horror</Dropdown.Item>
            <Dropdown.Item eventKey="Musical">Musical</Dropdown.Item>
            <Dropdown.Item eventKey="Sci-Fi">Sci-Fi</Dropdown.Item>
            <Dropdown.Item eventKey="Thriller">Thriller</Dropdown.Item>
            <Dropdown.Item eventKey="">All genres</Dropdown.Item>
          </div>
        </DropdownButton>
      </Dropdown>
    </div>
  );
}
