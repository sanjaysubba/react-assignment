import './CardBrand.css';

export default function CardBrand({ item }) {
  return (
    <a href={`https://hw2l96z9d4lmwrzcpyznvzxnw.js.wpenginepowered.com/work/project/${item.slug}`} target="_blank" rel="noreferrer" className="brand__card">
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
