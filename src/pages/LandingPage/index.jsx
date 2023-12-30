import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  SelectBox,
  Slider,
  Text,
  TextArea,
} from "components";

import { handleSectionNavigation } from "utils";

const roofingServiceOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const serviceAreaOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const LandingPagePage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <header
          className="bg-cover bg-no-repeat flex flex-col h-[69px] items-center justify-center md:px-5 w-full"
          style={{ backgroundImage: "url('images/img_navbarcta.png')" }}
        >
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-1.5 md:ml-[0] ml-[81px] mr-28 mt-[9px] w-[87%]">
            <div className="flex sm:flex-col flex-row gap-[17px] items-start justify-start w-[41%] md:w-full">
              <Img
                className="h-[37px] md:h-auto object-cover w-[37px]"
                src="images/img_email.png"
                alt="email"
              />
              <Text
                className="sm:mt-0 mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtPoppinsSemiBold24"
              >
                Email Id : dean@kingcontractor.com
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-1.5 items-start justify-start w-[35%] md:w-full">
              <Img
                className="h-[53px] md:h-auto object-cover w-[13%] sm:w-full"
                src="images/img_phone.png"
                alt="phone"
              />
              <Text
                className="sm:mt-0 mt-0.5 text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                size="txtPoppinsSemiBold30"
              >
                CALL US : (770) 567-0972
              </Text>
            </div>
          </div>
        </header>
        <div className="bg-white-A700 flex flex-row items-center justify-start p-[18px] shadow-bs w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-7xl mx-auto md:px-5 w-full">
            <Img
              className="h-[76px] md:h-auto object-cover"
              src="images/img_logo.png"
              alt="logo"
            />
            <div className="flex md:flex-1 md:flex-col flex-row gap-[35px] items-start justify-start w-auto md:w-full">
              <Text
                className="common-pointer text-base text-black-900 w-auto"
                size="txtPoppinsRegular16"
                onClick={() => {
                  handleSectionNavigation("block3");
                }}
              >
                Home
              </Text>
              <SelectBox
                className="leading-[normal] text-base text-black-900 text-left w-[19%] md:w-full"
                placeholderClassName="text-black-900"
                indicator={
                  <Img
                    className="h-1 mr-[0] outline-black-900 outline-[0.5px] outline w-[7px]"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="groupOne"
                options={roofingServiceOptionsList}
                isSearchable={false}
                placeholder="Roofing Service"
                id="block3"
              />
              <Text
                className="common-pointer text-base text-black-900 w-auto"
                size="txtPoppinsRegular16"
                onClick={() => {
                  handleSectionNavigation("block2");
                }}
              >
                Past Work
              </Text>
              <SelectBox
                className="leading-[normal] text-base text-black-900 text-left w-[16%] md:w-full"
                placeholderClassName="text-black-900"
                indicator={
                  <Img
                    className="h-1 mr-[0] outline-black-900 outline-[0.5px] outline w-[7px]"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="groupTwo"
                options={serviceAreaOptionsList}
                isSearchable={false}
                placeholder="Service Area"
              />
              <Text
                className="text-base text-black-900 w-auto"
                size="txtPoppinsRegular16"
              >
                About
              </Text>
              <Text
                className="text-base text-black-900 w-auto"
                size="txtPoppinsRegular16"
              >
                Blog
              </Text>
              <Text
                className="text-base text-black-900 w-auto"
                size="txtPoppinsRegular16"
              >
                Contact
              </Text>
            </div>
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[134px] md:mt-0 my-[17px] text-base text-center"
              color="green_700"
              size="xs"
            >
              <>Free Quote &gt;</>
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="flex flex-col mx-auto w-full">
            <div className="flex flex-col items-center justify-start mx-auto w-full">
              <div className="md:h-[1258px] h-[794px] relative w-full">
                <Img
                  className="h-[794px] m-auto object-cover w-full"
                  src="images/img_img863611.png"
                  alt="img863611"
                />
                <div className="absolute bg-gradient  flex md:flex-col flex-row md:gap-10 h-full inset-[0] items-center justify-between m-auto p-20 md:px-10 sm:px-5 w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[37%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="bg-blue_gray-50 flex flex-col items-center justify-start p-[9px] rounded-[5px] w-[79%] md:w-full">
                        <div className="flex flex-col gap-[7px] items-start justify-start w-[97%] md:w-full">
                          <div className="flex flex-row gap-[5px] items-start justify-start w-[66%] md:w-full">
                            <Img
                              className="h-[17px] md:h-auto mt-[5px] object-cover w-[38%]"
                              src="images/img_1234removebgpreview.png"
                              alt="1234removebgpre"
                            />
                            <Text
                              className="text-base text-black-900"
                              size="txtPoppinsMedium16"
                            >
                              <span className="text-black-900 font-poppins text-left font-medium">
                                {" "}
                              </span>
                              <span className="text-black-900 font-poppins text-left text-[13px] font-medium">
                                4.9 Star / 123 Review
                              </span>
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-evenly ml-1 md:ml-[0] w-[99%] md:w-full">
                            <Img
                              className="h-[37px] md:h-auto object-cover w-[31%]"
                              src="images/img_facebook5starpng.png"
                              alt="facebook5starpn"
                            />
                            <Img
                              className="h-[49px] md:h-auto object-cover w-[41%]"
                              src="images/img_2712713890bbb.png"
                              alt="2712713890bbb"
                            />
                            <Img
                              className="h-[45px] md:h-auto object-cover w-[29%]"
                              src="images/img_pngclipartgoo.png"
                              alt="pngclipartgoo"
                            />
                          </div>
                        </div>
                      </div>
                      <Text
                        className="leading-[75.00px] mt-2.5 sm:text-[40px] md:text-[46px] text-[54px] text-white-A700"
                        size="txtPoppinsBold54"
                      >
                        <span className="text-white-A700 font-poppins text-left font-bold">
                          <>
                            TRUST ROOFTOPS
                            <br />
                          </>
                        </span>
                        <span className="text-green-A700 font-poppins text-left font-bold">
                          UNLIMITED
                        </span>
                      </Text>
                      <Text
                        className="mt-3 text-white-A700 text-xl"
                        size="txtPoppinsRegular20"
                      >
                        Your Gateway Is To Superior Roffs in Georgia
                      </Text>
                      <List
                        className="sm:flex-col flex-row gap-[25px] grid sm:grid-cols-1 grid-cols-3 justify-center mt-[33px] w-[98%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                          <Img
                            className="h-[50px] md:h-auto md:ml-[0] ml-[3px] object-cover w-[50px]"
                            src="images/img_handshake.png"
                            alt="handshake"
                          />
                          <Text
                            className="text-base text-white-A700 w-full"
                            size="txtPoppinsMedium16WhiteA700"
                          >
                            Redefining Roofs with Decades of Experience
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                          <Img
                            className="h-[50px] md:h-auto object-cover w-[50px]"
                            src="images/img_shield.png"
                            alt="shield"
                          />
                          <Text
                            className="ml-1 md:ml-[0] text-base text-white-A700 w-[98%] sm:w-full"
                            size="txtPoppinsMedium16WhiteA700"
                          >
                            Fully Licensed, Fully Insured
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                          <Img
                            className="h-[50px] md:h-auto object-cover w-[50px]"
                            src="images/img_peopleworkingtogether.png"
                            alt="peopleworkingto"
                          />
                          <Text
                            className="text-base text-white-A700 w-full"
                            size="txtPoppinsMedium16WhiteA700"
                          >
                            Local Trust and Commitment
                          </Text>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-5 md:mt-0 mt-10 p-[35px] sm:px-5 rounded-[10px] shadow-bs w-[37%] md:w-full">
                    <div className="flex flex-col items-center justify-start mb-[33px] w-[99%] md:w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-green-700"
                            size="txtPoppinsSemiBold30Green700"
                          >
                            Get Your Free Quote
                          </Text>
                          <Line className="bg-green-700 h-px ml-0.5 md:ml-[0] mt-1 w-[70%]" />
                        </div>
                        <Img
                          className="h-7 mt-1.5 w-7"
                          src="images/img_videocamera.svg"
                          alt="videocamera"
                        />
                      </div>
                      <Input
                        name="groupEight"
                        placeholder="Your Name"
                        className="font-medium leading-[normal] p-0 placeholder:text-black-900_68 text-left text-sm w-full"
                        wrapClassName="border border-black-900_9e border-solid mt-9 w-[99%]"
                        type="text"
                      ></Input>
                      <Input
                        name="groupSeven"
                        placeholder="Your Number"
                        className="font-medium leading-[normal] p-0 placeholder:text-black-900_68 text-left text-sm w-full"
                        wrapClassName="border border-black-900_9e border-solid mt-[22px] w-[99%]"
                        type="number"
                      ></Input>
                      <Input
                        name="groupSix"
                        placeholder="Your Email"
                        className="font-medium leading-[normal] p-0 placeholder:text-black-900_68 text-left text-sm w-full"
                        wrapClassName="border border-black-900_9e border-solid mt-[22px] w-[99%]"
                        type="email"
                      ></Input>
                      <TextArea
                        className="bg-white-A700 border border-black-900_9e border-solid font-medium leading-[normal] mt-[22px] pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-[19px] rounded-[5px] placeholder:text-black-900_68 text-black-900_68 text-left text-sm w-[99%] sm:w-full"
                        name="groupTen"
                        placeholder="How We Can Help?"
                      ></TextArea>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[390px] sm:min-w-full mt-[22px] text-base text-center"
                        color="indigo_800"
                        size="xs"
                      >
                        <>Send &gt; </>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start mt-[-4px] mx-auto p-[35px] sm:px-5 w-full z-[1]">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[115px] items-center justify-between w-auto md:w-full">
                <Img
                  className="h-[99px] md:h-auto object-cover w-[87px] sm:w-full"
                  src="images/img_donrightpartnerlogo.png"
                  alt="donrightpartner"
                />
                <Img
                  className="h-[82px] md:h-auto object-cover w-[156px] sm:w-full"
                  src="images/img_trplogo.png"
                  alt="trplogo"
                />
                <Img
                  className="h-[111px] md:h-auto object-cover w-[111px]"
                  src="images/img_masterelite.png"
                  alt="masterelite"
                />
                <Img
                  className="h-[126px] md:h-auto object-cover w-24 sm:w-full"
                  src="images/img_vinyle.png"
                  alt="vinyle"
                />
                <Img
                  className="h-[75px] md:h-auto object-cover w-[190px] sm:w-full"
                  src="images/img_hardiebadge.png"
                  alt="hardiebadge"
                />
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-end justify-start mt-[-2px] mx-auto md:pl-10 sm:pl-5 pl-[95px] py-[95px] w-full z-[1]">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[110px] items-center justify-end mb-12 w-full">
              <div className="flex md:flex-1 flex-col md:gap-10 gap-[71px] justify-start w-[87%] md:w-full">
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[379px]">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-indigo-800"
                    size="txtPoppinsSemiBold48"
                  >
                    What Our Client Say
                  </Text>
                  <Text
                    className="text-base text-green-A700"
                    size="txtPoppinsSemiBold16"
                  >
                    Over 100 5-Star Reviews: Trustworthy, Honest, Local
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[48%] md:w-full">
                    <div className="h-[322px] relative w-full">
                      <Img
                        className="absolute h-[322px] inset-[0] justify-center m-auto object-cover w-full"
                        src="images/img_image1.png"
                        alt="imageOne"
                      />
                      <div className="absolute bg-black-900_59 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[123px] md:px-10 sm:px-5 w-full">
                        <div className="bg-white-A700 flex flex-col h-[73px] items-center justify-start p-3.5 rounded-[36px] w-[73px]">
                          <Img
                            className="h-[43px] w-[43px]"
                            src="images/img_overflowmenu.svg"
                            alt="overflowmenu"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[44%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row gap-[33px] items-start justify-start w-[47%] md:w-full">
                        <Img
                          className="h-[37px] md:h-auto mt-0.5 object-cover w-[45%]"
                          src="images/img_facebook5starpng.png"
                          alt="facebook5starpn_One"
                        />
                        <Img
                          className="h-[45px] md:h-auto object-cover w-[42%]"
                          src="images/img_pngclipartgoo.png"
                          alt="pngclipartgoo_One"
                        />
                      </div>
                      <div className="flex flex-row gap-[5px] items-start justify-start mt-[7px] w-[59%] md:w-full">
                        <Img
                          className="h-[17px] md:h-auto mt-1 object-cover w-[29%]"
                          src="images/img_1234removebgpreview.png"
                          alt="1234removebgpre_One"
                        />
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsMedium16"
                        >
                          <span className="text-black-900 font-poppins text-left font-medium">
                            {" "}
                          </span>
                          <span className="text-black-900 font-poppins text-left text-[13px] font-medium">
                            4.9 Star Based on (123 Reviews)
                          </span>
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[33px] items-center justify-start mt-[30px] w-[27%] md:w-full">
                        <Img
                          className="h-[62px] md:h-auto rounded-[50%] w-[62px]"
                          src="images/img_ellipse3.png"
                          alt="ellipseThree"
                        />
                        <Img
                          className="h-[41px] md:h-auto object-cover w-[41px]"
                          src="images/img_getquote.png"
                          alt="getquote"
                        />
                      </div>
                      <Text
                        className="mt-[18px] text-[15px] text-black-900 w-full"
                        size="txtPoppinsMedium15"
                      >
                        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                        ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                        ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                        ipsumlorem ipsum
                      </Text>
                      <div className="flex flex-row items-start justify-between mt-10 w-[99%] md:w-full">
                        <Text
                          className="text-indigo-800 text-xl"
                          size="txtPoppinsSemiBold20"
                        >
                          -Michael
                        </Text>
                        <PagerIndicator
                          className="flex h-[13px] mt-0.5 w-[69px]"
                          count={3}
                          activeCss="inline-block cursor-pointer rounded-[50%] h-[13px] bg-gray-700 w-[13px]"
                          activeIndex={1}
                          inactiveCss="inline-block cursor-pointer rounded-[50%] h-[13px] bg-blue_gray-100 w-[13px]"
                          selectedWrapperCss="inline-block mx-[7.50px]"
                          unselectedWrapperCss="inline-block mx-[7.50px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="h-[442px]"
                src="images/img_group59.svg"
                alt="groupFiftyNine"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="md:h-[1300px] sm:h-[738px] h-[799px] mx-auto w-full">
            <div className="absolute bg-gray-50 h-[735px] inset-x-[0] mx-auto top-[0] w-full"></div>
            <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-10 items-start justify-between right-[0] w-[95%]">
              <div className="flex flex-col gap-6 items-center justify-start w-[47%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="md:text-5xl text-[64px] text-indigo-800"
                    size="txtPoppinsSemiBold64"
                  >
                    Our Story
                  </Text>
                  <Text
                    className="ml-1 md:ml-[0] text-green-A700 text-xl"
                    size="txtPoppinsSemiBold20GreenA700"
                  >
                     Crafting Excellence for 24 years
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[5px] mt-3.5 text-black-900 text-sm w-full"
                    size="txtPoppinsMedium14"
                  >
                    <>
                      Founded by Floyd Baldree, our journey began with a passion
                      for construction at the age of 14, working alongside
                      Floyd&#39;s father in the summer months. By just 17,
                      roofing became a specialty, evolving into a comprehensive
                      skill set of siding, custom metal fabrication, and
                      gutters.
                    </>
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-[13px] items-center justify-between w-full">
                  <Img
                    className="h-[70px] md:h-auto object-cover w-[70px]"
                    src="images/img_goal.png"
                    alt="goal"
                  />
                  <div className="h-[110px] md:h-[82px] relative w-[87%] md:w-full">
                    <Text
                      className="absolute left-[0] text-black-900 text-xl top-[0]"
                      size="txtPoppinsSemiBold20Black900"
                    >
                      Our Mission
                    </Text>
                    <Text
                      className="absolute bottom-[0] inset-x-[0] mx-auto text-black-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      <>
                        Our mission is to redefine roofing excellence through
                        superior craftsmanship
                        <br />
                        environmental responsibility, and unwavering client
                        commitment. We strive
                        <br />
                        to elevate homes, communities, and industry standards
                        with quality roofing solutions.
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[13px] items-center justify-between w-full">
                  <Img
                    className="h-[70px] md:h-auto object-cover w-[70px]"
                    src="images/img_innovation.png"
                    alt="innovation"
                  />
                  <div className="h-[111px] relative w-[87%] md:w-full">
                    <Text
                      className="mb-[-0.01px] text-black-900 text-xl z-[1]"
                      size="txtPoppinsSemiBold20Black900"
                    >
                      Our Vision
                    </Text>
                    <Text
                      className="mt-auto mx-auto text-black-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      <>
                        Our mission is to redefine roofing excellence through
                        superior craftsmanship
                        <br />
                        environmental responsibility, and unwavering client
                        commitment. We strive
                        <br />
                        to elevate homes, communities, and industry standards
                        with quality roofing solutions.
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-[650px] md:mt-0 mt-[88px] relative w-[46%] md:w-full">
                <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[87%]">
                  <div className="flex flex-col justify-start w-full">
                    <Img
                      className="h-[279px] md:h-auto object-cover w-[86%]"
                      src="images/img_27766903352693.png"
                      alt="27766903352693"
                    />
                    <Img
                      className="h-[369px] md:h-auto md:ml-[0] ml-[50px] mt-0.5 object-cover w-[91%]"
                      src="images/img_logo_369x487.png"
                      alt="logo_One"
                    />
                  </div>
                </div>
                <div className="absolute flex flex-col items-center justify-start left-[0] top-[19%] w-[43%]">
                  <Img
                    className="h-[285px] md:h-auto object-cover w-full"
                    src="images/img_39872061380512.png"
                    alt="39872061380512"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-indigo-800 flex flex-col items-center justify-start mt-[-64px] mx-auto p-[61px] md:px-10 sm:px-5 w-full z-[1]">
            <div className="flex flex-col items-center justify-start mb-[78px] w-[98%] md:w-full">
              <div className="flex flex-col gap-[49px] items-center justify-start w-full">
                <div className="flex flex-col gap-[11px] items-center justify-start">
                  <Text
                    className="md:text-5xl text-[64px] text-white-A700"
                    size="txtPoppinsSemiBold64WhiteA700"
                  >
                    Our Services
                  </Text>
                  <Text
                    className="text-center text-green-A700 text-xl"
                    size="txtPoppinsSemiBold20GreenA700"
                  >
                    Comprehensive Roofing Solutions for Homes and Businesses
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-5 items-center justify-center w-1/2 md:w-full">
                  <div className="bg-green-A700 flex flex-col items-center justify-end p-[5px] rounded-[5px] shadow-bs w-[49%] md:w-full">
                    <div className="flex flex-row gap-[5px] items-center justify-center mt-[3px] w-[72%] md:w-full">
                      <Text
                        className="text-center text-white-A700 text-xl"
                        size="txtPoppinsSemiBold20WhiteA700"
                      >
                        Residential Roofing{" "}
                      </Text>
                      <Text
                        className="rotate-[-90deg] text-center text-white-A700 text-xl"
                        size="txtPoppinsSemiBold20WhiteA700"
                      >
                        <>&gt;</>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-end p-1 rounded-[5px] shadow-bs w-[49%] md:w-full">
                    <div className="flex flex-row gap-[5px] items-center justify-start mt-[5px] w-[77%] md:w-full">
                      <Text
                        className="text-black-900 text-center text-xl"
                        size="txtPoppinsSemiBold20Black900"
                      >
                        Commercial Roofing
                      </Text>
                      <Text
                        className="rotate-[-90deg] text-black-900 text-center text-xl"
                        size="txtPoppinsSemiBold20Black900"
                      >
                        <>&gt;</>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[35px] items-center justify-start w-full">
                    <List
                      className="sm:flex-col flex-row gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                      orientation="horizontal"
                    >
                      <div className="h-[241px] sm:ml-[0] relative w-full">
                        <Img
                          className="h-[241px] m-auto object-cover w-full"
                          src="images/img_rectangle19.png"
                          alt="rectangleNineteen"
                        />
                        <Text
                          className="absolute bg-white-A700 bottom-[0] h-[71px] inset-x-[0] justify-center mx-auto pb-[18px] pl-[23px] pr-[35px] pt-[22px] sm:px-5 text-black-900 text-center text-shadow-ts text-xl w-max"
                          size="txtPoppinsSemiBold20Black900"
                        >
                          Roof Repair{" "}
                        </Text>
                      </div>
                      <div className="flex flex-col sm:ml-[0] relative w-full">
                        <Img
                          className="h-[191px] mx-auto object-cover w-full"
                          src="images/img_rectangle20.png"
                          alt="rectangleTwenty"
                        />
                        <Text
                          className="bg-white-A700 h-[71px] justify-center mt-[-21px] mx-auto pb-[18px] pl-[21px] pr-[35px] pt-[22px] sm:px-5 text-black-900 text-center text-shadow-ts text-xl w-[305px] z-[1]"
                          size="txtPoppinsSemiBold20Black900"
                        >
                          Roof Replacement{" "}
                        </Text>
                      </div>
                      <div className="h-[241px] sm:ml-[0] relative w-full">
                        <Img
                          className="h-[241px] m-auto object-cover w-full"
                          src="images/img_rectangle21.png"
                          alt="rectangleTwentyOne"
                        />
                        <Text
                          className="absolute bg-white-A700 bottom-[0] h-[71px] inset-x-[0] justify-center mx-auto pl-6 pr-[35px] sm:px-5 py-5 text-black-900 text-center text-shadow-ts text-xl w-max"
                          size="txtPoppinsSemiBold20Black900"
                        >
                          New Roof Installation
                        </Text>
                      </div>
                      <div className="h-[241px] sm:ml-[0] relative w-full">
                        <Img
                          className="h-[241px] m-auto object-cover w-full"
                          src="images/img_rectangle25.png"
                          alt="rectangleTwentyFive"
                        />
                        <Text
                          className="absolute bg-white-A700 bottom-[0] h-[71px] inset-x-[0] justify-center mx-auto pb-[18px] pl-[23px] pr-[35px] pt-[22px] sm:px-5 text-black-900 text-center text-shadow-ts text-xl w-max"
                          size="txtPoppinsSemiBold20Black900"
                        >
                          Roof Inspections
                        </Text>
                      </div>
                    </List>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="h-[241px] relative w-[24%] md:w-full">
                        <Img
                          className="h-[241px] m-auto object-cover w-full"
                          src="images/img_rectangle23.png"
                          alt="rectangleTwentyThree"
                        />
                        <Input
                          name="groupFive"
                          placeholder="Insurance Claims"
                          className="!placeholder:text-black-900 !text-black-900 font-semibold leading-[normal] p-0 text-center text-xl w-full"
                          wrapClassName="absolute bottom-[0] inset-x-[0] mx-auto shadow-bs2 w-full"
                          shape="square"
                          size="sm"
                        ></Input>
                      </div>
                      <div className="h-[241px] relative w-[24%] md:w-full">
                        <Img
                          className="h-[241px] m-auto object-cover w-full"
                          src="images/img_rectangle24.png"
                          alt="rectangleTwentyFour"
                        />
                        <Input
                          name="groupSix_One"
                          placeholder="Storm Damage Repair"
                          className="!placeholder:text-black-900 !text-black-900 font-semibold leading-[normal] p-0 text-center text-xl w-full"
                          wrapClassName="absolute bottom-[0] inset-x-[0] mx-auto shadow-bs2 w-full"
                          shape="square"
                          size="sm"
                        ></Input>
                      </div>
                      <div className="h-[241px] relative w-[24%] md:w-full">
                        <Img
                          className="h-[241px] m-auto object-cover w-full"
                          src="images/img_rectangle22.png"
                          alt="rectangleTwentyTwo"
                        />
                        <Button
                          className="absolute bottom-[0] cursor-pointer font-semibold inset-x-[0] leading-[normal] min-w-[305px] mx-auto text-[19px] text-center"
                          shape="square"
                          color="white_A700"
                          size="md"
                        >
                          Siding Repair & Replacement
                        </Button>
                      </div>
                      <div className="h-[241px] relative w-[24%] md:w-full">
                        <Img
                          className="h-[241px] m-auto object-cover w-full"
                          src="images/img_rectangle26.png"
                          alt="rectangleTwentySix"
                        />
                        <Button
                          className="absolute bottom-[0] cursor-pointer font-semibold inset-x-[0] leading-[normal] min-w-[305px] mx-auto text-center text-lg"
                          shape="square"
                          color="white_A700"
                          size="lg"
                        >
                          Gutters Repair & Replacement
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="bg-white-A700 flex flex-col items-end justify-end mx-auto md:pl-10 sm:pl-5 pl-[49px] py-[49px] w-full">
            <div className="flex md:flex-col flex-row gap-[25px] items-end justify-end mt-[46px] w-[98%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[67px] items-start justify-start w-[47%] md:w-full">
                <div
                  className="common-pointer flex flex-col items-start justify-start"
                  id="block1"
                  onClick={() => {
                    handleSectionNavigation("block1");
                  }}
                >
                  <Text
                    className="md:text-5xl text-[64px] text-indigo-800"
                    size="txtPoppinsSemiBold64"
                  >
                    Why Us ?
                  </Text>
                  <Text
                    className="text-green-A700 text-xl"
                    size="txtPoppinsSemiBold20GreenA700"
                  >
                    Quality, Local Trust, Environmental Responsibility
                  </Text>
                </div>
                <div className="flex flex-col gap-[26px] items-center justify-start w-full">
                  <div className="bg-white-A700 border border-black-900_42 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-start sm:pr-5 pr-[25px] rounded-[5px] shadow-bs w-full">
                    <Button className="cursor-pointer font-semibold leading-[normal] min-w-[69px] text-center text-xl">
                      1
                    </Button>
                    <Text
                      className="ml-5 sm:ml-[0] text-black-900 text-xl"
                      size="txtPoppinsSemiBold20Black900"
                    >
                      Crafting Excellence
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[302px] rotate-[-90deg] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                      size="txtPoppinsSemiBold32"
                    >
                      <>&gt;</>
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-black-900_42 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-start sm:pr-5 pr-[25px] rounded-[5px] shadow-bs w-full">
                    <Button className="cursor-pointer font-semibold leading-[normal] min-w-[69px] text-center text-xl">
                      2
                    </Button>
                    <Text
                      className="ml-5 sm:ml-[0] text-black-900 text-xl"
                      size="txtPoppinsSemiBold20Black900"
                    >
                      Exceptional Customer Service
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[194px] rotate-[-90deg] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                      size="txtPoppinsSemiBold32"
                    >
                      <>&gt;</>
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-black-900_42 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-start sm:pr-5 pr-[25px] rounded-[5px] shadow-bs w-full">
                    <Button className="cursor-pointer font-semibold leading-[normal] min-w-[69px] text-center text-xl">
                      3
                    </Button>
                    <Text
                      className="ml-5 sm:ml-[0] text-black-900 text-xl"
                      size="txtPoppinsSemiBold20Black900"
                    >
                      Local Roots, Global Standards
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[195px] rotate-[-90deg] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                      size="txtPoppinsSemiBold32"
                    >
                      <>&gt;</>
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-black-900_42 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-start sm:pr-5 pr-[25px] rounded-[5px] shadow-bs w-full">
                    <Button className="cursor-pointer font-semibold leading-[normal] min-w-[69px] text-center text-xl">
                      4
                    </Button>
                    <Text
                      className="ml-5 sm:ml-[0] text-black-900 text-xl"
                      size="txtPoppinsSemiBold20Black900"
                    >
                      Green Commitment
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[294px] rotate-[-90deg] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                      size="txtPoppinsSemiBold32"
                    >
                      <>&gt;</>
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-black-900_42 border-solid flex flex-col items-start justify-start pb-[25px] sm:pr-5 pr-[25px] rounded-[5px] shadow-bs w-full">
                    <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                        <Button className="cursor-pointer font-semibold leading-[normal] min-w-[69px] text-center text-xl">
                          5
                        </Button>
                        <div className="flex md:flex-1 flex-col gap-2 items-start justify-start ml-5 md:ml-[0] w-[68%] md:w-full">
                          <Text
                            className="text-black-900 text-xl"
                            size="txtPoppinsSemiBold20Black900"
                          >
                            Building Community Beyond Roofs
                          </Text>
                          <Line className="bg-black-900 h-px w-full" />
                        </div>
                        <Text
                          className="md:ml-[0] ml-[87px] rotate-[90deg] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                          size="txtPoppinsSemiBold32"
                        >
                          <>&gt;</>
                        </Text>
                      </div>
                      <Text
                        className="text-black-900 text-sm w-[97%] sm:w-full"
                        size="txtPoppinsRegular14"
                      >
                        <>
                          Beyond the construction site, Rooftops Unlimited
                          actively engages with the local community.
                          Sponsorships, charity work, and participation in
                          community events are ways we give back, enhancing our
                          reputation and making us more than just a business —
                          we&#39;re a vital part of the places we serve.
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[667px] md:mt-0 mt-[101px] relative w-[52%] md:w-full">
                <div className="absolute bg-indigo-800 h-[610px] right-[0] top-[2%] w-[35%]"></div>
                <Img
                  className="absolute h-[667px] inset-y-[0] left-[0] my-auto object-cover w-[667px]"
                  src="images/img_2150761168removebgpreview.png"
                  alt="2150761168remov"
                />
              </div>
            </div>
          </div>
          <div className="md:h-[736px] h-[789px] mt-[-33px] mx-auto w-full z-[1]">
            <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[63px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start mt-[15px]">
                <Text
                  className="md:text-5xl text-[64px] text-indigo-800"
                  size="txtPoppinsSemiBold64"
                  id="block2"
                >
                   Past Projects
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-green-A700 sm:text-xl"
                  size="txtPoppinsSemiBold24GreenA700"
                >
                  Elevating Every Roof, Transforming Every Home
                </Text>
              </div>
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 1 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="mt-[86px] w-[98%]"
                items={[...Array(3)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex flex-col items-center justify-start mx-2.5">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <Img
                          className="h-[326px] md:h-auto object-cover"
                          src="images/img_27766903352693.png"
                          alt="rectangleFortyNine"
                        />
                        <div className="md:h-[326px] sm:h-[328px] h-[329px] relative w-[33%] md:w-full">
                          <Img
                            className="h-[326px] m-auto object-cover w-full"
                            src="images/img_rectangle50.png"
                            alt="rectangleFifty"
                          />
                          <div className="absolute bg-gradient1  flex flex-col md:gap-10 gap-[189px] h-full inset-[0] items-start justify-center m-auto p-6 sm:px-5 w-full">
                            <div className="bg-green-A700 h-9 rounded-[50%] w-9"></div>
                            <div className="flex flex-col gap-[7px] items-start justify-start mb-[11px] w-[66%] md:w-full">
                              <Text
                                className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                                size="txtPoppinsSemiBold24"
                              >
                                Roof Repair{" "}
                              </Text>
                              <Line className="bg-white-A700 h-px w-full" />
                            </div>
                          </div>
                        </div>
                        <Img
                          className="h-[326px] md:h-auto object-cover"
                          src="images/img_rectangle51.png"
                          alt="rectangleFiftyOne"
                        />
                      </div>
                    </div>
                  </React.Fragment>
                ))}
                renderDotsItem={({ isActive }) => {
                  if (isActive) {
                    return (
                      <div className="inline-block cursor-pointer rounded-[50%] h-[18px] bg-black-900_b5 w-[18px]" />
                    );
                  }
                  return (
                    <div
                      className="inline-block cursor-pointer rounded-[50%] h-[18px] bg-blue_gray-100 w-[18px]"
                      role="button"
                      tabIndex={0}
                    />
                  );
                }}
              />
              <PagerIndicator
                className="flex h-[18px] justify-center mt-[63px] w-[75px]"
                count={3}
                activeCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-black-900_b5 w-[18px]"
                activeIndex={sliderState}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-blue_gray-100 w-[18px]"
                sliderRef={sliderRef}
                selectedWrapperCss="inline-block md:ml-[0] mx-[5.40px] sm:ml-[0]"
                unselectedWrapperCss="inline-block md:ml-[0] mx-[5.40px] sm:ml-[0]"
              />
            </div>
            <Img
              className="absolute h-72 left-[0] object-cover top-[0] w-[26%]"
              src="images/img_logo_288x368.png"
              alt="logo_Two"
            />
          </div>
        </div>
        <div className="bg-indigo-800 flex md:h-[1240px] sm:h-[593px] h-[759px] justify-end p-[67px] md:px-5 relative w-full">
          <Line className="bg-white-A700 h-1 mb-[194px] mt-auto mx-auto w-[89%]" />
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[9%] w-[89%]">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="md:text-5xl text-[64px] text-white-A700"
                size="txtPoppinsSemiBold64WhiteA700"
              >
                Our Process
              </Text>
              <Text
                className="text-center text-green-A700 text-xl"
                size="txtPoppinsSemiBold20GreenA700"
              >
                <>
                  We believe in transparency, communication, and a streamlined
                  process
                  <br />
                  to deliver roofing excellence. Our commitment to your
                  satisfaction extends through every step of our process.
                </>
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-[23px] items-center justify-between w-full">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/5 md:w-full"
                orientation="horizontal"
              >
                <div className="md:h-[336px] h-[396px] relative w-full">
                  <div className="md:h-[336px] h-[396px] m-auto w-full">
                    <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[7px] shadow-bs3 w-full">
                      <Text
                        className="mb-20 mt-[109px] text-black-900 text-sm w-full"
                        size="txtPoppinsRegular14"
                      >
                        Our journey begins with a comprehensive consultation. We
                        listen to your needs, inspect your roof, and discuss the
                        best solutions tailored to your requirements. This is
                        where your vision meets our expertise.
                      </Text>
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-[141px] inset-x-[0] items-center justify-start mx-auto p-[46px] md:px-10 sm:px-5 top-[0] w-[141px]"
                      style={{
                        backgroundImage: "url('images/img_group60.svg')",
                      }}
                    >
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                        size="txtPoppinsSemiBold32WhiteA700"
                      >
                        1
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="absolute inset-x-[0] mx-auto text-center text-indigo-800 text-xl top-[35%] w-max"
                    size="txtPoppinsSemiBold20"
                  >
                    Initial Consultation
                  </Text>
                </div>
                <div className="md:h-[336px] h-[399px] relative w-full">
                  <div className="md:h-[336px] h-[399px] m-auto w-full">
                    <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[7px] shadow-bs3 w-full">
                      <Text
                        className="mb-20 mt-[109px] text-black-900 text-sm w-full"
                        size="txtPoppinsRegular14"
                      >
                        Following the consultation, we provide you with a
                        detailed proposal outlining the scope of work, materials
                        to be used, and a transparent breakdown of costs. Our
                        goal is to ensure you have a clear understanding of the
                        project ahead.
                      </Text>
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-[141px] inset-x-[0] items-center justify-end mx-auto p-11 md:px-10 sm:px-5 top-[0] w-[141px]"
                      style={{
                        backgroundImage: "url('images/img_group60.svg')",
                      }}
                    >
                      <Text
                        className="mt-1 md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                        size="txtPoppinsSemiBold32WhiteA700"
                      >
                        2
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="absolute inset-x-[0] mx-auto text-center text-indigo-800 text-xl top-[35%] w-max"
                    size="txtPoppinsSemiBold20"
                  >
                    Customized Proposal
                  </Text>
                </div>
                <div className="md:h-[336px] h-[399px] relative w-full">
                  <div className="md:h-[336px] h-[399px] m-auto w-full">
                    <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[7px] shadow-bs3 w-full">
                      <Text
                        className="mb-[59px] mt-[130px] text-black-900 text-sm w-full"
                        size="txtPoppinsRegular14"
                      >
                        Once the proposal is accepted, we work collaboratively
                        to schedule the project at your convenience. Our team
                        meticulously plans every detail, ensuring a smooth
                        process from start to finish. We respect your time and
                        property.
                      </Text>
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-[141px] inset-x-[0] items-center justify-end mx-auto p-[43px] md:px-10 sm:px-5 top-[0] w-[141px]"
                      style={{
                        backgroundImage: "url('images/img_group60.svg')",
                      }}
                    >
                      <Text
                        className="mt-[5px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                        size="txtPoppinsSemiBold32WhiteA700"
                      >
                        3
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="absolute inset-x-[0] mx-auto text-center text-indigo-800 text-xl top-[34%]"
                    size="txtPoppinsSemiBold20"
                  >
                    <>
                      Scheduling and <br />
                      Planning
                    </>
                  </Text>
                </div>
              </List>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-6 grid sm:grid-cols-1 grid-cols-2 w-[39%] md:w-full"
                orientation="horizontal"
              >
                <div className="h-[407px] sm:ml-[0] relative w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[141px] items-center justify-end mb-[-70px] mx-auto p-[38px] sm:px-5 w-[141px] z-[1]"
                    style={{ backgroundImage: "url('images/img_group60.svg')" }}
                  >
                    <Text
                      className="mt-[15px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                      size="txtPoppinsSemiBold32WhiteA700"
                    >
                      4
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-[9px] items-center justify-center mt-auto mx-auto p-[7px] shadow-bs3 w-full">
                    <Text
                      className="mt-[69px] text-center text-indigo-800 text-xl"
                      size="txtPoppinsSemiBold20"
                    >
                      Expert Installation
                    </Text>
                    <Text
                      className="mb-20 text-black-900 text-sm w-full"
                      size="txtPoppinsRegular14"
                    >
                      <>
                        The heart of our process is expert installation. Whether
                        it&#39;s a residential roof, commercial solution, or
                        storm damage restoration, excellence is in our nature.
                      </>
                    </Text>
                  </div>
                </div>
                <div className="h-[407px] sm:ml-[0] relative w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[141px] items-center justify-end mb-[-70px] mx-auto p-[38px] sm:px-5 w-[141px] z-[1]"
                    style={{ backgroundImage: "url('images/img_group60.svg')" }}
                  >
                    <Text
                      className="mt-[15px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                      size="txtPoppinsSemiBold32WhiteA700"
                    >
                      5
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-2.5 items-center justify-center mt-auto mx-auto p-[7px] shadow-bs3 w-full">
                    <Text
                      className="mt-[68px] text-center text-indigo-800 text-xl"
                      size="txtPoppinsSemiBold20"
                    >
                      Quality Inspection
                    </Text>
                    <Text
                      className="mb-20 text-black-900 text-sm w-full"
                      size="txtPoppinsRegular14"
                    >
                      Upon completion, we conduct a thorough inspection to
                      ensure every detail meets our high standards. Quality is
                      non-negotiable, and we want you to have complete
                      confidence in the durability and longevity of your new
                      roof.
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 flex flex-col items-center justify-start p-[61px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1299px] mb-[87px] mt-[19px] mx-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[113px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                    size="txtPoppinsSemiBold48Black900"
                  >
                    <span className="text-indigo-800 font-poppins text-left font-semibold">
                      Exclusive
                    </span>
                    <span className="text-black-900 font-poppins text-left font-semibold">
                      {" "}
                    </span>
                    <span className="text-indigo-800 font-poppins text-left font-semibold">
                      <>
                        Offers for <br />
                        Exceptional Roofs
                      </>
                    </span>
                  </Text>
                  <Text
                    className="mt-0.5 text-2xl md:text-[22px] text-center text-green-A700 sm:text-xl"
                    size="txtPoppinsMedium24"
                  >
                    Unlock Savings with Rooftops Unlimited
                  </Text>
                </div>
                <Text
                  className="md:mt-0 mt-[35px] text-gray-600 text-xl"
                  size="txtPoppinsRegular20Gray600"
                >
                  <>
                    Take advantage of our special offers and discounts to make
                    your roofing experience even more rewarding.
                  </>
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-[21px] items-center justify-between w-[99%] md:w-full">
                <List
                  className="sm:flex-col flex-row gap-[21px] grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-indigo-800 flex flex-col items-center justify-start sm:ml-[0] p-[30px] sm:px-5 rounded-[5px] w-full">
                    <Img
                      className="h-[70px] md:h-auto object-cover w-[70px]"
                      src="images/img_salepricetag.png"
                      alt="salepricetag"
                    />
                    <Text
                      className="mt-[23px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                      size="txtPoppinsSemiBold32WhiteA700"
                    >
                      Military Discount
                    </Text>
                    <Text
                      className="mb-20 mt-1 text-white-A700 text-xl w-[95%] sm:w-full"
                      size="txtPoppinsRegular20"
                    >
                      <>
                        As a token of our gratitude for your service, we proudly
                        offer a special military discount. It&#39;s our way of
                        saying thank you for your dedication to our country.
                      </>
                    </Text>
                  </div>
                  <div className="bg-indigo-800 flex flex-col items-center justify-start sm:ml-[0] p-[17px] rounded-[5px] w-full">
                    <Img
                      className="h-[70px] md:h-auto mt-1.5 object-cover w-[70px]"
                      src="images/img_users.png"
                      alt="users"
                    />
                    <Text
                      className="mt-[30px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                      size="txtPoppinsSemiBold32WhiteA700"
                    >
                      GAF Roofs for Troops
                    </Text>
                    <Text
                      className="mb-[93px] mt-1 text-white-A700 text-xl w-[98%] sm:w-full"
                      size="txtPoppinsRegular20"
                    >
                      <>
                        Rooftops Unlimited is a proud participant in the GAF
                        Roofs for Troops program. Military personnel can benefit
                        from exclusive rebates when choosing GAF roofing
                        products. It&#39;s a small gesture to honor your
                        service.
                      </>
                    </Text>
                  </div>
                </List>
                <div className="bg-indigo-800 flex flex-col gap-[21px] items-center justify-center p-[17px] rounded-[5px] w-[33%] md:w-full">
                  <Img
                    className="h-[70px] md:h-auto mt-1.5 object-cover w-[70px]"
                    src="images/img_bribery.png"
                    alt="bribery"
                  />
                  <div className="flex flex-col gap-4 items-center justify-start mb-[93px]">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                      size="txtPoppinsSemiBold30"
                    >
                      Great Financing Options
                    </Text>
                    <Text
                      className="text-white-A700 text-xl w-full"
                      size="txtPoppinsRegular20"
                    >
                      Investing in your home has never been more accessible.
                      Explore flexible financing options, including hassle-free
                      digital applications through Momnt. Our simplified process
                      ensures that securing financing for your roofing project
                      is as easy as it’s rewarding.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-end mt-0.5 p-[57px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[85px] items-center justify-start max-w-[1282px] mt-[21px] mx-auto w-full">
            <div className="flex flex-col gap-[5px] items-center justify-start">
              <Text
                className="sm:text-[40px] md:text-[46px] text-[54px] text-indigo-800"
                size="txtPoppinsSemiBold54"
              >
                Rooftop Insights
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-green-A700 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                Stay Updated with Industry News and Tips
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="md:h-[568px] h-[573px] relative w-full">
                <div className="absolute bg-indigo-800 flex flex-col gap-[26px] h-max inset-[0] items-start justify-center m-auto p-[25px] sm:px-5 w-full">
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[9px] mt-[282px] w-[53%] md:w-full">
                    <div className="flex flex-row gap-[23px] items-center justify-between w-full">
                      <Img
                        className="h-[62px] md:h-auto rounded-[50%] w-[62px]"
                        src="images/img_ellipse11.png"
                        alt="ellipseEleven"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-green-A700 text-xl"
                          size="txtPoppinsMedium20"
                        >
                          By Jessica
                        </Text>
                        <Text
                          className="text-base text-white-A700"
                          size="txtPoppinsRegular16WhiteA700"
                        >
                          20 Dec 2023
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[9px] w-[95%] md:w-full">
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtPoppinsSemiBold20WhiteA700"
                    >
                      How to Smooth Wood Easily
                    </Text>
                    <Text
                      className="mt-[23px] text-[15px] text-white-A700 w-[98%] sm:w-full"
                      size="txtPoppinsRegular15"
                    >
                      On this occasion I will explain how to carry out this
                      theme activity carefully...
                    </Text>
                    <Line className="bg-white-A700 h-px mt-2 w-full" />
                    <Text
                      className="mt-[15px] text-base text-white-A700"
                      size="txtPoppinsRegular16WhiteA700"
                    >
                      <>Read More &gt;</>
                    </Text>
                  </div>
                </div>
                <Img
                  className="absolute h-[264px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                  src="images/img_rectangle71.png"
                  alt="rectangleSeventyOne"
                />
              </div>
              <div className="bg-indigo-800 flex flex-1 flex-col gap-11 items-center justify-start pb-[25px] w-full">
                <Img
                  className="h-[264px] md:h-auto object-cover w-full"
                  src="images/img_rectangle72.png"
                  alt="rectangleSeventyTwo"
                />
                <div className="flex flex-col gap-5 items-start justify-start w-[83%] md:w-full">
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[3px] w-3/4 md:w-full">
                    <div className="flex flex-row gap-[23px] items-start justify-between w-full">
                      <Img
                        className="h-[62px] md:h-auto rounded-[50%] w-[62px]"
                        src="images/img_ellipse12.png"
                        alt="ellipseTwelve"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-green-A700 text-xl"
                          size="txtPoppinsMedium20"
                        >
                          By Peter Imanuel
                        </Text>
                        <Text
                          className="text-base text-white-A700"
                          size="txtPoppinsRegular16WhiteA700"
                        >
                          2 Nov 2023
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtPoppinsSemiBold20WhiteA700"
                    >
                      How to Smooth Wood Easily
                    </Text>
                    <Text
                      className="ml-1 md:ml-[0] mt-[29px] text-[15px] text-white-A700 w-[98%] sm:w-full"
                      size="txtPoppinsRegular15"
                    >
                      On this occasion I will explain how to carry out this
                      theme activity carefully...
                    </Text>
                    <Line className="bg-white-A700 h-px mt-2 w-full" />
                    <Text
                      className="mt-[15px] text-base text-white-A700"
                      size="txtPoppinsRegular16WhiteA700"
                    >
                      <>Read More &gt;</>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-800 flex flex-1 flex-col gap-[43px] items-center justify-start pb-[25px] w-full">
                <Img
                  className="h-[264px] md:h-auto object-cover w-full"
                  src="images/img_rectangle73.png"
                  alt="rectangleSeventyThree"
                />
                <div className="flex flex-col gap-5 items-start justify-start w-[83%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[54%] md:w-full">
                    <div className="flex flex-row gap-[23px] items-start justify-between w-full">
                      <Img
                        className="h-[62px] md:h-auto rounded-[50%] w-[62px]"
                        src="images/img_ellipse13.png"
                        alt="ellipseThirteen"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-green-A700 text-xl"
                          size="txtPoppinsMedium20"
                        >
                          By Louis{" "}
                        </Text>
                        <Text
                          className="text-base text-white-A700"
                          size="txtPoppinsRegular16WhiteA700"
                        >
                          20 Dec 2023
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtPoppinsSemiBold20WhiteA700"
                    >
                      How to Smooth Wood Easily
                    </Text>
                    <Text
                      className="mt-[29px] text-[15px] text-white-A700 w-[98%] sm:w-full"
                      size="txtPoppinsRegular15"
                    >
                      On this occasion I will explain how to carry out this
                      theme activity carefully...
                    </Text>
                    <Line className="bg-white-A700 h-px mt-2 w-full" />
                    <Text
                      className="mt-[15px] text-base text-white-A700"
                      size="txtPoppinsRegular16WhiteA700"
                    >
                      <>Read More &gt;</>
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="bg-indigo-800 flex flex-col items-center justify-start p-[59px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[93px] items-center justify-start max-w-7xl mb-[86px] mx-auto w-full">
            <div className="flex flex-col gap-[5px] items-center justify-start">
              <Text
                className="sm:text-[40px] md:text-[46px] text-[54px] text-white-A700"
                size="txtPoppinsSemiBold54WhiteA700"
              >
                Frequently Asked Questions
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-green-A700 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                Expert Answers to Common Roofing Queries
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <div className="gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="border-2 border-solid border-white-A700 flex flex-1 flex-row sm:gap-10 items-center justify-between p-[13px] rounded-[5px] w-full">
                    <Text
                      className="ml-2 text-lg text-white-A700"
                      size="txtPoppinsSemiBold18"
                    >
                      How do I know if my roof has damage?
                    </Text>
                    <Text
                      className="mr-1.5 rotate-[-90deg] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsSemiBold24"
                    >
                      <>&gt;</>
                    </Text>
                  </div>
                  <div className="border-2 border-solid border-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between p-3.5 rounded-[5px] w-full">
                    <Text
                      className="sm:ml-[0] ml-[7px] text-lg text-white-A700"
                      size="txtPoppinsSemiBold18"
                    >
                      What types of roofing materials do you work with?
                    </Text>
                    <Text
                      className="mr-2.5 rotate-[-90deg] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsSemiBold24"
                    >
                      <>&gt;</>
                    </Text>
                  </div>
                  <div className="border-2 border-solid border-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-11 items-center justify-between p-3.5 rounded-[5px] w-full">
                    <Text
                      className="sm:ml-[0] ml-[7px] text-lg text-white-A700"
                      size="txtPoppinsSemiBold18"
                    >
                      How many years of experience does your company have?
                    </Text>
                    <Text
                      className="mr-1.5 rotate-[-90deg] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsSemiBold24"
                    >
                      <>&gt;</>
                    </Text>
                  </div>
                  <div className="border-2 border-solid border-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between p-3.5 rounded-[5px] w-full">
                    <Text
                      className="sm:ml-[0] ml-[7px] text-lg text-white-A700"
                      size="txtPoppinsSemiBold18"
                    >
                      How long does a typical roofing installation take?
                    </Text>
                    <Text
                      className="mr-2.5 rotate-[-90deg] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsSemiBold24"
                    >
                      <>&gt;</>
                    </Text>
                  </div>
                  <div className="border-2 border-solid border-white-A700 flex flex-1 flex-row sm:gap-10 items-center justify-between p-3.5 rounded-[5px] w-full">
                    <Text
                      className="ml-[7px] text-lg text-white-A700"
                      size="txtPoppinsSemiBold18"
                    >
                      Are you licensed and insured?
                    </Text>
                    <Text
                      className="mr-1.5 rotate-[-90deg] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsSemiBold24"
                    >
                      <>&gt;</>
                    </Text>
                  </div>
                  <div className="border-2 border-solid border-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between p-[13px] rounded-[5px] w-full">
                    <Text
                      className="ml-2 sm:ml-[0] text-lg text-white-A700"
                      size="txtPoppinsSemiBold18"
                    >
                      Do you handle permits and inspections ?
                    </Text>
                    <Text
                      className="mr-2.5 rotate-[-90deg] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsSemiBold24"
                    >
                      <>&gt;</>
                    </Text>
                  </div>
                  <div className="border-2 border-solid border-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between p-[13px] rounded-[5px] w-full">
                    <Text
                      className="ml-2 sm:ml-[0] text-lg text-white-A700"
                      size="txtPoppinsSemiBold18"
                    >
                      Can you show us examples of your previous projects?
                    </Text>
                    <Text
                      className="mr-1.5 rotate-[-90deg] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsSemiBold24"
                    >
                      <>&gt;</>
                    </Text>
                  </div>
                  <div className="border-2 border-solid border-white-A700 flex flex-1 sm:flex-col flex-row gap-7 items-center justify-between p-[13px] rounded-[5px] w-full">
                    <Text
                      className="ml-2 sm:ml-[0] text-lg text-white-A700"
                      size="txtPoppinsSemiBold18"
                    >
                      What safety measures do you implement for your workers?
                    </Text>
                    <Text
                      className="mr-2.5 rotate-[-90deg] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsSemiBold24"
                    >
                      <>&gt;</>
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                  <div className="border-2 border-green-A700 border-solid flex md:flex-1 flex-col items-center justify-end p-1.5 rounded-[5px] w-1/2 md:w-full">
                    <div className="flex flex-col items-start justify-start mt-[3px] w-[95%] md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                        <Text
                          className="sm:mt-0 my-1 text-lg text-white-A700"
                          size="txtPoppinsSemiBold18"
                        >
                          Do you offer any warranties on your work?
                        </Text>
                        <Text
                          className="rotate-[90deg] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtPoppinsSemiBold24"
                        >
                          <>&gt;</>
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[3px] mt-0.5 text-[15px] text-white-A700 w-[94%] sm:w-full"
                        size="txtPoppinsRegular15"
                      >
                        Yes! We provide warranties that cover both our labor and
                        the materials we use. This typically spans over several
                        years, offering you peace of mind.
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-4 items-center justify-start w-1/2 md:w-full">
                    <div className="border-2 border-solid border-white-A700 flex sm:flex-col flex-row gap-[29px] items-center justify-between p-3 rounded-[5px] w-full">
                      <Text
                        className="sm:ml-[0] ml-[9px] text-lg text-white-A700"
                        size="txtPoppinsSemiBold18"
                      >
                        How do you address unforeseen issues or additional
                        costs?
                      </Text>
                      <Text
                        className="mb-[3px] mr-[11px] rotate-[-90deg] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtPoppinsSemiBold24"
                      >
                        <>&gt;</>
                      </Text>
                    </div>
                    <div className="border-2 border-solid border-white-A700 flex sm:flex-col flex-row sm:gap-10 items-center justify-between p-[13px] rounded-[5px] w-full">
                      <Text
                        className="ml-2 sm:ml-[0] text-lg text-white-A700"
                        size="txtPoppinsSemiBold18"
                      >
                        Do you offer financing options for your services?
                      </Text>
                      <Text
                        className="mr-2.5 rotate-[-90deg] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtPoppinsSemiBold24"
                      >
                        <>&gt;</>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col gap-[54px] items-start justify-start max-w-[1266px] mt-32 mx-auto p-[33px] md:px-5 rounded-[10px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[5px] w-[95%] md:w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-indigo-800"
              size="txtPoppinsSemiBold40"
            >
              Our Location 📍
            </Text>
            <Text
              className="text-indigo-800 text-lg"
              size="txtPoppinsRegular18"
            >
              <>
                Proudly Serving Fayetteville and the <br />
                Surrounding Georgia Areas
              </>
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start mb-[7px] md:ml-[0] ml-[9px] w-[93%] md:w-full">
            <List
              className="flex flex-col gap-[18px] items-center w-full"
              orientation="vertical"
            >
              <div className="flex md:flex-1 sm:flex-col flex-row md:gap-10 gap-[136px] items-start justify-between my-0 w-auto md:w-full">
                <div className="flex flex-row gap-[13px] items-start justify-start w-[12%] sm:w-full">
                  <Img
                    className="h-[29px] md:h-auto object-cover w-[29px]"
                    src="images/img_location.png"
                    alt="location"
                  />
                  <Text
                    className="mt-1 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Fayetteville
                  </Text>
                </div>
                <div className="flex flex-row gap-[13px] items-start justify-center w-[11%] sm:w-full">
                  <Img
                    className="h-[29px] md:h-auto object-cover w-[29px]"
                    src="images/img_location.png"
                    alt="location_One"
                  />
                  <Text
                    className="mt-[3px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Palmetto
                  </Text>
                </div>
                <div className="flex flex-row gap-[13px] items-center justify-center w-[9%] sm:w-full">
                  <Img
                    className="h-[29px] md:h-auto object-cover w-[29px]"
                    src="images/img_location.png"
                    alt="location_Two"
                  />
                  <Text
                    className="text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Senoia
                  </Text>
                </div>
                <div className="flex flex-row gap-[13px] items-center justify-center w-[11%] sm:w-full">
                  <Img
                    className="h-[29px] md:h-auto object-cover w-[29px]"
                    src="images/img_location.png"
                    alt="location_Three"
                  />
                  <Text
                    className="text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Riverdale
                  </Text>
                </div>
                <div className="flex flex-row gap-[13px] items-start justify-start w-[10%] sm:w-full">
                  <Img
                    className="h-[29px] md:h-auto object-cover w-[29px]"
                    src="images/img_location.png"
                    alt="location_Four"
                  />
                  <Text
                    className="mt-[3px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Decatur
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-center justify-start mr-[217px] my-0 w-[81%] md:w-full">
                <div className="flex flex-row gap-[13px] items-start justify-start w-[18%] md:w-full">
                  <Img
                    className="h-[30px] md:h-auto object-cover w-[29px]"
                    src="images/img_location.png"
                    alt="location"
                  />
                  <Text
                    className="mt-1 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Peachtree City
                  </Text>
                </div>
                <div className="flex flex-row gap-[13px] items-end justify-center md:ml-[0] ml-[110px] w-[14%] md:w-full">
                  <Img
                    className="h-[30px] md:h-auto object-cover w-[29px]"
                    src="images/img_location.png"
                    alt="location_One"
                  />
                  <Text
                    className="mt-[5px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Hampton
                  </Text>
                </div>
                <div className="flex flex-row gap-[13px] items-end justify-center md:ml-[0] ml-[133px] w-[11%] md:w-full">
                  <Img
                    className="h-[30px] md:h-auto object-cover w-[29px]"
                    src="images/img_location.png"
                    alt="location_Two"
                  />
                  <Text
                    className="mt-[5px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Tyrone
                  </Text>
                </div>
                <div className="flex flex-row gap-[13px] items-end justify-start md:ml-[0] ml-[136px] w-[16%] md:w-full">
                  <Img
                    className="h-[30px] md:h-auto object-cover w-[29px]"
                    src="images/img_location.png"
                    alt="location_Three"
                  />
                  <Text
                    className="mt-[5px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    College Park
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start mr-[239px] my-0 w-[79%] md:w-full">
                <div className="flex flex-row gap-[13px] items-center justify-start w-[13%] md:w-full">
                  <Img
                    className="h-[29px] md:h-auto object-cover w-[29px]"
                    src="images/img_location.png"
                    alt="location"
                  />
                  <Text
                    className="text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Newnan
                  </Text>
                </div>
                <div className="flex flex-row gap-[13px] items-end justify-center md:ml-[0] ml-[161px] md:mt-0 mt-0.5 w-[16%] md:w-full">
                  <Img
                    className="h-[30px] md:h-auto object-cover w-[29px]"
                    src="images/img_location.png"
                    alt="location_One"
                  />
                  <Text
                    className="mt-[5px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    McDonough
                  </Text>
                </div>
                <div className="flex flex-row gap-[13px] items-end justify-center ml-28 md:ml-[0] md:mt-0 mt-0.5 w-[16%] md:w-full">
                  <Img
                    className="h-[30px] md:h-auto object-cover w-[29px]"
                    src="images/img_location.png"
                    alt="location_Two"
                  />
                  <Text
                    className="mt-[5px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Stockbridge
                  </Text>
                </div>
                <div className="flex flex-row gap-[13px] items-center justify-start ml-24 md:ml-[0] md:mt-0 mt-0.5 w-[14%] md:w-full">
                  <Img
                    className="h-[30px] md:h-auto object-cover w-[29px]"
                    src="images/img_location.png"
                    alt="location_Three"
                  />
                  <Text
                    className="text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    East Point
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
        <footer className="bg-gray-50 flex items-center justify-center mt-[172px] md:px-5 w-full">
          <div className="flex flex-col items-center justify-center my-[38px] w-full">
            <div className="flex flex-col gap-[43px] items-center justify-center w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[88%] md:w-full">
                <Img
                  className="h-[109px] sm:h-auto object-cover w-[15%] md:w-full"
                  src="images/img_logo.png"
                  alt="logo_Three"
                />
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[138px] md:mt-0 mt-0.5 w-[11%] md:w-full">
                  <ul className="flex flex-col items-start justify-start w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-2xl md:text-[22px] text-green-A700 sm:text-xl"
                      >
                        <Text size="txtPoppinsSemiBold24GreenA700">Home</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row gap-1.5 items-center justify-between mt-[22px]">
                          <Text
                            className="text-base text-black-900_c4"
                            size="txtPoppinsRegular16Black900c4"
                          >
                            Roofing Service
                          </Text>
                          <Text
                            className="rotate-[-90deg] text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            <>&gt;</>
                          </Text>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[11px] text-base text-black-900_c4"
                      >
                        <Text size="txtPoppinsRegular16Black900c4">
                          Past Work
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row gap-1.5 items-start justify-start mt-3">
                          <Text
                            className="text-base text-black-900_c4"
                            size="txtPoppinsRegular16Black900c4"
                          >
                            Service Area
                          </Text>
                          <Text
                            className="rotate-[-90deg] text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            <>&gt;</>
                          </Text>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[11px] text-base text-black-900_c4"
                      >
                        <Text size="txtPoppinsRegular16Black900c4">About</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[15px] text-base text-black-900_c4"
                      >
                        <Text size="txtPoppinsRegular16Black900c4">Blog</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[11px] text-base text-black-900_c4"
                      >
                        <Text size="txtPoppinsRegular16Black900c4">
                          Contact
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[21px] items-start justify-start ml-20 md:ml-[0] md:mt-0 mt-0.5 w-[10%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-green-A700 sm:text-xl"
                    size="txtPoppinsSemiBold24GreenA700"
                  >
                    Other
                  </Text>
                  <ul className="flex flex-col gap-[15px] items-start justify-start w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900"
                      >
                        <Text size="txtPoppinsRegular16">Term Of Service</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900"
                      >
                        <Text size="txtPoppinsRegular16">Privacy Policy</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[91px] md:mt-0 mt-0.5 w-[22%] md:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-green-A700 sm:text-xl"
                        size="txtPoppinsSemiBold24GreenA700"
                      >
                        Contact
                      </Text>
                      <ul className="flex flex-col items-start justify-start w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="text-base text-black-900"
                          >
                            <Text size="txtPoppinsRegular16">
                              Phone : (770) 567-0972
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="mt-[18px] text-base text-black-900"
                          >
                            <Text size="txtPoppinsRegular16">
                              Email : dean@kingcontractor.com
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="mt-[9px] text-base text-black-900"
                          >
                            <Text size="txtPoppinsRegular16">
                              Social Media{" "}
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-row items-center justify-start w-[43%] md:w-full">
                      <Img
                        className="h-[30px] md:h-auto object-cover w-[30px]"
                        src="images/img_twitter.png"
                        alt="twitter"
                      />
                      <Img
                        className="h-[30px] md:h-auto ml-[13px] object-cover w-[30px]"
                        src="images/img_facebook.png"
                        alt="facebook"
                      />
                      <Img
                        className="h-[30px] md:h-auto ml-[13px] object-cover w-[30px]"
                        src="images/img_instagram.png"
                        alt="instagram"
                      />
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] mb-[218px] min-w-[198px] md:ml-[0] ml-[27px] md:mt-0 mt-[7px] shadow-bs text-base text-center"
                  size="xs"
                >
                  Free Quote{" "}
                </Button>
              </div>
              <Img
                className="h-[41px] sm:h-auto object-cover w-full"
                src="images/img_rectangle63.png"
                alt="rectangleSixtyThree"
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPagePage;
