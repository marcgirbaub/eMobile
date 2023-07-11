import ActionsStyled from "./ActionsStyled";

const Actions = ({ options: { colors, storages } }) => (
  <ActionsStyled className="actions">
    <div className="actions__storage">
      <h3 className="actions__title">Storage</h3>
      <div className="actions__buttons-container">
        {storages.map((storage) => (
          <button key={storage.name} className="actions__button">
            {storage.name}
          </button>
        ))}
      </div>
    </div>
    <div className="actions__colors">
      <h3 className="actions__title">Colors</h3>
      <div className="actions__buttons-container">
        {colors.map((color) => (
          <button key={color.name} className="actions__button">
            {color.name}
          </button>
        ))}
      </div>
    </div>
    <button className="actions__add-button">Add to cart</button>
  </ActionsStyled>
);

export default Actions;
