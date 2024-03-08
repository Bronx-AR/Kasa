function Banner({ src, alt, text }) {
  return (
    <div className="banner">
      <img className="banner__img" src={src} alt={alt} />
      <h1 className="banner__txt">{text}</h1>
    </div>
  );
}

export default Banner;
