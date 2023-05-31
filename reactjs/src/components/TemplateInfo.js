import { getImageUrl } from '../hooks'

export const TemplateInfo = ({ item }) => {
  return (
    <div id="large">
			<div className="group">
				<img src={getImageUrl(item.image)} alt="Large" width="430" height="360" />
				<div className="details">
					<p><strong>Title</strong> {item.title}</p>
					<p><strong>Description</strong> {item.description}</p>
					<p><strong>Cost</strong> ${item.cost}</p>
					<p><strong>ID #</strong> {item.id}</p>
					<p><strong>Thumbnail File</strong> {item.thumbnail}</p>
					<p><strong>Large Image File</strong> {item.image}</p>
				</div>
			</div>
		</div>
  )
}
