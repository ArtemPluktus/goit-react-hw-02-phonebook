import css from './Phonebook.module.css';

export const Filter = ({ filter, listFilter }) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={listFilter}
      />
    </label>
  );
};
