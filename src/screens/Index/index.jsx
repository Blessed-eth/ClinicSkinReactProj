import React from "react";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const Index = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="index">
      <div
        className="div"
        style={{
          height:
            screenWidth < 768
              ? "3819px"
              : screenWidth >= 1280 || (screenWidth >= 768 && screenWidth < 1280)
              ? "3534px"
              : undefined,
          overflow: screenWidth >= 1280 || screenWidth < 768 ? "hidden" : undefined,
          width:
            screenWidth < 768
              ? "390px"
              : screenWidth >= 768 && screenWidth < 1280
              ? "768px"
              : screenWidth >= 1280
              ? "1280px"
              : undefined,
        }}
      >
        {screenWidth >= 768 && screenWidth < 1280 && (
          <>
            <div className="hero-seccion" />
            <div className="seccion-bio">
              <p className="bio">
                En Clinic skin te ofrecemos los servicios más vanguardistas en tratamientos corporales, faciales en
                manicure, Pedicure y pestañas. con las últimas propuestas en aparatologías corporales faciales y
                productos 100% profesionales para embellecer tus uñas con responsabilidad.&nbsp;&nbsp; En nuestro centro
                de estética disponemos de una amplia gama de servicios estéticos complementarios.&nbsp;&nbsp;Todos los
                tratamientos son adaptados a tus necesidades y realizados por un personal altamente calificado y en
                continua formación.&nbsp;&nbsp;Nuestros servicios son válidos tanto para mujeres como para
                hombres.&nbsp;&nbsp;¿Qué esperas para visitarnos ?
              </p>
            </div>
            <div className="seccion-main-menu">
              <img
                className="screen-shot"
                alt="Screen shot"
                src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/screen-shot-2023-08-14-at-18-34-1.png"
              />
              <img
                className="skincare-beauty"
                alt="Skincare beauty"
                src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/skincare-beauty-female-feet-with-camomile-s-flower-2@2x.png"
              />
              <div className="text-wrapper">Manicure y Pedicure</div>
              <div className="text-wrapper-2">Pestañas y Cejas</div>
              <div className="text-wrapper-3">Tratamiento Faciales</div>
              <div className="text-wrapper-4">Tratamiento Corporales y Masajes</div>
              <img
                className="img"
                alt="Screen shot"
                src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/screen-shot-2023-08-14-at-18-37-1.png"
              />
              <img
                className="screen-shot-2"
                alt="Screen shot"
                src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/screen-shot-2023-08-14-at-18-40-1.png"
              />
            </div>
            <div className="overlap">
              <img
                className="screen-shot-3"
                alt="Screen shot"
                src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/screen-shot-2023-08-14-at-18-54-1.png"
              />
            </div>
            <p className="p">Vive una experiencia única en clinic skin</p>
            <div className="seccion-agendar">
              <div className="CTA">
                <p className="text-wrapper-5">
                  Ningun cargo sera asociado a su tarjeta. La reserva puede ser cancelada hasta 12 hrs antes de la cita.
                  De no asistir se cobrará un 10% de la reserva como penalizacion.
                </p>
                <div className="botones">
                  <div className="iniciar-sesion">
                    <div className="group">
                      <div className="overlap-group">
                        <div className="text-wrapper-6">Iniciar Sesión</div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="reservar"
                    alt="Reservar"
                    src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/reservar@2x.png"
                  />
                </div>
                <div className="terms-checkbox">
                  <p className="text-wrapper-7">Acepto los terminos y condiciones</p>
                  <div className="rectangle" />
                </div>
                <img
                  className="recapthcha"
                  alt="Recapthcha"
                  src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/recapthcha-1.gif"
                />
              </div>
              <img
                className="calendar"
                alt="Calendar"
                src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/calendar.png"
              />
            </div>
          </>
        )}

        <footer
          className="footer"
          style={{
            height:
              screenWidth >= 768 && screenWidth < 1280
                ? "210px"
                : screenWidth >= 1280 || screenWidth < 768
                ? "233px"
                : undefined,
            top:
              screenWidth >= 768 && screenWidth < 1280
                ? "3324px"
                : screenWidth >= 1280
                ? "3301px"
                : screenWidth < 768
                ? "3586px"
                : undefined,
            width:
              screenWidth >= 768 && screenWidth < 1280
                ? "768px"
                : screenWidth >= 1280
                ? "1280px"
                : screenWidth < 768
                ? "390px"
                : undefined,
          }}
        >
          <div
            className="copyright"
            style={{
              height:
                screenWidth >= 1280 || screenWidth < 768
                  ? "14px"
                  : screenWidth >= 768 && screenWidth < 1280
                  ? "13px"
                  : undefined,
              left:
                screenWidth < 768
                  ? "88px"
                  : screenWidth >= 768 && screenWidth < 1280
                  ? "213px"
                  : screenWidth >= 1280
                  ? "461px"
                  : undefined,
              top:
                screenWidth < 768
                  ? "216px"
                  : screenWidth >= 768 && screenWidth < 1280
                  ? "194px"
                  : screenWidth >= 1280
                  ? "206px"
                  : undefined,
              width:
                screenWidth < 768
                  ? "234px"
                  : screenWidth >= 768 && screenWidth < 1280
                  ? "371px"
                  : screenWidth >= 1280
                  ? "362px"
                  : undefined,
            }}
          >
            <div
              className="overlap-group-2"
              style={{
                height:
                  screenWidth >= 1280 || screenWidth < 768
                    ? "14px"
                    : screenWidth >= 768 && screenWidth < 1280
                    ? "13px"
                    : undefined,
                width:
                  screenWidth < 768
                    ? "230px"
                    : screenWidth >= 768 && screenWidth < 1280
                    ? "367px"
                    : screenWidth >= 1280
                    ? "358px"
                    : undefined,
              }}
            >
              <p
                className="text-wrapper-8"
                style={{
                  fontSize:
                    screenWidth < 768
                      ? "8px"
                      : screenWidth >= 1280 || (screenWidth >= 768 && screenWidth < 1280)
                      ? "10px"
                      : undefined,
                  width:
                    screenWidth < 768
                      ? "124px"
                      : screenWidth >= 768 && screenWidth < 1280
                      ? "171px"
                      : screenWidth >= 1280
                      ? "167px"
                      : undefined,
                }}
              >
                2023 Clinic Skin Camila Carrasco. ©
              </p>
              <div
                className="text-wrapper-9"
                style={{
                  fontSize:
                    screenWidth < 768
                      ? "8px"
                      : screenWidth >= 1280 || (screenWidth >= 768 && screenWidth < 1280)
                      ? "10px"
                      : undefined,
                  left:
                    screenWidth < 768
                      ? "121px"
                      : screenWidth >= 768 && screenWidth < 1280
                      ? "164px"
                      : screenWidth >= 1280
                      ? "160px"
                      : undefined,
                  width:
                    screenWidth < 768
                      ? "109px"
                      : screenWidth >= 768 && screenWidth < 1280
                      ? "203px"
                      : screenWidth >= 1280
                      ? "198px"
                      : undefined,
                }}
              >
                Todos Los Derechos Reservados
              </div>
            </div>
          </div>
          <img
            className="social-media"
            style={{
              height:
                screenWidth >= 768 && screenWidth < 1280
                  ? "26px"
                  : screenWidth >= 1280
                  ? "29px"
                  : screenWidth < 768
                  ? "14px"
                  : undefined,
              left:
                screenWidth >= 1280 || (screenWidth >= 768 && screenWidth < 1280)
                  ? "39px"
                  : screenWidth < 768
                  ? "153px"
                  : undefined,
              top:
                screenWidth >= 768 && screenWidth < 1280
                  ? "103px"
                  : screenWidth >= 1280
                  ? "117px"
                  : screenWidth < 768
                  ? "195px"
                  : undefined,
              width:
                screenWidth >= 768 && screenWidth < 1280
                  ? "174px"
                  : screenWidth >= 1280
                  ? "193px"
                  : screenWidth < 768
                  ? "98px"
                  : undefined,
            }}
            alt="Social media"
            src={
              screenWidth >= 1280 || (screenWidth >= 768 && screenWidth < 1280)
                ? "https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/social-media@2x.png"
                : screenWidth < 768
                ? "https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/social-media-1@2x.png"
                : undefined
            }
          />
          <div
            className="footer-servicios"
            style={{
              height:
                screenWidth >= 768 && screenWidth < 1280
                  ? "136px"
                  : screenWidth >= 1280
                  ? "151px"
                  : screenWidth < 768
                  ? "87px"
                  : undefined,
              left:
                screenWidth >= 768 && screenWidth < 1280
                  ? "506px"
                  : screenWidth >= 1280
                  ? "1005px"
                  : screenWidth < 768
                  ? "212px"
                  : undefined,
              top:
                screenWidth >= 768 && screenWidth < 1280
                  ? "28px"
                  : screenWidth >= 1280
                  ? "44px"
                  : screenWidth < 768
                  ? "74px"
                  : undefined,
              width:
                screenWidth >= 768 && screenWidth < 1280
                  ? "184px"
                  : screenWidth >= 1280
                  ? "204px"
                  : screenWidth < 768
                  ? "159px"
                  : undefined,
            }}
          >
            {screenWidth < 768 && (
              <>
                <div className="text-wrapper-10">Manos y Pies</div>
                <div className="text-wrapper-11">Eyebrows y Eyelashes</div>
                <div className="text-wrapper-12">Depilación</div>
              </>
            )}

            <div
              className="overlap-2"
              style={{
                height:
                  screenWidth < 768
                    ? "28px"
                    : screenWidth >= 768 && screenWidth < 1280
                    ? "95px"
                    : screenWidth >= 1280
                    ? "106px"
                    : undefined,
                top:
                  screenWidth < 768
                    ? "59px"
                    : screenWidth >= 768 && screenWidth < 1280
                    ? "41px"
                    : screenWidth >= 1280
                    ? "45px"
                    : undefined,
                width:
                  screenWidth < 768
                    ? "149px"
                    : screenWidth >= 768 && screenWidth < 1280
                    ? "192px"
                    : screenWidth >= 1280
                    ? "212px"
                    : undefined,
              }}
            >
              {screenWidth < 768 && (
                <>
                  <div className="text-wrapper-13">Micropigmentación</div>
                  <div className="text-wrapper-14">Tratamientos Corporales</div>
                </>
              )}

              {(screenWidth >= 1280 || (screenWidth >= 768 && screenWidth < 1280)) && (
                <>
                  <div
                    className="footer-menu"
                    style={{
                      height:
                        screenWidth >= 768 && screenWidth < 1280 ? "95px" : screenWidth >= 1280 ? "106px" : undefined,
                      width:
                        screenWidth >= 768 && screenWidth < 1280 ? "192px" : screenWidth >= 1280 ? "212px" : undefined,
                    }}
                  >
                    <div
                      className="text-wrapper-15"
                      style={{
                        width:
                          screenWidth >= 768 && screenWidth < 1280
                            ? "181px"
                            : screenWidth >= 1280
                            ? "201px"
                            : undefined,
                      }}
                    >
                      Manos y Pies
                    </div>
                    <div
                      className="text-wrapper-16"
                      style={{
                        top:
                          screenWidth >= 768 && screenWidth < 1280 ? "22px" : screenWidth >= 1280 ? "25px" : undefined,
                        width:
                          screenWidth >= 768 && screenWidth < 1280
                            ? "181px"
                            : screenWidth >= 1280
                            ? "201px"
                            : undefined,
                      }}
                    >
                      Eyebrows y Eyelashes
                    </div>
                    <div
                      className="overlap-group-3"
                      style={{
                        height:
                          screenWidth >= 768 && screenWidth < 1280 ? "52px" : screenWidth >= 1280 ? "58px" : undefined,
                        top:
                          screenWidth >= 768 && screenWidth < 1280 ? "43px" : screenWidth >= 1280 ? "48px" : undefined,
                        width:
                          screenWidth >= 768 && screenWidth < 1280
                            ? "182px"
                            : screenWidth >= 1280
                            ? "202px"
                            : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-17"
                        style={{
                          width:
                            screenWidth >= 768 && screenWidth < 1280
                              ? "182px"
                              : screenWidth >= 1280
                              ? "202px"
                              : undefined,
                        }}
                      >
                        Depilación
                      </div>
                      <div
                        className="text-wrapper-18"
                        style={{
                          top:
                            screenWidth >= 768 && screenWidth < 1280
                              ? "20px"
                              : screenWidth >= 1280
                              ? "22px"
                              : undefined,
                          width:
                            screenWidth >= 768 && screenWidth < 1280
                              ? "182px"
                              : screenWidth >= 1280
                              ? "202px"
                              : undefined,
                        }}
                      >
                        Micropigmentación
                      </div>
                      <div
                        className="text-wrapper-19"
                        style={{
                          top:
                            screenWidth >= 768 && screenWidth < 1280
                              ? "41px"
                              : screenWidth >= 1280
                              ? "45px"
                              : undefined,
                          whiteSpace: screenWidth >= 768 && screenWidth < 1280 ? "nowrap" : undefined,
                          width:
                            screenWidth >= 768 && screenWidth < 1280
                              ? "132px"
                              : screenWidth >= 1280
                              ? "146px"
                              : undefined,
                        }}
                      >
                        Tratamientos Corporales
                      </div>
                    </div>
                  </div>
                  <img
                    className="visa-master"
                    style={{
                      height:
                        screenWidth >= 768 && screenWidth < 1280 ? "58px" : screenWidth >= 1280 ? "64px" : undefined,
                      left:
                        screenWidth >= 768 && screenWidth < 1280 ? "158px" : screenWidth >= 1280 ? "168px" : undefined,
                      top: screenWidth >= 768 && screenWidth < 1280 ? "36px" : screenWidth >= 1280 ? "42px" : undefined,
                      width:
                        screenWidth >= 768 && screenWidth < 1280 ? "23px" : screenWidth >= 1280 ? "34px" : undefined,
                    }}
                    alt="Visa master"
                    src={
                      screenWidth >= 768 && screenWidth < 1280
                        ? "https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/visa-master-1@2x.png"
                        : screenWidth >= 1280
                        ? "https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/visa-master@2x.png"
                        : undefined
                    }
                  />
                </>
              )}
            </div>
            {(screenWidth >= 1280 || (screenWidth >= 768 && screenWidth < 1280)) && (
              <>
                <img
                  className="line"
                  style={{
                    top: screenWidth >= 768 && screenWidth < 1280 ? "29px" : screenWidth >= 1280 ? "33px" : undefined,
                    width:
                      screenWidth >= 768 && screenWidth < 1280 ? "181px" : screenWidth >= 1280 ? "201px" : undefined,
                  }}
                  alt="Line"
                  src={
                    screenWidth >= 768 && screenWidth < 1280
                      ? "https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/line-7-2.svg"
                      : screenWidth >= 1280
                      ? "https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/line-7.svg"
                      : undefined
                  }
                />
                <div
                  className="text-wrapper-20"
                  style={{
                    whiteSpace: screenWidth >= 768 && screenWidth < 1280 ? "nowrap" : undefined,
                    width: screenWidth >= 768 && screenWidth < 1280 ? "86px" : screenWidth >= 1280 ? "47px" : undefined,
                  }}
                >
                  Servicios
                </div>
              </>
            )}
          </div>
          {screenWidth < 768 && (
            <img
              className="line-2"
              alt="Line"
              src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/line-7-1.svg"
            />
          )}

          <div
            className="address"
            style={{
              height:
                screenWidth >= 768 && screenWidth < 1280
                  ? "50px"
                  : screenWidth >= 1280
                  ? "45px"
                  : screenWidth < 768
                  ? "14px"
                  : undefined,
              left:
                screenWidth >= 1280 || (screenWidth >= 768 && screenWidth < 1280)
                  ? "39px"
                  : screenWidth < 768
                  ? "310px"
                  : undefined,
              top:
                screenWidth >= 768 && screenWidth < 1280
                  ? "144px"
                  : screenWidth >= 1280
                  ? "171px"
                  : screenWidth < 768
                  ? "33px"
                  : undefined,
              width:
                screenWidth >= 768 && screenWidth < 1280
                  ? "195px"
                  : screenWidth >= 1280
                  ? "209px"
                  : screenWidth < 768
                  ? "49px"
                  : undefined,
            }}
          >
            <div
              className="ohiggins-segundo"
              style={{
                fontSize:
                  screenWidth >= 1280 || (screenWidth >= 768 && screenWidth < 1280)
                    ? "11.8px"
                    : screenWidth < 768
                    ? "12px"
                    : undefined,
                fontWeight:
                  screenWidth >= 1280 || (screenWidth >= 768 && screenWidth < 1280)
                    ? "300"
                    : screenWidth < 768
                    ? "400"
                    : undefined,
                whiteSpace: screenWidth < 768 ? "nowrap" : undefined,
                width:
                  screenWidth >= 768 && screenWidth < 1280
                    ? "193px"
                    : screenWidth >= 1280
                    ? "207px"
                    : screenWidth < 768
                    ? "47px"
                    : undefined,
              }}
            >
              {(screenWidth >= 1280 || (screenWidth >= 768 && screenWidth < 1280)) && (
                <p className="text-wrapper-30">
                  Ohiggins 669 segundo piso oficina b-2
                  <br />
                  Pucón, <br />
                  La Araucanía, Chile
                </p>
              )}

              {screenWidth < 768 && <>Servicios</>}
            </div>
          </div>
          {screenWidth < 768 && (
            <div className="ohiggins-segundo-wrapper">
              <p className="ohiggins-segundo-2">
                Ohiggins 669 segundo piso oficina b-2
                <br />
                <br />
                Pucón, <br />
                La Araucanía, Chile
              </p>
            </div>
          )}

          <img
            className="logo"
            style={{
              height:
                screenWidth < 768
                  ? "40px"
                  : screenWidth >= 768 && screenWidth < 1280
                  ? "91px"
                  : screenWidth >= 1280
                  ? "101px"
                  : undefined,
              left:
                screenWidth < 768
                  ? "27px"
                  : screenWidth >= 768 && screenWidth < 1280
                  ? "30px"
                  : screenWidth >= 1280
                  ? "39px"
                  : undefined,
              top:
                screenWidth < 768
                  ? "20px"
                  : screenWidth >= 768 && screenWidth < 1280
                  ? "6px"
                  : screenWidth >= 1280
                  ? "8px"
                  : undefined,
              width:
                screenWidth < 768
                  ? "122px"
                  : screenWidth >= 768 && screenWidth < 1280
                  ? "277px"
                  : screenWidth >= 1280
                  ? "308px"
                  : undefined,
            }}
            alt="Logo"
            src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/logo@2x.png"
          />
        </footer>
        {screenWidth >= 768 && screenWidth < 1280 && (
          <div className="navbar">
            <img
              className="logo-2"
              alt="Logo"
              src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/logo-1@2x.png"
            />
            <div className="burger-menu">
              <img
                className="line-3"
                alt="Line"
                src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/line-1-2.svg"
              />
              <img
                className="line-4"
                alt="Line"
                src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/line-1-2.svg"
              />
              <img
                className="line-5"
                alt="Line"
                src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/line-1-2.svg"
              />
            </div>
          </div>
        )}

        {screenWidth >= 1280 && (
          <div className="group-2">
            <p className="text-wrapper-5">
              Ningun cargo sera asociado a su tarjeta. La reserva puede ser cancelada hasta 12 hrs antes de la cita. De
              no asistir se cobrará un 10% de la reserva como penalizacion.
            </p>
            <div className="botones">
              <div className="iniciar-sesion">
                <div className="group">
                  <div className="overlap-group">
                    <div className="text-wrapper-6">Iniciar Sesión</div>
                  </div>
                </div>
              </div>
              <img
                className="reservar"
                alt="Reservar"
                src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/reservar@2x.png"
              />
            </div>
            <div className="terms-checkbox">
              <p className="text-wrapper-7">Acepto los terminos y condiciones</p>
              <div className="rectangle" />
            </div>
            <img
              className="recapthcha"
              alt="Recapthcha"
              src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/recapthcha-1.gif"
            />
          </div>
        )}

        {(screenWidth >= 1280 || screenWidth < 768) && (
          <img
            className="calendar-2"
            style={{
              height: screenWidth < 768 ? "327px" : screenWidth >= 1280 ? "317px" : undefined,
              left: screenWidth < 768 ? "16px" : screenWidth >= 1280 ? "162px" : undefined,
              top: screenWidth < 768 ? "2786px" : screenWidth >= 1280 ? "2783px" : undefined,
              width: screenWidth < 768 ? "353px" : screenWidth >= 1280 ? "328px" : undefined,
            }}
            alt="Calendar"
            src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/calendar.png"
          />
        )}

        {screenWidth >= 1280 && (
          <>
            <div className="overlap-3">
              <p className="text-wrapper-21">Vive una experiencia única en clinic skin</p>
              <div className="p-wrapper">
                <img
                  className="p-2"
                  alt="P"
                  src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/p-1.png"
                />
              </div>
              <img
                className="screen-shot-4"
                alt="Screen shot"
                src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/screen-shot-2023-08-14-at-18-54-1.png"
              />
            </div>
            <div className="main-menu">
              <img
                className="screen-shot-5"
                alt="Screen shot"
                src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/screen-shot-2023-08-14-at-18-34-1.png"
              />
              <img
                className="skincare-beauty-2"
                alt="Skincare beauty"
                src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/skincare-beauty-female-feet-with-camomile-s-flower-2@2x.png"
              />
              <div className="text-wrapper-22">Manicure y Pedicure</div>
              <div className="text-wrapper-23">Pestañas y Cejas</div>
              <div className="text-wrapper-24">Tratamiento Faciales</div>
              <div className="text-wrapper-25">Tratamiento Corporales y Masajes</div>
              <img
                className="screen-shot-6"
                alt="Screen shot"
                src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/screen-shot-2023-08-14-at-18-37-1.png"
              />
              <img
                className="screen-shot-7"
                alt="Screen shot"
                src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/screen-shot-2023-08-14-at-18-40-1.png"
              />
            </div>
          </>
        )}

        {(screenWidth >= 1280 || screenWidth < 768) && (
          <div
            className="vive-una-experiencia"
            style={{
              fontSize: screenWidth < 768 ? "30px" : screenWidth >= 1280 ? "24px" : undefined,
              left: screenWidth < 768 ? "40px" : screenWidth >= 1280 ? "228px" : undefined,
              lineHeight: screenWidth < 768 ? "45px" : screenWidth >= 1280 ? "36px" : undefined,
              top: screenWidth < 768 ? "2683px" : screenWidth >= 1280 ? "814px" : undefined,
              width: screenWidth < 768 ? "324px" : screenWidth >= 1280 ? "916px" : undefined,
            }}
          >
            {screenWidth < 768 && <p className="text-wrapper-30">Vive una experiencia única en clinic skin</p>}

            {screenWidth >= 1280 && (
              <p className="text-wrapper-30">
                En Clinic skin te ofrecemos los servicios más vanguardistas en tratamientos corporales, faciales en
                manicure, Pedicure y pestañas. con las últimas propuestas en aparatologías corporales faciales y
                productos 100% profesionales para embellecer tus uñas con responsabilidad.&nbsp;&nbsp; En nuestro centro
                de estética disponemos de una amplia gama de servicios estéticos complementarios.&nbsp;&nbsp;Todos los
                tratamientos son adaptados a tus necesidades y realizados por un personal altamente calificado y en
                continua formación.&nbsp;&nbsp;Nuestros servicios son válidos tanto para mujeres como para
                hombres.&nbsp;&nbsp;¿Qué esperas para visitarnos ?
              </p>
            )}
          </div>
        )}

        {screenWidth >= 1280 && (
          <>
            <div className="rectangle-2" />
            <div className="navbar-2">
              <div className="burger-menu-2">
                <img
                  className="line-6"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/line-1.svg"
                />
                <img
                  className="line-7"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/line-1.svg"
                />
                <img
                  className="line-8"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/line-1.svg"
                />
              </div>
              <img
                className="logo-3"
                alt="Logo"
                src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/logo-1@2x.png"
              />
            </div>
          </>
        )}

        {screenWidth < 768 && (
          <>
            <img
              className="screen-shot-8"
              alt="Screen shot"
              src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/screen-shot-2023-08-14-at-18-54-1.png"
            />
            <div className="main-menu-2">
              <img
                className="screen-shot-9"
                alt="Screen shot"
                src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/screen-shot-2023-08-14-at-18-34-1.png"
              />
              <img
                className="skincare-beauty-3"
                alt="Skincare beauty"
                src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/skincare-beauty-female-feet-with-camomile-s-flower-2@2x.png"
              />
              <div className="text-wrapper-26">Manicure y Pedicure</div>
              <div className="text-wrapper-27">Pestañas y Cejas</div>
              <div className="text-wrapper-28">Tratamiento Faciales</div>
              <div className="text-wrapper-29">Tratamiento Corporales y Masajes</div>
              <img
                className="screen-shot-10"
                alt="Screen shot"
                src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/screen-shot-2023-08-14-at-18-37-1.png"
              />
              <img
                className="screen-shot-11"
                alt="Screen shot"
                src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/screen-shot-2023-08-14-at-18-40-1.png"
              />
            </div>
            <img
              className="line-9"
              alt="Line"
              src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/line-4.svg"
            />
            <p className="bio-2">
              En Clinic skin te ofrecemos los servicios más vanguardistas en tratamientos corporales, faciales en
              manicure, Pedicure y pestañas. con las últimas propuestas en aparatologías corporales faciales y productos
              100% profesionales para embellecer tus uñas con responsabilidad.&nbsp;&nbsp; En nuestro centro de estética
              disponemos de una amplia gama de servicios estéticos complementarios.&nbsp;&nbsp;Todos los tratamientos
              son adaptados a tus necesidades y realizados por un personal altamente calificado y en continua
              formación.&nbsp;&nbsp;Nuestros servicios son válidos tanto para mujeres como para hombres.&nbsp;&nbsp;¿Qué
              esperas para visitarnos ?
            </p>
            <div className="hero-slider">
              <div className="group-wrapper">
                <div className="group-3">
                  <div className="ellipse" />
                  <div className="ellipse-2" />
                  <div className="ellipse-3" />
                </div>
              </div>
            </div>
            <img
              className="whatsapp-fixed"
              alt="Whatsapp fixed"
              src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/whatsapp-fixed.png"
            />
            <div className="navbar-3">
              <div className="burger-menu-3">
                <img
                  className="line-6"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/line-1.svg"
                />
                <img
                  className="line-7"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/line-1.svg"
                />
                <img
                  className="line-8"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/line-1.svg"
                />
              </div>
              <img
                className="logo-4"
                alt="Logo"
                src="https://cdn.animaapp.com/projects/651222ca99e788c82beaef8e/releases/6512fd800412bc20f81e7646/img/logo-1@2x.png"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
