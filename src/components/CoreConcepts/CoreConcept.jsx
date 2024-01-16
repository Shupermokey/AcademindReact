import './CoreConcept.css'

export default function CoreConcept({title, img, description}) {
  return (
    <li>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  )
}