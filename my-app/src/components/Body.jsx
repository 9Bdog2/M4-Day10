import { Row } from "react-bootstrap"


const Body = () => (
    <Row>
    {/* GOOD MORNING SECTION */}
    <div className="col-12 mt-3">
      <div>
        <h3>Good Morning</h3>
      </div>
      <div className="d-inline-flex good_morning_container">
        <div className="d-flex align-items-center good_morning_section">
          <img
            src="https://cdn.crello.com/downloads/cdec5ddb-316f-478a-a700-dac9de3c0382_450.jpeg"
            width={70}
            height={70}
            alt
          />
          <p className="text_clamp_1 my-0">Burning Jazz-Rap Fusion</p>
        </div>
        <div className="d-flex align-items-center good_morning_section">
          <img
            src="https://static.billboard.com/files/media/Young-Thug-Jeffery-2016-billboard-1240-compressed.jpg"
            width={70}
            height={70}
            alt
          />
          <p className="text_clamp_1 my-0">Young Thug Jeffery</p>
        </div>
        <div className="d-flex align-items-center good_morning_section">
          <img
            src="https://static.billboard.com/files/media/Lady-Gaga-Fame-Monster-album-covers-billboard-1000x1000-compressed.jpg"
            width={70}
            height={70}
            alt
          />
          <p className="text_clamp_1 my-0">Lady Lady Gaga Fame Monster</p>
        </div>
        <div className="d-flex align-items-center good_morning_section">
          <img
            src="https://static.billboard.com/files/media/Janet-Jackson-Rhythm-Nation-1814-album-covers-billboard-1000x1000-compressed.jpg"
            width={70}
            height={70}
            alt
          />
          <p className="text_clamp_1 my-0">Janet Jackson Rhythm Nation</p>
        </div>
        <div className="d-flex align-items-center good_morning_section">
          <img
            src="https://static.billboard.com/files/media/Funkadelic-Maggot-Brain-album-covers-billboard-1000x1000-compressed.jpg"
            width={70}
            height={70}
            alt
          />
          <p className="text_clamp_1 my-0">Funkadelic Maggot Brain</p>
        </div>
        <div className="d-flex align-items-center good_morning_section">
          <img
            src="https://static.billboard.com/files/media/cardi-b-invasion-of-privacy-album-art-2018-billboard-embed-compressed.jpg"
            width={70}
            height={70}
            alt
          />
          <p className="text_clamp_1 my-0">Cardi B Invasion of Privacy</p>
        </div>
        <div className="d-flex align-items-center good_morning_section">
          <img
            src="https://static.billboard.com/files/media/Whitney-Houston-Whitney-Houston-album-covers-billboard-1000x1000-compressed.jpg"
            width={70}
            height={70}
            alt
          />
          <p className="text_clamp_1 my-0">Whitney Houston</p>
        </div>
        <div className="d-flex align-items-center good_morning_section">
          <img
            src="https://static.billboard.com/files/media/Fleetwood-Mac-Rumours-album-covers-billboard-1000x1000-compressed.jpg"
            width={70}
            height={70}
            alt
          />
          <p className="text_clamp_1 my-0">Fleetwood Mac Rumours</p>
        </div>
      </div>
    </div>
    {/* END OF GOOD MORNING SECTION */}
    {/* RECENTLY PLAYED SECTION */}
    <div className="col-12">
      {/* Recently played*/}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <h3>Recently played</h3>
        <h6>SEE ALL</h6>
      </div>
      <div className="w-100 recently-played-container">
        {/* One card*/}
        <div className="spotify-card d-flex flex-column">
          <div className="p-2">
            <div>
              <img
                src="https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-500-Arcade-Fire-Funeral.jpg?w=1000"
                alt
              />
            </div>
            <div className="mt-2">
              <h6 className="text_clamp_1">Arcade Fire funeral</h6>
              <p className="text_clamp_2">Merge 2004</p>
            </div>
          </div>
        </div>
        {/* One card end*/}
        {/* One card*/}
        <div className="spotify-card d-flex flex-column">
          <div className="p-2">
            <div>
              <img
                src="https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-499-Ask-Rufus-Rufus-Chaka-Khan.jpg?w=800"
                alt
              />
            </div>
            <div className="mt-2">
              <h6 className="text_clamp_1">Rufus, Chaka Khan</h6>
              <p className="text_clamp_2">ABC 1977</p>
            </div>
          </div>
        </div>
        {/* One card end*/}
        {/* One card*/}
        <div className="spotify-card d-flex flex-column">
          <div className="p-2">
            <div>
              <img
                src="https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-498-Suicide-Suicide.jpg?w=800"
                alt
              />
            </div>
            <div className="mt-2">
              <h6 className="text_clamp_1">Suicide, Suicide</h6>
              <p className="text_clamp_2">Red Star 1977</p>
            </div>
          </div>
        </div>
        {/* One card end */}
        {/* One card*/}
        <div className="spotify-card d-flex flex-column">
          <div className="p-2">
            <div className="d-flex justify-content-center align-items-center liked-songs">
              <i className="bi bi-heart-fill" />
            </div>
            <div className="mt-2">
              <h6 className="text_clamp_1">Liked Songs</h6>
              <p className="text_clamp_2" />
            </div>
          </div>
        </div>
        {/* One card end */}
        {/* One card*/}
        <div className="spotify-card d-flex flex-column">
          <div className="p-2">
            <div>
              <img
                src="https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-497-Indestructible-Beat-of-Soweto.jpg?w=800"
                alt
              />
            </div>
            <div className="mt-2">
              <h6 className="text_clamp_1">
                Various Artists, The Indestructible Beat of Soweto
              </h6>
              <p className="text_clamp_2">Earthworks 1985</p>
            </div>
          </div>
        </div>
        {/* One card end */}
        {/* One card*/}
        <div className="spotify-card d-flex flex-column">
          <div className="p-2">
            <div>
              <img
                src="https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-496-Shakira-Donde-Estan-los-Ladrones.jpg?w=800"
                alt
              />
            </div>
            <div className="mt-2">
              <h6 className="text_clamp_1">Shakira, Dónde Están los Ladrones</h6>
              <p className="text_clamp_2">Columbia 1998</p>
            </div>
          </div>
        </div>
        {/* One card end */}
        {/* One card*/}
        <div className="spotify-card d-flex flex-column">
          <div className="p-2">
            <div>
              <img
                src="https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-495-Boyz-II-Men-II.jpg?w=800"
                alt
              />
            </div>
            <div className="mt-2">
              <h6 className="text_clamp_1">Boyz II Men, 'II'</h6>
              <p className="text_clamp_2">Motown 1991</p>
            </div>
          </div>
        </div>
        {/* One card end */}
        {/* One card*/}
        <div className="spotify-card d-flex flex-column">
          <div className="p-2">
            <div>
              <img
                src="https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-494-THE-RONETTEs-Presenting-the-Fabulous-Ronettes.jpg?w=800"
                alt
              />
            </div>
            <div className="mt-2">
              <h6 className="text_clamp_1">
                The Ronettes, Presenting the Fabulous Ronettes
              </h6>
              <p className="text_clamp_2">Philles 1964</p>
            </div>
          </div>
        </div>
        {/* One card end */}
        {/* One card*/}
        <div className="spotify-card d-flex flex-column">
          <div className="p-2">
            <div>
              <img
                src="https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-493-Marvin-Gaye-Here-My-Dear.jpg?w=800"
                alt
              />
            </div>
            <div className="mt-2">
              <h6 className="text_clamp_1">Marvin Gaye, Here, My Dear</h6>
              <p className="text_clamp_2">Motown 1978</p>
            </div>
          </div>
        </div>
        {/* One card end */}
        {/* One card*/}
        <div className="spotify-card d-flex flex-column">
          <div className="p-2">
            <div>
              <img
                src="https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-492-Bonnie-Raitt-Nick-of-Time.jpg?w=800"
                alt
              />
            </div>
            <div className="mt-2">
              <h6 className="text_clamp_1">Bonnie Raitt, Nick of Time</h6>
              <p className="text_clamp_2">Capitol 1989</p>
            </div>
          </div>
        </div>
        {/* One card end */}
      </div>
      {/* SHOWS TO TRY SECTION*/}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>
          <h3 className="my-0">Shows to try</h3>
          <p className="my-0">Podcasts we think you'll get hooked on.</p>
        </div>
        <h6>SEE ALL</h6>
      </div>
      <div className="w-100 mt-3 shows-to-try-container">
        {/* One card*/}
        <div className="spotify-card d-flex flex-column">
          <div className="p-2">
            <div>
              <img
                src="https://megaphone.imgix.net/podcasts/86fe6492-bb2a-11e7-873d-cf56b25e8a62/image/3000x3000_PodcastArt_SlowBurnS5.jpg?w=175&h=175"
                alt
                className="podcast-img"
              />
            </div>
            <div className="mt-2">
              <h6 className="text_clamp_1">
                Slow Burn: The Road to the Iraq War
              </h6>
              <p className="text_clamp_2">
                Eighteen months after 9/11, the United States invaded a country
                that had nothing to do with the attacks. Who’s to blame? And was
                there any way to stop it?
              </p>
            </div>
          </div>
        </div>
        {/* One card end*/}
        {/* One card*/}
        <div className="spotify-card d-flex flex-column">
          <div className="p-2">
            <div>
              <img
                src="https://pyxis.nymag.com/v1/imgs/06d/e76/2e868b2a54a68f24683ae3da22b13749b9-5-bodega-boys.rsquare.w570.jpg"
                alt
                className="podcast-img"
              />
            </div>
            <div className="mt-2">
              <h6 className="text_clamp_1">
                A card game of time travel will keep the fluxx out of bedtime as
                we unbox you off to sleep.
              </h6>
              <p className="text_clamp_2">Chrononauts from Looney Labs</p>
            </div>
          </div>
        </div>
        {/* One card end*/}
        {/* One card*/}
        <div className="spotify-card d-flex flex-column">
          <div className="p-2">
            <div>
              <img
                src="https://media.wnyc.org/i/200/200/l/85/1/2DQ_1400X1400_NoWNYCSTUDIOS_2.png"
                alt
                className="podcast-img"
              />
            </div>
            <div className="mt-2">
              <h6 className="text_clamp_1">2 Dope Queens</h6>
              <p className="text_clamp_2">
                Phoebe Robinson and Jessica Williams host a live comedy show in
                Brooklyn.
              </p>
            </div>
          </div>
        </div>
        {/* One card end */}
        {/* One card*/}
        <div className="spotify-card d-flex flex-column">
          <div className="p-2">
            <div>
              <img
                src="https://images.theabcdn.com/i/24025650/300x300/c"
                alt
                className="podcast-img"
              />
            </div>
            <div className="mt-2">
              <h6 className="text_clamp_1">No Such Thing As A Fish</h6>
              <p className="text_clamp_2">
                Award-winning podcast from the QI offices in which the writers of
                the hit BBC show discuss the best things they've found out this
                week.{" "}
              </p>
            </div>
          </div>
        </div>
        {/* One card end */}
        {/* One card*/}
        <div className="spotify-card d-flex flex-column">
          <div className="p-2">
            <div>
              <img
                src="https://foreverdogpodcasts.com/wp-content/uploads/2019/07/lc-1-1-1024x1024.jpg"
                alt
                className="podcast-img"
              />
            </div>
            <div className="mt-2">
              <h6 className="text_clamp_1">LAS CULTURISTAS</h6>
              <p className="text_clamp_2">
                Join your culture consultants Matt Rogers and Bowen Yang on an
                unforgettable journey into the beating heart of CULTURE.
              </p>
            </div>
          </div>
        </div>
        {/* One card end */}
        {/* One card*/}
        <div className="spotify-card d-flex flex-column">
          <div className="p-2">
            <div>
              <img
                src="https://podlink.imgix.net/c18d159fe2ca49b100f30ca74985bc8d/poster.jpeg?width=448&auto=format"
                alt
                className="podcast-img"
              />
            </div>
            <div className="mt-2">
              <h6 className="text_clamp_1">CoinTalk</h6>
              <p className="text_clamp_2">
                The official podcast of Bitcoin crashes. Hosted by Aaron Lammer
                &amp; Jay Caspian Kang.
              </p>
            </div>
          </div>
        </div>
        {/* One card end */}
        {/* One card*/}
        <div className="spotify-card d-flex flex-column">
          <div className="p-2">
            <div>
              <img
                src="https://www.earwolf.com/wp-content/uploads/2016/02/EAR_COVER_DWITGAOATP_1600x1600_Final-300x300.jpg"
                alt
                className="podcast-img"
              />
            </div>
            <div className="mt-2">
              <h6 className="text_clamp_1">
                Denzel Washington Is The Greatest Actor Of All Time Period
              </h6>
              <p className="text_clamp_2">
                Comedians W. Kamau Bell &amp; Kevin Avery are absolutely certain
                of one thing: Denzel Washington is the greatest actor of all time.{" "}
              </p>
            </div>
          </div>
        </div>
        {/* One card end */}
        {/* One card*/}
        <div className="spotify-card d-flex flex-column">
          <div className="p-2">
            <div>
              <img
                src="https://www.earwolf.com/wp-content/uploads/2013/09/EARWOLF_COVER_HollywoodHandbook_3000x3000_10thAnni_Final-300x300.jpg"
                alt
                className="podcast-img"
              />
            </div>
            <div className="mt-2">
              <h6 className="text_clamp_1">Hollywood Handbook</h6>
              <p className="text_clamp_2">
                Hollywood Handbook is an insider’s guide to achieving your showbiz
                dreams from two A-List it-boys who are living theirs.{" "}
              </p>
            </div>
          </div>
        </div>
        {/* One card end */}
        {/* One card*/}
        <div className="spotify-card d-flex flex-column">
          <div className="p-2">
            <div>
              <img
                src="https://pyxis.nymag.com/v1/imgs/58f/3a3/984417cdb5bbcfd69a93a408dd220454f9-9-anna-faris.rsquare.w570.jpg"
                alt
                className="podcast-img"
              />
            </div>
            <div className="mt-2">
              <h6 className="text_clamp_1">MISSION TO ZYXX</h6>
              <p className="text_clamp_2">
                An improvised science fiction podcast following a team of
                ambassadors as they attempt to establish diplomatic relations with
                planets in the remote and chaotic
              </p>
            </div>
          </div>
        </div>
        {/* One card end */}
        {/* One card*/}
        <div className="spotify-card d-flex flex-column">
          <div className="p-2">
            <div>
              <img
                src="https://pyxis.nymag.com/v1/imgs/b61/c48/16eb7447a013ddac3410e82220cc5bbfdd-11-nancy.rsquare.w570.jpg"
                alt
                className="podcast-img"
              />
            </div>
            <div className="mt-2">
              <h6 className="text_clamp_1">Nancy</h6>
              <p className="text_clamp_2">
                On this WNYC-produced podcast, best friends Kathy Tu and Tobin
              </p>
            </div>
          </div>
        </div>
        {/* One card end */}
      </div>
      {/* SHOWS TO TRY SECTION END*/}
    </div>
    {/* MAIN SECTION END */}
  </Row>
  
)

export default Body