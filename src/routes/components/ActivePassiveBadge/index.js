import React from "react";
import { Badge } from "../../../components";

export default ({ active }) => (
  <>
    {active === true ? (
      <Badge color='green'>Aktif</Badge>
    ) : (
      <Badge color='red'>Pasif</Badge>
    )}
  </>
);
