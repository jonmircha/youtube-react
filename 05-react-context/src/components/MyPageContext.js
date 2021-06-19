import { AuthProvider } from "../context/AuthContext";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";

const MyPageContext = () => {
  return (
    <div className="my-page">
      <AuthProvider>
        <ThemeProvider>
          <LanguageProvider>
            <HeaderContext />
            <MainContext />
            <FooterContext />
          </LanguageProvider>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
};

export default MyPageContext;
