/**
 * Renders a button that enables editing of the current flashcard.
 *
 * Calls the provided edit handler when clicked to display
 * the flashcard editing form.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Function} props.onEdit - Opens the flashcard edit form.
 * @returns {JSX.Element} A button for editing a flashcard.
 */

function EditButton({ onEdit }) {
    return (
        <button onClick={onEdit}>
            Edit Flashcard
        </button>
    );
}

export default EditButton;