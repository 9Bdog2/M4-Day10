import queen from '../assets/queen.jpeg'


const BottomNavbar = () => (
  <div className="container-fluid play-bar d-inline-block p-0">
    <div className="row d-flex align-items-center">
      <div className="col-4 d-flex mt-0">
        <img src={queen} width="50px" height="50px" alt="queen" />
        <div className="d-flex align-items-center mt-0">
          <div className="d-flex flex-column song_info">
            <span>Another One Bites The Dust Remastered 2011</span>
            <span className="band_name">Queen</span>
          </div>
          <div className="ml-5">
            <i className="bi bi-heart" />
            <i className="bi bi-pip" />
          </div>
        </div>
      </div>
      <div className="col-5 align-items-center song-bar">
        <div className="row justify-content-center align-items-center song_bar_icons">
          {/*-Icons*/}
          <i
            className="fa fa-random px-2"
            style={{ paddingLeft: 15, paddingRight: 15 }}
          />
          <i
            className="fa fa-step-backward px-2 "
            style={{ paddingLeft: 15, paddingRight: 15 }}
          />
          <i
            className="fa fa-play-circle px-2 play_button"
            style={{ paddingLeft: 15, paddingRight: 15 }}
          />
          <i
            className="fa fa-step-forward px-2 "
            style={{ paddingLeft: 15, paddingRight: 15 }}
          />
          <i className="bi bi-arrow-repeat px-2" />
        </div>
        <div className="row justify-content-center">
          {/*-Song time*/}
          <progress max={5} value={2} style={{ width: "82%" }} />
        </div>
      </div>
      <div className="col-3 d-inline-block">
        <div className="row align-items-center justify-content-end">
          {/*-    
            <i class="bi bi-volume-down"></i>
        
            <i class="bi bi-volume-mute"></i> -*/}
          <i className="bi bi-music-note-list" />
          <i className="bi bi-speaker" />
          <i className="bi bi-volume-up" />
          {/*-volume slider*/}
          <div className="form-group d-inline-block">
            <label htmlFor="formControlRange"> </label>
            <input
              type="range"
              className="form-control-range"
              id="formControlRange"
            />
          </div>
          <i className="bi bi-list-starts px-2" />
          <i className="bi bi-arrows-angle-expand"> </i>
        </div>
      </div>
    </div>
  </div>
);

export default BottomNavbar;
