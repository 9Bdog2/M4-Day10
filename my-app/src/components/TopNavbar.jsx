import small_profile_picture from '../assets/small_profile_picture.jpg'


const TopNavbar = () => (
  
    <div class="row pr-3">
      {/* TOP NAVBAR */}
      <div className="col-12 sticky-top">
        <div className="d-flex justify-content-between mt-3">
          <div className="d-flex">
            <div className="nav-arrow-bg mr-2">
              <i className="bi arrow_icon bi-chevron-left" />
            </div>
            <div className="nav-arrow-bg">
              <i className="bi arrow_icon bi-chevron-right" />
            </div>
          </div>
          <div className="d-flex align-items-center avatar-pill rounded-pill">
            <div className="pl-1 mr-1">
              <img
                src={small_profile_picture}
                className="profile_picture"
                width={25}
                height={25}
                alt="profile"
              />
            </div>
            <div
              className="dropdown-toggle pr-1"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              John Döner 'Alle Gemuse' Kebab
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a
                  className="dropdown-item"
                  onclick='location.href="./album_page.html"'
                >
                  Album Page
                </a>
                <a
                  className="dropdown-item"
                  onclick='location.href="./artist_page.html"'
                >
                  Artist Page
                </a>
                <a
                  className="dropdown-item"
                  onclick='location.href="./loginpage/index.html"'
                >
                  Log-in
                </a>
                <a
                  className="dropdown-item"
                  onclick='location.href="./404-custom.html"'
                >
                  404
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
);

export default TopNavbar;
