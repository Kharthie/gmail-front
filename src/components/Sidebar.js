import React from "react";
import "../css/Sidebar.css";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import SendIcon from "@material-ui/icons/Send";
import {CModal,CModalFooter,CButton,CModalHeader,CModalTitle,CModalBody,} from "@coreui/react";
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
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useEffect } from "react";
// import VideocamIcon from '@mui/icons-material/Videocam';
//import KeyboardIcon from '@mui/icons-material/Keyboard';

const Sidebar = () => {
  const [value, setvalue] = useState("");
  const [subject, setsubject] = useState("");
  const [mail, setmail] = useState([]);
  const [message, setmessage] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(async () => {
    var id = sessionStorage.getItem("from");
    var Id = {
      from: id,
    };

    var data = await axios
      .post("https://gmailbackend.herokuapp.com/mail", Id)
      //.post("http://localhost:5001/mail", Id)
      .then((res) => {
        return res.data;
      });
    setmail(data);
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(2),
        width: "50ch",
      },
    },
  }));

  const classes = useStyles();
  var currentdate = new Date();
  var date =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear();

  var mailid = Math.floor(Math.random() * 1000000000 + 1);

  var from = sessionStorage.getItem("from");
  var username = sessionStorage.getItem("username");

  var data = {
    from: from,
    value: value,
    username: username,
    subject: subject,
    message: message,
    date: date,
    mailid: mailid,
  };

  const sendmail = async () => {
    //console.log(data);

    var clone = await axios
      .post("https://gmailbackend.herokuapp.com/clone", data)
      //.post("http://localhost:5001/clone", data)
      .then((res) => {
        return alert("send mail", res.data);
      });
  };

  return (
    <>
      <div className="sidebar-body">
        <div className="sidebar">
          <button
            className="sidebar-compose"
            onClick={() => setVisible(!visible)}
          >
            <span className="material__icons">
              <AddIcon />
            </span>
            Compose
          </button>

          <>
            <CModal
              alignment="center"
              scrollable
              visible={visible}
              onClose={() => setVisible(false)}
            >
              <CModalHeader>
                <CModalTitle>New message</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <form className={classes.root} noValidate autoComplete="off">
                  <TextField
                    id="firstname"
                    label="To"
                    name="firstname"
                    value={value}
                    onChange={(e) => setvalue(e.target.value)}
                  />
                  <TextField
                    id="standard-basic"
                    label="Subject"
                    value={subject}
                    onChange={(e) => setsubject(e.target.value)}
                  />

                  <TextField
                    id="standard-textarea"
                    label="Message"
                    multiline
                    value={message}
                    onChange={(e) => setmessage(e.target.value)}
                  />
                  <CModalFooter>
                    <CButton className="btn btn-outline-danger"  onClick={() => setVisible(true)}>
                      Close
                    </CButton>

                    <Link to="/home">
                    <CButton className="btn btn-outline-success"  type="submit" onClick={sendmail}>
                      Send
                    </CButton>
                    </Link>

                  </CModalFooter>
                </form>
              </CModalBody>
            </CModal>
          </>

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
          <br></br>

          <div className="sidebar__option ">
            <DuoIcon />

            <span className="material__icons">
              <h3> New Meeting</h3>
            </span>
          </div>
          <br></br>

          <div className="sidebar__option ">
            <SendIcon />
            <span className="material__icons">
              <h3>Join Meeting</h3>
            </span>
          </div>
        </div>

        <div className="email__list">
          <div className="emaillist__setting">
            <div className="emaillist__settingleft">
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
              <span className="material__icons">
                <ArrowBackIosIcon />
              </span>
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
          {mail.map((item, index) => (
            <Link
              to={`/mailcontent/${item.mailid}`}
              style={{ color: "black", textDecoration: "none" }}
            >
              <div className="emaillist__list" key={index}>
                <div className="emailrow">
                  <div className="emailrow__option">
                    <input type="checkbox" />
                    <span className="material__icons">
                      <StarBorderIcon />
                    </span>
                    <span className="material__icons">
                      <ToggleOffIcon />
                    </span>
                  </div>
                  <h3 className="emailrow__title">{item.username}</h3>

                  <div className="emailrow__message">
                    <h4>{item.subject}</h4>
                  </div>

                  <p className="emailrow__time">{item.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
