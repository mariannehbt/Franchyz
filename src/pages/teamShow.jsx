import React from 'react';
import TeamCard from 'components/TeamCardx.jsx';
import PracticeListCoach from 'components/practiceListCoach.jsx';
import GameListCoach from 'components/gameListCoach.jsx';

const TeamShow = () => {
  return (
    <div>
      <TeamCard />
      <PracticeListCoach />
      <GameListCoach />
    </div>
  );
};

export default TeamShow;
