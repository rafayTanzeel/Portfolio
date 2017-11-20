import React from 'react';

import {
    List,
    ListItem,
    Chip,
    Button,
    FontIcon
} from 'react-md';

const bulletpoint = <FontIcon key="data">keyboard_arrow_right</FontIcon>;
const GitBtnRef = ({url}) => <Button flat secondary iconClassName="fa fa-github" target="_blank" rel="noopener noreferrer" href={url} className="gitref">github</Button>;
const YouTubeBtnRef = ({url}) => <Button flat secondary iconClassName="fa fa-youtube-play" target="_blank" rel="noopener noreferrer" href={url} className="gitref">youtube</Button>;


export const VISUAL_ASSISTANCE = {
    title : "Vision Assistance", 
    subtitle: "Native Andriod Application", 
    summary: (
        <article>
            <p>
                Developed an Android App called "Visual Assistance" at WICS &amp; WEG Hackathon 2015 
                using Java in Android Studios and Google API.
            </p>
            <p>
                App purpose was to assist blind people to do various tasks such as call friends, 
                text friends current location, define words by using Voice Overs and Speech to Text recognition
            </p>
            <br/>
            <h4>Main Features:</h4>
            <List>
                <ListItem leftIcon={bulletpoint} primaryText="Completely voice and gesture controlled" />
                <ListItem leftIcon={bulletpoint} primaryText="Big Buttons for those with visual impairment but without blindness" />
                <ListItem leftIcon={bulletpoint} primaryText="Send messages using speech to text recognition" />
                <ListItem leftIcon={bulletpoint} primaryText="Call trusted contacts for help" />
            </List>
            <h4>Libraries:</h4>
            <div>
                <Chip className="chips" label="Java" />
                <Chip className="chips" label="Andriod Studio" />
                <Chip className="chips" label="Google Speech API" />
                <Chip className="chips" label="Material Design" />
            </div>
            <GitBtnRef url="https://github.com/rafayTanzeel/WICS-WEG-HACKATHON"/>
        </article>
    )
};

export const STUDENT_GRADER = {
    title : "Student Grader", 
    subtitle: "Native Andriod Application", 
    summary: (
        <article>
            <p>
                Developed an android app for school professors to keep track of student assignment grades in
                each labs group. In app feature makes extensive use of android material design for very 
                clean and responsive interface.
            </p>
            <br/>
            <h4>Main Features:</h4>
            <List>
                <ListItem leftIcon={bulletpoint} primaryText="Allows professors to store lab name and description" />
                <ListItem leftIcon={bulletpoint} primaryText="For each lab, they can store students group name and description" />
                <ListItem leftIcon={bulletpoint} primaryText="For each group section they can store each student name and email while their unique id is generated for the student" />
                <ListItem leftIcon={bulletpoint} primaryText="For each student record, all of student assignments marks can be stored" />
                <ListItem leftIcon={bulletpoint} primaryText="Swipe to delete the record of student, assignments, lab or group and all it's internal records from the NoSQL database" />
            </List>
            <h4>Libraries:</h4>
            <div>
                <Chip className="chips" label="Java" />
                <Chip className="chips" label="Andriod Studio" />
                <Chip className="chips" label="Realm Database" />
                <Chip className="chips" label="Material Design" />
                <Chip className="chips" label="Butter Knife" />
            </div>
            <GitBtnRef url="https://github.com/rafayTanzeel/Student_Grader"/>
        </article>
    )
};

export const VISION_TRANSLATOR = {
    title : "Visual Translator", 
    subtitle: "Native Andriod Application", 
    summary: (
        <article>
            <p>
                Developed an Android App to detect any Latin-based language through camera and translate 
                it into any other language making use of optical character recognition
            </p>
            <br/>
            <h4>Main Features:</h4>
            <List>
                <ListItem leftIcon={bulletpoint} primaryText="Live feed for video camera is used as a source for ocr" />
                <ListItem leftIcon={bulletpoint} primaryText="OCR translates the text from live video feed into any target language" />
            </List>
            <h4>Libraries:</h4>
            <div>
                <Chip className="chips" label="Java" />
                <Chip className="chips" label="Andriod Studio" />
                <Chip className="chips" label="Google Mobile Vision API" />
                <Chip className="chips" label="Google Cloud Translation API" />
                <Chip className="chips" label="OkHttp" />
                <Chip className="chips" label="Butter Knife" />
            </div>
            <GitBtnRef url="https://github.com/rafayTanzeel/Vision_Translator"/>
            <YouTubeBtnRef url="https://youtu.be/hTa-kIYbe70"/>
        </article>
    )
};

export const BOOK_MARKET = {
    title : "Book Market", 
    subtitle: "Native Andriod Application", 
    summary: (
        <article>
            <p>
                Developed an Android App called "Book Market" at nwHacks 2016. 
                The App purpose was to serve as the online textbook trade among university students, 
                where they could buy/sell/trade text book to each other more easily
            </p>
            <br/>
            <h4>Main Features:</h4>
            <List>
                <ListItem leftIcon={bulletpoint} primaryText="Gmail Login/Signup: App prompts user login or signup into gmail to access the user data and store user hashed data on an Apache Server using PHP" />
                <ListItem leftIcon={bulletpoint} primaryText="Barcode Scanner: Phone camera to detect barcodes of books using Google Vision API" />
                <ListItem leftIcon={bulletpoint} primaryText="Book Info: Process the scanned barcode with Google Books API to obtain the books information and pricing" />
                <ListItem leftIcon={bulletpoint} primaryText="Send and receive book info and pricing to other users" />
            </List>
            <h4>Libraries:</h4>
            <div>
                <Chip className="chips" label="Java" />
                <Chip className="chips" label="Andriod Studio" />
                <Chip className="chips" label="Google Books API" />
                <Chip className="chips" label="Google Mobile Vision API" />
                <Chip className="chips" label="Google Sign-In API" />
                <Chip className="chips" label="Material Design" />
            </div>
            <GitBtnRef url="https://github.com/rafayTanzeel/Book-Market"/>
        </article>
    )
};

export const CURRENCY_CONVERSIONER = {
    title : "Currency Conversioner", 
    subtitle: "Native Andriod Application", 
    summary: (
        <article>
            <p>
                Developed an Android App that gives you all currency exchange rates in real time
            </p>
            <br/>
            <h4>Main Features:</h4>
            <List>
                <ListItem leftIcon={bulletpoint} primaryText="App displays a grid of currencies" />
                <ListItem leftIcon={bulletpoint} primaryText="Selecting any currency and typing in the value will give you it conversion for all other currencies" />
                <ListItem leftIcon={bulletpoint} primaryText="Currency rates are updated every 30 minutes" />

            </List>
            <h4>Libraries:</h4>
            <div>
                <Chip className="chips" label="Java" />
                <Chip className="chips" label="Andriod Studio" />
                <Chip className="chips" label="Retrofit" />
            </div>
            <GitBtnRef url="https://github.com/rafayTanzeel/CurrencyConversioner"/>
        </article>
    )
};


export const SFU_ONCAMPUS = {
    title : "SFU OnCampus", 
    subtitle: "Native iOS Application", 
    summary: (
        <article>
            <p>
                Designed and developed an SFU information portal for iOS. Application assists Simon Fraser University 
                students by providing on-campus information. Placed third out of fifteen 
                in a competition judged by various parties that have a vested interest in such an app.
            </p>
            <br/>
            <h4>Main Features:</h4>
            <List>
                <ListItem leftIcon={bulletpoint} primaryText="Library: Displays open hours, computer availability, and an option to book a study room for all three SFU campuses. It also allows the user to search the SFU library catalogue" />
                <ListItem leftIcon={bulletpoint} primaryText="Transit: Displays upcoming buses times for the bus loops that service SFU Burnaby" />
                <ListItem leftIcon={bulletpoint} primaryText="Weather: Displays current weather on campus, a five day forecast, a 12-hour forecast, a road report announcement, and campus webcams." />
                <ListItem leftIcon={bulletpoint} primaryText="SFU News: An RSS feed of news articles regarding SFU." />
                <ListItem leftIcon={bulletpoint} primaryText="Social Media: Connections to all of SFU's Facebook, Youtube, and Twitter pages." />
                <ListItem leftIcon={bulletpoint} primaryText="Student Services: A hub for all services utilized by SFU students." />
                <ListItem leftIcon={bulletpoint} primaryText="Loyalty Card: Allows students to scan QR codes to earn points after attending events at SFU." />
                <ListItem leftIcon={bulletpoint} primaryText="Wayfinding: Allows the user to navigate from one area of SFU Burnaby to another." />
            </List>
            <h4>Libraries:</h4>
            <div>
                <Chip className="chips" label="Objective-C" />
                <Chip className="chips" label="Xcode" />
            </div>
            <GitBtnRef url="https://github.com/rafayTanzeel/sfu-oncampus"/>
            <YouTubeBtnRef url="https://youtu.be/YK2mdYT-kS4"/>
        </article>
    )
};
