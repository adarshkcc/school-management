import { useTranslation } from "react-i18next";
import { connect, useDispatch } from "react-redux";
import styled from "styled-components";
import { CHANGE_THEME } from "../../../action/api/action-types";
import { colorsConstants } from "../../../common/GlobleStyle/colorConstant";

const ThemeCustomization = ({ colorIndex }) => {
  const { t } = useTranslation("mains");
  const dispatch = useDispatch();
  return (
    <>
      <StyledTheme>
        <h2>{t("setting.theme.header")}</h2>
        <div className="main_div">
          {colorsConstants.map((color, index) => (
            <div
              style={{
                padding: "10px",
                borderRadius: "50%",
                border:
                  colorIndex === index ? `1px dashed ${color.main}` : "none",
              }}
            >
              <div
                className="color_div"
                style={{ background: color.main }}
                onClick={() =>
                  dispatch({
                    type: CHANGE_THEME,
                    payload: index,
                  })
                }
              />
            </div>
          ))}
        </div>
      </StyledTheme>
    </>
  );
};
export default connect((state) => ({
  colorIndex: state.theme.colorIndex,
}))(ThemeCustomization);
const StyledTheme = styled.div`
  .main_div {
    display: flex;
    gap: 2rem;
  }
  h2 {
    color: ${({ theme }) => theme.color.lightBlack};
  }
  box-shadow: 10px 10px 10px lightGray;
  padding: 20px;
  .color_div {
    height: 38px;
    border-radius: 50%;
    width: 38px;
    cursor: pointer;
  }
`;
