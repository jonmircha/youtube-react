const Footer = ({ theme, texts }) => {
  return (
    <footer className={theme}>
      <h4>{texts.footerTitle}</h4>
    </footer>
  );
};

export default Footer;
