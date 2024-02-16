import React from "react";
import GroupPanel from "../components/GroupPanel/GroupPanel";
import NotesZone from "../components/NotesZone/NotesZone";

export default function NotesPage() {
  return (
      <GroupPanel>
        <NotesZone />
      </GroupPanel>
  );
}

// this NotesPage section renders groupPanel which is leftpart of pocket notes along with Notes taking Area in right side