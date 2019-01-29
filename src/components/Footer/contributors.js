import React from 'react';
import './contributors.css';

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

  const sortedList = contributorsList.sort(function (a, b) {
    console.log(a)
    return b.contributions - a.contributions;
  });

  return (
    <div>
      <div className="cFooterlink" data-toggle="modal" data-target="#contribModal">
        <li>& {sortedList.length} Other Contributors</li>
      </div>

      <div
        className="modal fade"
        id="contribModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="contribModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title" id="exampleModalLabel">
                Project Contributors
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body row">
              {sortedList.map((user, index) => {
                return (
                  <a
                    key={index}
                    className="col-xs-12 col-sm-6 col-md-6 col-lg-4 text-center"
                    href={user.html_url}
                  >
                    <div className="contribCard">
                      <img
                        className="d-none d-sm-block"
                        src={user.avatar_url}
                        alt={`${user.login}'s Avatar`}
                      />
                      <h5>{user.login}</h5>
                      <p>{user.contributions} Contributions</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="modal-footer">
              <button type="button" className="button-primary" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Contrib);
