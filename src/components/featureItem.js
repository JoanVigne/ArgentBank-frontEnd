export default function FeatureItem({ img, alt, title, paragraphe }) {
  return (
    <div className="feature-item">
      <img src={img} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{paragraphe}</p>
    </div>
  );
}
