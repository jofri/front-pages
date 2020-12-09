import React from 'react';
import './profile.css';
import { Avatar } from '@material-ui/core';
import CheckBox from './checkboxes/CheckBox';
import CheckBoxPreferences from './checkboxes/CheckBoxPreferences';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';

function Profile (props) {
  return (
    <div className="ProfileWrapper">
      <Card>
        <div className="profileRow">
          <span className="AvatarName">
            <Avatar src={props.loginUser.photo}></Avatar>
            <h4 className="ProfilePageName">{props.loginUser.username}</h4>
          </span>
          <p className="profileEmail">{props.loginUser.email}</p>
        </div>
      </Card>
      <Divider style={{marginTop: '0.9vh', marginBottom: '0.9vh'}}></Divider>
      <Card>
        <div className="profileRow"><h4 className="objectiveScore">Objective Score</h4><h5 className="objectiveScoreNumber">5</h5></div>
      </Card>
      <Divider style={{marginTop: '0.9vh', marginBottom: '0.9vh'}}></Divider>
      <Card>
        <div className="profileColumn">
          <h5 className="ProfileHeaderNews">Newsletter Preferences</h5>
          <div className="profileCheckBoxWrap">
            <CheckBoxPreferences></CheckBoxPreferences>
          </div>
        </div>
      </Card>
      <Divider style={{marginTop: '0.9vh', marginBottom: '0.9vh'}}></Divider>
      <Card>
        <div className="profileColumn">
          <h5 className="ProfileHeaderNews">News Settings</h5>
          <div className="profileCheckBoxWrap">
            <CheckBox></CheckBox>
          </div>
        </div>
      </Card>
      <Divider style={{ marginTop: '0.9vh', marginBottom: '0.9vh' }}></Divider>
    </div>
  );
}

export default Profile;

