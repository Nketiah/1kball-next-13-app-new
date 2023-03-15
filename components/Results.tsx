"use client"
import React, { useState } from "react";

const Results = ({gameCategoryData}: {gameCategoryData: CategoryData[]}) => {

  return (
    <>
      {gameCategoryData &&
        gameCategoryData.map((game) => (
          <li style={{ alignSelf: "flex-start" }} key={Math.random()}>
            {game.game_name}
          </li>
        ))}
    </>
  );
};

export default Results