import { useSelector } from 'react-redux'

function NoteItem({ note }) {
  const { user } = useSelector((state) => state.auth)

  const bgClass = note.isStaff ? 'bg-gray-800 text-white' : 'bg-white text-black'

  return (
    <div className={`relative p-5 mb-5 rounded border ${bgClass}`}>
      <h4 className="font-semibold mb-2">
        Note from {note.isStaff ? <span>Staff</span> : <span>{user.name}</span>}
      </h4>
      <p className="text-base">{note.text}</p>
      <div className="absolute top-2 right-2 text-sm text-gray-400">
        {new Date(note.createdAt).toLocaleString('en-US')}
      </div>
    </div>
  )
}

export default NoteItem
