import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {

    let user = JSON.parse(localStorage.getItem('username'));
    let url = JSON.parse(localStorage.getItem('url'));
    

    var count = 0;

    const handleLoad=()=>{
      var myIframe = document.getElementById('myIframe');
      console.log(myIframe);
      console.log(myIframe.contentWindow);
      // document.getElementsByClassName('standard-footer notranslate')[0].style.display = 'none';
      // class="wds-input wds-input--lg qt-input_text text"

      // var document = myIframe.contentWindow.document;

      // var input = document.getElementsByClassName('wds-input wds-input--lg qt-input_text text')[0];
      // input.value = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      // console.log(myIframe.contentWindow.document)

        count++;
        if(count ===2){
            myIframe.src = 'https://www.appzoy.com/';
        }
        console.log(count)
    }
  
    

  return (
    <div>
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">
                AppZoy
              </a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active">
                <Link to="/survey">Home</Link>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li>
                <Link to="/">
                  {user ? user : "USER"}
                </Link>
              </li>
              {user ? 
              <li>
                    <Link to="/">
                        <span class=" glyphicon glyphicon "></span><span
                        onClick={() => {
                            localStorage.removeItem('username');
                            window.location.href = '/';
                        }}
                        >logout</span></Link>
                </li> : null}
            </ul>
          </div>
        </nav>
        {user ? 
            <div>
              <embed id="myIframe" src={url} width="100%" height="1400" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen onLoad={handleLoad}></embed>
            {/* <iframe id="myIframe" title="survey" onLoad = {handleLoad}
            // onLoad={() => {
            //     let myIframe = document.getElementById('myIframe');
            //     console.log(myIframe.contentWindow.document);
            //     myIframe.contentDocument.getElementById('username').value = user;
            //     myIframe.contentDocument.getElementById('url').value = url;
            // }
            // }
            src="http://www.surveymonkey.com/r/R3W7MZH" width="100%" frameBorder="0" scrolling="0"height="1400">

            </iframe> */}
            </div>
        : "Please login to take the survey"}

    </div>
  )
}

