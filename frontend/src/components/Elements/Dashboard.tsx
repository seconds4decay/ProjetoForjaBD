import React, { useEffect, useState } from "react";

interface Props {
    children: React.ReactNode,
}

export default function Dashboard(props: Props) {

    return (
    <div>
        {props.children}
    </div>
  );
}

