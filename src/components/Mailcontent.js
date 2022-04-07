import React from "react";
import "../css/Mailcontent.css";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import SendIcon from "@material-ui/icons/Send";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Header from "../components/Header";
import PrintIcon from "@material-ui/icons/Print";
import ReplyIcon from "@material-ui/icons/Reply";
import ForwardIcon from "@material-ui/icons/Forward";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Mailcontent = () => {
  const params = useParams();

  const [setsinglemail, setsetsinglemail] = useState([]);
  useEffect(() => {
    getmail();
  }, []);

  const getmail = async () => {
    var maildef = [];
    //console.log(id);
    var maildata = await axios
      .post("https://gmailbackend.herokuapp.com/singlemail", id)
      .then((res) => {
        return res.data;
      });
    maildef.push(maildata);
    setsetsinglemail(maildef);
  };
  //console.log(setsinglemail)

  var id = params;
  // console.log(id);

  return (
    <>
      <Header />
      <div className="main-body">
        <div className="sidebar">
          <button className="sidebar__compose">
            <span className="material__icons">
              <AddIcon />
            </span>
            Compose
          </button>
          <div className="sidebar__option sidebaroption__active">
            <span className="material__icons">
              <InboxIcon />
            </span>
            <h3>Inbox</h3>
          </div>

          <div className="sidebar__option ">
            <span className="material__icons">
              <StarIcon />
            </span>
            <h3>Starred</h3>
          </div>

          <div className="sidebar__option ">
            <span className="material__icons">
              <WatchLaterIcon />
            </span>
            <h3>Snoozed</h3>
          </div>

          <div className="sidebar__option ">
            <span className="material__icons">
              <SendIcon />
            </span>
            <h3>Sent</h3>
          </div>

          <div className="sidebar__option ">
            <span className="material__icons">
              <InsertDriveFileIcon />
            </span>
            <h3>Drafts</h3>
          </div>

          <div className="sidebar__option ">
            <span className="material__icons">
              <ExpandMoreIcon />
            </span>
            <h3>More</h3>
          </div>

          <div className="sidebar__footer">
            <div className="sidebar__footericons">
              <span className="material__icons">
                <PersonIcon />
              </span>
              <span className="material__icons">
                <DuoIcon />
              </span>
              <span className="material__icons">
                <PhoneIcon />
              </span>
            </div>
          </div>
        </div>

        <div className="email__list">
          <div className="emaillist__setting">
            <div className="emaillist__settingleft">
              <Link to="/home">
                <span className="material__icons">
                  <ArrowBackIosIcon />
                </span>
              </Link>
              <input type="checkbox" />
              <span className="material__icons">
                <ArrowDropDownIcon />
              </span>
              <span className="material__icons">
                <RedoIcon />
              </span>
              <span className="material__icons">
                <MoreVertIcon />
              </span>
            </div>

            <div className="emaillist__settingright">
              <Link to="/home">
                <span className="material__icons">
                  <ArrowBackIosIcon />
                </span>
              </Link>

              <span className="material__icons">
                <ArrowForwardIosIcon />
              </span>
              <span className="material__icons">
                <KeyboardHideIcon />
              </span>
              <span className="material__icons">
                <SettingsIcon />
              </span>
            </div>
          </div>

          <div className="emaillist__section">
            <div className="section section__selected">
              <span className="material__icons">
                <InboxIcon />
              </span>
              <h4>Inbox</h4>
            </div>

            <div className="section ">
              <span className="material__icons">
                <PeopleIcon />
              </span>
              <h4>Social</h4>
            </div>

            <div className="section ">
              <span className="material__icons">
                <LocalOfferIcon />
              </span>
              <h4>Promotions</h4>
            </div>
          </div>
          {setsinglemail.map((item, index) => (
            <div key={index}>
              <div className="mailcontent__heading">
                <div>
                  <h1>{item.subject}</h1>
                </div>
                <div className="mailcontent__heading1">
                  <span className="material__icons">
                    <PrintIcon />
                  </span>
                </div>
              </div>
              <div className="body__box">
                <p>{item.message}</p>
              </div>
            </div>
          ))}

          <div className="footer__button">
            <div className="reply__button">
              <span className="material__icons">
                <ReplyIcon />
              </span>
              <span>Reply</span>
            </div>
            <div className="reply__button1">
              <span className="material__icons">
                <ForwardIcon />
              </span>
              <span>Forward</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mailcontent;
