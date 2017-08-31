function applycss(css) {
  var head = document.getElementsByTagName('head')[0];
  var s = document.createElement('style');
  s.setAttribute('type', 'text/css');
  s.appendChild(document.createTextNode(css));
  head.appendChild(s);
}

applycss(`
  @namespace xhtml url(http://www.w3.org/1999/xhtml); 
  @namespace svg url(http://www.w3.org/2000/svg);
  /*GENERAL*/
    /*
  ::-webkit-scrollbar {
    width: 12px !important;
    background: #222222 !important;
  }
  ::-webkit-scrollbar-thumb {
    background: #121212 !important;
  }
  ::-webkit-scrollbar-track {
    background: #222222;
  }
    */
    
  /*

   highlight color : #009999
   hover text : #00ffff

  */
    
    /* email content */
    .ii.gt.adP.adO table[bgcolor*="#"], 
    .ii.gt.adP.adO div[bgcolor*="#"], 
    .ii.gt.adP.adO td[bgcolor*="#"], 
    .ii.gt.adP.adO tr[bgcolor*="#"], 
    .ii.gt.adP.adO td[bgcolor*="white"], 
    .ii.gt.adP.adO table[style*="background"], 
    .ii.gt.adP.adO div[style*="background"], 
    .ii.gt.adP.adO td[style*="background"], 
    .ii.gt.adP.adO tr[style*="background"], 
    .ii.gt.adP.adO span[style*="background"] { background-color: #222222 !important; } /* email content forced bg reset */
    
    .ii.gt.adP.adO * { border-color: #00ACAF !important; } /* email content forced border colors reset */
    
    .ii.gt.adP.adO table, 
    .ii.gt.adP.adO div, 
    .ii.gt.adP.adO td, 
    .ii.gt.adP.adO tr, 
    .ii.gt.adP.adO span, 
    .ii.gt.adP.adO h1, 
    .ii.gt.adP.adO h2, 
    .ii.gt.adP.adO h3, 
    .ii.gt.adP.adO h4, 
    .ii.gt.adP.adO h5, 
    .ii.gt.adP.adO li,
    .ii.gt.adP.adO lo, 
    .ii.gt.adP.adO lu, 
    .ii.gt.adP.adO font, 
    .ii.gt.adP.adO a[style*="color"]:link { color: #777 !important; } /* email content forced colors reset */
    
    
    /* top bar damn it */
    /* #gb * { background-color: transparent !important; } /* */
    /* #gb *::before { background-color: #777 !important; } /* */
    #gb > div { background: transparent none !important; }
    
  body, td, tr {
    /* color: #999 !important;*/
  }
  a {
    color: #00ffff !important;
  }
  .gb_qd, .J-Z, .azX, .a8D, .Kj-JD, .Kj-JD-K7, .LW-KX, .LW-KX .J-KU, .LW-KX .J-KU-Jg, .LW-KX .J-KU-Jz,
  .LW-KX .J-KU-Jz, .LW-KX-Jm, .gb_ja, .gb_fa, .gb_ga, .gb_ab, .gb_Ba, .ICsgXc, .agd .J-M-JJ input, .ahRshd,
  .gssb_e, .Yt, .Jm, .bX, .aB, .Zt, .cE, .qK, .qL, .Ar, .Vb, .Vf, .Kj-JD-Jz, .gb_Fd, .gb_Jd {
    background-color: #222222 !important;
  }
  .gb_Fd::before { background-color: #555 !important; }
  .J-Z-M-I, .J-awr, body.td, .kr, .Kj-JD, .Kj-JD-K7, .LW-KX .J-KU, .LW-KX .J-KU-Jg, .LW-KX-Jm, .gb_ja,
  .aiv .aq, .J-LC, .J-JK, .agd .J-M-JJ input, .Jm, .ebc, .cE, .el, .Kj-JD-Jz, .aJ6 {
    color: #9C9C9C !important;
  }
  /* .av { color: #222 !important; } /* this forces labels to be dark ... not good */
  .nr, .p4a {
    background-color: #222 !important;
    color: #FFF !important;
  }

  /* Google Hangouts */
  .Yo .z-b-G, .anX .any, .aOd {
    background-image: none !important;
    background-color: #222 !important;
  }
    
  .Yo .z-b-G:hover {
    background-image: none !important;
    background-color: #555 !important;
  }
    
  .VBgE5b, .gBCQ5d { background-image: url("http://i.imgur.com/nSKOI05.png") !important; }

  .J-KU.a65 .aj2 { background-image: url("http://i.imgur.com/HpRrbkK.png") !important; }

  .J-KU .aH3, .J-KU-KO .aH3 { background: transparent url("http://i.imgur.com/trSCDHK.png") no-repeat scroll -4px -4px !important; }
    
  /* add link in email */
  .Kj-JD-Jl button[disabled] {
    background-color: #222222 !important;
    background-image: none;
    border: 1px solid #555;
    color: #555;
  }

  .Kj-JD-Jl button:focus {
    background-color: #222 !important;
  }
    
  .Kj-JD-Jl button {
    background-color: #222222 !important;
    background-image: none;
    border: 1px solid #999;
    color: #999;
  }
    
  /* GMAIL BUTTONS */

  /* 9 square icon */
    #gb #gbwa > div > a[title="Google apps"] { background: transparent url("http://i.imgur.com/77PNFVV.png") no-repeat center !important; border: 1px solid transparent !important; }
    
  /* Gmail btn bar 1 */
  .dv, .aMZ.a1, .aMZ.aA8, .aMZ.a2X, .a8G, .a8G.Je, .a8t, .a8t.Je, .a8K,
  .a8K.Je, .a8q, .a8q.Je, .a8L, .a8L.Je, .a8H, .a8H.Je, .a8o {
    background-image: url("http://i.imgur.com/uvZCiUm.png");
  }
    
  /* Gmail btn bar 2 */
  .hB, .hA, .mL, .mI, .gW, .g1, .gZ, .aMZ.aA7, .og, .ank, .anl, .Gq, .aJj .aWK { background-image: url("http://i.imgur.com/PixBlWT.png"); }
    
  /* Gmail btn bar 3 */
  .ar6, .ar8, .asl, .ar9, .ase, .asb, .aos, .asf, .yE, .xL { background-image: url("http://i.imgur.com/5ZlwAnU.png"); } /* */
    
  /* Gmail btn bar 4 */
  .adj, .adk, .amI, .amJ { background-image: url("http://i.imgur.com/3WhYyZN.png"); }
    
  /* Gmail btn bar 5 */
  .aZh, .T-aT4-JX, .aZg, .aZk { background-image: url("http://i.imgur.com/AKtLL3p.png"); }

  /* Gmail btn bar 6 */
  /* .gb_xb { background-image: url("http://i.imgur.com/0oY9oN7.png"); } /* */
    .gb_xb { background: #222 none !important; }
    
  /* Gmail btn bar 8 */
  .C1 { background-image: url("http://i.imgur.com/LCKVpWS.png"); }
    
  /* Gmail lang bar */

  /* notification bar */
  .ya, .Wz, .Wy, .gssb_i {
    background-color: #222 !important;
    color: #999 !important;
  }

  /* Checkmark */
  .J-Ks-KO { background-image: url("http://i.imgur.com/8G4HJfC.png"); }

  /* X */
  .Zy { background-image: url("http://i.imgur.com/sN98Frs.png"); }
    
  /* no photo */
  .asor { background-image: url("http://i.imgur.com/NJg0cZJ.png"); }
    
  /* Gmail font bar */
  .aMZ.e5, .aMZ.QT, .aaB { background-image: url("http://i.imgur.com/ayUfm1v.png"); }

  /* Gmail Font Btns */
  .aaB { background-image: url("http://i.imgur.com/ayUfm1v.png") !important; }
    
  /*POPUPS*/ .b8 .vh, .cc .vh, .vX .vh, .aTv, .ajA, .SK, .Wx, .Ji {
    background: #222 !important;
    border: none !important;
    box-shadow: 0 0 5px #00ffff !important;
    color: #999 !important;
  }
  /*Link Color*/ .b8 .a8k {
    color: #00ffff !important;
  }

  /*HEADER*/
  /*Top Header*/ .gb_Xc .gb_3b, .gb_3b, .gb_4b, .gb_bc {
    background: url("http://i.imgur.com/Uk0IhKN.png");
  }
  .gb_bc::before {
    background: transparent !important;
  }
  /*Remove Icon*/ .gb_Za .gb_1a {
    background: none !important;
  }
  /*Logo*/ .gb_0a {
    background: url("http://i.imgur.com/FORvaNR.png") !important;
    background-position: 30px 20px !important;
    background-size: 92px !important;
    background-repeat: no-repeat !important;
  }
  /*Margin*/ .w-asV {
    margin-bottom: 0px !important;
  }
  /*Before*/ .gb_3b::before, .gb_4b::before {
    background: transparent !important;
  }
  /*Search Input*/ .gbqfqw {
    background: #444 !important;
    border: 2px solid rgb(43, 43, 43) !important;
    border-radius: .382em 0 0 .382em !important;
    box-shadow: inset 0px 0px 5px #333 !important;
  }
  /*Search Button*/ #gbqfb {
    background: #222 !important;
    box-shadow: inset 0px 0px 5px #444!important;
    border: none !important;
  }
  /*Search Button Icon*/ .gbqfi {
    background: url("http://i.imgur.com/hcdkBCK.png") !important;
    background-position: 5px !important;
    background-repeat: no-repeat !important;
  }
  /*Search Dropdown*/ .a-ac-Bc-e {
    outline: none !important;
  }
  /*Search Dropdown Background*/ .j-wi {
    background: #222 !important;
    box-shadow: inset 0 0 5px #555 !important;
    border: 1px solid #111 !important;
    outline: none !important;
  }
  /*Search Dropdown Subdropdown*/ .j-ia-A-e {
    background: #111 !important;
    border: 1px solid #111 !important;
    box-shadow: inset 0 0 5px #555 !important;
    color: #009999 !important;
  }
  /*Search Dropdown Checkbox*/ .f-sa {
    border-color: #111 !important;
  }
  /*Search Dropdown Button*/ .f-e-ua {
    background: #222 !important;
    box-shadow: inset 0px 0px 5px #444!important;
    border: 1px solid #111 !important;
    color: #999 !important;
  }
  /*Search Typing Dropdown*/ .a-kg-in {
    background: #222 !important;
    box-shadow: inset 0 0 5px #555 !important;
    border: 1px solid #111 !important;
    outline: none !important;
  }
  /*Search Typing Dropdown Border*/ .a-kg-H {
    border-left: 1px solid #111 !important;
  }
  /*Search Typing Dropdown Highlight*/ .a-kg-Ga {
    background: #222 !important;
    border-color: #00ffff !important;
    box-shadow: inset 0 0 5px #555 !important
  }
  /*Account Name*/ #gb#gb span.gb_8a {
    color: #00ffff !important;
  }
  /*Apps Icon*/ a.gb_ca.gb_7 {
    background: url("http://i.imgur.com/AvCjYMn.png") !important;
    background-position: 0px 7px !important;
    background-repeat: no-repeat !important;
    opacity: 1 !important;
  }
  /*Apps Dropdown*/ .gb_4a {
    background: #111 !important;
    border: 1px solid #111 !important;
    box-shadow: inset 0 0 5px #555 !important;
  }
  /*Apps Dropdown Background*/ .gb_ub, .gb_sb, .gb_eb:hover .gb_jb {
    background: transparent !important;
  }
  /*Apps Dropdown No Borders*/ .gb_eb, .gb_eb:hover:not(.gb_fb) {
    border: none !important;
  }
  /*Apps Dropdown Arrow*/ .gb_u {
    border-bottom-color: #444 !important;
    box-shadow: inset 0 0 5px #555 !important;
  }
  /*No Highlight*/ span.gb_B {
    background: transparent !important;
  }
  /*Notifications Icon*/ .gb_da.gb_7.gb_ea {
    background: url("http://i.imgur.com/PyMhGau.png") !important;
    background-position: 0px 7px !important;
    background-repeat: no-repeat !important;
    opacity: 1 !important;
    margin: 0px !important;
    border-radius: 0px !important;
    box-sizing: initial !important;
    width: 30px !important;
    height: 30px !important;
  }
  /*Notifications Dropdown*/ .aac {
    background: #111 !important;
    border: 1px solid #111 !important;
    box-shadow: inset 0 0 5px #555 !important;
  }
  /*Notifications Talk Bubble*/ .l4a, .f4a {
    background: #222 !important;
  }
  /*Share Icon*/ .gb_Zb .gb_K, .gb_0b .gb_L {
    background: url("http://i.imgur.com/WqMRL8g.png") !important;
    background-position: 0px 7px !important;
    background-repeat: no-repeat !important;
    opacity: 1 !important;
  }
  /*Share Dropdown Background*/ .fc, .MNn0h, .Bc {
    background-color: transparent !important;
  }
  /*Share People Input*/ .g-h-f-vc-B {
    background: #444 !important;
    border: 1px solid #000 !important;
  }
  /*Share People Bubbles*/ .g-h-f-za {
    background: #222 !important;
    border: 1px solid #111 !important;
    color: #999 !important;
  }
  /*Share Button*/ .b-c-Ba {
    background: #111 !important;
    border: 1px solid #111 !important;
    box-shadow: inset 0 0 5px #555 !important;
    color: #009999 !important;
  }
  /*Share Cancel Button*/ .b-c-R {
    background: #222 !important;
    border: 1px solid #111 !important;
    box-shadow: inset 0 0 5px #555 !important;
    color: #009999 !important;
  }
  /*Account Dropdown*/ .gb_K, .gb_L:hover {
    background: transparent !important;
  }
  /*Background*/ .gb_w {
    background: #111 !important;
    border: 1px solid #111 !important;
    box-shadow: inset 0 0 5px #555 !important;
  }
  /*Account Dropdown Text 1*/ .gb_R, .gb_1c {
    color: #00ffff !important;
  }
  /*Other Text*/ .gb_Wc {
    color: #999 !important;
  }
  /*Account Dropdown Buttons*/ .gb_B .gb_a, .gb_a {
    background: #222 !important;
    border: 1px solid #111 !important;
    box-shadow: inset 0 0 5px #555 !important;
    color: #009999 !important;
  }
  /*Account Dropdown Change Picture*/ .gb_ya {
    background: rgba(75, 75, 75, 0.7) !important;
  }
  /*No Highlight*/ .gb_Ha {
    background: transparent !important;
  }
  /*Bottom Header*/ .gb_F {
    background: transparent !important;
  }
  /*BOTTOM HEADER*/ .G-atb {
      background-color: #222;
      border-bottom: 1px solid #000;
      box-shadow: 0px 2px 3px #000 !important;
    margin-top: 0px;
    padding-top: 4px;
  }
  /*Gmail Button*/ .akh {
    color: #009999 !important;
    outline: none !important;
  }
  /*Arrow*/ .asT-asx {
    -webkit-filter: invert(100%);
  }
  /*Buttons*/ .TI .T-I-ax7, .z0 .T-I-ax7, .G-atb .T-I-ax7 {
    background: #111 !important;
    border: 1px solid #111 !important;
    box-shadow: inset 0 0 5px #555 !important;
  }
  /*Invert Icons*/ .T-I-ax7 .T-I-J3 {
    -webkit-filter: invert(100%);
  }
  /*Dropdown*/ .J-M {
    background: #111 !important;
    border: 1px solid #111 !important;
    box-shadow: inset 0 0 5px #555 !important;
  }
  /*Items*/ .J-N {
    color: #999 !important;
  }
  /*Hover*/ .J-N-JT, .J-JK-JT {
    background: transparent !important;
    border: 1px solid transparent !important;
    color: #009999 !important;
  }
  /*Other Hover*/ .J-LC-JT {
    background-color: transparent !important;
    border: 1px solid transparent !important;
    color: #999 !important;
  }
  /*Dividers*/ .J-Kh {
    border-color: #333 !important;
  }

  /*LEFT SIDEBAR*/
  /*Background*/ .aeN {
    background: #171717 !important;
    box-shadow: inset 0 0 5px #000 !important;
  }
  /*Compose Button*/ .T-I-KE {
    background: #111 !important;
    border: 1px solid #111 !important;
    box-shadow: inset 0 0 5px #555 !important;
    color: #009999 !important;
  }
  /*Folders*/ .TO .n0 {
    color: #009999 !important;
  }
  /*Selected Border*/ .ain:not(#foo) {
    border-left: 4px solid #00ffff;
  }
  /*Selected Text*/ .nZ .nU:not(#foo), .nZ .n0:not(#foo) {
    color: #00ffff !important;
  }
  /*Hover Background*/ .NQ {
    background: #111 !important;
  }
  /*Circles Icons*/ .aat .aik .nU:before, .aJZ.a0L .aik .nU:before {
    -webkit-filter: invert(100%);
    opacity: 1 !important;
  }
  /*More*/ .n4 {
    color: #999 !important;
  }
  /*Divider*/ .aeS {
    border-color: #333 !important;
  }
  /*Border*/ .aj5.J-KU-Jg {
  border-top: none !important;
  }
  /*Hide Big Border*/ .wl, .wn, .wo, .wp, .wq {
  background: #222 !important;
  }

  .gb_td, .gb_oe {
    background: #222 !important;
  }
    
  /*INBOX*/
  /*Background*/ .aeJ {
  background: #222 !important;
  padding-right: 50px !important;
  padding-left: 30px !important;
  }
  /*Tabs Background*/ .aAy, .aKj {
  background: #222 !important;
  border: 1px solid #111 !important;
  box-shadow: inset 0 0 5px #555 !important;
  }
  /*Active*/ .J-KU-Jg-K9.aAA .J-KU-KO.aAy:not(#foo) {
  background: #111 !important;
  }
  /*Active Background*/ .aRs {
  color: #999 !important;
  background-color: #171717 !important;
  border: 1px solid #111 !important;
  box-shadow: inset 0 0 5px #555 !important;
  }
  /*Divider*/ .aKm, .J-KU-Jg-K9.aAA .aKi {
  background: transparent !important;
  border: none !important;
  }
  /*Border Top*/ .aKo {
  background: transparent !important;
  }
  /*Text Color*/ .aKz {
  color: #009999 !important;
  }
  /*Subtext Color*/ .aKs {
  color: #999 !important;
  }
  /*Icon*/ .aKp {
  -webkit-filter: invert(100%);
  }
  /*Email Background*/ .Cp {
  background: #222 !important;
  box-shadow: 3px 3px 3px #000 !important;
  }
  /*Table Border*/ .F {
  border: 3px solid #333 !important;
  margin-top: 20px !important;
  }
  /*Email Item Read*/ .yO {
  background: #171717 !important;
  color: #009999 !important;
  }
  /*Email Item Unread*/ .zE {
  background: #111 !important;
  color: #00ffff !important;
  }
  /*Bottom Border*/ .xY {
  border-bottom: 1px solid #333 !important;
  }
  /*Important*/ .pH {
  -webkit-filter: hue-rotate(130deg);
  }
  /*No Tabs Border*/ .UJ {
  border: none !important;
  }
  /*No Tabs No Mail*/ .TD, .UI .TB {
  background: transparent !important;
  border: none !important;
  color: #999 !important;
  }

  /*EMAILS*/
  /*Background*/ .iY .Bu {
  background: #222 !important;
  }
  /*Profile Pic*/ .ajn {
  border: 1px solid #000 !important;
  }
  /*Subject*/ .ha {
  color: #009999 !important;
  }
  /*Past Messages*/ .kv .Bk .G2, .kQ .Bk .G2 {
  background: #171717 !important;
  border: 1px solid #111 !important;
  box-shadow: inset 0 0 5px #555 !important;
  }
  /*Outer Background*/ .hx {
  background: #222 !important;
  border: 1px solid #000 !important;
  box-shadow: inset 0 0 5px #000 !important;
  padding-left: 8px !important;
  }
  /*Message Background*/ .Bk {
  background: transparent !important;
  }
  /*Border*/ .Bk .G2 {
  border: none !important;
  }
  /*Text*/ .hx, .gD, .hx .gH {
  color: #999 !important;
  }
  /*Attachments Border*/ .hp {
  border-top: 1px dotted #333 !important;
  }
  /*Attachment Buttons*/ .ho .aZj {
  background: #111 !important;
  border: 1px solid #111 !important;
  box-shadow: inset 0 0 5px #555 !important;
  }
  /*Reply Buttons*/ .acX .aaq, .acX .aap {
  background: #111 !important;
  border: 1px solid #111 !important;
  box-shadow: inset 0 0 5px #555 !important;
  }
  /*Reply Input*/ .amn {
  background: #444 !important;
  border: 2px solid rgb(43, 43, 43) !important;
  box-shadow: inset 0px 0px 5px #333 !important;
  }
  /*Transparency*/ .aC3, .aC2 {
  background: transparent !important;
  }
  /*Top Border*/ .hx .ie .xu .iq, .hx .h7 .ac5 .gB, .hx .h7 .acO {
  border-top: 1px solid #333 !important;
  }
  /*Remove Border*/ .nr:not(#foo) {
  border: none !important;
  }
  /*Header*/ .HM .IG {
  background: #222 !important;
  border: 1px solid #000 !important;
  box-shadow: 0 2px 5px #000 !important;
  }
  /*Button*/ .Un {
  background: #111 !important;
  border: 1px solid #111 !important;
  box-shadow: inset 0 0 5px #555 !important;
  }
  /*Icon*/ .mL {
  -webkit-filter: invert(100%);
  }
  /*Input Field*/ .Am, .aoP .Ar, .HM .iN {
  background: #444 !important;
  }
  /*Box Shadow*/ .HM .iN {
  border: 1px solid #000 !important;
  box-shadow: inset 0 0 5px #000 !important;
  }
  /*Other Background*/ .GQ, .Ap {
  background: transparent !important;
  }
  /*Text Color*/ .Ar {
  color: #999 !important;
  }
  /*Bottom*/ .aDh {
  background: #222 !important;
  border: 1px solid #111 !important;
  box-shadow: inset 0 0 5px #555 !important;
  }
  /*Background*/ .gU {
  background: transparent !important;
  }
  /*Border*/ .HM .aDj {
  border: 1px solid transparent !important;
  }
  /*Buttons*/ .T-I-atl, .wG, .Xv {
  background: #111 !important;
  border: 1px solid #111 !important;
  box-shadow: inset 0 0 5px #555 !important;
  color: #009999 !important;
  }
  /*Icons*/ .gU .aaA {
  -webkit-filter: invert(100%);
  }
  /*Dividers*/ .Uz {
  background: #222 !important;
  border-color: #222 !important;
  }
  /*Name Color*/ .e, .x2, .anQ {
  color: #009999 !important;
  }
  /*Divider*/ .am6 {
  border-top: 1px solid #333 !important;
  }

  /*SETTINGS*/
  /*Background*/ .r4 {
  background: transparent !important;
  }
  /*Tabs*/ .v .f1 {
  background: #222 !important;
  border: 1px solid #111 !important;
  box-shadow: inset 0 0 5px #555 !important;
  }
  /*Active Tab*/ .v .fZ {
  background: #111 !important;
  border: 1px solid #111 !important;
  box-shadow: inset 0 0 5px #555 !important;
  }
  /*Background*/ .v .fY {
  background: transparent !important;
  margin-left: 30px !important;
  }
  /*Dividers*/ .r7 td.r8, .r7 td.r9 {
  border-color: #333 !important;
  }
  /*Labels Page*/ .alO {
  background: transparent !important;
  }
  /*Dividers*/ .rZ {
  background: #222 !important;
  }
  /*Link Color*/ .sA, .r4 .e, .alP, .ri, .rd {
  color: #009999 !important;
  }
  /*Hover*/ .Ze {
  background: transparent !important;
  }

  /*CONTACTS*/ 
  /*Background*/ .age {
  background: transparent !important;
  }
  /*Contact*/ .MT {
  background: transparent !important;
  color: #999 !important;
  }
  /*Border*/ .ML {
  border-color: #333 !important;
  }
  /*Contact Page Background*/ .Rd {
  background: #171717 !important;
  border: 1px solid #000 !important;
  box-shadow: inset 0 0 5px #444 !important;
  margin-top: 20px !important;
  margin-left: 20px !important;
  }
  /*Text Color*/ .R5, .ab0, .abX .abY {
  color: #009999 !important;
  }
  /*Hover*/ .RV {
  background: transparent !important;
  }
  /*Input*/ .RU .RT .R5, .RU .R5, .RT .R5 {
  background: #444 !important;
  border: 2px solid rgb(43, 43, 43) !important;
  box-shadow: inset 0px 0px 5px #333 !important;
  }
  /*Padding*/ .acw {
  padding-right: 20px !important;
  }
  /*Button*/ .T-I-ax7 {
  background: #111 !important;
  border: 1px solid #111 !important;
  box-shadow: inset 0 0 5px #555 !important;
  color: #009999 !important;
  }
  /*Dividers*/ .abh .abl, .abg.abl, .abp .abo {
  border-color: #333 !important;
  margin-left: 15px !important;
  margin-right: 15px !important;
  }
  /*Left Margin*/ .PI.ako {
  margin-left: 15px !important;
  }

  /*COMPOSE*/ 
  /*Background*/ .Hd {
  background: #111 !important;
  border: 1px solid #000 !important;
  box-shadow: 0 2px 5px #000 !important;
  }
  /*Header*/ .Hy .o, .Hy .m, .Hy .n, .Hy .k {
  background: transparent !important;
  }
  /*Text Color*/ .Hp {
  color: #009999 !important;
  }
  /*Subheader*/ .aaZ {
  background: #222 !important;
  border: none !important;
  border-top: 1px solid #000 !important;
  }
  /*Text Color*/ .az9 {
  color: #999 !important;
  }
  /*Input Background*/ .wO {
  background: transparent !important;
  }
  /*Text Color*/ .vT {
  color: #999 !important;
  }
  /*Name Background*/ .vN {
  background: #111 !important;
  border-color: #000 !important;
  }
  /*Input Field*/ .vO, .vO:focus, .aoT {
  background: #444 !important;
  border: 2px solid rgb(43, 43, 43) !important;
  box-shadow: inset 0px 0px 5px #333 !important;
  color: #999 !important;
  }
  /*Dropdown*/ .aiv {
  background: #222 !important;
  }
  /*Hover*/ .ah .Jd-Je {
  background: #222 !important;
  }
  /*Dividers*/ .aoC .aoD, .aoC .hl, .aoC .fX {
  border-color: #333 !important;
  }
  /*Bottom Bar*/ .aoI {
  color: #999 !important;
  }
  /*Border Top*/ .aoC .gU {
  border-top: none !important;
  }
  /*Input*/ .iN {
  background: #444 !important;
  border: 2px solid rgb(43, 43, 43) !important;
  box-shadow: inset 0px 0px 5px #333 !important;
  }

  /*ABOVE FOOTER*/ .l2 {
  margin-right: 45px !important;
  }
  /*Currently Being Used*/ .l7 {
  background: #009999 !important;
  }

  .gb_ka { background-color: #444 !important; }
  .gb_Fa { background-color: #222 !important; color: white !important; border: 1px solid white !important; }
  .gb_Fa:hover { background-color: black !important; }
  .gb_ga { color: white !important; }
  .gb_jb { border-bottom-color: #444 !important; }
  .J-Z-I-KO, .J-Z-I-Jp, .J-Z-M-I-Kq { background: transparent none !important; }
  
  .biy.Je, .biy, .a8t, .a8K, .a8q, .a8L, .a8H, .a8o { background-image: url("http://i.imgur.com/WTWAboq.png") !important; }
  .S2zqnf > .ydLZ9 { fill: white !important; }
`);
