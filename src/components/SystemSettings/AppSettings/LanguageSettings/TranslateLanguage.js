import FormTopBar from "components/Users/FormTopBar";
import { languageSettingHeading } from "mock-data/ToBarData";
import React, { useState } from "react";
import { Card, Col, Label, Row } from "reactstrap";

const TranslateLanguage = () => {
    const [activeLink, setActiveLink] = useState();
  const handleValue = (val) => {
    setActiveLink(val?.title);
  };
  return (
    <div className="pt-5 pt-md-8 mb-3 ml-lg-3 mr-lg-3">
      <div className="main-div">
        <FormTopBar buttonValue="Translate Language" />
        <Label className="form-label m-4">Translate Language</Label>
        <Row className="w-100">
          <Col xl={6} className="">
            <div className="d-flex">
              {languageSettingHeading?.map((data, index) => (
            <h5
              className={
                activeLink === data?.title
                  ? "m-4 pages-sub-heading-active"
                  : "m-4 pages-sub-heading"
              }
              key={index}
              onClick={() => handleValue(data)}
            >
              {data?.title}
            </h5>
          ))}
            </div>
            <Card className="translate-language-card p-3 ml-3 mt-2">
              <p className="translate-language-text">
                The specifics may vary based on the programming language,
                framework, and architecture of your application. Many modern
                frameworks and libraries have built-in support for
                internationalization (i18n) and localization (l10n) to simplify
                the process of managing translations.
              </p>
            </Card>
          </Col>
           <Col xl={6} className="">
            <div className="d-flex">
              {languageSettingHeading?.map((data, index) => (
            <h5
              className={
                activeLink === data?.title
                  ? "m-4 pages-sub-heading-active"
                  : "m-4 pages-sub-heading"
              }
              key={index}
              onClick={() => handleValue(data)}
            >
              {data?.title}
            </h5>
          ))}
            </div>
            <Card className="translate-language-card p-3 ml-3 mt-2">
              <p className="translate-language-text">
                The specifics may vary based on the programming language,
                framework, and architecture of your application. Many modern
                frameworks and libraries have built-in support for
                internationalization (i18n) and localization (l10n) to simplify
                the process of managing translations.
              </p>
            </Card>
          </Col>
        </Row>
        <br/>
      </div>
    </div>
  );
};

export default TranslateLanguage;
