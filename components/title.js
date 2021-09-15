export default function Title({ children }) {
  return (
    <div>
      <style jsx>
        {`
          .title {
            color: darkred;
            font-family: 'Trebuchet MS';
          }
        `}
      </style>
      <h1 className="title">{children}</h1>
    </div>
  )
}
