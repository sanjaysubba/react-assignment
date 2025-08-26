import './CardBrand.css';

export default function CardBrand({ item }) {
  return (
    <a href={`${item.slug}`}>
      <img
        className="brand__thumbnail"
        src={item.thumbnail.sizes[0][0]}
        alt={item.title}
      />

      <div className="brand-info">
        <span className="brand-title">{item.title}</span>
        <span> - </span>
        <span className="brand-subtitle">{item.subtitle}</span>
      </div>
    </a>
  );
}
