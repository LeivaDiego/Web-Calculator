export default function Button ({ label, onClick }) {
  return (
    <button className='calc-btn' onClick={() => onClick(label)}>
      {label}
    </button>
  )
}
