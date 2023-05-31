import { getThumbnailUrl } from '../hooks'

export const TemplateCarousel = ({ selectedItem, onSelect, items, canNext, onNext, canPrev, onPrev }) => {
  return (
    <div className="thumbnails">
			<div className="group">
        {items.map(item => {
          return (
            <div key={item.id} className={`item${selectedItem.id === item.id ? ' active' : ''}`} title={item.title} onClick={() => onSelect(item)}>
              <img src={getThumbnailUrl(item.thumbnail)} alt={`${item.title}-m`} width="145" height="121" />
              <span>{item.title}</span>
            </div>
          )
        })}
        {canPrev && <button className="previous" title="Previous" onClick={onPrev}>Previous</button>}
        {canNext && <button className="next" title="Next" onClick={onNext}>Next</button>}
			</div>
		</div>
  )
}
