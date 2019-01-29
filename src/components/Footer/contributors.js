import React from 'react';
import './contributors.css';
import Modal from '../Modals/contribBody';

const Contrib = ({ contributors }) => {

  // Contributions from previous Repo
  const prevContribs = {
    MattCSmith: 74,
    aneagoie: 30,
    Dhaval1403: 19,
    anantankur: 11,
  }

  // Remove the bot and add prevContribs
  const contributorsList = contributors.filter(user => {
    if (user.login !== 'allcontributors[bot]') {
      if (prevContribs[user.login] !== undefined) user.contributions += prevContribs[user.login]
      return user;
    }
  })

  // Used to inject Dhaval previous stats, if he is unable to make a new PR
  if (contributorsList.filter(user => user.login === 'Dhaval').length === 0) contributorsList.push(
    {
      "login": "Dhaval",
      "avatar_url": "https://avatars0.githubusercontent.com/u/24822319?s=460&v=4",
      "html_url": "https://github.com/Dhaval403",
      "contributions": 19
    }
  )

  // Resorts the list after all the data injection
  const sortedList = contributorsList.sort(function (a, b) {
    return b.contributions - a.contributions;
  });

  return (
    <div>
      <div className="cFooterlink" data-toggle="modal" data-target="#contribModal">
        & {sortedList.length} Other Contributors
      </div>

      <Modal data={sortedList} />

    </div>
  );
};

export default React.memo(Contrib);
