import React, { useState } from "react";
import Input from "../../components/atoms/Input";

const Schedule = () => {
  const [scheduleName, setScheduleName] = useState("");

  console.log(scheduleName);

  return (
    <Input
      value={scheduleName}
      onChange={(e) => setScheduleName(e.target.value)}
    />
  );
};

export default Schedule;
