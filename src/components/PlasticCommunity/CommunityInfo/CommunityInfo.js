import React, { useState } from "react";
import "./CommunityInfo.scss";
//import { useVote } from "../hooks";
//
// const IndexPanel = (props) => {
//   return (
//     <div className="index-panel">
//       <div className="district-wrapper">
//         {Object.keys(props.districts).map((k) => {
//           if (props.districts[k].numRestaurants > 0) {
//             return (
//               <div
//                 className="district"
//                 key={k}
//                 region={props.districts[k].region}
//                 onClick={() => {
//                   props.onChooseDistrictId(k);
//                 }}
//               >
//                 <div className="district-name">{props.districts[k].name}區</div>
//                 <div className="num-flex">
//                   <div className="num-restaurants">
//                     <span>{props.districts[k].numRestaurants}間</span>
//                   </div>
//                   <div className="num-upvotes is-hidden">
//                     <span>{props.districts[k].numVotes.toLocaleString()}</span>
//                   </div>
//                 </div>
//               </div>
//             );
//           } else {
//             return (
//               <div
//                 className="district district--empty"
//                 key={k}
//                 region={props.districts[k].region}
//                 onClick={() => {
//                   props.onChooseDistrictId(props.districts[k].keyValue);
//                 }}
//               >
//                 <div className="district-name">{props.districts[k].name}區</div>
//               </div>
//             );
//           }
//         })}
//       </div>
//     </div>
//   );
// };

const DistrictPanel = props => {
  //let theDistrict = props.districts[props.chosenDistrictId];
  const theDistrict = props.districts[props.chosenDistrictId];
  const [isExpand, setIsExpand] = useState(false); // expand restaurant list
  // const [hasVoted, doVote] = useVote();
  // const [voteStatus, setVoteStatue] = useState(
  //   hasVoted ? "HAS_VOTED_BEFORE" : "NEW"
  // );

  // const handleVote = () => {
  //   setVoteStatue("IS_SENDING");

  //   doVote(props.chosenDistrictId, {
  //     onSucc: (response) => {
  //       console.log("handleVote return", response);
  //       setVoteStatue("VOTE_SUCC");
  //     },
  //     onError: (error) => {
  //       console.log("handleVote error", error);
  //       setVoteStatue("VOTE_FAILED");
  //     },
  //   });
  // };

  const toogleExpandList = () => {
    setIsExpand(!isExpand);
  };

  return (
    <div className="section-communityinfo">
      <div className="district-panel">
        {theDistrict && [
          <div
            className="hero-part"
            key="hero-part"
            region={theDistrict.region}
          >
            {/*<div
            className="go-back"
            onClick={() => {
              props.onChooseDistrictId(null);
            }}
          >
            <i className="fas fa-chevron-left"></i>返回
          </div> */}
            <span className="district-name">{theDistrict.name}區</span>
            <span className="num-flex">
              {theDistrict.numRestaurants > 0 && (
                <span className="num-restaurants">
                  {theDistrict.numRestaurants}間店鋪加入計劃
                </span>
              )}
              {/*
            theDistrict.numVotes > 0 && (
              <div className="num-upvotes">
                <i className="far fa-kiss-wink-heart"></i>{" "}
                {theDistrict.numVotes.toLocaleString()}
              </div>
            )*/}
            </span>
          </div>,
          // <div className="upvote-part is-hidden" key="upvote-part">
          //   <span>「走塑友善」餐廳與商鋪</span>
          //   <div className="do-vote button ">
          //     {voteStatus === "NEW" && (
          //       <div onClick={handleVote}>
          //         為{theDistrict.name}
          //         區打氣
          //       </div>
          //     )}
          //     {voteStatus === "HAS_VOTED_BEFORE" && <div>感謝你的參與～</div>}
          //     {voteStatus === "IS_SENDING" && (
          //       <div className="loading">
          //         <i className="fas fa-spinner fa-spin"></i>
          //       </div>
          //     )}
          //     {voteStatus === "VOTE_SUCC" && (
          //       <div className="do-vote">
          //         <div>感謝你的支持，我們會努力推動更多店鋪加入走塑行列～</div>
          //       </div>
          //     )}
          //     {voteStatus === "VOTE_FAILED" && (
          //       <div className="is-danger">
          //         啊我們伺服器出了一些問題，請稍後再試一次～
          //       </div>
          //     )}
          //   </div>
          // </div>,
          <div
            className={`restaurant-list ${isExpand && "expand"}`}
            key="restaurant-list"
          >
            <ul>
              <li className="restaurant-row first-row">
                <div className="index"></div>
                <div className="left-part"></div>
                <div className="right-part">
                  <span>走塑等級</span>
                  {/* <div className="badege-level">堂食</div>
                <div className="badge-level">外賣</div> */}
                </div>
              </li>
              {theDistrict.restaurants.map((r, i) => {
                return (
                  <li className="restaurant-row" key={i}>
                    <div className="index">
                      <span>{i + 1}.</span>
                    </div>
                    <div className="left-part">
                      <div className="r-name">{r.name}</div>
                      <div className="r-address">
                        {r.address}
                        <a
                          href={`https://www.google.com.hk/maps/place/${r.address}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          alt={r.name}
                        >
                          <img
                            src={require("../../../assets/images/location-pin-sm.svg")}
                            className="pin"
                            alt=""
                          />
                          {/* <LocationPin className="pin" /> */}
                          {/* <i className="fas fa-map-marked-alt"></i> */}
                        </a>
                      </div>
                    </div>
                    <div className="right-part">
                      <div className="badge for-here" title="堂食走塑等級">
                        {r.herePlasticLevel > 0 && (
                          <span className="v">堂食:{r.herePlasticLevel}</span>
                        )
                        // || <span>-</span>
                        }
                      </div>
                      <div className="badge for-togo" title="外賣走塑等級">
                        {r.togoPlasticLevel > 0 && (
                          <span className="v">外賣:{r.togoPlasticLevel}</span>
                        )
                        // || <span>-</span>
                        }
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>,
          <div className="footer-part" />
        ]}
      </div>

      <div className="expand-container">
        {!props.restaurants && (
          <div className="loading fa-3x">
            <i className="fas fa-spinner fa-spin"></i>
          </div>
        )}

        <span className="btn-expand clickable" onClick={toogleExpandList}>
          <i className={`fas fa-${isExpand ? "minus" : "plus"}-circle`}></i>
        </span>
      </div>
    </div>
  );
};

export default props => {
  return (
    <section className="community-info">
      {/* {!props.chosenDistrictId && <IndexPanel {...props}></IndexPanel>} */}
      {props.chosenDistrictId && <DistrictPanel {...props}></DistrictPanel>}
    </section>
  );
};
