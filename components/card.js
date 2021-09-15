export default function Card({ url, name }) {
  return (
    <div>
      <style jsx>
        {`
          .card {
            padding: 10px;
            margin: 10px;
            display: flex;
            align-items: center;
            box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
            color: black;
            text-decoration: none;
          }
        `}
      </style>
      <a href={url} className="card">{name}</a>
    </div>
  );
}
