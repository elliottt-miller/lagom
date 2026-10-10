import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  C as r,
  D as i,
  E as a,
  F as o,
  L as s,
  N as c,
  O as l,
  R as u,
  S as d,
  b as f,
  c as p,
  j as m,
  m as h,
  s as g,
  u as _,
  v,
  x as ee,
} from "./react.DJ2-MjhO.mjs";
import {
  E as te,
  N as ne,
  P as y,
  S as re,
  X as ie,
  dt as b,
  et as x,
  i as ae,
  lt as S,
  nt as oe,
  t as C,
} from "./motion.Bn11pmd7.mjs";
import { A as se, E as ce, G as w, i as T, y as E, yt as D } from "./framer.CS_JK_Iv.mjs";
var le,
  ue,
  de,
  fe = e(() => {
    (p(),
      a(),
      (le = {
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (ue = {
        ...le,
        borderRadius: 6,
        background: `rgba(149, 149, 149, 0.1)`,
        border: `1px dashed rgba(149, 149, 149, 0.15)`,
        color: `#a5a5a5`,
        flexDirection: `column`,
      }),
      (de = h((e, t) => g(`div`, { style: ue, ref: t }))));
  }),
  pe = e(() => {
    fe();
  }),
  me,
  he,
  ge,
  _e,
  ve = e(() => {
    ((ge = (e) => (
      me ||
        ((me = new Map([
          [
            `bold`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z`,
              })
            ),
          ],
          [
            `duotone`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z`,
                opacity: `0.2`,
              }),
              e.createElement(`path`, {
                d: `M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z`,
              })
            ),
          ],
          [
            `fill`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z`,
              })
            ),
          ],
          [
            `light`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z`,
              })
            ),
          ],
          [
            `regular`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z`,
              })
            ),
          ],
          [
            `thin`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z`,
              })
            ),
          ],
        ])),
        (he = e.forwardRef((t, n) => e.createElement(`g`, { ref: n, ...t }, me.get(t.weight))))),
      he
    )),
      (_e = ge));
  }),
  ye = e(() => {
    (ve(), ve());
  });
function be(e, t, n = ``, r, i) {
  let a = c(() => {
    if (n == null || n?.length === 0) return null;
    let t = n.toLowerCase().replace(/-|\s/g, ``);
    return i[t] ?? Se(e, t);
  }, [r, n]);
  return t ? r : a;
}
var xe,
  Se,
  Ce = e(() => {
    (a(),
      w(),
      (xe = {
        onClick: { type: T.EventHandler },
        onMouseDown: { type: T.EventHandler },
        onMouseUp: { type: T.EventHandler },
        onMouseEnter: { type: T.EventHandler },
        onMouseLeave: { type: T.EventHandler },
      }),
      (Se = (e, t) => e.find((e) => e.toLowerCase().includes(t))));
  });
function O(e) {
  let {
      color: t,
      selectByList: n,
      iconSearch: r,
      iconSelection: i,
      onClick: a,
      onMouseDown: o,
      onMouseUp: s,
      onMouseEnter: c,
      onMouseLeave: l,
      weight: u,
      mirrored: d,
    } = e,
    p = ee(!1),
    h = be(k, n, r, i, Te),
    [_, te] = v(h === `Home` ? _e(m) : null);
  async function ne() {
    try {
      let e = await import(`${A}${h}.js@0.0.57`);
      p.current && te(e.default(m));
    } catch {
      p.current && te(null);
    }
  }
  f(
    () => (
      (p.current = !0),
      ne(),
      () => {
        p.current = !1;
      }
    ),
    [h]
  );
  let re = E.current() === E.canvas ? g(de, {}) : null;
  return g(y.div, {
    style: { display: `contents` },
    onClick: a,
    onMouseEnter: c,
    onMouseLeave: l,
    onMouseDown: o,
    onMouseUp: s,
    children: _
      ? g(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          viewBox: `0 0 256 256`,
          style: {
            userSelect: `none`,
            width: `100%`,
            height: `100%`,
            display: `inline-block`,
            fill: t,
            color: t,
            flexShrink: 0,
            transform: d ? `scale(-1, 1)` : void 0,
          },
          focusable: `false`,
          color: t,
          children: g(_, { color: t, weight: u }),
        })
      : re,
  });
}
var k,
  A,
  we,
  Te,
  Ee = e(() => {
    (p(),
      a(),
      w(),
      C(),
      pe(),
      ye(),
      Ce(),
      (k =
        `Acorn.AddressBook.AddressBookTabs.AirTrafficControl.Airplane.AirplaneInFlight.AirplaneLanding.AirplaneTakeoff.AirplaneTaxiing.AirplaneTilt.Airplay.Alarm.Alien.AlignBottom.AlignBottomSimple.AlignCenterVertical.AlignLeft.AlignLeftSimple.AlignRight.AlignRightSimple.AlignTop.AlignTopSimple.AmazonLogo.Ambulance.Anchor.AnchorSimple.AndroidLogo.Angle.AngularLogo.Aperture.AppStoreLogo.AppWindow.AppleLogo.ApplePodcastsLogo.ApproximateEquals.Archive.ArchiveBox.ArchiveTray.Armchair.ArrowArcLeft.ArrowArcRight.ArrowBendDownLeft.ArrowBendDownRight.ArrowBendLeftDown.ArrowBendLeftUp.ArrowBendRightDown.ArrowBendRightUp.ArrowBendUpLeft.ArrowBendUpRight.ArrowCircleDown.ArrowCircleDownLeft.ArrowCircleDownRight.ArrowCircleLeft.ArrowCircleRight.ArrowCircleUp.ArrowCircleUpLeft.ArrowCircleUpRight.ArrowClockwise.ArrowDown.ArrowDownLeft.ArrowDownRight.ArrowElbowDownLeft.ArrowElbowDownRight.ArrowElbowLeft.ArrowElbowLeftDown.ArrowElbowLeftUp.ArrowElbowRight.ArrowElbowRightDown.ArrowElbowRightUp.ArrowElbowUpLeft.ArrowElbowUpRight.ArrowFatDown.ArrowFatLeft.ArrowFatLineDown.ArrowFatLineLeft.ArrowFatLineRight.ArrowFatLineUp.ArrowFatLinesDown.ArrowFatLinesLeft.ArrowFatLinesRight.ArrowFatLinesUp.ArrowFatRight.ArrowFatUp.ArrowLeft.ArrowLineDown.ArrowLineDownLeft.ArrowLineDownRight.ArrowLineLeft.ArrowLineRight.ArrowLineUp.ArrowLineUpLeft.ArrowLineUpRight.ArrowRight.ArrowSquareDown.ArrowSquareDownLeft.ArrowSquareDownRight.ArrowSquareIn.ArrowSquareLeft.ArrowSquareOut.ArrowSquareRight.ArrowSquareUp.ArrowSquareUpLeft.ArrowSquareUpRight.ArrowUDownLeft.ArrowUDownRight.ArrowULeftDown.ArrowULeftUp.ArrowURightDown.ArrowURightUp.ArrowUUpLeft.ArrowUUpRight.ArrowUp.ArrowUpLeft.ArrowUpRight.ArrowsClockwise.ArrowsDownUp.ArrowsHorizontal.ArrowsIn.ArrowsInCardinal.ArrowsInLineVertical.ArrowsInSimple.ArrowsLeftRight.ArrowsMerge.ArrowsOut.ArrowsOutCardinal.ArrowsOutSimple.ArrowsSplit.ArrowsVertical.Article.ArticleMedium.ArticleNyTimes.Asclepius.Asterisk.AsteriskSimple.At.Atom.Avocado.Axe.Baby.BabyCarriage.Backpack.Backspace.Bag.BagSimple.Balloon.Bandaids.Bank.Barbell.Barcode.Barn.Barricade.Baseball.BaseballCap.BaseballHelmet.Basket.Basketball.Bathtub.BatteryCharging.BatteryEmpty.BatteryFull.BatteryHigh.BatteryLow.BatteryMedium.BatteryPlus.BatteryPlusVertical.BatteryVerticalEmpty.BatteryVerticalFull.BatteryVerticalHigh.BatteryVerticalLow.BatteryWarning.BeachBall.Beanie.Bed.BeerBottle.BeerStein.BehanceLogo.Bell.BellRinging.BellSimple.BellSimpleRinging.BellSimpleSlash.BellSimpleZ.BellSlash.BellZ.Belt.BezierCurve.Bicycle.Binary.Binoculars.Biohazard.Bird.Blueprint.Bluetooth.BluetoothConnected.BluetoothSlash.BluetoothX.Boat.Bomb.Bone.Book.BookBookmark.BookOpen.BookOpenText.BookOpenUser.BookUser.Bookmark.BookmarkSimple.Bookmarks.BookmarksSimple.Books.Boot.Boules.BoundingBox.BowlFood.BowlSteam.BowlingBall.BoxArrowDown.BoxArrowUp.BoxingGlove.BracketsAngle.BracketsCurly.BracketsRound.BracketsSquare.Brain.Brandy.Bread.Bridge.Briefcase.BriefcaseMetal.Broadcast.Broom.Browser.Browsers.Bug.BugBeetle.BugDroid.Building.BuildingApartment.BuildingOffice.Buildings.Bulldozer.Bus.Butterfly.CableCar.Cactus.Cake.Calculator.Calendar.CalendarBlank.CalendarCheck.CalendarDot.CalendarDots.CalendarHeart.CalendarMinus.CalendarPlus.CalendarSlash.CalendarStar.CalendarX.CallBell.Camera.CameraPlus.CameraRotate.CameraSlash.Campfire.Car.CarBattery.CarProfile.CarSimple.Cardholder.Cards.CardsThree.CaretCircleDoubleUp.CaretCircleDown.CaretCircleLeft.CaretCircleRight.CaretCircleUp.CaretCircleUpDown.CaretDoubleDown.CaretDoubleLeft.CaretDoubleRight.CaretDoubleUp.CaretDown.CaretLeft.CaretLineDown.CaretLineLeft.CaretLineRight.CaretLineUp.CaretRight.CaretUp.CaretUpDown.Carrot.CashRegister.CassetteTape.CastleTurret.Cat.CellSignalFull.CellSignalHigh.CellSignalLow.CellSignalMedium.CellSignalNone.CellSignalSlash.CellSignalX.CellTower.Certificate.Chair.Chalkboard.ChalkboardSimple.ChalkboardTeacher.Champagne.ChargingStation.ChartBar.ChartBarHorizontal.ChartDonut.ChartLine.ChartLineDown.ChartLineUp.ChartPie.ChartPieSlice.ChartPolar.ChartScatter.Chat.ChatCentered.ChatCenteredDots.ChatCenteredSlash.ChatCenteredText.ChatCircle.ChatCircleDots.ChatCircleSlash.ChatCircleText.ChatDots.ChatSlash.ChatTeardrop.ChatTeardropDots.ChatTeardropSlash.ChatTeardropText.ChatText.Chats.ChatsCircle.ChatsTeardrop.Check.CheckCircle.CheckFat.CheckSquare.CheckSquareOffset.Checkerboard.Checks.Cheers.Cheese.ChefHat.Cherries.Church.Cigarette.CigaretteSlash.Circle.CircleDashed.CircleHalf.CircleHalfTilt.CircleNotch.CirclesFour.CirclesThree.CirclesThreePlus.Circuitry.City.Clipboard.ClipboardText.Clock.ClockAfternoon.ClockClockwise.ClockCountdown.ClockUser.ClosedCaptioning.Cloud.CloudArrowDown.CloudArrowUp.CloudCheck.CloudFog.CloudLightning.CloudMoon.CloudRain.CloudSlash.CloudSnow.CloudSun.CloudWarning.CloudX.Clover.Club.CoatHanger.CodaLogo.Code.CodeBlock.CodeSimple.CodepenLogo.CodesandboxLogo.Coffee.CoffeeBean.Coin.CoinVertical.Coins.Columns.ColumnsPlusLeft.ColumnsPlusRight.Command.Compass.CompassRose.CompassTool.ComputerTower.Confetti.ContactlessPayment.Control.Cookie.CookingPot.Copy.CopySimple.Copyleft.Copyright.CornersIn.CornersOut.Couch.CourtBasketball.Cow.CowboyHat.Cpu.Crane.CraneTower.CreditCard.Cricket.Crop.Cross.Crosshair.CrosshairSimple.Crown.CrownCross.CrownSimple.Cube.CubeFocus.CubeTransparent.CurrencyBtc.CurrencyCircleDollar.CurrencyCny.CurrencyDollar.CurrencyDollarSimple.CurrencyEth.CurrencyEur.CurrencyGbp.CurrencyInr.CurrencyJpy.CurrencyKrw.CurrencyKzt.CurrencyNgn.CurrencyRub.Cursor.CursorClick.CursorText.Cylinder.Database.Desk.Desktop.DesktopTower.Detective.DevToLogo.DeviceMobile.DeviceMobileCamera.DeviceMobileSlash.DeviceMobileSpeaker.DeviceRotate.DeviceTablet.DeviceTabletCamera.DeviceTabletSpeaker.Devices.Diamond.DiamondsFour.DiceFive.DiceFour.DiceOne.DiceSix.DiceThree.DiceTwo.Disc.DiscoBall.DiscordLogo.Divide.Dna.Dog.Door.DoorOpen.Dot.DotOutline.DotsNine.DotsSix.DotsSixVertical.DotsThree.DotsThreeCircle.DotsThreeOutline.DotsThreeVertical.Download.DownloadSimple.Dress.Dresser.DribbbleLogo.Drone.Drop.DropHalf.DropHalfBottom.DropSimple.DropSlash.DropboxLogo.Ear.EarSlash.Egg.EggCrack.Eject.EjectSimple.Elevator.Empty.Engine.Envelope.EnvelopeOpen.EnvelopeSimple.EnvelopeSimpleOpen.Equalizer.Equals.Eraser.EscalatorDown.EscalatorUp.Exam.ExclamationMark.Exclude.ExcludeSquare.Export.Eye.EyeClosed.EyeSlash.Eyedropper.EyedropperSample.Eyeglasses.Eyes.FaceMask.FacebookLogo.Factory.Faders.FadersHorizontal.FalloutShelter.Fan.Farm.FastForward.FastForwardCircle.Feather.FediverseLogo.FigmaLogo.File.FileArchive.FileArrowDown.FileArrowUp.FileAudio.FileC.FileCloud.FileCode.FileCpp.FileCss.FileCsv.FileDashed.FileDoc.FileHtml.FileImage.FileIni.FileJpg.FileJs.FileJsx.FileLock.FileMagnifyingGlass.FileMd.FileMinus.FilePdf.FilePlus.FilePng.FilePpt.FilePy.FileRs.FileSql.FileSvg.FileText.FileTs.FileTsx.FileTxt.FileVideo.FileVue.FileX.FileXls.FileZip.Files.FilmReel.FilmScript.FilmSlate.FilmStrip.Fingerprint.FingerprintSimple.FinnTheHuman.Fire.FireExtinguisher.FireSimple.FireTruck.FirstAid.FirstAidKit.Fish.FishSimple.Flag.FlagBanner.FlagBannerFold.FlagCheckered.FlagPennant.Flame.Flashlight.Flask.FlipHorizontal.FlipVertical.FloppyDisk.FloppyDiskBack.FlowArrow.Flower.FlowerLotus.FlowerTulip.FlyingSaucer.Folder.FolderDashed.FolderLock.FolderMinus.FolderNotch.FolderNotchMinus.FolderNotchOpen.FolderNotchPlus.FolderOpen.FolderPlus.FolderSimple.FolderSimpleDashed.FolderSimpleLock.FolderSimpleMinus.FolderSimplePlus.FolderSimpleStar.FolderSimpleUser.FolderStar.FolderUser.Folders.Football.FootballHelmet.Footprints.ForkKnife.FourK.FrameCorners.FramerLogo.Function.Funnel.FunnelSimple.FunnelSimpleX.FunnelX.GameController.Garage.GasCan.GasPump.Gauge.Gavel.Gear.GearFine.GearSix.GenderFemale.GenderIntersex.GenderMale.GenderNeuter.GenderNonbinary.GenderTransgender.Ghost.Gif.Gift.GitBranch.GitCommit.GitDiff.GitFork.GitMerge.GitPullRequest.GithubLogo.GitlabLogo.GitlabLogoSimple.Globe.GlobeHemisphereEast.GlobeHemisphereWest.GlobeSimple.GlobeSimpleX.GlobeStand.GlobeX.Goggles.Golf.GoodreadsLogo.GoogleCardboardLogo.GoogleChromeLogo.GoogleDriveLogo.GoogleLogo.GooglePhotosLogo.GooglePlayLogo.GooglePodcastsLogo.Gps.GpsFix.GpsSlash.Gradient.GraduationCap.Grains.GrainsSlash.Graph.GraphicsCard.GreaterThan.GreaterThanOrEqual.GridFour.GridNine.Guitar.HairDryer.Hamburger.Hammer.Hand.HandArrowDown.HandArrowUp.HandCoins.HandDeposit.HandEye.HandFist.HandGrabbing.HandHeart.HandPalm.HandPeace.HandPointing.HandSoap.HandSwipeLeft.HandSwipeRight.HandTap.HandWaving.HandWithdraw.Handbag.HandbagSimple.HandsClapping.HandsPraying.Handshake.HardDrive.HardDrives.HardHat.Hash.HashStraight.HeadCircuit.Headlights.Headphones.Headset.Heart.HeartBreak.HeartHalf.HeartStraight.HeartStraightBreak.Heartbeat.Hexagon.HighDefinition.HighHeel.Highlighter.HighlighterCircle.Hockey.Hoodie.Horse.Hospital.Hourglass.HourglassHigh.HourglassLow.HourglassMedium.HourglassSimple.HourglassSimpleHigh.HourglassSimpleLow.House.HouseLine.HouseSimple.Hurricane.IceCream.IdentificationBadge.IdentificationCard.Image.ImageBroken.ImageSquare.Images.ImagesSquare.Infinity.Info.InstagramLogo.Intersect.IntersectSquare.IntersectThree.Intersection.Invoice.Island.Jar.JarLabel.Jeep.Joystick.Kanban.Key.KeyReturn.Keyboard.Keyhole.Knife.Ladder.LadderSimple.Lamp.LampPendant.Laptop.Lasso.LastfmLogo.Layout.Leaf.Lectern.Lego.LegoSmiley.LessThan.LessThanOrEqual.LetterCircleH.LetterCircleP.LetterCircleV.Lifebuoy.Lightbulb.LightbulbFilament.Lighthouse.Lightning.LightningA.LightningSlash.LineSegment.LineSegments.LineVertical.Link.LinkBreak.LinkSimple.LinkSimpleBreak.LinkSimpleHorizontal.LinkedinLogo.LinktreeLogo.LinuxLogo.List.ListBullets.ListChecks.ListDashes.ListHeart.ListMagnifyingGlass.ListNumbers.ListPlus.ListStar.Lock.LockKey.LockKeyOpen.LockLaminated.LockLaminatedOpen.LockOpen.LockSimple.LockSimpleOpen.Lockers.Log.MagicWand.Magnet.MagnetStraight.MagnifyingGlass.MagnifyingGlassMinus.MagnifyingGlassPlus.Mailbox.MapPin.MapPinArea.MapPinLine.MapPinPlus.MapPinSimple.MapPinSimpleArea.MapPinSimpleLine.MapTrifold.MarkdownLogo.MarkerCircle.Martini.MaskHappy.MaskSad.MastodonLogo.MathOperations.MatrixLogo.Medal.MedalMilitary.MediumLogo.Megaphone.MegaphoneSimple.MemberOf.Memory.MessengerLogo.MetaLogo.Meteor.Metronome.Microphone.MicrophoneSlash.MicrophoneStage.Microscope.MicrosoftExcelLogo.MicrosoftOutlookLogo.MicrosoftTeamsLogo.MicrosoftWordLogo.Minus.MinusCircle.MinusSquare.Money.MoneyWavy.Monitor.MonitorArrowUp.MonitorPlay.Moon.MoonStars.Moped.MopedFront.Mosque.Motorcycle.Mountains.Mouse.MouseLeftClick.MouseMiddleClick.MouseRightClick.MouseScroll.MouseSimple.MusicNote.MusicNoteSimple.MusicNotes.MusicNotesMinus.MusicNotesPlus.MusicNotesSimple.NavigationArrow.Needle.Network.NetworkSlash.NetworkX.Newspaper.NewspaperClipping.NotEquals.NotMemberOf.NotSubsetOf.NotSupersetOf.Notches.Note.NoteBlank.NotePencil.Notebook.Notepad.Notification.NotionLogo.NuclearPlant.NumberCircleEight.NumberCircleFive.NumberCircleFour.NumberCircleNine.NumberCircleOne.NumberCircleSeven.NumberCircleSix.NumberCircleThree.NumberCircleTwo.NumberCircleZero.NumberEight.NumberFive.NumberFour.NumberNine.NumberOne.NumberSeven.NumberSix.NumberSquareEight.NumberSquareFive.NumberSquareFour.NumberSquareNine.NumberSquareOne.NumberSquareSeven.NumberSquareSix.NumberSquareThree.NumberSquareTwo.NumberSquareZero.NumberThree.NumberTwo.NumberZero.Numpad.Nut.NyTimesLogo.Octagon.OfficeChair.Onigiri.OpenAiLogo.Option.Orange.OrangeSlice.Oven.Package.PaintBrush.PaintBrushBroad.PaintBrushHousehold.PaintBucket.PaintRoller.Palette.Panorama.Pants.PaperPlane.PaperPlaneRight.PaperPlaneTilt.Paperclip.PaperclipHorizontal.Parachute.Paragraph.Parallelogram.Park.Password.Path.PatreonLogo.Pause.PauseCircle.PawPrint.PaypalLogo.Peace.Pen.PenNib.PenNibStraight.Pencil.PencilCircle.PencilLine.PencilRuler.PencilSimple.PencilSimpleLine.PencilSimpleSlash.PencilSlash.Pentagon.Pentagram.Pepper.Percent.Person.PersonArmsSpread.PersonSimple.PersonSimpleBike.PersonSimpleCircle.PersonSimpleHike.PersonSimpleRun.PersonSimpleSki.PersonSimpleSwim.PersonSimpleTaiChi.PersonSimpleThrow.PersonSimpleWalk.Perspective.Phone.PhoneCall.PhoneDisconnect.PhoneIncoming.PhoneList.PhoneOutgoing.PhonePause.PhonePlus.PhoneSlash.PhoneTransfer.PhoneX.PhosphorLogo.Pi.PianoKeys.PicnicTable.PictureInPicture.PiggyBank.Pill.PingPong.PintGlass.PinterestLogo.Pinwheel.Pipe.PipeWrench.PixLogo.Pizza.Placeholder.Planet.Plant.Play.PlayCircle.PlayPause.Playlist.Plug.PlugCharging.Plugs.PlugsConnected.Plus.PlusCircle.PlusMinus.PlusSquare.PokerChip.PoliceCar.Polygon.Popcorn.Popsicle.PottedPlant.Power.Prescription.Presentation.PresentationChart.Printer.Prohibit.ProhibitInset.ProjectorScreen.ProjectorScreenChart.Pulse.PushPin.PushPinSimple.PushPinSimpleSlash.PushPinSlash.PuzzlePiece.QrCode.Question.QuestionMark.Queue.Quotes.Rabbit.Racquet.Radical.Radio.RadioButton.Radioactive.Rainbow.RainbowCloud.Ranking.ReadCvLogo.Receipt.ReceiptX.Record.Rectangle.RectangleDashed.Recycle.RedditLogo.Repeat.RepeatOnce.ReplitLogo.Resize.Rewind.RewindCircle.RoadHorizon.Robot.Rocket.RocketLaunch.Rows.RowsPlusBottom.RowsPlusTop.Rss.RssSimple.Rug.Ruler.Sailboat.Scales.Scan.ScanSmiley.Scissors.Scooter.Screencast.Screwdriver.Scribble.ScribbleLoop.Scroll.Seal.SealCheck.SealPercent.SealQuestion.SealWarning.Seat.Seatbelt.SecurityCamera.Selection.SelectionAll.SelectionBackground.SelectionForeground.SelectionInverse.SelectionPlus.SelectionSlash.Shapes.Share.ShareFat.ShareNetwork.Shield.ShieldCheck.ShieldCheckered.ShieldChevron.ShieldPlus.ShieldSlash.ShieldStar.ShieldWarning.ShippingContainer.ShirtFolded.ShootingStar.ShoppingBag.ShoppingBagOpen.ShoppingCart.ShoppingCartSimple.Shovel.Shower.Shrimp.Shuffle.ShuffleAngular.ShuffleSimple.Sidebar.SidebarSimple.Sigma.SignIn.SignOut.Signature.Signpost.SimCard.Siren.SketchLogo.SkipBack.SkipBackCircle.SkipForward.SkipForwardCircle.Skull.SkypeLogo.SlackLogo.Sliders.SlidersHorizontal.Slideshow.Smiley.SmileyAngry.SmileyBlank.SmileyMeh.SmileyMelting.SmileyNervous.SmileySad.SmileySticker.SmileyWink.SmileyXEyes.SnapchatLogo.Sneaker.SneakerMove.Snowflake.SoccerBall.Sock.SolarPanel.SolarRoof.SortAscending.SortDescending.SoundcloudLogo.Spade.Sparkle.SpeakerHifi.SpeakerHigh.SpeakerLow.SpeakerNone.SpeakerSimpleHigh.SpeakerSimpleLow.SpeakerSimpleNone.SpeakerSimpleSlash.SpeakerSimpleX.SpeakerSlash.SpeakerX.Speedometer.Sphere.Spinner.SpinnerBall.SpinnerGap.Spiral.SplitHorizontal.SplitVertical.SpotifyLogo.SprayBottle.Square.SquareHalf.SquareHalfBottom.SquareLogo.SquareSplitVertical.SquaresFour.Stack.StackMinus.StackOverflowLogo.StackPlus.StackSimple.Stairs.Stamp.StandardDefinition.Star.StarAndCrescent.StarFour.StarHalf.StarOfDavid.SteamLogo.SteeringWheel.Steps.Stethoscope.Sticker.Stool.Stop.StopCircle.Storefront.Strategy.StripeLogo.Student.SubsetOf.SubsetProperOf.Subtitles.SubtitlesSlash.Subtract.SubtractSquare.Subway.Suitcase.SuitcaseRolling.SuitcaseSimple.Sun.SunDim.SunHorizon.Sunglasses.SupersetOf.SupersetProperOf.Swap.Swatches.SwimmingPool.Sword.Synagogue.Syringe.TShirt.Table.Tabs.Tag.TagChevron.TagSimple.Target.Taxi.TeaBag.TelegramLogo.Television.TelevisionSimple.TennisBall.Tent.Terminal.TerminalWindow.TestTube.TextAUnderline.TextAa.TextAlignCenter.TextAlignJustify.TextAlignLeft.TextAlignRight.TextB.TextColumns.TextH.TextHFive.TextHFour.TextHOne.TextHSix.TextHThree.TextHTwo.TextIndent.TextItalic.TextOutdent.TextStrikethrough.TextSubscript.TextSuperscript.TextT.TextTSlash.TextUnderline.Textbox.Thermometer.ThermometerCold.ThermometerHot.ThermometerSimple.ThreadsLogo.ThreeD.ThumbsDown.ThumbsUp.Ticket.TidalLogo.TiktokLogo.Tilde.Timer.TipJar.Tipi.Tire.ToggleLeft.ToggleRight.Toilet.ToiletPaper.Toolbox.Tooth.Tornado.Tote.ToteSimple.Towel.Tractor.Trademark.TrademarkRegistered.TrafficCone.TrafficSign.TrafficSignal.Train.TrainRegional.TrainSimple.Tram.Translate.Trash.TrashSimple.Tray.TrayArrowDown.TrayArrowUp.TreasureChest.Tree.TreeEvergreen.TreePalm.TreeStructure.TreeView.TrendDown.TrendUp.Triangle.TriangleDashed.Trolley.TrolleySuitcase.Trophy.Truck.TruckTrailer.TumblrLogo.TwitchLogo.TwitterLogo.Umbrella.UmbrellaSimple.Union.Unite.UniteSquare.Upload.UploadSimple.Usb.User.UserCheck.UserCircle.UserCircleCheck.UserCircleDashed.UserCircleGear.UserCircleMinus.UserCirclePlus.UserFocus.UserGear.UserList.UserMinus.UserPlus.UserRectangle.UserSound.UserSquare.UserSwitch.Users.UsersFour.UsersThree.Van.Vault.VectorThree.VectorTwo.Vibrate.Video.VideoCamera.VideoCameraSlash.VideoConference.Vignette.VinylRecord.VirtualReality.Virus.Visor.Voicemail.Volleyball.Wall.Wallet.Warehouse.Warning.WarningCircle.WarningDiamond.WarningOctagon.WashingMachine.Watch.WaveSawtooth.WaveSine.WaveSquare.WaveTriangle.Waveform.WaveformSlash.Waves.Webcam.WebcamSlash.WebhooksLogo.WechatLogo.WhatsappLogo.Wheelchair.WheelchairMotion.WifiHigh.WifiLow.WifiMedium.WifiNone.WifiSlash.WifiX.Wind.Windmill.WindowsLogo.Wine.Wrench.X.XCircle.XLogo.XSquare.Yarn.YinYang.YoutubeLogo`.split(
          `.`
        )),
      (A = `https://framer.com/m/phosphor-icons/`),
      (we = [`thin`, `light`, `regular`, `bold`, `fill`, `duotone`]),
      (Te = k.reduce((e, t) => ((e[t.toLowerCase()] = t), e), {})),
      (O.displayName = `Phosphor`),
      (O.defaultProps = {
        width: 24,
        height: 24,
        iconSelection: `House`,
        iconSearch: `House`,
        color: `#66F`,
        selectByList: !0,
        weight: `regular`,
        mirrored: !1,
      }),
      ce(O, {
        selectByList: {
          type: T.Boolean,
          title: `Select`,
          enabledTitle: `List`,
          disabledTitle: `Search`,
          defaultValue: O.defaultProps.selectByList,
        },
        iconSelection: {
          type: T.Enum,
          options: k,
          defaultValue: O.defaultProps.iconSelection,
          title: `Name`,
          hidden: ({ selectByList: e }) => !e,
          description: `Find every icon name on the [Phosphor site](https://phosphoricons.com/)`,
        },
        iconSearch: {
          type: T.String,
          title: `Name`,
          placeholder: `Menu, Wifi, Box…`,
          hidden: ({ selectByList: e }) => e,
        },
        color: { type: T.Color, title: `Color`, defaultValue: O.defaultProps.color },
        weight: {
          type: T.Enum,
          title: `Weight`,
          optionTitles: we.map((e) => e.charAt(0).toUpperCase() + e.slice(1)),
          options: we,
          defaultValue: O.defaultProps.weight,
        },
        mirrored: {
          type: T.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          defaultValue: O.defaultProps.mirrored,
        },
        ...xe,
      }));
  }),
  De,
  j,
  Oe,
  M = e(() => {
    (w(),
      se.loadFonts([`GF;Funnel Display-regular`, `GF;Funnel Display-700`]),
      (De = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Funnel Display`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Funnel Display`,
              url: `https://fonts.gstatic.com/s/funneldisplay/v3/B50bF7FGv37QNVWgE0ga--4PbZSRJXrOHcLHLoAYmmPXXcVwIZDKFA.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Funnel Display`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Funnel Display`,
              url: `https://fonts.gstatic.com/s/funneldisplay/v3/B50bF7FGv37QNVWgE0ga--4PbZSRJXrOHcLHLoAYfWTXXcVwIZDKFA.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (j = [
        `.framer-fqRl4 .framer-styles-preset-1yo9nb5:not(.rich-text-wrapper), .framer-fqRl4 .framer-styles-preset-1yo9nb5.rich-text-wrapper p { --framer-font-family: "Funnel Display", sans-serif; --framer-font-family-bold: "Funnel Display", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Oe = `framer-fqRl4`));
  }),
  N,
  ke = e(() => {
    N = (e) => e;
  }),
  Ae = e(() => {
    ke();
  }),
  je = e(() => {
    Ae();
  });
function Me(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  }
  return n;
}
var Ne = e(() => {}),
  P,
  Pe = e(() => {
    ((P = {}),
      Object.defineProperty(P, "__esModule", { value: !0 }),
      (P.warning = function () {}),
      (P.invariant = function () {}),
      P.__esModule,
      P.warning,
      P.invariant);
  }),
  Fe = e(() => {
    ke();
  });
function Ie(e, t) {
  return (
    typeof e == `string`
      ? t
        ? (t[e] ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function Le(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = Ie(e),
    o = new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n)
            if (e.isIntersecting) {
              let n = t(e);
              typeof n == `function` ? o.set(e.target, n) : s.unobserve(e.target);
            } else n && (n(e), o.delete(e.target));
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : Ze[i] }
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function Re(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function ze({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = U.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return Re(e, n);
        },
      });
    });
}
function Be(e) {
  e.forEach(ze);
}
function Ve() {
  typeof ResizeObserver < `u` && (W = new ResizeObserver(Be));
}
function He(e, t) {
  W || Ve();
  let n = Ie(e);
  return (
    n.forEach((e) => {
      let n = U.get(e);
      (n || ((n = new Set()), U.set(e, n)), n.add(t), W?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = U.get(e);
        (n?.delete(t), (n != null && n.size) || W == null || W.unobserve(e));
      });
    }
  );
}
function Ue() {
  ((K = () => {
    let e = { width: n.innerWidth, height: n.innerHeight },
      t = { target: n, size: e, contentSize: e };
    G.forEach((e) => e(t));
  }),
    n.addEventListener(`resize`, K));
}
function We(e) {
  return (
    G.add(e),
    K || Ue(),
    () => {
      (G.delete(e), !G.size && K && (K = void 0));
    }
  );
}
function Ge(e, t) {
  return typeof e == `function` ? We(e) : He(e, t);
}
function F(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function I(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var L,
  R,
  Ke,
  qe,
  z,
  Je,
  B,
  V,
  H,
  Ye,
  Xe,
  Ze,
  U,
  W,
  G,
  K,
  Qe,
  q,
  $e,
  J = e(() => {
    (u(),
      ke(),
      je(),
      Ne(),
      Pe(),
      Fe(),
      (L = [``, `X`, `Y`, `Z`]),
      (R = [`translate`, `scale`, `rotate`, `skew`]),
      (Ke = { syntax: `<angle>`, initialValue: `0deg`, toDefaultUnit: (e) => e + `deg` }),
      (qe = {
        translate: {
          syntax: `<length-percentage>`,
          initialValue: `0px`,
          toDefaultUnit: (e) => e + `px`,
        },
        rotate: Ke,
        scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: N },
        skew: Ke,
      }),
      (z = new Map()),
      (Je = (e) => `--motion-${e}`),
      (B = [`x`, `y`, `z`]),
      R.forEach((e) => {
        L.forEach((t) => {
          (B.push(e + t), z.set(Je(e + t), qe[e]));
        });
      }),
      new Set(B),
      (V = (e) => document.createElement(`div`).animate(e, { duration: 0.001 })),
      (H = {
        cssRegisterProperty: () =>
          typeof CSS < `u` && Object.hasOwnProperty.call(CSS, `registerProperty`),
        waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`),
        partialKeyframes: () => {
          try {
            V({ opacity: [1] });
          } catch {
            return !1;
          }
          return !0;
        },
        finished: () => !!V({ opacity: [0, 1] }).finished,
      }),
      (Ye = {}),
      (Xe = {}));
    for (let e in H) Xe[e] = () => (Ye[e] === void 0 && (Ye[e] = H[e]()), Ye[e]);
    ((Ze = { any: 0, all: 1 }),
      (U = new WeakMap()),
      (G = new Set()),
      (Qe = {
        isActive: (e) => !!e.inView,
        subscribe: (e, { enable: t, disable: n }, { inViewOptions: r = {} }) => {
          let { once: i } = r;
          return Le(
            e,
            (r) => {
              if ((t(), I(e, `viewenter`, r), !i))
                return (t) => {
                  (n(), I(e, `viewleave`, t));
                };
            },
            Me(r, [`once`])
          );
        },
      }),
      (q = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), F(e, t, r));
      }),
      ($e = {
        inView: Qe,
        hover: {
          isActive: (e) => !!e.hover,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = q(e, `hoverstart`, t),
              i = q(e, `hoverend`, n);
            return (
              e.addEventListener(`pointerenter`, r),
              e.addEventListener(`pointerleave`, i),
              () => {
                (e.removeEventListener(`pointerenter`, r),
                  e.removeEventListener(`pointerleave`, i));
              }
            );
          },
        },
        press: {
          isActive: (e) => !!e.press,
          subscribe: (e, { enable: t, disable: r }) => {
            let i = (t) => {
                (r(), F(e, `pressend`, t), n.removeEventListener(`pointerup`, i));
              },
              a = (r) => {
                (t(), F(e, `pressstart`, r), n.addEventListener(`pointerup`, i));
              };
            return (
              e.addEventListener(`pointerdown`, a),
              () => {
                (e.removeEventListener(`pointerdown`, a), n.removeEventListener(`pointerup`, i));
              }
            );
          },
        },
      }),
      [...Object.keys($e)]);
  });
function et() {
  throw Error(`A function wrapped in useEffectEvent can't be called during rendering.`);
}
function tt(e) {
  let t = d.useRef(et);
  return (
    d.useInsertionEffect(() => {
      t.current = e;
    }, [e]),
    (...e) => {
      rt() && et();
      let n = t.current;
      return n(...e);
    }
  );
}
var nt,
  rt,
  it = e(() => {
    (a(),
      (nt = d.createContext(!0)),
      (rt =
        `use` in d
          ? () => {
              try {
                return d.use(nt);
              } catch {
                return !1;
              }
            }
          : () => !1));
  });
function at(e) {
  let {
      slots: r = [],
      startFrom: a,
      direction: s,
      effectsOptions: c,
      autoPlayControl: u,
      dragControl: d,
      alignment: p,
      gap: m,
      padding: h,
      paddingPerSide: ne,
      paddingTop: ae,
      paddingRight: C,
      paddingBottom: se,
      paddingLeft: ce,
      itemAmount: w,
      fadeOptions: T,
      intervalControl: D,
      transitionControl: le,
      arrowOptions: ue,
      borderRadius: de,
      progressOptions: fe,
      style: pe,
    } = e,
    {
      effectsOpacity: me,
      effectsScale: he,
      effectsRotate: ge,
      effectsPerspective: _e,
      effectsHover: ve,
      playOffscreen: ye,
    } = c,
    { fadeContent: be, overflow: xe, fadeWidth: Se, fadeInset: Ce, fadeAlpha: O } = T,
    {
      showMouseControls: k,
      arrowSize: A,
      arrowRadius: we,
      arrowFill: Te,
      leftArrow: Ee,
      rightArrow: De,
      arrowShouldSpace: j = !0,
      arrowShouldFadeIn: Oe = !1,
      arrowPosition: M,
      arrowPadding: N,
      arrowGap: ke,
      arrowPaddingTop: Ae,
      arrowPaddingRight: je,
      arrowPaddingBottom: Me,
      arrowPaddingLeft: Ne,
    } = ue,
    {
      showProgressDots: P,
      dotSize: Pe,
      dotsInset: Fe,
      dotsRadius: Ie,
      dotsPadding: Le,
      dotsGap: Re,
      dotsFill: ze,
      dotsBackground: Be,
      dotsActiveOpacity: Ve,
      dotsOpacity: He,
      dotsBlur: Ue,
    } = fe,
    We = ne ? `${ae}px ${C}px ${se}px ${ce}px` : `${h}px`,
    F = E.current() === E.canvas,
    I = r.filter(Boolean),
    L = i.count(I);
  if (!(L > 0))
    return _(`section`, {
      style: mt,
      children: [
        g(`div`, { style: ht, children: `⭐️` }),
        g(`p`, { style: gt, children: `Connect to Content` }),
        g(`p`, {
          style: _t,
          children: `Add layers or components to make infinite auto-playing slideshows.`,
        }),
      ],
    });
  let R = ee(null),
    Ke = ee(null),
    qe = t((e) => {
      ((R.current = e), R.current && rt());
    }, []),
    [z, Je] = v({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
      viewportLength: null,
    }),
    B = s === `left` || s === `right`,
    V = st(),
    H = B && V === `rtl` ? -1 : 1,
    [Ye, Xe] = v(!1),
    [Ze, U] = v(u),
    [W, G] = v(!1),
    K = z?.item !== null && z?.parent !== null && V !== null,
    Qe = Math.ceil((a + w) / L),
    q = [],
    $e = Qe * 4;
  (F || !K) && ($e = Qe);
  let [J, et] = v(a + L);
  f(() => {
    if (!z.item || !V) return;
    let e = -1 * J * ((z.item ?? 0) + m) * (V === `rtl` ? -1 : 1);
    Z.get() !== e && re(Z, e, le);
  }, [J, z.item, m, V]);
  let nt = () => {
      let e = Ke.current;
      if (!e) return;
      let t = e.width,
        r = e.height,
        i = B ? t : r,
        a = Math.max(1, w),
        o = Math.max(0, (i - m * (a - 1)) / a),
        s = L * (o + m),
        c = B ? o : t,
        l = B ? r : o,
        u = B
          ? Math.max(document.documentElement.clientWidth || 0, n.innerWidth || 0, t)
          : Math.max(document.documentElement.clientHeight || 0, n.innerHeight || 0, r);
      Je({ parent: i, children: s, item: o, itemWidth: c, itemHeight: l, viewportLength: u });
    },
    rt = tt(() => {
      te.read(nt, !1, !0);
    });
  (l(() => {
    rt();
  }, [I.length, w, m, s, h, ne, ae, C, se, ce]),
    f(() => {
      let e = R.current;
      if (e)
        return Ge(e, ({ size: e }) => {
          ((Ke.current = e), !(!e.width || !e.height) && rt());
        });
    }, []));
  let it = F ? 0 : z?.children,
    [at, ot] = v(!1),
    ct = ee(null),
    Y = ie(ct),
    X = oe() && Y,
    Z = x(it),
    Q = F
      ? x(0)
      : S(Z, (e) => {
          let t = it ?? 0,
            n = e ?? 0,
            r = b(-t * H, -t * H * 2, n);
          return Number.isNaN(r) ? 0 : r;
        }),
    Tt = b(0, L, J),
    $ = (e) => {
      o(() => et((t) => t + e));
    },
    Et = (e) => {
      let t = e - b(0, L, J);
      o(() => et((e) => e + t));
    },
    Dt = (s === `right` || s === `bottom` ? -1 : 1) * H,
    Ot = u && Ze && (ye || X) && !F && L > 1 && !at && K;
  f(() => {
    if (!Ot) return;
    let e = setTimeout(() => {
      $(Dt);
    }, D * 1e3);
    return () => clearTimeout(e);
  }, [Ot, Dt, D, J]);
  let kt = () => {
      o(() => ot(!0));
    },
    At = (e, { offset: t, velocity: n }) => {
      o(() => ot(!1));
      let r = B ? t.x : t.y,
        i = B ? n.x : n.y,
        a = r < -z.item / 2,
        s = r > z.item / 2,
        c = Math.round(Math.abs(r) / z.item),
        l = c === 0 ? 1 : c;
      i > 200 ? $(-l * H) : i < -200 ? $(l * H) : (a && $(c * H), s && $(-c * H));
    },
    jt = Math.max(0, Math.min(a ?? 0, Math.max(0, L - 1))),
    Mt = (jt * 100) / w,
    Nt = (jt * m) / w,
    Pt = 0,
    Ft = `calc(${100 / w}% - ${m}px + ${m / w}px)`;
  for (let e = 0; e < $e; e++)
    q = q.concat(
      i.map(I, (t, n) =>
        g(
          xt,
          {
            slideKey: e + n + `lg`,
            index: e,
            width: B && w > 1 ? Ft : `100%`,
            height: B ? `100%` : w > 1 ? Ft : `100%`,
            size: z,
            child: t,
            numChildren: I?.length,
            wrappedXOrY: Q,
            childCounter: Pt++,
            gap: m,
            isCanvas: F,
            isInitialized: K,
            isHorizontal: B,
            effectsOpacity: me,
            effectsScale: he,
            effectsRotate: ge,
            writingDirection: V,
            rtlDirectionModifier: H,
            children: e + n,
          },
          e + n + `lg`
        )
      )
    );
  let It = B ? `to right` : `to bottom`,
    Lt = Se / 2,
    Rt = 100 - Se / 2,
    zt = `linear-gradient(${It}, rgba(0, 0, 0, ${O}) ${bt(Ce, 0, Lt)}%, rgba(0, 0, 0, 1) ${Lt}%, rgba(0, 0, 0, 1) ${Rt}%, rgba(0, 0, 0, ${O}) ${100 - Ce}%)`,
    Bt = [],
    Vt = {};
  if (P) {
    for (let e = 0; e < I?.length; e++)
      Bt.push(
        g(
          St,
          {
            dotStyle: { ...wt, width: Pe, height: Pe, backgroundColor: ze },
            buttonStyle: vt,
            selectedOpacity: Ve,
            opacity: He,
            disabled: !F && !K,
            onClick: () => Et(e),
            wrappedIndex: F || !K ? jt : Tt,
            total: L,
            index: e,
            gap: Re,
            padding: Le,
            isHorizontal: B,
          },
          e
        )
      );
    Ue > 0 && (Vt.backdropFilter = Vt.WebkitBackdropFilter = `blur(${Ue}px)`);
  }
  let Ht =
      K && d
        ? {
            drag: B ? `x` : `y`,
            onDragStart: kt,
            onDragEnd: At,
            dragDirectionLock: !0,
            values: { x: Z, y: Z },
            dragMomentum: !1,
          }
        : {},
    Ut = M === `top-left` || M === `top-mid` || M === `top-right`,
    Wt = M === `bottom-left` || M === `bottom-mid` || M === `bottom-right`,
    Gt = M === `top-left` || M === `bottom-left`,
    Kt = M === `top-right` || M === `bottom-right`,
    qt = M === `top-mid` || M === `bottom-mid` || M === `auto`,
    Jt = Ee || `../../assets/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg`,
    Yt = De || `../../assets/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg`;
  return _(`section`, {
    className: `${lt} ${B ? ut : dt}`,
    style: {
      ...pt,
      padding: We,
      WebkitMaskImage: be ? zt : void 0,
      maskImage: be ? zt : void 0,
      userSelect: `none`,
    },
    onMouseEnter: () => {
      (Xe(!0), ve || U(!1));
    },
    onMouseLeave: () => {
      (Xe(!1), ve || U(!0));
    },
    onMouseDown: (e) => {
      (e.preventDefault(), o(() => G(!0)));
    },
    onMouseUp: () => o(() => G(!1)),
    ref: ct,
    children: [
      g(`div`, {
        style: {
          width: `100%`,
          height: `100%`,
          margin: 0,
          padding: `inherit`,
          position: `absolute`,
          inset: 0,
          overflow: xe ? `visible` : `hidden`,
          borderRadius: de,
          userSelect: `none`,
          perspective: F ? `none` : _e,
        },
        children: g(y.ul, {
          ref: qe,
          ...Ht,
          style: {
            ...pt,
            gap: m,
            placeItems: p,
            ...(F || !K
              ? {
                  transform: B
                    ? `translateX(calc(${ft} * (${Mt}% + ${Nt}px)))`
                    : `translateY(calc(${ft} * (${Mt}% + ${Nt}px)))`,
                }
              : { x: B ? Q : 0, y: B ? 0 : Q }),
            flexDirection: B ? `row` : `column`,
            transformStyle: ge !== 0 && !F ? `preserve-3d` : void 0,
            cursor: (F || K) && d ? (W ? `grabbing` : `grab`) : `auto`,
            userSelect: `none`,
            ...pe,
          },
          children: q,
        }),
      }),
      _(`fieldset`, {
        style: { ...yt },
        "aria-label": `Slideshow pagination controls`,
        className: `framer--slideshow-controls`,
        children: [
          _(y.div, {
            style: {
              position: `absolute`,
              display: `flex`,
              flexDirection: B ? `row` : `column`,
              justifyContent: j ? `space-between` : `center`,
              gap: j ? `unset` : ke,
              opacity: Oe || (!F && !K) ? 0 : 1,
              alignItems: `center`,
              inset: N,
              top: j ? N : Ut ? Ae : `unset`,
              left: j ? N : Gt ? Ne : qt ? 0 : `unset`,
              right: j ? N : Kt ? je : qt ? 0 : `unset`,
              bottom: j ? N : Wt ? Me : `unset`,
            },
            animate: F || K ? (Oe ? { opacity: +!!Ye } : { opacity: 1 }) : { opacity: 0 },
            transition: le,
            children: [
              g(y.button, {
                type: `button`,
                style: {
                  ...vt,
                  backgroundColor: Te,
                  width: A,
                  height: A,
                  borderRadius: we,
                  rotate: B ? 0 : 90,
                  display: k ? `block` : `none`,
                  pointerEvents: F || K ? `auto` : `none`,
                  cursor: F || K ? `pointer` : `default`,
                },
                disabled: !(F || K),
                onClick: () => $(-1),
                "aria-label": `Previous`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: g(`img`, {
                  decoding: `async`,
                  width: A,
                  height: A,
                  src: B && V === `rtl` ? Yt : Jt,
                  alt: `Back Arrow`,
                }),
              }),
              g(y.button, {
                type: `button`,
                style: {
                  ...vt,
                  backgroundColor: Te,
                  width: A,
                  height: A,
                  borderRadius: we,
                  rotate: B ? 0 : 90,
                  display: k ? `block` : `none`,
                  pointerEvents: F || K ? `auto` : `none`,
                  cursor: F || K ? `pointer` : `default`,
                },
                disabled: !(F || K),
                onClick: () => $(1),
                "aria-label": `Next`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: g(`img`, {
                  decoding: `async`,
                  width: A,
                  height: A,
                  src: B && V === `rtl` ? Jt : Yt,
                  alt: `Next Arrow`,
                }),
              }),
            ],
          }),
          Bt.length > 1
            ? g(y.div, {
                style: {
                  ...Ct,
                  left: B ? `50%` : Fe,
                  top: B ? `unset` : `50%`,
                  transform: B ? `translateX(-50%)` : `translateY(-50%)`,
                  flexDirection: B ? `row` : `column`,
                  bottom: B ? Fe : `unset`,
                  borderRadius: Ie,
                  backgroundColor: Be,
                  userSelect: `none`,
                  ...Vt,
                  opacity: +!!F,
                  pointerEvents: F || K ? `auto` : `none`,
                },
                animate: { opacity: +!!K },
                transition: { duration: 0.35, ease: `easeOut` },
                children: Bt,
              })
            : null,
        ],
      }),
    ],
  });
}
function ot() {
  return n?.document?.documentElement?.dir === `rtl` ? `rtl` : `ltr`;
}
function st() {
  let [e, t] = v(null);
  return (
    f(
      () => (
        t(ot()),
        ct(() => {
          t(ot());
        })
      ),
      []
    ),
    e
  );
}
function ct(e) {
  return (
    Q.push(e),
    Z ||
      ((Z = new MutationObserver(() => Q.forEach((e) => e()))),
      Z.observe(document.documentElement, { attributeFilter: [`dir`] })),
    () => {
      (Q.splice(Q.indexOf(e), 1), Q.length === 0 && (Z?.disconnect(), (Z = null)));
    }
  );
}
var lt,
  ut,
  dt,
  Y,
  ft,
  X,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Z,
  Q,
  Tt = e(() => {
    (u(),
      p(),
      J(),
      w(),
      C(),
      a(),
      it(),
      (lt = `framer-slideshow`),
      (ut = `framer-slideshow-axis-x`),
      (dt = `framer-slideshow-axis-y`),
      (Y = `--framer-dir-multiplier`),
      (ft = `var(${Y}, -1)`),
      (X = D(
        at,
        [`.${ut} { ${Y}: -1; }`, `html[dir="rtl"] .${ut} { ${Y}: 1; }`, `.${dt} { ${Y}: -1; }`],
        `framer-slideshow-component`
      )),
      (X.defaultProps = {
        direction: `left`,
        dragControl: !1,
        startFrom: 0,
        itemAmount: 1,
        infinity: !0,
        gap: 10,
        padding: 10,
        autoPlayControl: !0,
        effectsOptions: {
          effectsOpacity: 1,
          effectsScale: 1,
          effectsRotate: 0,
          effectsPerspective: 1200,
          effectsHover: !0,
          playOffscreen: !1,
        },
        transitionControl: { type: `spring`, stiffness: 200, damping: 40 },
        fadeOptions: { fadeContent: !1, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 },
        arrowOptions: {
          showMouseControls: !0,
          arrowShouldFadeIn: !1,
          arrowShouldSpace: !0,
          arrowFill: `rgba(0,0,0,0.2)`,
          arrowSize: 40,
        },
        progressOptions: { showProgressDots: !0 },
      }),
      ce(X, {
        slots: { type: T.Array, title: `Content`, control: { type: T.ComponentInstance } },
        direction: {
          type: T.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          displaySegmentedControl: !0,
          defaultValue: X.defaultProps.direction,
        },
        autoPlayControl: { type: T.Boolean, title: `Auto Play`, defaultValue: !0 },
        intervalControl: {
          type: T.Number,
          title: `Interval`,
          defaultValue: 1.5,
          min: 0.5,
          max: 10,
          step: 0.1,
          displayStepper: !0,
          unit: `s`,
          hidden: (e) => !e.autoPlayControl,
        },
        dragControl: { type: T.Boolean, title: `Draggable`, defaultValue: !1 },
        startFrom: {
          type: T.Number,
          title: `Current`,
          min: 0,
          max: 10,
          displayStepper: !0,
          defaultValue: X.defaultProps.startFrom,
        },
        effectsOptions: {
          type: T.Object,
          title: `Effects`,
          controls: {
            effectsOpacity: {
              type: T.Number,
              title: `Opacity`,
              defaultValue: X.defaultProps.effectsOptions.effectsOpacity,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsScale: {
              type: T.Number,
              title: `Scale`,
              defaultValue: X.defaultProps.effectsOptions.effectsScale,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsPerspective: {
              type: T.Number,
              title: `Perspective`,
              defaultValue: X.defaultProps.effectsOptions.effectsPerspective,
              min: 200,
              max: 2e3,
              step: 1,
            },
            effectsRotate: {
              type: T.Number,
              title: `Rotate`,
              defaultValue: X.defaultProps.effectsOptions.effectsRotate,
              min: -180,
              max: 180,
              step: 1,
            },
            effectsHover: {
              type: T.Boolean,
              title: `On Hover`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: X.defaultProps.effectsOptions.effectsHover,
            },
            playOffscreen: {
              type: T.Boolean,
              title: `Offscreen`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: X.defaultProps.effectsOptions.playOffscreen,
            },
          },
        },
        alignment: {
          type: T.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        itemAmount: {
          type: T.Number,
          title: `Items`,
          min: 1,
          max: 10,
          displayStepper: !0,
          defaultValue: X.defaultProps.itemAmount,
        },
        gap: { type: T.Number, title: `Gap`, min: 0 },
        padding: {
          title: `Padding`,
          type: T.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          defaultValue: 0,
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        borderRadius: {
          type: T.Number,
          title: `Radius`,
          min: 0,
          max: 500,
          displayStepper: !0,
          defaultValue: 0,
        },
        transitionControl: {
          type: T.Transition,
          defaultValue: X.defaultProps.transitionControl,
          title: `Transition`,
        },
        fadeOptions: {
          type: T.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: T.Boolean, title: `Fade`, defaultValue: !1 },
            overflow: {
              type: T.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: T.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: T.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: T.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        arrowOptions: {
          type: T.Object,
          title: `Arrows`,
          controls: {
            showMouseControls: {
              type: T.Boolean,
              title: `Show`,
              defaultValue: X.defaultProps.arrowOptions.showMouseControls,
            },
            arrowFill: {
              type: T.Color,
              title: `Fill`,
              hidden: (e) => !e.showMouseControls,
              defaultValue: X.defaultProps.arrowOptions.arrowFill,
            },
            leftArrow: { type: T.Image, title: `Previous`, hidden: (e) => !e.showMouseControls },
            rightArrow: { type: T.Image, title: `Next`, hidden: (e) => !e.showMouseControls },
            arrowSize: {
              type: T.Number,
              title: `Size`,
              min: 0,
              max: 200,
              displayStepper: !0,
              defaultValue: X.defaultProps.arrowOptions.arrowSize,
              hidden: (e) => !e.showMouseControls,
            },
            arrowRadius: {
              type: T.Number,
              title: `Radius`,
              min: 0,
              max: 500,
              defaultValue: 40,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldFadeIn: {
              type: T.Boolean,
              title: `Fade In`,
              defaultValue: !1,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldSpace: {
              type: T.Boolean,
              title: `Distance`,
              enabledTitle: `Space`,
              disabledTitle: `Group`,
              defaultValue: X.defaultProps.arrowOptions.arrowShouldSpace,
              hidden: (e) => !e.showMouseControls,
            },
            arrowPosition: {
              type: T.Enum,
              title: `Position`,
              options: [
                `auto`,
                `top-left`,
                `top-mid`,
                `top-right`,
                `bottom-left`,
                `bottom-mid`,
                `bottom-right`,
              ],
              optionTitles: [
                `Center`,
                `Top Left`,
                `Top Middle`,
                `Top Right`,
                `Bottom Left`,
                `Bottom Middle`,
                `Bottom Right`,
              ],
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
            arrowPadding: {
              type: T.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 20,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || !e.arrowShouldSpace,
            },
            arrowPaddingTop: {
              type: T.Number,
              title: `Top`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `bottom-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-right`,
            },
            arrowPaddingBottom: {
              type: T.Number,
              title: `Bottom`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-right`,
            },
            arrowPaddingRight: {
              type: T.Number,
              title: `Right`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowPaddingLeft: {
              type: T.Number,
              title: `Left`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-right` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-right` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowGap: {
              type: T.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
          },
        },
        progressOptions: {
          type: T.Object,
          title: `Dots`,
          controls: {
            showProgressDots: { type: T.Boolean, title: `Show`, defaultValue: !1 },
            dotSize: {
              type: T.Number,
              title: `Size`,
              min: 1,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsInset: {
              type: T.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsGap: {
              type: T.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsPadding: {
              type: T.Number,
              title: `Padding`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsFill: {
              type: T.Color,
              title: `Fill`,
              defaultValue: `#fff`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBackground: {
              type: T.Color,
              title: `Backdrop`,
              defaultValue: `rgba(0,0,0,0.2)`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsRadius: {
              type: T.Number,
              title: `Radius`,
              min: 0,
              max: 200,
              defaultValue: 50,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsOpacity: {
              type: T.Number,
              title: `Opacity`,
              min: 0,
              max: 1,
              defaultValue: 0.5,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsActiveOpacity: {
              type: T.Number,
              title: `Current`,
              min: 0,
              max: 1,
              defaultValue: 1,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBlur: {
              type: T.Number,
              title: `Blur`,
              min: 0,
              max: 50,
              defaultValue: 0,
              step: 1,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
          },
        },
      }),
      (pt = {
        display: `flex`,
        flexDirection: `row`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (mt = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (ht = { fontSize: 32, marginBottom: 10 }),
      (gt = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (_t = { margin: 0, opacity: 0.7, maxWidth: 180, lineHeight: 1.5, textAlign: `center` }),
      (vt = {
        border: `none`,
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        background: `transparent`,
        cursor: `pointer`,
        margin: 0,
        padding: 0,
      }),
      (yt = {
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        position: `absolute`,
        pointerEvents: `none`,
        userSelect: `none`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: 0,
        padding: 0,
        margin: 0,
      }),
      (bt = (e, t, n) => Math.min(Math.max(e, t), n)),
      (xt = r(function (e) {
        let {
            slideKey: t,
            width: n,
            height: r,
            child: i,
            size: a,
            gap: o,
            wrappedXOrY: c,
            numChildren: l,
            childCounter: u,
            isCanvas: d,
            isInitialized: p,
            effectsOpacity: m,
            effectsScale: h,
            effectsRotate: _,
            isHorizontal: v,
            index: te,
            writingDirection: y,
            rtlDirectionModifier: re,
          } = e,
          ie = ee(null),
          b = a?.item ?? 0,
          x = a?.parent ?? 0,
          oe = (b + o) * u,
          C = (v && y === `rtl` ? [b - o, 0, -x + b - o, -x - o] : [-b, 0, x - b + o, x]).map(
            (e) => e - oe * re
          ),
          se = !d && S(c, C, v && y === `rtl` ? [_, 0, 0, -_] : [-_, 0, 0, _]),
          ce = !d && S(c, C, [_, 0, 0, -_]),
          w = !d && S(c, C, [m, 1, 1, m]),
          T = !d && S(c, C, [h, 1, 1, h]),
          E = !d && S(c, C, v && y === `rtl` ? [0, 0, 1, 1] : [1, 1, 0, 0]),
          D =
            !d &&
            S(c, (e) => {
              let t = Math.min(C[1], C[2]),
                n = Math.max(C[1], C[2]);
              return e >= t && e <= n;
            });
        f(() => {
          if (!D || !p) return;
          function e(e) {
            let t = ie?.current;
            t &&
              (e
                ? t.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.dataset.origTabIndex;
                    t ? (e.tabIndex = Number(t)) : e.removeAttribute(`tabIndex`);
                  })
                : t.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.getAttribute(`tabIndex`);
                    (t && (e.dataset.origTabIndex = t), (e.tabIndex = -1));
                  }),
              t.setAttribute(`aria-hidden`, String(!e)));
          }
          return (
            e(D.get()),
            D.on(`change`, (t) => {
              e(t);
            })
          );
        }, [p]);
        let le = d
            ? `visible`
            : S(
                c,
                [C[0] - a.viewportLength * re, ne(C[1], C[2], 0.5), C[3] + a.viewportLength * re],
                [`hidden`, `visible`, `hidden`]
              ),
          ue = t + `child`;
        return g(ae, {
          inherit: `id`,
          id: ue,
          children: g(`li`, {
            style: { display: `contents` },
            children: s(i, {
              ref: ie,
              key: ue,
              style: {
                ...i.props?.style,
                flexShrink: 0,
                userSelect: `none`,
                width: n,
                height: r,
                ...(p
                  ? {
                      opacity: w,
                      scale: T,
                      originX: v ? E : 0.5,
                      originY: v ? 0.5 : E,
                      rotateY: v ? se : 0,
                      rotateX: v ? 0 : ce,
                      visibility: le,
                    }
                  : {}),
              },
              layoutId: i.props.layoutId ? i.props.layoutId + `-original-` + te : void 0,
            }),
          }),
        });
      })),
      (St = r(function ({
        selectedOpacity: e,
        opacity: t,
        total: n,
        index: r,
        wrappedIndex: i,
        dotStyle: a,
        buttonStyle: o,
        gap: s,
        padding: c,
        isHorizontal: l,
        ...u
      }) {
        let d = i === r,
          f = s / 2,
          p = !l && r !== 0 ? f : c,
          m = !l && r !== n - 1 ? f : c,
          h = l ? (r === 0 ? c : f) : c,
          _ = l ? (r === n - 1 ? c : f) : c;
        return g(`button`, {
          "aria-label": `Scroll to page ${r + 1}`,
          type: `button`,
          ...u,
          style: {
            ...o,
            paddingTop: p,
            paddingBottom: m,
            paddingInlineStart: h,
            paddingInlineEnd: _,
          },
          children: g(y.div, {
            style: { ...a },
            initial: !1,
            animate: { opacity: d ? e : t },
            transition: { duration: 0.3 },
          }),
        });
      })),
      (Ct = {
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        position: `absolute`,
        pointerEvents: `auto`,
      }),
      (wt = {
        borderRadius: `50%`,
        background: `white`,
        cursor: `pointer`,
        border: `none`,
        placeContent: `center`,
        placeItems: `center`,
        padding: 0,
      }),
      (Z = null),
      (Q = []));
  });
export { Oe as a, M as c, Ge as i, O as l, Tt as n, j as o, J as r, De as s, X as t, Ee as u };
//# sourceMappingURL=SlideShow.FFGkeE1g.mjs.map
