'use client';

import React, { useState } from "react";
import { useSnack } from "../Components/SnackProvider.tsx";
import { ContinuousCalendar } from "../Components/ContinuousCalendar";

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function DemoWrapper() {
  const { createSnack } = useSnack();

  const onClickHandler = (day: number, month: number, year: number) => {
    const snackMessage = `Clicked on ${monthNames[month]} ${day}, ${year}`
    createSnack(snackMessage, 'success');
  }

  return (
    <div className="flex h-screen w-full items-center">
      <div className="relative h-full overflow-auto mt-5 scale-75 origin-top">
        <ContinuousCalendar onClick={onClickHandler} />
      </div>
    </div>

  );
}