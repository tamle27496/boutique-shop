const DescriptionProduct = (props) => {
  // Tạo biến long_desc định dạng lại trường long_desc
  const long_desc = props.long_desc.split(/\r?\n?\n\n?\t?/);

  return (
    <>
      <ul>
        {long_desc.map((desc) => (
          <li key={desc} className="text-body-tertiary">
            {desc}
          </li>
        ))}
      </ul>
    </>
  );
};

export default DescriptionProduct;
