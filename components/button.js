export default function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      <style jsx>
        {`
          .button {
            align-items: center;
            background-color: darkgreen;
            border: none;
            border-radius: 5px;
            box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
            color: white;
            display: flex;
            margin-bottom: 10px;
            padding: 10px;
          }
        `}
      </style>
      {children}
    </button>
  );
}
