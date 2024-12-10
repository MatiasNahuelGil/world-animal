import './InfoContainer.css'

export default function InfoContainer({ title, border, children}) {
  return (
    <>
      <article className={`box ${border}`}>
        <div >
          <h1>{title}</h1>
          {children}
        </div>
      </article>
    </>
  );
}
