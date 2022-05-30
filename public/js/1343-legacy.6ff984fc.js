"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[1343],{79097:function(a,e,o){o.d(e,{O:function(){return t}});var n=o(5080),t=function(a){return"media/illustrations/"+n.Gv.value+"/"+a}},68932:function(a,e,o){o.d(e,{M:function(){return l},V:function(){return i}});var n=o(61107),t=o(15758),l=function(a,e){n.Z.dispatch(t.e.SET_BREADCRUMB_ACTION,{title:a,pageBreadcrumbPath:e})},i=function(a){n.Z.dispatch(t.e.SET_BREADCRUMB_ACTION,{title:a})}},5080:function(a,e,o){o.d(e,{Df:function(){return h},F9:function(){return f},Fh:function(){return u},Gv:function(){return S},K1:function(){return m},Lj:function(){return r},Ne:function(){return d},_T:function(){return v},az:function(){return b},jH:function(){return i},o$:function(){return s},o4:function(){return g},pD:function(){return _},vc:function(){return l},vj:function(){return w},xV:function(){return p},zK:function(){return c}});var n=o(66252),t=o(61107),l=(0,n.Fl)((function(){return t.Z.getters.layoutConfig()})),i=((0,n.Fl)((function(){return t.Z.getters.layoutConfig("sidebar.display")})),(0,n.Fl)((function(){return"fluid"===t.Z.getters.layoutConfig("footer.width")}))),u=(0,n.Fl)((function(){return"fluid"===t.Z.getters.layoutConfig("header.width")})),r=(0,n.Fl)((function(){return t.Z.getters.layoutConfig("header.left")})),s=(0,n.Fl)((function(){return!0===t.Z.getters.layoutConfig("aside.display")})),d=(0,n.Fl)((function(){return"fluid"===t.Z.getters.layoutConfig("toolbar.width")})),p=(0,n.Fl)((function(){return t.Z.getters.layoutConfig("toolbar.display")})),c=(0,n.Fl)((function(){return t.Z.getters.layoutConfig("loader.display")})),v=(0,n.Fl)((function(){return"fluid"===t.Z.getters.layoutConfig("content.width")})),_=(0,n.Fl)((function(){return""+t.Z.getters.layoutConfig("loader.logo")})),m=(0,n.Fl)((function(){return!!t.Z.getters.layoutConfig("aside.display")})),f=(0,n.Fl)((function(){return t.Z.getters.layoutConfig("aside.theme")})),b=(0,n.Fl)((function(){return t.Z.getters.layoutConfig("toolbar.display")})),g=(0,n.Fl)((function(){return t.Z.getters.layoutConfig("aside.menuIcon")})),h=(0,n.Fl)((function(){return t.Z.getters.layoutConfig("main.logo.light")})),w=(0,n.Fl)((function(){return t.Z.getters.layoutConfig("main.logo.dark")})),S=((0,n.Fl)((function(){return t.Z.getters.layoutConfig("header.menuIcon")})),(0,n.Fl)((function(){return t.Z.getters.layoutConfig("illustrations.set")})))},38561:function(a,e,o){o.d(e,{P:function(){return l},V:function(){return t}});var n=o(91205),t=function(a){if(a){var e=n.u_.getInstance(a);e.hide()}},l=function(){document.querySelectorAll(".modal-backdrop.fade.show").length&&document.querySelectorAll(".modal-backdrop.fade.show").forEach((function(a){a.remove()}))}},81128:function(a,e,o){o.d(e,{Z:function(){return g}});var n=o(66252),t=o(3577),l={class:"card"},i={class:"card-body p-0"},u={class:"card-px text-center py-20 my-10"},r={class:"fs-2x fw-bolder mb-10"},s={class:"text-gray-400 fs-5 fw-bold mb-13"},d=["innerHTML"],p=["data-bs-target"],c={class:"text-center px-5"},v=["src"];function _(a,e,o,_,m,f){return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("div",i,[(0,n._)("div",u,[(0,n._)("h2",r,(0,t.zw)(a.title),1),(0,n._)("p",s,[(0,n._)("span",{innerHTML:a.description},null,8,d)]),(0,n._)("button",{type:"button",class:"btn btn-primary er fs-6 px-8 py-4","data-bs-toggle":"modal","data-bs-target":"#"+a.modalId},(0,t.zw)(a.buttonText),9,p)]),(0,n._)("div",c,[(0,n._)("img",{src:a.image,alt:"",class:"mw-100 mh-300px"},null,8,v)])])])}var m=(0,n.aZ)({name:"modal-card",props:{title:String,description:String,buttonText:String,image:String,modalId:String},components:{}}),f=o(83744);const b=(0,f.Z)(m,[["render",_]]);var g=b},91343:function(a,e,o){o.r(e),o.d(e,{default:function(){return il}});var n=o(66252);function t(a,e,o,t,l,i){var u=(0,n.up)("KTModalCard"),r=(0,n.up)("KTNewAddressModal");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(u,{title:"New Address Modal Example",description:"Click on the below buttons to launch <br/>a new address example.",image:a.getIllustrationsPath("19.png"),"button-text":"Add New Address","modal-id":"kt_modal_new_address"},null,8,["image"]),(0,n.Wm)(r)],64)}var l=o(81128),i={class:"modal fade",ref:"newAddressModalRef",id:"kt_modal_new_address",tabindex:"-1","aria-hidden":"true"},u={class:"modal-dialog modal-dialog-centered mw-650px"},r={class:"modal-content"},s={class:"modal-header",id:"kt_modal_new_address_header"},d=(0,n._)("h2",null,"Add New Address",-1),p={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},c={class:"svg-icon svg-icon-1"},v={class:"modal-body py-10 px-lg-17"},_={class:"scroll-y me-n7 pe-7",id:"kt_modal_new_address_scroll","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto","data-kt-scroll-dependencies":"#kt_modal_new_address_header","data-kt-scroll-wrappers":"#kt_modal_new_address_scroll","data-kt-scroll-offset":"300px"},m={class:"notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6"},f={class:"svg-icon svg-icon-2tx svg-icon-warning me-4"},b=(0,n._)("div",{class:"d-flex flex-stack flex-grow-1"},[(0,n._)("div",{class:"fw-bold"},[(0,n._)("h4",{class:"text-gray-800 fw-bolder"},"Warning"),(0,n._)("div",{class:"fs-6 text-gray-600"},[(0,n.Uk)(" Updating address may affter to your "),(0,n._)("a",{href:"#"},"Tax Location")])])],-1),g={class:"row mb-5"},h={class:"col-md-6 fv-row"},w=(0,n._)("label",{class:"required fs-5 fw-bold mb-2"},"First name",-1),S={class:"fv-plugins-message-container"},y={class:"fv-help-block"},C={class:"col-md-6 fv-row"},A=(0,n._)("label",{class:"required fs-5 fw-bold mb-2"},"Last name",-1),M={class:"fv-plugins-message-container"},T={class:"fv-help-block"},k={class:"d-flex flex-column mb-5 fv-row"},B=(0,n._)("label",{class:"d-flex align-items-center fs-5 fw-bold mb-2"},[(0,n._)("span",{class:"required"},"Country"),(0,n._)("i",{class:"fas fa-exclamation-circle ms-2 fs-7","data-bs-toggle":"tooltip",title:"Your payment statements may very based on selected country"})],-1),N=(0,n._)("option",{value:""},"Select a Country...",-1),I=(0,n._)("option",{value:"AF"},"Afghanistan",-1),F=(0,n._)("option",{value:"AX"},"Aland Islands",-1),G=(0,n._)("option",{value:"AL"},"Albania",-1),Z=(0,n._)("option",{value:"DZ"},"Algeria",-1),x=(0,n._)("option",{value:"AS"},"American Samoa",-1),D=(0,n._)("option",{value:"AD"},"Andorra",-1),P=(0,n._)("option",{value:"AO"},"Angola",-1),R=(0,n._)("option",{value:"AI"},"Anguilla",-1),V=(0,n._)("option",{value:"AQ"},"Antarctica",-1),L=(0,n._)("option",{value:"AG"},"Antigua and Barbuda",-1),E=(0,n._)("option",{value:"AR"},"Argentina",-1),W=(0,n._)("option",{value:"AM"},"Armenia",-1),K=(0,n._)("option",{value:"AW"},"Aruba",-1),U=(0,n._)("option",{value:"AU"},"Australia",-1),H=(0,n._)("option",{value:"AT"},"Austria",-1),O=(0,n._)("option",{value:"AZ"},"Azerbaijan",-1),q=(0,n._)("option",{value:"BS"},"Bahamas",-1),z=(0,n._)("option",{value:"BH"},"Bahrain",-1),Y=(0,n._)("option",{value:"BD"},"Bangladesh",-1),J=(0,n._)("option",{value:"BB"},"Barbados",-1),j=(0,n._)("option",{value:"BY"},"Belarus",-1),Q=(0,n._)("option",{value:"BE"},"Belgium",-1),X=(0,n._)("option",{value:"BZ"},"Belize",-1),$=(0,n._)("option",{value:"BJ"},"Benin",-1),aa=(0,n._)("option",{value:"BM"},"Bermuda",-1),ea=(0,n._)("option",{value:"BT"},"Bhutan",-1),oa=(0,n._)("option",{value:"BO"},"Bolivia, Plurinational State of",-1),na=(0,n._)("option",{value:"BQ"},"Bonaire, Sint Eustatius and Saba",-1),ta=(0,n._)("option",{value:"BA"},"Bosnia and Herzegovina",-1),la=(0,n._)("option",{value:"BW"},"Botswana",-1),ia=(0,n._)("option",{value:"BV"},"Bouvet Island",-1),ua=(0,n._)("option",{value:"BR"},"Brazil",-1),ra=(0,n._)("option",{value:"IO"},"British Indian Ocean Territory",-1),sa=(0,n._)("option",{value:"BN"},"Brunei Darussalam",-1),da=(0,n._)("option",{value:"BG"},"Bulgaria",-1),pa=(0,n._)("option",{value:"BF"},"Burkina Faso",-1),ca=(0,n._)("option",{value:"BI"},"Burundi",-1),va=(0,n._)("option",{value:"KH"},"Cambodia",-1),_a=(0,n._)("option",{value:"CM"},"Cameroon",-1),ma=(0,n._)("option",{value:"CA"},"Canada",-1),fa=(0,n._)("option",{value:"CV"},"Cape Verde",-1),ba=(0,n._)("option",{value:"KY"},"Cayman Islands",-1),ga=(0,n._)("option",{value:"CF"},"Central African Republic",-1),ha=(0,n._)("option",{value:"TD"},"Chad",-1),wa=(0,n._)("option",{value:"CL"},"Chile",-1),Sa=(0,n._)("option",{value:"CN"},"China",-1),ya=(0,n._)("option",{value:"CX"},"Christmas Island",-1),Ca=(0,n._)("option",{value:"CC"},"Cocos (Keeling) Islands",-1),Aa=(0,n._)("option",{value:"CO"},"Colombia",-1),Ma=(0,n._)("option",{value:"KM"},"Comoros",-1),Ta=(0,n._)("option",{value:"CG"},"Congo",-1),ka=(0,n._)("option",{value:"CD"}," Congo, the Democratic Republic of the ",-1),Ba=(0,n._)("option",{value:"CK"},"Cook Islands",-1),Na=(0,n._)("option",{value:"CR"},"Costa Rica",-1),Ia=(0,n._)("option",{value:"CI"},"Côte d'Ivoire",-1),Fa=(0,n._)("option",{value:"HR"},"Croatia",-1),Ga=(0,n._)("option",{value:"CU"},"Cuba",-1),Za=(0,n._)("option",{value:"CW"},"Curaçao",-1),xa=(0,n._)("option",{value:"CY"},"Cyprus",-1),Da=(0,n._)("option",{value:"CZ"},"Czech Republic",-1),Pa=(0,n._)("option",{value:"DK"},"Denmark",-1),Ra=(0,n._)("option",{value:"DJ"},"Djibouti",-1),Va=(0,n._)("option",{value:"DM"},"Dominica",-1),La=(0,n._)("option",{value:"DO"},"Dominican Republic",-1),Ea=(0,n._)("option",{value:"EC"},"Ecuador",-1),Wa=(0,n._)("option",{value:"EG"},"Egypt",-1),Ka=(0,n._)("option",{value:"SV"},"El Salvador",-1),Ua=(0,n._)("option",{value:"GQ"},"Equatorial Guinea",-1),Ha=(0,n._)("option",{value:"ER"},"Eritrea",-1),Oa=(0,n._)("option",{value:"EE"},"Estonia",-1),qa=(0,n._)("option",{value:"ET"},"Ethiopia",-1),za=(0,n._)("option",{value:"FK"},"Falkland Islands (Malvinas)",-1),Ya=(0,n._)("option",{value:"FO"},"Faroe Islands",-1),Ja=(0,n._)("option",{value:"FJ"},"Fiji",-1),ja=(0,n._)("option",{value:"FI"},"Finland",-1),Qa=(0,n._)("option",{value:"FR"},"France",-1),Xa=(0,n._)("option",{value:"GF"},"French Guiana",-1),$a=(0,n._)("option",{value:"PF"},"French Polynesia",-1),ae=(0,n._)("option",{value:"TF"},"French Southern Territories",-1),ee=(0,n._)("option",{value:"GA"},"Gabon",-1),oe=(0,n._)("option",{value:"GM"},"Gambia",-1),ne=(0,n._)("option",{value:"GE"},"Georgia",-1),te=(0,n._)("option",{value:"DE"},"Germany",-1),le=(0,n._)("option",{value:"GH"},"Ghana",-1),ie=(0,n._)("option",{value:"GI"},"Gibraltar",-1),ue=(0,n._)("option",{value:"GR"},"Greece",-1),re=(0,n._)("option",{value:"GL"},"Greenland",-1),se=(0,n._)("option",{value:"GD"},"Grenada",-1),de=(0,n._)("option",{value:"GP"},"Guadeloupe",-1),pe=(0,n._)("option",{value:"GU"},"Guam",-1),ce=(0,n._)("option",{value:"GT"},"Guatemala",-1),ve=(0,n._)("option",{value:"GG"},"Guernsey",-1),_e=(0,n._)("option",{value:"GN"},"Guinea",-1),me=(0,n._)("option",{value:"GW"},"Guinea-Bissau",-1),fe=(0,n._)("option",{value:"GY"},"Guyana",-1),be=(0,n._)("option",{value:"HT"},"Haiti",-1),ge=(0,n._)("option",{value:"HM"},"Heard Island and McDonald Islands",-1),he=(0,n._)("option",{value:"VA"},"Holy See (Vatican City State)",-1),we=(0,n._)("option",{value:"HN"},"Honduras",-1),Se=(0,n._)("option",{value:"HK"},"Hong Kong",-1),ye=(0,n._)("option",{value:"HU"},"Hungary",-1),Ce=(0,n._)("option",{value:"IS"},"Iceland",-1),Ae=(0,n._)("option",{value:"IN"},"India",-1),Me=(0,n._)("option",{value:"ID"},"Indonesia",-1),Te=(0,n._)("option",{value:"IR"},"Iran, Islamic Republic of",-1),ke=(0,n._)("option",{value:"IQ"},"Iraq",-1),Be=(0,n._)("option",{value:"IE"},"Ireland",-1),Ne=(0,n._)("option",{value:"IM"},"Isle of Man",-1),Ie=(0,n._)("option",{value:"IL"},"Israel",-1),Fe=(0,n._)("option",{value:"IT"},"Italy",-1),Ge=(0,n._)("option",{value:"JM"},"Jamaica",-1),Ze=(0,n._)("option",{value:"JP"},"Japan",-1),xe=(0,n._)("option",{value:"JE"},"Jersey",-1),De=(0,n._)("option",{value:"JO"},"Jordan",-1),Pe=(0,n._)("option",{value:"KZ"},"Kazakhstan",-1),Re=(0,n._)("option",{value:"KE"},"Kenya",-1),Ve=(0,n._)("option",{ue:"KI"},"Kiribati",-1),Le=(0,n._)("option",{value:"KP"}," Korea, Democratic People's Republic of ",-1),Ee=(0,n._)("option",{value:"KW"},"Kuwait",-1),We=(0,n._)("option",{value:"KG"},"Kyrgyzstan",-1),Ke=(0,n._)("option",{value:"LA"},"Lao People's Democratic Republic",-1),Ue=(0,n._)("option",{value:"LV"},"Latvia",-1),He=(0,n._)("option",{value:"LB"},"Lebanon",-1),Oe=(0,n._)("option",{value:"LS"},"Lesotho",-1),qe=(0,n._)("option",{value:"LR"},"Liberia",-1),ze=(0,n._)("option",{value:"LY"},"Libya",-1),Ye=(0,n._)("option",{value:"LI"},"Liechtenstein",-1),Je=(0,n._)("option",{value:"LT"},"Lithuania",-1),je=(0,n._)("option",{value:"LU"},"Luxembourg",-1),Qe=(0,n._)("option",{value:"MO"},"Macao",-1),Xe=(0,n._)("option",{value:"MK"}," Macedonia, the former Yugoslav Republic of ",-1),$e=(0,n._)("option",{value:"MG"},"Madagascar",-1),ao=(0,n._)("option",{value:"MW"},"Malawi",-1),eo=(0,n._)("option",{value:"MY"},"Malaysia",-1),oo=(0,n._)("option",{value:"MV"},"Maldives",-1),no=(0,n._)("option",{value:"ML"},"Mali",-1),to=(0,n._)("option",{value:"MT"},"Malta",-1),lo=(0,n._)("option",{value:"MH"},"Marshall Islands",-1),io=(0,n._)("option",{value:"MQ"},"Martinique",-1),uo=(0,n._)("option",{value:"MR"},"Mauritania",-1),ro=(0,n._)("option",{value:"MU"},"Mauritius",-1),so=(0,n._)("option",{value:"YT"},"Mayotte",-1),po=(0,n._)("option",{value:"MX"},"Mexico",-1),co=(0,n._)("option",{value:"FM"},"Micronesia, Federated States of",-1),vo=(0,n._)("option",{value:"MD"},"Moldova, Republic of",-1),_o=(0,n._)("option",{value:"MC"},"Monaco",-1),mo=(0,n._)("option",{value:"MN"},"Mongolia",-1),fo=(0,n._)("option",{value:"ME"},"Montenegro",-1),bo=(0,n._)("option",{value:"MS"},"Montserrat",-1),go=(0,n._)("option",{value:"MA"},"Morocco",-1),ho=(0,n._)("option",{value:"MZ"},"Mozambique",-1),wo=(0,n._)("option",{value:"MM"},"Myanmar",-1),So=(0,n._)("option",{value:"NA"},"Namibia",-1),yo=(0,n._)("option",{value:"NR"},"Nauru",-1),Co=(0,n._)("option",{value:"NP"},"Nepal",-1),Ao=(0,n._)("option",{value:"NL"},"Netherlands",-1),Mo=(0,n._)("option",{value:"NC"},"New Caledonia",-1),To=(0,n._)("option",{value:"NZ"},"New Zealand",-1),ko=(0,n._)("option",{value:"NI"},"Nicaragua",-1),Bo=(0,n._)("option",{value:"NE"},"Niger",-1),No=(0,n._)("option",{value:"NG"},"Nigeria",-1),Io=(0,n._)("option",{value:"NU"},"Niue",-1),Fo=(0,n._)("option",{value:"NF"},"Norfolk Island",-1),Go=(0,n._)("option",{value:"MP"},"Northern Mariana Islands",-1),Zo=(0,n._)("option",{value:"NO"},"Norway",-1),xo=(0,n._)("option",{value:"OM"},"Oman",-1),Do=(0,n._)("option",{value:"PK"},"Pakistan",-1),Po=(0,n._)("option",{value:"PW"},"Palau",-1),Ro=(0,n._)("option",{value:"PS"},"Palestinian Territory, Occupied",-1),Vo=(0,n._)("option",{value:"PA"},"Panama",-1),Lo=(0,n._)("option",{value:"PG"},"Papua New Guinea",-1),Eo=(0,n._)("option",{value:"PY"},"Paraguay",-1),Wo=(0,n._)("option",{value:"PE"},"Peru",-1),Ko=(0,n._)("option",{value:"PH"},"Philippines",-1),Uo=(0,n._)("option",{value:"PN"},"Pitcairn",-1),Ho=(0,n._)("option",{value:"PL"},"Poland",-1),Oo=(0,n._)("option",{value:"PT"},"Portugal",-1),qo=(0,n._)("option",{value:"PR"},"Puerto Rico",-1),zo=(0,n._)("option",{value:"QA"},"Qatar",-1),Yo=(0,n._)("option",{value:"RE"},"Réunion",-1),Jo=(0,n._)("option",{value:"RO"},"Romania",-1),jo=(0,n._)("option",{value:"RU"},"Russian Federation",-1),Qo=(0,n._)("option",{value:"RW"},"Rwanda",-1),Xo=(0,n._)("option",{value:"BL"},"Saint Barthélemy",-1),$o=(0,n._)("option",{value:"SH"}," Saint Helena, Ascension and Tristan da Cunha ",-1),an=(0,n._)("option",{value:"KN"},"Saint Kitts and Nevis",-1),en=(0,n._)("option",{value:"LC"},"Saint Lucia",-1),on=(0,n._)("option",{value:"MF"},"Saint Martin (French part)",-1),nn=(0,n._)("option",{value:"PM"},"Saint Pierre and Miquelon",-1),tn=(0,n._)("option",{value:"VC"},"Saint Vincent and the Grenadines",-1),ln=(0,n._)("option",{value:"WS"},"Samoa",-1),un=(0,n._)("option",{value:"SM"},"San Marino",-1),rn=(0,n._)("option",{value:"ST"},"Sao Tome and Principe",-1),sn=(0,n._)("option",{value:"SA"},"Saudi Arabia",-1),dn=(0,n._)("option",{value:"SN"},"Senegal",-1),pn=(0,n._)("option",{value:"RS"},"Serbia",-1),cn=(0,n._)("option",{value:"SC"},"Seychelles",-1),vn=(0,n._)("option",{value:"SL"},"Sierra Leone",-1),_n=(0,n._)("option",{value:"SG"},"Singapore",-1),mn=(0,n._)("option",{value:"SX"},"Sint Maarten (Dutch part)",-1),fn=(0,n._)("option",{value:"SK"},"Slovakia",-1),bn=(0,n._)("option",{value:"SI"},"Slovenia",-1),gn=(0,n._)("option",{value:"SB"},"Solomon Islands",-1),hn=(0,n._)("option",{value:"SO"},"Somalia",-1),wn=(0,n._)("option",{value:"ZA"},"South Africa",-1),Sn=(0,n._)("option",{value:"GS"}," South Georgia and the South Sandwich Islands ",-1),yn=(0,n._)("option",{value:"KR"},"South Korea",-1),Cn=(0,n._)("option",{value:"SS"},"South Sudan",-1),An=(0,n._)("option",{value:"ES"},"Spain",-1),Mn=(0,n._)("option",{value:"LK"},"Sri Lanka",-1),Tn=(0,n._)("option",{value:"SD"},"Sudan",-1),kn=(0,n._)("option",{value:"SR"},"Suriname",-1),Bn=(0,n._)("option",{value:"SJ"},"Svalbard and Jan Mayen",-1),Nn=(0,n._)("option",{value:"SZ"},"Swaziland",-1),In=(0,n._)("option",{value:"SE"},"Sweden",-1),Fn=(0,n._)("option",{value:"CH"},"Switzerland",-1),Gn=(0,n._)("option",{value:"SY"},"Syrian Arab Republic",-1),Zn=(0,n._)("option",{value:"TW"},"Taiwan, Province of China",-1),xn=(0,n._)("option",{value:"TJ"},"Tajikistan",-1),Dn=(0,n._)("option",{value:"TZ"},"Tanzania, United Republic of",-1),Pn=(0,n._)("option",{value:"TH"},"Thailand",-1),Rn=(0,n._)("option",{value:"TL"},"Timor-Leste",-1),Vn=(0,n._)("option",{value:"TG"},"Togo",-1),Ln=(0,n._)("option",{value:"TK"},"Tokelau",-1),En=(0,n._)("option",{value:"TO"},"Tonga",-1),Wn=(0,n._)("option",{value:"TT"},"Trinidad and Tobago",-1),Kn=(0,n._)("option",{value:"TN"},"Tunisia",-1),Un=(0,n._)("option",{value:"TR"},"Turkey",-1),Hn=(0,n._)("option",{value:"TM"},"Turkmenistan",-1),On=(0,n._)("option",{value:"TC"},"Turks and Caicos Islands",-1),qn=(0,n._)("option",{value:"TV"},"Tuvalu",-1),zn=(0,n._)("option",{value:"UG"},"Uganda",-1),Yn=(0,n._)("option",{value:"UA"},"Ukraine",-1),Jn=(0,n._)("option",{value:"AE"},"United Arab Emirates",-1),jn=(0,n._)("option",{value:"GB"},"United Kingdom",-1),Qn=(0,n._)("option",{value:"US"},"United States",-1),Xn=(0,n._)("option",{value:"UY"},"Uruguay",-1),$n=(0,n._)("option",{value:"UZ"},"Uzbekistan",-1),at=(0,n._)("option",{value:"VU"},"Vanuatu",-1),et=(0,n._)("option",{value:"VE"},"Venezuela, Bolivarian Republic of",-1),ot=(0,n._)("option",{value:"VN"},"Vietnam",-1),nt=(0,n._)("option",{value:"VI"},"Virgin Islands",-1),tt=(0,n._)("option",{value:"WF"},"Wallis and Futuna",-1),lt=(0,n._)("option",{value:"EH"},"Western Sahara",-1),it=(0,n._)("option",{value:"YE"},"Yemen",-1),ut=(0,n._)("option",{value:"ZM"},"Zambia",-1),rt=(0,n._)("option",{value:"ZW"},"Zimbabwe",-1),st={class:"fv-plugins-message-container"},dt={class:"fv-help-block"},pt={class:"d-flex flex-column mb-5 fv-row"},ct=(0,n._)("label",{class:"required fs-5 fw-bold mb-2"},"Address Line 1",-1),vt={class:"fv-plugins-message-container"},_t={class:"fv-help-block"},mt={class:"d-flex flex-column mb-5 fv-row"},ft=(0,n._)("label",{class:"required fs-5 fw-bold mb-2"},"Address Line 2",-1),bt={class:"fv-plugins-message-container"},gt={class:"fv-help-block"},ht={class:"d-flex flex-column mb-5 fv-row"},wt=(0,n._)("label",{class:"fs-5 fw-bold mb-2"},"Town",-1),St={class:"fv-plugins-message-container"},yt={class:"fv-help-block"},Ct={class:"row g-9 mb-5"},At={class:"col-md-6 fv-row"},Mt=(0,n._)("label",{class:"fs-5 fw-bold mb-2"},"State / Province",-1),Tt={class:"fv-plugins-message-container"},kt={class:"fv-help-block"},Bt={class:"col-md-6 fv-row"},Nt=(0,n._)("label",{class:"fs-5 fw-bold mb-2"},"Post Code",-1),It={class:"fv-plugins-message-container"},Ft={class:"fv-help-block"},Gt={class:"fv-row mb-5"},Zt={class:"d-flex flex-stack"},xt=(0,n._)("div",{class:"me-5"},[(0,n._)("label",{class:"fs-5 fw-bold"},"Use as a billing adderess?"),(0,n._)("div",{class:"fs-7 fw-bold text-gray-400"}," If you need more info, please check budget planning ")],-1),Dt={class:"form-check form-switch form-check-custom form-check-solid"},Pt={class:"fv-plugins-message-container"},Rt={class:"fv-help-block"},Vt=(0,n._)("span",{class:"form-check-label fw-bold text-gray-400"}," Yes ",-1),Lt={class:"modal-footer flex-center"},Et=(0,n._)("button",{type:"reset",id:"kt_modal_new_address_cancel",class:"btn btn-white me-3"}," Discard ",-1),Wt={ref:"submitButtonRef",type:"submit",id:"kt_modal_new_address_submit",class:"btn btn-primary"},Kt=(0,n._)("span",{class:"indicator-label"}," Submit ",-1),Ut=(0,n._)("span",{class:"indicator-progress"},[(0,n.Uk)(" Please wait... "),(0,n._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1),Ht=[Kt,Ut];function Ot(a,e,o,t,l,Kt){var Ut=(0,n.up)("inline-svg"),Ot=(0,n.up)("Field"),qt=(0,n.up)("ErrorMessage"),zt=(0,n.up)("Form");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",u,[(0,n._)("div",r,[(0,n.Wm)(zt,{class:"form",id:"kt_modal_new_address_form",onSubmit:a.submit,"validation-schema":a.validationSchema},{default:(0,n.w5)((function(){return[(0,n._)("div",s,[d,(0,n._)("div",p,[(0,n._)("span",c,[(0,n.Wm)(Ut,{src:"media/icons/duotune/arrows/arr061.svg"})])])]),(0,n._)("div",v,[(0,n._)("div",_,[(0,n._)("div",m,[(0,n._)("span",f,[(0,n.Wm)(Ut,{src:"media/icons/duotune/general/gen044.svg"})]),b]),(0,n._)("div",g,[(0,n._)("div",h,[w,(0,n.Wm)(Ot,{type:"text",class:"form-control form-control-solid",placeholder:"",name:"firstName",modelValue:a.newAddressData.firstName,"onUpdate:modelValue":e[0]||(e[0]=function(e){return a.newAddressData.firstName=e})},null,8,["modelValue"]),(0,n._)("div",S,[(0,n._)("div",y,[(0,n.Wm)(qt,{name:"firstName"})])])]),(0,n._)("div",C,[A,(0,n.Wm)(Ot,{type:"text",class:"form-control form-control-solid",placeholder:"",name:"lastName",modelValue:a.newAddressData.lastName,"onUpdate:modelValue":e[1]||(e[1]=function(e){return a.newAddressData.lastName=e})},null,8,["modelValue"]),(0,n._)("div",M,[(0,n._)("div",T,[(0,n.Wm)(qt,{name:"lastName"})])])])]),(0,n._)("div",k,[B,(0,n.Wm)(Ot,{name:"country",class:"form-select form-select-solid",as:"select",modelValue:a.newAddressData.country,"onUpdate:modelValue":e[2]||(e[2]=function(e){return a.newAddressData.country=e})},{default:(0,n.w5)((function(){return[N,I,F,G,Z,x,D,P,R,V,L,E,W,K,U,H,O,q,z,Y,J,j,Q,X,$,aa,ea,oa,na,ta,la,ia,ua,ra,sa,da,pa,ca,va,_a,ma,fa,ba,ga,ha,wa,Sa,ya,Ca,Aa,Ma,Ta,ka,Ba,Na,Ia,Fa,Ga,Za,xa,Da,Pa,Ra,Va,La,Ea,Wa,Ka,Ua,Ha,Oa,qa,za,Ya,Ja,ja,Qa,Xa,$a,ae,ee,oe,ne,te,le,ie,ue,re,se,de,pe,ce,ve,_e,me,fe,be,ge,he,we,Se,ye,Ce,Ae,Me,Te,ke,Be,Ne,Ie,Fe,Ge,Ze,xe,De,Pe,Re,Ve,Le,Ee,We,Ke,Ue,He,Oe,qe,ze,Ye,Je,je,Qe,Xe,$e,ao,eo,oo,no,to,lo,io,uo,ro,so,po,co,vo,_o,mo,fo,bo,go,ho,wo,So,yo,Co,Ao,Mo,To,ko,Bo,No,Io,Fo,Go,Zo,xo,Do,Po,Ro,Vo,Lo,Eo,Wo,Ko,Uo,Ho,Oo,qo,zo,Yo,Jo,jo,Qo,Xo,$o,an,en,on,nn,tn,ln,un,rn,sn,dn,pn,cn,vn,_n,mn,fn,bn,gn,hn,wn,Sn,yn,Cn,An,Mn,Tn,kn,Bn,Nn,In,Fn,Gn,Zn,xn,Dn,Pn,Rn,Vn,Ln,En,Wn,Kn,Un,Hn,On,qn,zn,Yn,Jn,jn,Qn,Xn,$n,at,et,ot,nt,tt,lt,it,ut,rt]})),_:1},8,["modelValue"]),(0,n._)("div",st,[(0,n._)("div",dt,[(0,n.Wm)(qt,{name:"country"})])])]),(0,n._)("div",pt,[ct,(0,n.Wm)(Ot,{class:"form-control form-control-solid",placeholder:"",name:"address1",modelValue:a.newAddressData.address1,"onUpdate:modelValue":e[3]||(e[3]=function(e){return a.newAddressData.address1=e})},null,8,["modelValue"]),(0,n._)("div",vt,[(0,n._)("div",_t,[(0,n.Wm)(qt,{name:"address1"})])])]),(0,n._)("div",mt,[ft,(0,n.Wm)(Ot,{class:"form-control form-control-solid",placeholder:"",name:"address2",modelValue:a.newAddressData.address2,"onUpdate:modelValue":e[4]||(e[4]=function(e){return a.newAddressData.address2=e})},null,8,["modelValue"]),(0,n._)("div",bt,[(0,n._)("div",gt,[(0,n.Wm)(qt,{name:"address2"})])])]),(0,n._)("div",ht,[wt,(0,n.Wm)(Ot,{class:"form-control form-control-solid",placeholder:"",name:"town",modelValue:a.newAddressData.town,"onUpdate:modelValue":e[5]||(e[5]=function(e){return a.newAddressData.town=e})},null,8,["modelValue"]),(0,n._)("div",St,[(0,n._)("div",yt,[(0,n.Wm)(qt,{name:"town"})])])]),(0,n._)("div",Ct,[(0,n._)("div",At,[Mt,(0,n.Wm)(Ot,{class:"form-control form-control-solid",placeholder:"",name:"state",modelValue:a.newAddressData.state,"onUpdate:modelValue":e[6]||(e[6]=function(e){return a.newAddressData.state=e})},null,8,["modelValue"]),(0,n._)("div",Tt,[(0,n._)("div",kt,[(0,n.Wm)(qt,{name:"state"})])])]),(0,n._)("div",Bt,[Nt,(0,n.Wm)(Ot,{class:"form-control form-control-solid",placeholder:"",name:"postCode",modelValue:a.newAddressData.postCode,"onUpdate:modelValue":e[7]||(e[7]=function(e){return a.newAddressData.postCode=e})},null,8,["modelValue"]),(0,n._)("div",It,[(0,n._)("div",Ft,[(0,n.Wm)(qt,{name:"postCode"})])])])]),(0,n._)("div",Gt,[(0,n._)("div",Zt,[xt,(0,n._)("label",Dt,[(0,n.Wm)(Ot,{class:"form-check-input",name:"billing",type:"checkbox",value:"1",checked:"checked"}),(0,n._)("div",Pt,[(0,n._)("div",Rt,[(0,n.Wm)(qt,{name:"billing"})])]),Vt])])])])]),(0,n._)("div",Lt,[Et,(0,n._)("button",Wt,Ht,512)])]})),_:1},8,["onSubmit","validation-schema"])])])],512)}var qt=o(2262),zt=o(12954),Yt=o(38561),Jt=o(78764),jt=o.n(Jt),Qt=o(74231),Xt=(0,n.aZ)({name:"new-address-modal",components:{ErrorMessage:zt.Bc,Field:zt.gN,Form:zt.l0},setup:function(){var a=(0,qt.iH)(null),e=(0,qt.iH)(null),o=(0,qt.iH)({firstName:"",lastName:"",country:"",address1:"",address2:"",town:"",state:"",postCode:""}),n=Qt.Ry().shape({firstName:Qt.Z_().required().label("First name"),lastName:Qt.Z_().required().label("Last name"),country:Qt.Z_().required().label("Country"),address1:Qt.Z_().required().label("Address Line 1"),address2:Qt.Z_().required().label("Address Line 2"),town:Qt.Z_().required().label("Town"),state:Qt.Z_().required().label("State/Province"),postCode:Qt.Z_().required().label("Post code")}),t=function(){a.value&&(a.value.disabled=!0,a.value.setAttribute("data-kt-indicator","on"),setTimeout((function(){var o;a.value&&(a.value.disabled=!1,null===(o=a.value)||void 0===o||o.removeAttribute("data-kt-indicator")),jt().fire({text:"Form has been successfully submitted!",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}}).then((function(){(0,Yt.V)(e.value)}))}),2e3))};return{newAddressData:o,validationSchema:n,submit:t,submitButtonRef:a,newAddressModalRef:e}}}),$t=o(83744);const al=(0,$t.Z)(Xt,[["render",Ot]]);var el=al,ol=o(68932),nl=o(79097),tl=(0,n.aZ)({name:"new-address",components:{KTModalCard:l.Z,KTNewAddressModal:el},setup:function(){return(0,n.bv)((function(){(0,ol.M)("New Address",["Modals","Forms"])})),{getIllustrationsPath:nl.O}}});const ll=(0,$t.Z)(tl,[["render",t]]);var il=ll}}]);
//# sourceMappingURL=1343-legacy.6ff984fc.js.map