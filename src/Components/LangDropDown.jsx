import { Dropdown } from "react-bootstrap";
import { changeLanguage} from "i18next";

export default function LangDropDown() {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Languages
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={()=>changeLanguage("en")}>English</Dropdown.Item>
          <Dropdown.Item onClick={()=>changeLanguage("hi")}>Hindi</Dropdown.Item>
          <Dropdown.Item onClick={()=>changeLanguage("fr")}>French</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
