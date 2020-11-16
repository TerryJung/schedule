import React, { useState } from "react";
import Icons from "../../components/atoms/Icons";
import Input from "../../components/atoms/Input";

const Schedule = () => {
  const [scheduleName, setScheduleName] = useState("");

  console.log(scheduleName);

  return (
    <>
      <Input
        value={scheduleName}
        onChange={(e) => setScheduleName(e.target.value)}
        size={10}
        style={{ width: "500px" }}
      />
      <Icons name="Clear" color="#999999" size={100} />
    </>
  );
};

export default Schedule;
