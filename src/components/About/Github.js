import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffff",
    level0: "#cacaca",
    level1: "#82CD47",
    level2: "#54B435",
    level3: "#379237",
    level4: "#125C13",
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px", }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="anuragn0507"
        blockMargin={5}
        blockRadius={5}
        blockSize={15}
        weekStart={0}
        theme={colourTheme}
        fontSize={16}
        showWeekdayLabels
      />
    </Row>
  );
}

export default Github;
