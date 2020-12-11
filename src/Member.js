import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faTumblr, faYoutube, faSafari } from "@fortawesome/free-brands-svg-icons";
import { districtGenerator } from './Helper';
import './css/Member.css';


export default function Member(props) {
    console.log('MEMBA', props.member);

    let memberColor = null;
    switch (props.member.party) {
        case 'R':
            memberColor = 'red';
            break;
        case 'D':
            memberColor = 'blue';
            break;
        default:
            memberColor = 'yellow';
            break;
    }

    const pictureStyle = {
        border: `6px solid ${memberColor}`
    };

    return (
        <div className="card">
            <div className="card-header" style={{ backgroundColor: props.mapColor }}>
                <div className="image-cropper">
                    <img src={`https://theunitedstates.io/images/congress/225x275/${props.member.id}.jpg`} alt="Profile Image" className="profile-img" style={pictureStyle} />
                </div>
            </div>
            <div className="card-body">
                <p className="full-name">({props.member.party}) {props.member.first_name} {props.member.middle_name} {props.member.last_name}</p>
                <p className="username">{props.member.office} | {props.member.phone}</p>
                <p className="city">{props.member.senate_class ? props.member.title : `${districtGenerator(props.member.district)} District`}, {props.member.seniority} Years Experience</p>
                <p className="desc">{props.member.leadership_role}</p>
                <p>
                    <a href={`http://www.facebook.com/${props.member.facebook_account}`} className="social-icon facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href={`http://www.twitter.com/${props.member.twitter_account}`} className="social-icon twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href={`http://www.youtube.com/user/${props.member.youtube_account}`} className="social-icon youtube"><FontAwesomeIcon icon={faYoutube} /></a>
                    <a href={props.member.url} className="social-icon website"><FontAwesomeIcon icon={faSafari} /></a>
                </p>
            </div>
            <div className="card-footer" style={{ backgroundColor: props.mapColor }}>
                <div className="col vr">
                    <p><span className="count">{`${props.member.votes_with_party_pct}%`}</span><br/>Votes With Party</p>
                </div>
                <div className="col vr">
                    <p><span className="count">{`${props.member.missed_votes_pct}%`}</span><br/>Missed Vote</p>
                </div>
                <div className="col">
                    <p><span className="count">{props.member.cook_pvi ? props.member.cook_pvi : 'N/A'}</span><br/>Cook Partisan Voting Index</p>
                </div>
            </div>
        </div>
    );
}